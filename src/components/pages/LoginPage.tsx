import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { FormField } from '../forms/FormField';
import { useAuth } from '../../hooks/useAuth';
import { Mail, Lock, LogIn } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface LoginPageProps {
  onNavigateHome?: () => void;
  onLoginSuccess?: () => void;
}

export function LoginPage({ onNavigateHome, onLoginSuccess }: LoginPageProps) {
  const { login, isLoading } = useAuth();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast.error('Please enter your email and password');
      return;
    }

    try {
      await login(email, password);
      toast.success('Successfully logged in!');
      onLoginSuccess?.();
    } catch (error) {
      toast.error('Login failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-brand-navy flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-brand-neutral-950 mb-2">Welcome Back</h1>
          <p className="text-brand-neutral-600">
            Sign in to access your maintainer dashboard
          </p>
        </div>

        {/* Login Card */}
        <Card className="border-2 border-brand-neutral-300 bg-gradient-to-br from-brand-card-blue-light to-brand-card-blue">
          <CardHeader>
            <CardTitle className="text-brand-neutral-950">Log In</CardTitle>
            <CardDescription>
              Enter your credentials to continue
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <FormField label="Email" id="email" required>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  leftIcon={Mail}
                  disabled={isLoading}
                />
              </FormField>

              <FormField label="Password" id="password" required>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  leftIcon={Lock}
                  disabled={isLoading}
                />
              </FormField>

              <Button 
                type="submit" 
                className="w-full gap-2" 
                disabled={isLoading}
              >
                <LogIn className="h-4 w-4" />
                {isLoading ? 'Logging in...' : 'Log In'}
              </Button>

              <div className="text-center">
                <button
                  type="button"
                  onClick={onNavigateHome}
                  className="text-brand-accent text-sm hover:underline"
                >
                  Back to Home
                </button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Demo Note */}
        <div className="mt-6 text-center">
          <p className="text-brand-neutral-600 text-sm mb-2">
            Demo Mode: Use any email and password to log in
          </p>
        </div>
      </div>
    </div>
  );
}
