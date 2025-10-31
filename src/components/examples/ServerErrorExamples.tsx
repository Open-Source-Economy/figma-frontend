import React from 'react';
import { ServerErrorAlert } from '../ui/server-error-alert';
import { ApiError, StatusCodes } from '../../types/ApiError';
import { EnvironmentSwitcher, EnvironmentMode } from '../ui/environment-switcher';
import { Header } from '../layout/Header';
import { Footer } from '../layout/Footer';
import { Button } from '../ui/button';
import { AlertCircle, Wifi, Server, ShieldAlert, CreditCard, RefreshCw, Copy, Check } from 'lucide-react';
import { Card } from '../ui/card';

interface ServerErrorExamplesProps {
  onNavigateHome?: () => void;
  onNavItemClick?: (href: string) => void;
}

/**
 * ServerErrorExamples - Interactive showcase of ServerErrorAlert component
 * 
 * This page provides comprehensive demonstrations of the ServerErrorAlert component
 * with interactive examples, real-world scenarios, and ready-to-use code snippets.
 */
export const ServerErrorExamples: React.FC<ServerErrorExamplesProps> = ({
  onNavigateHome = () => {},
  onNavItemClick = () => {}
}) => {
  // Error state management for interactive demos
  const [activeErrors, setActiveErrors] = React.useState<Set<string>>(new Set());
  const [copiedCode, setCopiedCode] = React.useState<string | null>(null);
  const [demoEnvironment, setDemoEnvironment] = React.useState<EnvironmentMode>('development');
  
  // Mock environment for demo purposes
  React.useEffect(() => {
    // Override ENV for demonstration
    const originalEnv = (window as any).__DEMO_ENV__;
    (window as any).__DEMO_ENV__ = demoEnvironment;
    return () => {
      (window as any).__DEMO_ENV__ = originalEnv;
    };
  }, [demoEnvironment]);

  const triggerError = (errorId: string) => {
    setActiveErrors(prev => new Set(prev).add(errorId));
  };

  const dismissError = (errorId: string) => {
    setActiveErrors(prev => {
      const newSet = new Set(prev);
      newSet.delete(errorId);
      return newSet;
    });
  };

  const retryError = (errorId: string) => {
    console.log(`Retrying: ${errorId}`);
    // Simulate retry - dismiss after delay
    setTimeout(() => dismissError(errorId), 1500);
  };

  const copyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const CodeBlock: React.FC<{ code: string; id: string }> = ({ code, id }) => (
    <div className="relative bg-brand-neutral-50 rounded-lg p-4 border border-brand-neutral-300/30">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => copyCode(code, id)}
        className="absolute top-2 right-2 h-8 w-8 p-0"
      >
        {copiedCode === id ? (
          <Check className="w-4 h-4 text-brand-success" />
        ) : (
          <Copy className="w-4 h-4" />
        )}
      </Button>
      <pre className="text-sm text-brand-neutral-700 overflow-x-auto pr-12">
        <code>{code}</code>
      </pre>
    </div>
  );

  const DemoCard: React.FC<{
    title: string;
    description: string;
    children: React.ReactNode;
    icon?: React.ReactNode;
  }> = ({ title, description, children, icon }) => (
    <Card className="p-6 bg-brand-card-blue border-brand-neutral-300/30 space-y-4">
      <div className="flex items-start gap-3">
        {icon && (
          <div className="w-10 h-10 rounded-lg bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center flex-shrink-0">
            {icon}
          </div>
        )}
        <div className="flex-1">
          <h3 className="text-brand-neutral-950 mb-1">{title}</h3>
          <p className="text-sm text-brand-neutral-600">{description}</p>
        </div>
      </div>
      <div className="space-y-3">
        {children}
      </div>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-secondary via-brand-neutral-100 to-brand-card-blue">
      <Header onNavItemClick={onNavItemClick} onCtaClick={onNavigateHome} />
      
      <main className="container mx-auto px-4 py-16 max-w-7xl">
        {/* Hero Section */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-error/10 border border-brand-error/20 mb-6">
            <AlertCircle className="w-8 h-8 text-brand-error" />
          </div>
          <h1 className="text-brand-neutral-950 mb-4">ServerErrorAlert Component</h1>
          <p className="text-lg text-brand-neutral-600 mb-6">
            A comprehensive, production-ready error alert system for displaying server errors consistently across your application with semantic color usage and built-in retry functionality.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <div className="px-4 py-2 rounded-lg bg-brand-card-blue border border-brand-neutral-300/30">
              <span className="text-sm text-brand-neutral-600">3 Variants</span>
            </div>
            <div className="px-4 py-2 rounded-lg bg-brand-card-blue border border-brand-neutral-300/30">
              <span className="text-sm text-brand-neutral-600">Retry & Dismiss</span>
            </div>
            <div className="px-4 py-2 rounded-lg bg-brand-card-blue border border-brand-neutral-300/30">
              <span className="text-sm text-brand-neutral-600">TypeScript</span>
            </div>
            <div className="px-4 py-2 rounded-lg bg-brand-card-blue border border-brand-neutral-300/30">
              <span className="text-sm text-brand-neutral-600">Accessible</span>
            </div>
          </div>
        </div>

        {/* Quick Demo Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-brand-neutral-950 mb-3">Interactive Demo</h2>
            <p className="text-brand-neutral-600 max-w-2xl mx-auto">
              Click the buttons below to trigger different error scenarios and see how the component responds
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <Button
              onClick={() => triggerError('demo-api')}
              variant="outline"
              className="h-auto py-4 flex-col gap-2"
            >
              <Server className="w-5 h-5 text-brand-accent" />
              <span>Trigger API Error</span>
            </Button>
            <Button
              onClick={() => triggerError('demo-network')}
              variant="outline"
              className="h-auto py-4 flex-col gap-2"
            >
              <Wifi className="w-5 h-5 text-brand-accent" />
              <span>Trigger Network Error</span>
            </Button>
            <Button
              onClick={() => triggerError('demo-payment')}
              variant="outline"
              className="h-auto py-4 flex-col gap-2"
            >
              <CreditCard className="w-5 h-5 text-brand-accent" />
              <span>Trigger Payment Error</span>
            </Button>
          </div>

          <div className="space-y-4">
            {activeErrors.has('demo-api') && (
              <ServerErrorAlert
                message="Failed to fetch data from the server. Please check your connection and try again."
                showRetry
                onRetry={() => retryError('demo-api')}
                showDismiss
                onDismiss={() => dismissError('demo-api')}
              />
            )}
            {activeErrors.has('demo-network') && (
              <ServerErrorAlert
                variant="detailed"
                title="Network Connection Lost"
                message="We couldn't reach the server. This might be due to network issues or server maintenance."
                showRetry
                retryText="Reconnect"
                onRetry={() => retryError('demo-network')}
                showDismiss
                onDismiss={() => dismissError('demo-network')}
              />
            )}
            {activeErrors.has('demo-payment') && (
              <ServerErrorAlert
                variant="detailed"
                title="Payment Processing Failed"
                message="There was an issue processing your payment. No charges were made. Please try again or use a different payment method."
                showRetry
                retryText="Retry Payment"
                onRetry={() => retryError('demo-payment')}
                showDismiss
                onDismiss={() => dismissError('demo-payment')}
              />
            )}
          </div>
        </section>

        {/* Variants Comparison */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-brand-neutral-950 mb-3">Three Variants</h2>
            <p className="text-brand-neutral-600 max-w-2xl mx-auto">
              Choose the right variant based on context, severity, and available space
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <DemoCard
              title="Default"
              description="Standard error display for most use cases"
              icon={<AlertCircle className="w-5 h-5 text-brand-accent" />}
            >
              <div className="flex justify-center">
                <div className="w-full max-w-xl">
                  <ServerErrorAlert 
                    error={new ApiError(
                      StatusCodes.INTERNAL_SERVER_ERROR,
                      'Internal Server Error',
                      'Failed to load data from the server.'
                    )}
                    showRetry
                    onRetry={() => console.log('Retry')}
                  />
                </div>
              </div>
              <CodeBlock
                id="default-code"
                code={`const error = new ApiError(
  StatusCodes.INTERNAL_SERVER_ERROR,
  'Internal Server Error',
  'Failed to load data.'
);

<ServerErrorAlert 
  error={error}
  showRetry
  onRetry={handleRetry}
/>`}
              />
            </DemoCard>

            <DemoCard
              title="Compact"
              description="Minimal inline error for tight spaces"
              icon={<AlertCircle className="w-5 h-5 text-brand-accent" />}
            >
              <div className="flex justify-center">
                <div className="w-full max-w-xl">
                  <ServerErrorAlert 
                    variant="compact"
                    error={new ApiError(
                      StatusCodes.BAD_REQUEST,
                      'Bad Request',
                      'Invalid email format.'
                    )}
                    showDismiss
                    onDismiss={() => console.log('Dismissed')}
                  />
                </div>
              </div>
              <CodeBlock
                id="compact-code"
                code={`const error = new ApiError(
  StatusCodes.BAD_REQUEST,
  'Bad Request',
  'Invalid email format.'
);

<ServerErrorAlert 
  variant="compact"
  error={error}
  showDismiss
  onDismiss={handleDismiss}
/>`}
              />
            </DemoCard>

            <DemoCard
              title="Detailed"
              description="Premium display with title and enhanced styling"
              icon={<ShieldAlert className="w-5 h-5 text-brand-accent" />}
            >
              <div className="flex justify-center">
                <div className="w-full max-w-xl">
                  <ServerErrorAlert 
                    variant="detailed"
                    error={new ApiError(
                      StatusCodes.SERVICE_UNAVAILABLE,
                      'Service Unavailable',
                      'Unable to reach the server. Please check your connection.'
                    )}
                    showRetry
                    onRetry={() => console.log('Retry')}
                  />
                </div>
              </div>
              <CodeBlock
                id="detailed-code"
                code={`const error = new ApiError(
  StatusCodes.SERVICE_UNAVAILABLE,
  'Service Unavailable',
  'Unable to reach the server.'
);

<ServerErrorAlert 
  variant="detailed"
  error={error}
  showRetry
  onRetry={handleRetry}
/>`}
              />
            </DemoCard>
          </div>
        </section>

        {/* Real-World Scenarios */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-brand-neutral-950 mb-3">Real-World Scenarios</h2>
            <p className="text-brand-neutral-600 max-w-2xl mx-auto">
              Common error situations and recommended implementations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <DemoCard
              title="API Request Failed"
              description="Handle failed API calls with retry option"
              icon={<Server className="w-5 h-5 text-brand-accent" />}
            >
              <div className="flex justify-center">
                <div className="w-full max-w-xl">
                  <ServerErrorAlert 
                    error={new ApiError(
                      StatusCodes.BAD_GATEWAY,
                      'Bad Gateway',
                      'Failed to fetch projects. Please check your internet connection and try again.'
                    )}
                    showRetry
                    onRetry={() => console.log('Refetch API')}
                  />
                </div>
              </div>
              <CodeBlock
                id="api-code"
                code={`const fetchData = async () => {
  try {
    const res = await api.get('/projects');
    setData(res.data);
  } catch (err) {
    const apiError = ApiError.from(err);
    setError(apiError);
  }
};

{error && (
  <ServerErrorAlert 
    error={error}
    showRetry
    onRetry={fetchData}
  />
)}`}
              />
            </DemoCard>

            <DemoCard
              title="Form Validation"
              description="Inline compact errors for form fields"
              icon={<AlertCircle className="w-5 h-5 text-brand-accent" />}
            >
              <div className="flex justify-center">
                <div className="w-full max-w-xl">
                  <ServerErrorAlert 
                    variant="compact"
                    error={new ApiError(
                      StatusCodes.UNPROCESSABLE_ENTITY,
                      'Validation Failed',
                      'Server validation failed. Please review your entries.'
                    )}
                  />
                </div>
              </div>
              <CodeBlock
                id="form-code"
                code={`const handleSubmit = async (data) => {
  try {
    await submitForm(data);
  } catch (err) {
    const apiError = ApiError.from(err);
    setValidationError(apiError);
  }
};

{validationError && (
  <ServerErrorAlert 
    variant="compact"
    error={validationError}
  />
)}`}
              />
            </DemoCard>

            <DemoCard
              title="Network Timeout"
              description="Detailed error for timeout scenarios"
              icon={<Wifi className="w-5 h-5 text-brand-accent" />}
            >
              <div className="flex justify-center">
                <div className="w-full max-w-xl">
                  <ServerErrorAlert 
                    variant="detailed"
                    error={new ApiError(
                      StatusCodes.GATEWAY_TIMEOUT,
                      'Request Timeout',
                      'The server took too long to respond. This might be due to slow connection or high server load.'
                    )}
                    showRetry
                    retryText="Retry Request"
                    onRetry={() => console.log('Retry timeout')}
                    showDismiss
                    onDismiss={() => console.log('Dismiss')}
                  />
                </div>
              </div>
              <CodeBlock
                id="timeout-code"
                code={`const error = new ApiError(
  StatusCodes.GATEWAY_TIMEOUT,
  'Request Timeout',
  'Server took too long...'
);

<ServerErrorAlert 
  variant="detailed"
  error={error}
  showRetry
  retryText="Retry Request"
  onRetry={handleRetry}
  showDismiss
  onDismiss={handleDismiss}
/>`}
              />
            </DemoCard>

            <DemoCard
              title="Authentication Error"
              description="Session expiration with login redirect"
              icon={<ShieldAlert className="w-5 h-5 text-brand-accent" />}
            >
              <div className="flex justify-center">
                <div className="w-full max-w-xl">
                  <ServerErrorAlert 
                    variant="detailed"
                    error={new ApiError(
                      StatusCodes.UNAUTHORIZED,
                      'Authentication Required',
                      'Your session has expired for security. Please log in again to continue.'
                    )}
                    showRetry
                    retryText="Go to Login"
                    onRetry={() => console.log('Redirect to login')}
                  />
                </div>
              </div>
              <CodeBlock
                id="auth-code"
                code={`const error = new ApiError(
  StatusCodes.UNAUTHORIZED,
  'Authentication Required',
  'Session expired...'
);

<ServerErrorAlert 
  variant="detailed"
  error={error}
  showRetry
  retryText="Go to Login"
  onRetry={() => router.push('/login')}
/>`}
              />
            </DemoCard>

            <DemoCard
              title="Payment Processing"
              description="Critical payment errors with multiple actions"
              icon={<CreditCard className="w-5 h-5 text-brand-accent" />}
            >
              <div className="flex justify-center">
                <div className="w-full max-w-xl">
                  <ServerErrorAlert 
                    variant="detailed"
                    error={new ApiError(
                      StatusCodes.UNPROCESSABLE_ENTITY,
                      'Payment Failed',
                      'There was an issue processing your payment. No charges were made to your account.'
                    )}
                    showRetry
                    retryText="Try Again"
                    onRetry={() => console.log('Retry payment')}
                    showDismiss
                    onDismiss={() => console.log('Cancel')}
                  />
                </div>
              </div>
              <CodeBlock
                id="payment-code"
                code={`const error = new ApiError(
  StatusCodes.UNPROCESSABLE_ENTITY,
  'Payment Failed',
  'Issue processing payment...'
);

<ServerErrorAlert 
  variant="detailed"
  error={error}
  showRetry
  retryText="Try Again"
  onRetry={processPayment}
  showDismiss
  onDismiss={cancelPayment}
/>`}
              />
            </DemoCard>

            <DemoCard
              title="Server Error (500)"
              description="Internal server errors with notification"
              icon={<Server className="w-5 h-5 text-brand-accent" />}
            >
              <div className="flex justify-center">
                <div className="w-full max-w-xl">
                  <ServerErrorAlert 
                    variant="detailed"
                    error={new ApiError(
                      StatusCodes.INTERNAL_SERVER_ERROR,
                      'Server Error',
                      'An unexpected error occurred on our servers. Our team has been notified and is working to fix this.'
                    )}
                    showDismiss
                    onDismiss={() => console.log('Acknowledge')}
                  />
                </div>
              </div>
              <CodeBlock
                id="500-code"
                code={`const error = new ApiError(
  StatusCodes.INTERNAL_SERVER_ERROR,
  'Server Error',
  'Unexpected error occurred...'
);

<ServerErrorAlert 
  variant="detailed"
  error={error}
  showDismiss
  onDismiss={handleAcknowledge}
/>`}
              />
            </DemoCard>
          </div>
        </section>

        {/* ApiError Integration */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-brand-neutral-950 mb-3">ApiError Integration</h2>
            <p className="text-brand-neutral-600 max-w-2xl mx-auto">
              Structured error handling with status codes, context, and type safety
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <DemoCard
              title="Using ApiError.from()"
              description="Convert any error to ApiError safely"
              icon={<Server className="w-5 h-5 text-brand-accent" />}
            >
              <div className="flex justify-center">
                <div className="w-full max-w-xl">
                  <ServerErrorAlert 
                    error={ApiError.from(new Error('Network connection lost'))}
                    showRetry
                    onRetry={() => console.log('Retry')}
                  />
                </div>
              </div>
              <CodeBlock
                id="from-code"
                code={`// Safely convert unknown errors
try {
  await fetchData();
} catch (err) {
  const apiError = ApiError.from(err);
  setError(apiError);
}

<ServerErrorAlert 
  error={error}
  showRetry
  onRetry={handleRetry}
/>`}
              />
            </DemoCard>

            <DemoCard
              title="Backwards Compatible"
              description="Still supports string messages for gradual migration"
              icon={<Check className="w-5 h-5 text-brand-success" />}
            >
              <div className="flex justify-center">
                <div className="w-full max-w-xl">
                  <ServerErrorAlert 
                    message="Legacy string error message"
                    showRetry
                    onRetry={() => console.log('Retry')}
                  />
                </div>
              </div>
              <CodeBlock
                id="legacy-code"
                code={`// Still works with old string API
<ServerErrorAlert 
  message="Error message"
  showRetry
  onRetry={handleRetry}
/>

// Or use error prop with string
<ServerErrorAlert 
  error="Error message"
  showRetry
  onRetry={handleRetry}
/>`}
              />
            </DemoCard>
          </div>
        </section>

        {/* Environment-Based Display */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-brand-neutral-950 mb-3">Environment-Based Error Display</h2>
            <p className="text-brand-neutral-600 max-w-2xl mx-auto">
              Errors adapt automatically based on your environment for security and debugging
            </p>
          </div>

          <div className="mb-8">
            <EnvironmentSwitcher
              currentMode={demoEnvironment}
              onModeChange={setDemoEnvironment}
            />
          </div>

          <div className="grid gap-6">
            <DemoCard
              title={`${demoEnvironment.charAt(0).toUpperCase() + demoEnvironment.slice(1)} Mode Example`}
              description={
                demoEnvironment === 'production'
                  ? 'Generic error message protects sensitive information'
                  : demoEnvironment === 'staging'
                  ? 'Shows status codes and detailed messages for debugging'
                  : 'Full error details including stack traces for development'
              }
              icon={<Server className="w-5 h-5 text-brand-accent" />}
            >
              <div className="flex justify-center">
                <div className="w-full max-w-xl">
                  <ServerErrorAlert 
                    variant="detailed"
                    error={new ApiError(
                      StatusCodes.INTERNAL_SERVER_ERROR,
                      'Internal Server Error',
                      'Failed to connect to database: Connection timeout after 30s'
                    )}
                    showRetry
                    onRetry={() => console.log('Retry')}
                    showDismiss
                    onDismiss={() => console.log('Dismiss')}
                  />
                </div>
              </div>
              <CodeBlock
                id="env-code"
                code={`// Error displays differently based on environment
const error = new ApiError(
  StatusCodes.INTERNAL_SERVER_ERROR,
  'Internal Server Error',
  'Failed to connect to database: Connection timeout after 30s'
);

<ServerErrorAlert 
  variant="detailed"
  error={error}
  showRetry
  onRetry={handleRetry}
/>

// Production: "An unexpected error occurred. Please try again later."
// Staging: Shows status code (500) and actual message
// Development: Shows status code, message, AND stack trace`}
              />
            </DemoCard>

            <Card className="p-6 bg-brand-card-blue border-brand-neutral-300/30">
              <h4 className="text-brand-neutral-950 mb-4">How It Works</h4>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-24 text-sm font-medium text-brand-error">
                    Production
                  </div>
                  <div className="flex-1 text-sm text-brand-neutral-600">
                    Shows only a generic error message. Protects sensitive information like
                    database details, internal errors, and system architecture from end users.
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-24 text-sm font-medium text-brand-warning">
                    Staging
                  </div>
                  <div className="flex-1 text-sm text-brand-neutral-600">
                    Displays HTTP status codes, status text, and the actual error message.
                    Helps QA teams and stakeholders identify issues without exposing stack traces.
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-24 text-sm font-medium text-brand-success">
                    Development
                  </div>
                  <div className="flex-1 text-brand-neutral-600">
                    Shows complete error details including status codes, messages, and full stack
                    traces. Developers get all the information needed to debug issues quickly.
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-brand-neutral-950 mb-3">Component Features</h2>
            <p className="text-brand-neutral-600 max-w-2xl mx-auto">
              Built with best practices and production-ready functionality
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="p-6 bg-brand-card-blue border-brand-neutral-300/30 text-center">
              <div className="w-12 h-12 rounded-xl bg-brand-error/10 border border-brand-error/20 flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="w-6 h-6 text-brand-error" />
              </div>
              <h4 className="text-brand-neutral-950 mb-2">Semantic Colors</h4>
              <p className="text-sm text-brand-neutral-600">
                Red (#ef4444) used meaningfully for error states only
              </p>
            </Card>

            <Card className="p-6 bg-brand-card-blue border-brand-neutral-300/30 text-center">
              <div className="w-12 h-12 rounded-xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center mx-auto mb-4">
                <RefreshCw className="w-6 h-6 text-brand-accent" />
              </div>
              <h4 className="text-brand-neutral-950 mb-2">Built-in Retry</h4>
              <p className="text-sm text-brand-neutral-600">
                Optional retry functionality with custom text and handlers
              </p>
            </Card>

            <Card className="p-6 bg-brand-card-blue border-brand-neutral-300/30 text-center">
              <div className="w-12 h-12 rounded-xl bg-brand-success/10 border border-brand-success/20 flex items-center justify-center mx-auto mb-4">
                <Check className="w-6 h-6 text-brand-success" />
              </div>
              <h4 className="text-brand-neutral-950 mb-2">Accessible</h4>
              <p className="text-sm text-brand-neutral-600">
                WCAG compliant with proper ARIA labels and roles
              </p>
            </Card>

            <Card className="p-6 bg-brand-card-blue border-brand-neutral-300/30 text-center">
              <div className="w-12 h-12 rounded-xl bg-brand-highlight/10 border border-brand-highlight/20 flex items-center justify-center mx-auto mb-4">
                <Server className="w-6 h-6 text-brand-highlight" />
              </div>
              <h4 className="text-brand-neutral-950 mb-2">ApiError Support</h4>
              <p className="text-sm text-brand-neutral-600">
                Structured errors with HTTP status codes and context
              </p>
            </Card>
          </div>
        </section>

        {/* Complete Integration Example */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-brand-neutral-950 mb-3">Complete Integration Example</h2>
            <p className="text-brand-neutral-600 max-w-2xl mx-auto">
              Full pattern for implementing error handling in your components
            </p>
          </div>

          <Card className="p-8 bg-brand-card-blue border-brand-neutral-300/30">
            <CodeBlock
              id="complete-code"
              code={`import { ServerErrorAlert } from './components/ui/server-error-alert';
import { useState } from 'react';

function MyComponent() {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/endpoint', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit data');
      }
      
      const result = await response.json();
      // Handle success
    } catch (err) {
      setError(err.message || 'An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {error && (
        <ServerErrorAlert 
          message={error}
          showRetry
          onRetry={handleSubmit}
          showDismiss
          onDismiss={() => setError(null)}
        />
      )}
      
      <button 
        onClick={handleSubmit} 
        disabled={isLoading}
      >
        {isLoading ? 'Submitting...' : 'Submit'}
      </button>
    </div>
  );
}`}
            />
          </Card>
        </section>

        {/* API Reference */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-brand-neutral-950 mb-3">API Reference</h2>
            <p className="text-brand-neutral-600 max-w-2xl mx-auto">
              Complete prop documentation and type definitions
            </p>
          </div>

          <Card className="p-6 bg-brand-card-blue border-brand-neutral-300/30 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-brand-neutral-300/30">
                  <th className="text-left py-3 px-4 text-brand-neutral-950">Prop</th>
                  <th className="text-left py-3 px-4 text-brand-neutral-950">Type</th>
                  <th className="text-left py-3 px-4 text-brand-neutral-950">Default</th>
                  <th className="text-left py-3 px-4 text-brand-neutral-950">Description</th>
                </tr>
              </thead>
              <tbody className="text-brand-neutral-600">
                <tr className="border-b border-brand-neutral-300/20">
                  <td className="py-3 px-4 font-mono text-brand-accent">message</td>
                  <td className="py-3 px-4 font-mono">string</td>
                  <td className="py-3 px-4">-</td>
                  <td className="py-3 px-4">Error message to display (required)</td>
                </tr>
                <tr className="border-b border-brand-neutral-300/20">
                  <td className="py-3 px-4 font-mono text-brand-accent">title</td>
                  <td className="py-3 px-4 font-mono">string</td>
                  <td className="py-3 px-4">-</td>
                  <td className="py-3 px-4">Error title (detailed variant only)</td>
                </tr>
                <tr className="border-b border-brand-neutral-300/20">
                  <td className="py-3 px-4 font-mono text-brand-accent">variant</td>
                  <td className="py-3 px-4 font-mono">'default' | 'compact' | 'detailed'</td>
                  <td className="py-3 px-4">'default'</td>
                  <td className="py-3 px-4">Visual variant of the alert</td>
                </tr>
                <tr className="border-b border-brand-neutral-300/20">
                  <td className="py-3 px-4 font-mono text-brand-accent">showRetry</td>
                  <td className="py-3 px-4 font-mono">boolean</td>
                  <td className="py-3 px-4">false</td>
                  <td className="py-3 px-4">Show retry button</td>
                </tr>
                <tr className="border-b border-brand-neutral-300/20">
                  <td className="py-3 px-4 font-mono text-brand-accent">retryText</td>
                  <td className="py-3 px-4 font-mono">string</td>
                  <td className="py-3 px-4">'Retry'</td>
                  <td className="py-3 px-4">Custom retry button text</td>
                </tr>
                <tr className="border-b border-brand-neutral-300/20">
                  <td className="py-3 px-4 font-mono text-brand-accent">onRetry</td>
                  <td className="py-3 px-4 font-mono">{'() => void'}</td>
                  <td className="py-3 px-4">-</td>
                  <td className="py-3 px-4">Retry button click handler</td>
                </tr>
                <tr className="border-b border-brand-neutral-300/20">
                  <td className="py-3 px-4 font-mono text-brand-accent">showDismiss</td>
                  <td className="py-3 px-4 font-mono">boolean</td>
                  <td className="py-3 px-4">false</td>
                  <td className="py-3 px-4">Show dismiss button</td>
                </tr>
                <tr className="border-b border-brand-neutral-300/20">
                  <td className="py-3 px-4 font-mono text-brand-accent">onDismiss</td>
                  <td className="py-3 px-4 font-mono">{'() => void'}</td>
                  <td className="py-3 px-4">-</td>
                  <td className="py-3 px-4">Dismiss button click handler</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-brand-accent">className</td>
                  <td className="py-3 px-4 font-mono">string</td>
                  <td className="py-3 px-4">-</td>
                  <td className="py-3 px-4">Additional CSS classes</td>
                </tr>
              </tbody>
            </table>
          </Card>
        </section>

        {/* Documentation Link */}
        <section className="text-center pb-12">
          <Card className="p-8 bg-gradient-to-br from-brand-accent/5 to-brand-highlight/5 border-brand-accent/20 max-w-2xl mx-auto">
            <h3 className="text-brand-neutral-950 mb-3">Need More Details?</h3>
            <p className="text-brand-neutral-600 mb-6">
              Check out the comprehensive documentation for advanced usage patterns, best practices, and implementation guidelines.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button variant="default">
                View Documentation
              </Button>
              <Button 
                variant="outline"
                onClick={() => onNavItemClick('loading-examples')}
              >
                See Loading States
              </Button>
            </div>
          </Card>
        </section>
      </main>

      <Footer onNavItemClick={onNavItemClick} />
    </div>
  );
};
