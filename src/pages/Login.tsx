import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { Zap, Github, Mail, Facebook } from "lucide-react";
import React, { useState } from "react";
import { auth, googleProvider, facebookProvider } from "../lib/firebase";
import { signInWithEmailAndPassword, signInWithPopup, sendPasswordResetEmail } from "firebase/auth";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [resetSent, setResetSent] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Failed to sign in. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  const handleSocialLogin = async (provider: any) => {
    setLoading(true);
    setError("");
    try {
      await signInWithPopup(auth, provider);
      navigate("/dashboard");
    } catch (err: any) {
      console.error(err);
      setError("Social login failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      setError("Please enter your email address first.");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      setResetSent(true);
      setError("");
    } catch (err: any) {
      setError("Could not send reset email.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="flex justify-center mb-8">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-primary-foreground font-bold italic text-xl shadow-lg shadow-primary/20">C</div>
            <span className="font-bold text-2xl">ChatPilot</span>
          </Link>
        </div>
        
        <Card className="border-border shadow-xl">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-bold">Welcome back</CardTitle>
            <CardDescription>
              Sign in to manage your WhatsApp workflows
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {error && (
              <div className="p-3 bg-destructive/10 border border-destructive/20 text-destructive text-xs rounded-lg animate-pulse">
                {error}
              </div>
            )}
            {resetSent && (
              <div className="p-3 bg-green-500/10 border border-green-500/20 text-green-600 text-xs rounded-lg">
                Password reset email sent! Check your inbox.
              </div>
            )}
            
            <div className="grid grid-cols-2 gap-3">
              <Button 
                variant="outline" 
                className="w-full gap-2" 
                onClick={() => handleSocialLogin(googleProvider)}
                disabled={loading}
              >
                <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" className="w-4 h-4" /> Google
              </Button>
              <Button 
                variant="outline" 
                className="w-full gap-2"
                onClick={() => handleSocialLogin(facebookProvider)}
                disabled={loading}
              >
                <Facebook className="w-4 h-4 text-[#1877F2] fill-[#1877F2]" /> Facebook
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
              </div>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="name@example.com" 
                  required 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <button 
                    type="button"
                    onClick={handleForgotPassword}
                    className="text-xs text-primary hover:underline"
                  >
                    Forgot password?
                  </button>
                </div>
                <Input 
                  id="password" 
                  type="password" 
                  required 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button type="submit" className="w-full h-11" disabled={loading}>
                {loading ? "Signing in..." : "Sign In"}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <p className="text-sm text-center text-muted-foreground">
              Don't have an account?{" "}
              <Link to="/signup" className="text-primary hover:underline font-medium">Create one</Link>
            </p>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}
