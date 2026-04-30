import express from "express";
import { ExpressAuth, getSession } from "@auth/express";
import Credentials from "@auth/core/providers/credentials";
import Google from "@auth/core/providers/google";
import GitHub from "@auth/core/providers/github";
import bcrypt from "bcryptjs";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory user store
const users: any[] = [
  {
    id: "1",
    email: "test@example.com",
    password: bcrypt.hashSync("password", 10),
    name: "Test User",
    image: null,
    providers: ["credentials"]
  }
];

// Backend logic helpers
const validateUser = async (credentials: any) => {
  const user = users.find((u) => u.email === credentials.email);
  if (user && user.password && bcrypt.compareSync(credentials.password as string, user.password)) {
    return { id: user.id, name: user.name, email: user.email, image: user.image };
  }
  return null;
};

const createUser = async (data: any) => {
  if (users.find(u => u.email === data.email)) {
    throw new Error("User already exists");
  }
  const newUser = {
    id: String(users.length + 1),
    email: data.email,
    password: bcrypt.hashSync(data.password, 10),
    name: `${data.firstName} ${data.lastName}`.trim(),
    image: null,
    providers: ["credentials"]
  };
  users.push(newUser);
  return newUser;
};

const syncSocialUser = async (data: any) => {
  let user = users.find(u => u.email === data.email);
  if (!user) {
    user = {
      id: String(users.length + 1),
      email: data.email,
      name: data.name,
      image: data.image,
      providers: [data.provider]
    };
    users.push(user);
  } else {
    const providers = user.providers || [];
    if (!providers.includes(data.provider)) {
      user.providers = [...providers, data.provider];
    }
    if (data.name) user.name = data.name;
    if (data.image) user.image = data.image;
  }
  return user;
};

// Auth.js configuration
app.use(
  "/api/auth/*",
  ExpressAuth({
    providers: [
      Google({
        clientId: process.env.AUTH_GOOGLE_ID,
        clientSecret: process.env.AUTH_GOOGLE_SECRET,
      }),
      GitHub({
        clientId: process.env.AUTH_GITHUB_ID,
        clientSecret: process.env.AUTH_GITHUB_SECRET,
      }),
      Credentials({
        name: "Credentials",
        credentials: {
          email: { label: "Email", type: "email" },
          password: { label: "Password", type: "password" },
        },
        async authorize(credentials) {
          if (!credentials?.email || !credentials?.password) return null;
          return await validateUser(credentials);
        },
      }),
    ],
    callbacks: {
      async signIn({ user, account }) {
        if (["google", "github"].includes(account?.provider || "")) {
          await syncSocialUser({
            email: user.email,
            name: user.name,
            image: user.image,
            provider: account!.provider,
            providerId: account!.providerAccountId
          });
        }
        return true;
      },
      async session({ session }) {
        return session;
      },
    },
    secret: process.env.AUTH_SECRET || "632b7f03d59654782cb380424564c4ed",
    trustHost: true,
  })
);

// Signup Endpoint
app.post("/api/signup", async (req, res) => {
  try {
    const user = await createUser(req.body);
    res.status(201).json({ message: "User created", user: { email: user.email, name: user.name } });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

// Session endpoint for the frontend
app.get("/api/session", async (req, res) => {
  const session = await getSession(req, {
    providers: [], // Providers are defined in the main handler
    secret: process.env.AUTH_SECRET || "632b7f03d59654782cb380424564c4ed",
  });
  res.json(session);
});

async function startServer() {
  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
