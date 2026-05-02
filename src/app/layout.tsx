import type { Metadata } from "next";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthSync } from "@/components/auth-sync";

export const metadata: Metadata = {
  title: "ChatPilot",
  description: "Advanced AI Chatbot Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <AuthSync />
        <TooltipProvider>
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}
