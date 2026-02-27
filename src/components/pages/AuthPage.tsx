import React, { useState } from 'react';
import { Header } from '../layout/Header';
import { Footer } from '../layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Checkbox } from '../ui/checkbox';
import { Label } from '../ui/label';
import { Github, Mail, ArrowLeft, Lock, CheckCircle2 } from 'lucide-react';
import { FieldError } from '../forms/FieldError';
import { EmailDisplay } from '../auth/EmailDisplay';
import { FormDivider } from '../auth/FormDivider';
import { AuthStepHeader } from '../auth/AuthStepHeader';
import { DevNavButton } from '../auth/DevNavButton';
import { ErrorMessage } from '../auth/ErrorMessage';
import { PasswordMatchIndicator } from '../auth/PasswordMatchIndicator';
import { TermsCheckbox } from '../auth/TermsCheckbox';

interface AuthPageProps {
  onNavigateHome: () => void;
  onNavItemClick: (href: string) => void;
}

type AuthStep = 'initial' | 'existing-user' | 'new-user';

export function AuthPage({ onNavigateHome, onNavItemClick }: AuthPageProps) {
  const [step, setStep] = useState<AuthStep>('initial');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);

  // Simulated check if user exists (in production, this would be an API call)
  const checkUserExists = async (email: string): Promise<boolean> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    // For demo purposes, let's say users with "existing" in their email exist
    return email.toLowerCase().includes('existing');
  };

  const handleEmailContinue = async () => {
    if (!email) return;
    
    setIsLoading(true);
    const userExists = await checkUserExists(email);
    setIsLoading(false);
    
    if (userExists) {
      setStep('existing-user');
    } else {
      setStep('new-user');
    }
  };

  const handleGitHubAuth = () => {
    // In production, this would redirect to GitHub OAuth
    console.log('GitHub authentication initiated');
  };

  const handlePasswordLogin = () => {
    if (!password) return;
    // In production, this would authenticate the user
    console.log('Logging in with email:', email, 'password:', password);
  };

  const handleSignUp = () => {
    setAttemptedSubmit(true);
    
    const newErrors: Record<string, string> = {};
    
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    if (!passwordConfirm) {
      newErrors.passwordConfirm = 'Please confirm your password';
    } else if (password !== passwordConfirm) {
      newErrors.passwordConfirm = 'Passwords do not match';
    }
    
    if (!termsAccepted) {
      newErrors.terms = 'You must accept the Terms and Conditions to continue';
    }
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length > 0) {
      return;
    }
    
    // In production, this would create a new user account
    console.log('Signing up with email:', email, 'password:', password);
  };

  const handleBack = () => {
    setStep('initial');
    setPassword('');
    setPasswordConfirm('');
    setTermsAccepted(false);
    setErrors({});
    setAttemptedSubmit(false);
  };

  const passwordsMatch = password === passwordConfirm;
  const isSignUpValid = password && passwordConfirm && passwordsMatch && termsAccepted;

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-secondary via-brand-neutral-100 to-brand-secondary-dark">
      <Header 
        onNavItemClick={onNavItemClick}
        ctaText="Get Started Today"
        onCtaClick={() => onNavItemClick('get-started')}
      />
      
      {/* Auth Section */}
      <section className="relative py-20 px-4">
        
        {/* Dev State Navigator - Only visible in development */}
        {process.env.NODE_ENV !== 'production' && (
          <div className="fixed bottom-6 left-6 z-[9999]">
            <div className="bg-slate-950/90 backdrop-blur-sm border border-slate-800/50 rounded-full px-4 py-2 shadow-lg">
              <div className="flex items-center gap-3">
                <span className="text-[10px] uppercase tracking-wider text-slate-500">Dev</span>
                <div className="h-3 w-px bg-slate-800"></div>
                <div className="flex gap-1.5">
                  <DevNavButton
                    label="Initial"
                    isActive={step === 'initial'}
                    onClick={() => {
                      setStep('initial');
                      setEmail('');
                      setPassword('');
                      setPasswordConfirm('');
                    }}
                  />
                  <DevNavButton
                    label="Login"
                    isActive={step === 'existing-user'}
                    onClick={() => {
                      setStep('existing-user');
                      setEmail('existing@example.com');
                      setPassword('');
                    }}
                  />
                  <DevNavButton
                    label="Signup"
                    isActive={step === 'new-user'}
                    onClick={() => {
                      setStep('new-user');
                      setEmail('newuser@example.com');
                      setPassword('');
                      setPasswordConfirm('');
                      setTermsAccepted(false);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div className="container mx-auto max-w-[420px] relative z-10">
          {/* Header */}
          <AuthStepHeader step={step} />

          {/* Form Content - No Card */}
          <div className="space-y-5">
            {step === 'initial' && (
              <>
                {/* GitHub Authentication */}
                <Button
                  onClick={handleGitHubAuth}
                  variant="outline"
                  className="w-full h-11 border-brand-neutral-400 hover:border-brand-accent hover:bg-brand-accent/5"
                  leftIcon={Github}
                >
                  Continue with GitHub
                </Button>

                {/* Divider */}
                <FormDivider />

                {/* Email Input */}
                <div className="space-y-1.5">
                  <Label htmlFor="email" className="text-brand-neutral-800 text-sm">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleEmailContinue()}
                    leftIcon={Mail}
                    className="h-11"
                  />
                </div>

                <Button
                  onClick={handleEmailContinue}
                  disabled={!email || isLoading}
                  className="w-full h-11"
                  loading={isLoading}
                  loadingText="Checking..."
                >
                  Continue
                </Button>
              </>
            )}

            {step === 'existing-user' && (
              <>
                {/* Show email */}
                <EmailDisplay email={email} />

                {/* Password Input */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password" className="text-brand-neutral-800 text-sm">
                      Password
                    </Label>
                    <button
                      type="button"
                      className="text-xs text-brand-accent hover:text-brand-accent-dark transition-colors"
                      onClick={() => console.log('Forgot password clicked')}
                    >
                      Forgot?
                    </button>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handlePasswordLogin()}
                    leftIcon={Lock}
                    className="h-11"
                  />
                </div>

                {/* Actions */}
                <div className="space-y-2.5 pt-2">
                  <Button
                    onClick={handlePasswordLogin}
                    disabled={!password}
                    className="w-full h-11"
                  >
                    Sign In
                  </Button>
                  
                  <Button
                    onClick={handleBack}
                    variant="ghost"
                    className="w-full h-11 text-brand-neutral-700"
                    leftIcon={ArrowLeft}
                  >
                    Back
                  </Button>
                </div>
              </>
            )}

            {step === 'new-user' && (
              <>
                {/* Show email */}
                <EmailDisplay email={email} />

                {/* Password Input */}
                <div className="space-y-1.5">
                  <Label htmlFor="new-password" className="text-brand-neutral-800 text-sm">
                    Password
                  </Label>
                  <Input
                    id="new-password"
                    type="password"
                    placeholder="Create a strong password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    leftIcon={Lock}
                    className="h-11"
                  />
                  {errors.password && (
                    <ErrorMessage message={errors.password} />
                  )}
                </div>

                {/* Password Confirmation Input */}
                <div className="space-y-1.5">
                  <Label htmlFor="confirm-password" className="text-brand-neutral-800 text-sm">
                    Confirm Password
                  </Label>
                  <Input
                    id="confirm-password"
                    type="password"
                    placeholder="Re-enter your password"
                    value={passwordConfirm}
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                    leftIcon={Lock}
                    rightIcon={passwordConfirm && passwordsMatch ? CheckCircle2 : undefined}
                    variant={passwordConfirm && !passwordsMatch ? 'error' : undefined}
                    className="h-11"
                  />
                  <PasswordMatchIndicator 
                    passwordConfirm={passwordConfirm} 
                    passwordsMatch={passwordsMatch} 
                  />
                  {errors.passwordConfirm && (
                    <ErrorMessage message={errors.passwordConfirm} />
                  )}
                </div>

                {/* Terms and Conditions */}
                <TermsCheckbox
                  checked={termsAccepted}
                  onCheckedChange={(checked) => {
                    setTermsAccepted(checked);
                    // Clear error when user checks the box
                    if (checked && errors.terms) {
                      const newErrors = { ...errors };
                      delete newErrors.terms;
                      setErrors(newErrors);
                    }
                  }}
                  error={errors.terms}
                  onNavItemClick={onNavItemClick}
                />

                {/* Actions */}
                <div className="space-y-2.5 pt-2">
                  <Button
                    onClick={handleSignUp}
                    className="w-full h-11"
                  >
                    Create Account
                  </Button>
                  
                  <Button
                    onClick={handleBack}
                    variant="ghost"
                    className="w-full h-11 text-brand-neutral-700"
                    leftIcon={ArrowLeft}
                  >
                    Back
                  </Button>
                </div>
              </>
            )}
          </div>

          {/* Additional Links */}
          <div className="mt-6 text-center">
            <p className="text-sm text-brand-neutral-600">
              Need help?{' '}
              <button
                type="button"
                className="text-brand-accent hover:text-brand-accent-dark underline"
                onClick={() => onNavItemClick('contact')}
              >
                Contact Support
              </button>
            </p>
          </div>
        </div>
      </section>

      <Footer onNavItemClick={onNavItemClick} />
    </div>
  );
}