"use client";

import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Facebook, Shield, CheckCircle2, AlertCircle } from "lucide-react";
import { useAuthStore } from "@/store/authStore";
import { authClient } from "@/lib/auth-client";

export default function Settings() {
  const { user } = useAuthStore();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLinkFacebook = async () => {
    setLoading(true);
    setError("");
    setSuccess("");
    try {
      await authClient.signIn.social({
        provider: "facebook",
        callbackURL: window.location.href,
      });
    } catch (err: any) {
      console.error(err);
      setError("Failed to start account linking process.");
    } finally {
      setLoading(false);
    }
  };

  // We can check if Facebook is linked by inspecting user.accounts or similar metadata from Better Auth
  const isFacebookLinked = user?.image?.includes("facebook") || false; 

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Manage your account and integrations.</p>
      </div>

      <div className="grid gap-6">
        <Card className="border-none shadow-sm">
          <CardHeader>
            <CardTitle>Connected Accounts</CardTitle>
            <CardDescription>
              Link your social accounts to enable cross-platform broadcasting and easier login.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between p-4 rounded-xl border border-border/50 bg-muted/20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#1877F2]/10 flex items-center justify-center text-[#1877F2]">
                  <Facebook className="h-6 w-6 fill-current" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Facebook Business</h3>
                  <p className="text-xs text-muted-foreground">Required for WhatsApp Business API integration.</p>
                </div>
              </div>
              <div>
                {isFacebookLinked ? (
                  <Badge className="bg-green-500/10 text-green-600 border-green-500/20 gap-1 px-3 py-1">
                    <CheckCircle2 className="h-3 w-3" /> Linked
                  </Badge>
                ) : (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="font-bold gap-2"
                    onClick={handleLinkFacebook}
                    disabled={loading}
                  >
                    {loading ? "Linking..." : "Link Account"}
                  </Button>
                )}
              </div>
            </div>

            {error && (
              <div className="flex items-center gap-2 p-3 bg-destructive/10 border border-destructive/20 text-destructive text-xs rounded-lg animate-in fade-in slide-in-from-top-1">
                <AlertCircle className="h-4 w-4" /> {error}
              </div>
            )}

            {success && (
              <div className="flex items-center gap-2 p-3 bg-green-500/10 border border-green-500/20 text-green-600 text-xs rounded-lg animate-in fade-in slide-in-from-top-1">
                <CheckCircle2 className="h-4 w-4" /> {success}
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" /> Security
            </CardTitle>
            <CardDescription>
              Enhance your account security with two-factor authentication.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
             <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium">Two-Factor Authentication</p>
                  <p className="text-xs text-muted-foreground">Add an extra layer of protection to your account.</p>
                </div>
                <Button variant="outline" size="sm" disabled>Enable</Button>
             </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
