import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Github, Mail, Lock, ArrowLeft } from 'lucide-react';

interface LoginPageProps {
  onNavigateHome: () => void;
  onLoginSuccess: () => void;
}

export function LoginPage({ onNavigateHome, onLoginSuccess }: LoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    setIsLoading(true);
    setError('');
    // Simulate login
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
    onLoginSuccess();
  };

  const handleGitHubLogin = () => {
    console.log('GitHub login initiated');
    onLoginSuccess();
  };

  return (
    <div className="min-h-screen bg-brand-secondary flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <button
          onClick={onNavigateHome}
          className="flex items-center gap-2 text-brand-neutral-600 hover:text-brand-neutral-800 mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </button>

        <Card className="bg-brand-card-blue border-brand-neutral-300">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-brand-neutral-900">Welcome back</CardTitle>
            <CardDescription className="text-brand-neutral-600">
              Sign in to your account to continue
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Button
              variant="outline"
              className="w-full gap-2 border-brand-neutral-300 text-brand-neutral-800 hover:bg-brand-neutral-200"
              onClick={handleGitHubLogin}
            >
              <Github className="h-5 w-5" />
              Continue with GitHub
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-brand-neutral-300" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-brand-card-blue px-2 text-brand-neutral-500">
                  or continue with email
                </span>
              </div>
            </div>

            <form onSubmit={handleEmailLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-brand-neutral-700">
                  Email
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-neutral-500" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-brand-neutral-700">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-neutral-500" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {error && (
                <p className="text-sm text-brand-error">{error}</p>
              )}

              <Button
                type="submit"
                className="w-full bg-brand-accent hover:bg-brand-accent-dark text-white"
                disabled={isLoading}
              >
                {isLoading ? 'Signing in...' : 'Sign in'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
