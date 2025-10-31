import React from 'react';
import { LoadingState, LoadingCard, LoadingButton, LoadingTable, LoadingSection } from '../ui/loading-state';
import { Button } from '../ui/button';
import { Header } from '../layout/Header';
import { Footer } from '../layout/Footer';

interface LoadingStateExamplesProps {
  onNavigateHome?: () => void;
  onNavItemClick?: (href: string) => void;
}

/**
 * LoadingStateExamples - Showcase of LoadingState component usage
 * 
 * This page demonstrates all variants and configurations of the LoadingState component
 * that can be used throughout the application for consistent loading indicators.
 */
export const LoadingStateExamples: React.FC<LoadingStateExamplesProps> = ({
  onNavigateHome = () => {},
  onNavItemClick = () => {}
}) => {
  const [showFullPage, setShowFullPage] = React.useState(false);
  const [loadingStates, setLoadingStates] = React.useState<Record<string, boolean>>({});

  const toggleLoading = (key: string) => {
    setLoadingStates(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const simulateLoading = (key: string, duration: number = 3000) => {
    setLoadingStates(prev => ({ ...prev, [key]: true }));
    setTimeout(() => {
      setLoadingStates(prev => ({ ...prev, [key]: false }));
    }, duration);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-secondary via-brand-neutral-100 to-brand-card-blue">
      <Header onNavItemClick={onNavItemClick} onCtaClick={onNavigateHome} />
      
      <main className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="mb-12 text-center">
          <h1 className="text-brand-neutral-950 mb-4">Loading State Component</h1>
          <p className="text-brand-neutral-600 max-w-2xl mx-auto">
            A comprehensive, reusable loading indicator system for displaying loading states consistently across the application.
          </p>
        </div>

        <div className="space-y-16">
          {/* Spinner Variants */}
          <section className="space-y-6">
            <div>
              <h2 className="text-brand-neutral-950 mb-2">Spinner Variants</h2>
              <p className="text-brand-neutral-600">
                Standard animated spinner for general loading states
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-brand-card-blue border border-brand-neutral-300/30 rounded-xl p-6">
                <p className="text-sm text-brand-neutral-600 mb-4">Small Size:</p>
                <LoadingState variant="spinner" size="sm" message="Loading..." />
              </div>

              <div className="bg-brand-card-blue border border-brand-neutral-300/30 rounded-xl p-6">
                <p className="text-sm text-brand-neutral-600 mb-4">Medium Size:</p>
                <LoadingState variant="spinner" size="md" message="Loading data..." />
              </div>

              <div className="bg-brand-card-blue border border-brand-neutral-300/30 rounded-xl p-6">
                <p className="text-sm text-brand-neutral-600 mb-4">Large Size:</p>
                <LoadingState variant="spinner" size="lg" message="Please wait..." />
              </div>

              <div className="bg-brand-card-blue border border-brand-neutral-300/30 rounded-xl p-6">
                <p className="text-sm text-brand-neutral-600 mb-4">Extra Large:</p>
                <LoadingState variant="spinner" size="xl" message="Processing..." />
              </div>
            </div>

            <div className="bg-brand-card-blue border border-brand-neutral-300/30 rounded-xl p-6">
              <p className="text-sm text-brand-neutral-600 mb-4">Spinner without message:</p>
              <LoadingState variant="spinner" size="md" message="" />
            </div>
          </section>

          {/* Dots Variant */}
          <section className="space-y-6">
            <div>
              <h2 className="text-brand-neutral-950 mb-2">Dots Variant</h2>
              <p className="text-brand-neutral-600">
                Animated dots for subtle, space-efficient loading indicators
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-brand-card-blue border border-brand-neutral-300/30 rounded-xl p-6">
                <p className="text-sm text-brand-neutral-600 mb-4">Small dots:</p>
                <LoadingState variant="dots" size="sm" message="Loading..." />
              </div>

              <div className="bg-brand-card-blue border border-brand-neutral-300/30 rounded-xl p-6">
                <p className="text-sm text-brand-neutral-600 mb-4">Medium dots:</p>
                <LoadingState variant="dots" size="md" message="Fetching data..." />
              </div>

              <div className="bg-brand-card-blue border border-brand-neutral-300/30 rounded-xl p-6">
                <p className="text-sm text-brand-neutral-600 mb-4">Large dots:</p>
                <LoadingState variant="dots" size="lg" message="Processing..." />
              </div>
            </div>
          </section>

          {/* Pulse Variant */}
          <section className="space-y-6">
            <div>
              <h2 className="text-brand-neutral-950 mb-2">Pulse Variant</h2>
              <p className="text-brand-neutral-600">
                Gentle pulsing circle for minimal, elegant loading indication
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-brand-card-blue border border-brand-neutral-300/30 rounded-xl p-6">
                <p className="text-sm text-brand-neutral-600 mb-4">Small pulse:</p>
                <LoadingState variant="pulse" size="sm" message="Loading..." />
              </div>

              <div className="bg-brand-card-blue border border-brand-neutral-300/30 rounded-xl p-6">
                <p className="text-sm text-brand-neutral-600 mb-4">Medium pulse:</p>
                <LoadingState variant="pulse" size="md" message="Please wait..." />
              </div>

              <div className="bg-brand-card-blue border border-brand-neutral-300/30 rounded-xl p-6">
                <p className="text-sm text-brand-neutral-600 mb-4">Large pulse:</p>
                <LoadingState variant="pulse" size="lg" message="Processing..." />
              </div>
            </div>
          </section>

          {/* Inline Variant */}
          <section className="space-y-6">
            <div>
              <h2 className="text-brand-neutral-950 mb-2">Inline Variant</h2>
              <p className="text-brand-neutral-600">
                Compact inline spinner for use within buttons, text, and tight spaces
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-brand-card-blue border border-brand-neutral-300/30 rounded-xl p-6">
                <p className="text-sm text-brand-neutral-600 mb-4">Inline in text:</p>
                <p className="text-brand-neutral-700">
                  Fetching your data <LoadingState variant="inline" size="sm" message="" />
                </p>
              </div>

              <div className="bg-brand-card-blue border border-brand-neutral-300/30 rounded-xl p-6">
                <p className="text-sm text-brand-neutral-600 mb-4">Inline with message:</p>
                <LoadingState variant="inline" size="sm" message="Saving changes..." />
              </div>

              <div className="bg-brand-card-blue border border-brand-neutral-300/30 rounded-xl p-6 col-span-full">
                <p className="text-sm text-brand-neutral-600 mb-4">In button context:</p>
                <div className="flex gap-3">
                  <Button disabled className="cursor-not-allowed">
                    <LoadingButton size="sm" />
                  </Button>
                  <Button disabled className="cursor-not-allowed">
                    <LoadingButton message="Submitting..." size="sm" />
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Skeleton Variant */}
          <section className="space-y-6">
            <div>
              <h2 className="text-brand-neutral-950 mb-2">Skeleton Variant</h2>
              <p className="text-brand-neutral-600">
                Content placeholders that match the expected layout
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-brand-card-blue border border-brand-neutral-300/30 rounded-xl p-6">
                <p className="text-sm text-brand-neutral-600 mb-4">Basic skeleton (3 lines):</p>
                <LoadingState
                  variant="skeleton"
                  size="md"
                  skeletonConfig={{ lines: 3 }}
                />
              </div>

              <div className="bg-brand-card-blue border border-brand-neutral-300/30 rounded-xl p-6">
                <p className="text-sm text-brand-neutral-600 mb-4">With avatar:</p>
                <LoadingState
                  variant="skeleton"
                  size="md"
                  skeletonConfig={{ lines: 2, showAvatar: true }}
                />
              </div>

              <div className="bg-brand-card-blue border border-brand-neutral-300/30 rounded-xl p-6">
                <p className="text-sm text-brand-neutral-600 mb-4">With image:</p>
                <LoadingState
                  variant="skeleton"
                  size="md"
                  skeletonConfig={{ lines: 3, showImage: true }}
                />
              </div>

              <div className="bg-brand-card-blue border border-brand-neutral-300/30 rounded-xl p-6">
                <p className="text-sm text-brand-neutral-600 mb-4">Complete card:</p>
                <LoadingState
                  variant="skeleton"
                  size="md"
                  skeletonConfig={{ lines: 4, showAvatar: true, showImage: true }}
                />
              </div>
            </div>
          </section>

          {/* Specialized Components */}
          <section className="space-y-6">
            <div>
              <h2 className="text-brand-neutral-950 mb-2">Specialized Loading Components</h2>
              <p className="text-brand-neutral-600">
                Pre-configured components for common loading scenarios
              </p>
            </div>

            <div className="space-y-6">
              {/* Loading Card */}
              <div>
                <p className="text-sm text-brand-neutral-600 mb-3">LoadingCard - For card-based layouts:</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <LoadingCard lines={3} />
                  <LoadingCard lines={2} showAvatar />
                  <LoadingCard lines={3} showImage />
                </div>
              </div>

              {/* Loading Table */}
              <div className="bg-brand-card-blue border border-brand-neutral-300/30 rounded-xl p-6">
                <p className="text-sm text-brand-neutral-600 mb-4">LoadingTable - For table contexts:</p>
                <LoadingTable rows={5} columns={4} />
              </div>

              {/* Loading Section */}
              <div className="bg-brand-card-blue border border-brand-neutral-300/30 rounded-xl">
                <p className="text-sm text-brand-neutral-600 p-6 pb-0">LoadingSection - For full sections:</p>
                <LoadingSection message="Loading content..." minHeight="min-h-[300px]" />
              </div>
            </div>
          </section>

          {/* Interactive Demos */}
          <section className="space-y-6">
            <div>
              <h2 className="text-brand-neutral-950 mb-2">Interactive Demonstrations</h2>
              <p className="text-brand-neutral-600">
                Real-world scenarios showing loading states in action
              </p>
            </div>

            <div className="space-y-6">
              {/* Button Loading */}
              <div className="bg-brand-card-blue border border-brand-neutral-300/30 rounded-xl p-6">
                <p className="text-sm text-brand-neutral-600 mb-4">Button with loading state:</p>
                <div className="flex gap-3">
                  <Button
                    onClick={() => simulateLoading('button1')}
                    disabled={loadingStates['button1']}
                  >
                    {loadingStates['button1'] ? (
                      <LoadingButton message="Saving..." size="sm" />
                    ) : (
                      'Save Changes'
                    )}
                  </Button>
                  
                  <Button
                    variant="outline"
                    onClick={() => simulateLoading('button2')}
                    disabled={loadingStates['button2']}
                  >
                    {loadingStates['button2'] ? (
                      <LoadingButton size="sm" />
                    ) : (
                      'Refresh Data'
                    )}
                  </Button>
                </div>
              </div>

              {/* Card Loading */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-brand-neutral-600 mb-3">Card loading transition:</p>
                  <div className="relative">
                    {loadingStates['card1'] ? (
                      <LoadingCard lines={4} showAvatar showImage />
                    ) : (
                      <div className="bg-brand-card-blue border border-brand-neutral-300/30 rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-full bg-brand-accent/20 flex items-center justify-center">
                            <span className="text-brand-accent">JD</span>
                          </div>
                          <div>
                            <h3 className="text-brand-neutral-950">John Doe</h3>
                            <p className="text-sm text-brand-neutral-600">Software Engineer</p>
                          </div>
                        </div>
                        <div className="aspect-video bg-gradient-to-br from-brand-accent/20 to-brand-highlight/20 rounded-lg mb-4" />
                        <p className="text-brand-neutral-700">
                          This is example content that appears after loading completes.
                        </p>
                      </div>
                    )}
                  </div>
                  <Button
                    className="mt-3"
                    size="sm"
                    variant="outline"
                    onClick={() => simulateLoading('card1', 2000)}
                    disabled={loadingStates['card1']}
                  >
                    Toggle Loading
                  </Button>
                </div>

                <div>
                  <p className="text-sm text-brand-neutral-600 mb-3">Section loading:</p>
                  <div className="bg-brand-card-blue border border-brand-neutral-300/30 rounded-xl overflow-hidden">
                    {loadingStates['section1'] ? (
                      <LoadingSection message="Fetching data..." minHeight="min-h-[300px]" />
                    ) : (
                      <div className="p-6">
                        <h3 className="text-brand-neutral-950 mb-3">Loaded Content</h3>
                        <p className="text-brand-neutral-700 mb-4">
                          This content appears after the loading state completes. It could be data from an API, user information, or any dynamic content.
                        </p>
                        <div className="flex gap-2">
                          <div className="flex-1 h-20 bg-brand-neutral-200 rounded-lg" />
                          <div className="flex-1 h-20 bg-brand-neutral-200 rounded-lg" />
                        </div>
                      </div>
                    )}
                  </div>
                  <Button
                    className="mt-3"
                    size="sm"
                    variant="outline"
                    onClick={() => simulateLoading('section1', 2000)}
                    disabled={loadingStates['section1']}
                  >
                    Toggle Loading
                  </Button>
                </div>
              </div>

              {/* Full Page Overlay Demo */}
              <div className="bg-brand-card-blue border border-brand-neutral-300/30 rounded-xl p-6">
                <p className="text-sm text-brand-neutral-600 mb-4">Full page overlay loading:</p>
                <Button
                  onClick={() => {
                    setShowFullPage(true);
                    setTimeout(() => setShowFullPage(false), 3000);
                  }}
                >
                  Show Full Page Loading
                </Button>
                <p className="text-sm text-brand-neutral-500 mt-2">
                  Click to see a full-page loading overlay (auto-dismisses after 3 seconds)
                </p>
              </div>
            </div>
          </section>

          {/* Integration Examples */}
          <section className="space-y-6 pb-12">
            <div>
              <h2 className="text-brand-neutral-950 mb-2">Integration Code Examples</h2>
              <p className="text-brand-neutral-600 mb-4">
                Copy and paste these examples into your components
              </p>
            </div>
            
            <div className="bg-brand-card-blue rounded-xl p-6 border border-brand-neutral-300/30">
              <pre className="text-sm text-brand-neutral-700 overflow-x-auto">
                <code>{`// Import the components
import { LoadingState, LoadingCard, LoadingButton } from './components/ui/loading-state';

// Basic spinner
<LoadingState variant="spinner" message="Loading data..." />

// In a button
const [isLoading, setIsLoading] = useState(false);

<Button disabled={isLoading}>
  {isLoading ? <LoadingButton message="Saving..." /> : 'Save'}
</Button>

// Skeleton for content
<LoadingState 
  variant="skeleton"
  skeletonConfig={{ lines: 4, showAvatar: true }}
/>

// Full page overlay
const [isLoadingPage, setIsLoadingPage] = useState(true);

{isLoadingPage && (
  <LoadingState
    variant="spinner"
    fullPage
    showBackdrop
    message="Loading application..."
  />
)}

// Card loading
<LoadingCard lines={3} showImage />

// Conditional rendering
{isLoading ? (
  <LoadingState variant="spinner" message="Fetching..." />
) : (
  <YourContent />
)}

// Table loading
<LoadingTable rows={10} columns={5} />

// Section loading
<LoadingSection 
  message="Loading dashboard..." 
  minHeight="min-h-[500px]"
/>`}</code>
              </pre>
            </div>
          </section>
        </div>
      </main>

      {/* Full Page Loading Demo */}
      {showFullPage && (
        <LoadingState
          variant="spinner"
          size="xl"
          fullPage
          showBackdrop
          message="Loading application data..."
        />
      )}

      <Footer onNavItemClick={onNavItemClick} />
    </div>
  );
};
