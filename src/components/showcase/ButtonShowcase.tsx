import React from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Typography } from '../ui/typography';
import { 
  Download, 
  Upload, 
  Mail, 
  Phone, 
  ArrowRight, 
  ArrowLeft, 
  Plus, 
  Minus, 
  Save, 
  Edit, 
  Trash2, 
  Settings, 
  User, 
  Heart, 
  Star, 
  Search, 
  Filter, 
  RefreshCw,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Home,
  ChevronDown,
  ExternalLink
} from 'lucide-react';

export function ButtonShowcase() {
  const [loading, setLoading] = React.useState(false);

  const handleLoadingDemo = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
  };

  return (
    <div className="space-y-8">
      {/* Variants */}
      <Card>
        <CardHeader>
          <CardTitle>Button Variants</CardTitle>
          <CardDescription>Different button styles for various use cases</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <Typography.H4>All Variants (Default Size)</Typography.H4>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary">Primary</Button>
              <Button variant="default">Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="accent">Accent</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="success">Success</Button>
              <Button variant="warning">Warning</Button>
            </div>
          </div>

          <div>
            <Typography.H4>Interactive States Demo</Typography.H4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Hover over these buttons</p>
                <div className="flex gap-2">
                  <Button variant="primary">Hover Me</Button>
                  <Button variant="secondary">Hover Me</Button>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Try clicking and holding</p>
                <div className="flex gap-2">
                  <Button variant="accent">Click & Hold</Button>
                  <Button variant="outline">Click & Hold</Button>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Tab to focus</p>
                <div className="flex gap-2">
                  <Button variant="default">Focus Me</Button>
                  <Button variant="ghost">Focus Me</Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sizes */}
      <Card>
        <CardHeader>
          <CardTitle>Button Sizes</CardTitle>
          <CardDescription>Different button sizes for various contexts</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <Typography.H4>Text Buttons</Typography.H4>
            <div className="flex flex-wrap items-end gap-3">
              <Button variant="primary" size="xs">Extra Small</Button>
              <Button variant="primary" size="sm">Small</Button>
              <Button variant="primary" size="default">Default</Button>
              <Button variant="primary" size="lg">Large</Button>
              <Button variant="primary" size="xl">Extra Large</Button>
            </div>
          </div>

          <div>
            <Typography.H4>Icon Only Buttons</Typography.H4>
            <div className="flex flex-wrap items-end gap-3">
              <Button variant="outline" size="icon-sm"><Settings /></Button>
              <Button variant="outline" size="icon"><Settings /></Button>
              <Button variant="outline" size="icon-lg"><Settings /></Button>
              <Button variant="outline" size="icon-xl"><Settings /></Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* With Icons */}
      <Card>
        <CardHeader>
          <CardTitle>Buttons with Icons</CardTitle>
          <CardDescription>Icons can be positioned on the left, right, or used alone</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <Typography.H4>Left Icons</Typography.H4>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary" leftIcon={Download}>Download</Button>
              <Button variant="secondary" leftIcon={Upload}>Upload</Button>
              <Button variant="outline" leftIcon={Mail}>Send Email</Button>
              <Button variant="ghost" leftIcon={Phone}>Call</Button>
              <Button variant="success" leftIcon={CheckCircle}>Approve</Button>
              <Button variant="destructive" leftIcon={Trash2}>Delete</Button>
            </div>
          </div>

          <div>
            <Typography.H4>Right Icons</Typography.H4>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary" rightIcon={ArrowRight}>Continue</Button>
              <Button variant="secondary" rightIcon={ExternalLink}>Open Link</Button>
              <Button variant="outline" rightIcon={ChevronDown}>Options</Button>
              <Button variant="link" rightIcon={ArrowRight}>Learn More</Button>
            </div>
          </div>

          <div>
            <Typography.H4>Icon Only</Typography.H4>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary" size="icon"><Plus /></Button>
              <Button variant="secondary" size="icon"><Minus /></Button>
              <Button variant="outline" size="icon"><Edit /></Button>
              <Button variant="ghost" size="icon"><Settings /></Button>
              <Button variant="destructive" size="icon"><Trash2 /></Button>
              <Button variant="success" size="icon"><CheckCircle /></Button>
              <Button variant="warning" size="icon"><AlertTriangle /></Button>
            </div>
          </div>

          <div>
            <Typography.H4>Mixed Sizes with Icons</Typography.H4>
            <div className="flex flex-wrap items-end gap-3">
              <Button variant="primary" leftIcon={Save} size="sm">Save</Button>
              <Button variant="secondary" leftIcon={Edit} size="default">Edit</Button>
              <Button variant="outline" leftIcon={Search} size="lg">Search</Button>
              <Button variant="accent" rightIcon={Filter} size="xl">Apply Filters</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* States */}
      <Card>
        <CardHeader>
          <CardTitle>Button States</CardTitle>
          <CardDescription>Disabled, loading, and other special states</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <Typography.H4>Disabled States</Typography.H4>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary" disabled>Primary Disabled</Button>
              <Button variant="secondary" disabled>Secondary Disabled</Button>
              <Button variant="outline" disabled>Outline Disabled</Button>
              <Button variant="ghost" disabled leftIcon={Settings}>Ghost Disabled</Button>
              <Button variant="destructive" disabled rightIcon={Trash2}>Delete Disabled</Button>
            </div>
          </div>

          <div>
            <Typography.H4>Loading States</Typography.H4>
            <div className="flex flex-wrap gap-3">
              <Button 
                variant="primary" 
                loading={loading}
                onClick={handleLoadingDemo}
              >
                Click for Loading Demo
              </Button>
              <Button variant="secondary" loading loadingText="Processing...">Static Loading</Button>
              <Button variant="outline" loading leftIcon={Download}>Loading with Icon</Button>
              <Button variant="success" loading loadingText="Saving...">Custom Loading Text</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common Use Cases */}
      <Card>
        <CardHeader>
          <CardTitle>Common Button Patterns</CardTitle>
          <CardDescription>Real-world examples of button usage</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <Typography.H4>Form Actions</Typography.H4>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary" leftIcon={Save}>Save Changes</Button>
              <Button variant="outline">Cancel</Button>
              <Button variant="ghost" leftIcon={ArrowLeft}>Back</Button>
            </div>
          </div>

          <div>
            <Typography.H4>Navigation</Typography.H4>
            <div className="flex flex-wrap gap-3">
              <Button variant="ghost" leftIcon={Home}>Home</Button>
              <Button variant="ghost" leftIcon={User}>Profile</Button>
              <Button variant="ghost" leftIcon={Settings}>Settings</Button>
              <Button variant="primary" rightIcon={ArrowRight}>Get Started</Button>
            </div>
          </div>

          <div>
            <Typography.H4>Actions</Typography.H4>
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" leftIcon={RefreshCw}>Refresh</Button>
              <Button variant="outline" leftIcon={Download}>Export</Button>
              <Button variant="outline" leftIcon={Upload}>Import</Button>
              <Button variant="success" leftIcon={Plus}>Add New</Button>
              <Button variant="warning" leftIcon={AlertTriangle}>Warning Action</Button>
              <Button variant="destructive" leftIcon={XCircle}>Delete All</Button>
            </div>
          </div>

          <div>
            <Typography.H4>Social Actions</Typography.H4>
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" leftIcon={Heart} size="sm">Like</Button>
              <Button variant="outline" leftIcon={Star} size="sm">Favorite</Button>
              <Button variant="ghost" leftIcon={Mail} size="sm">Share</Button>
            </div>
          </div>

          <div>
            <Typography.H4>Card Actions</Typography.H4>
            <div className="bg-muted p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <Typography.H5>Sample Card</Typography.H5>
                  <p className="text-sm text-muted-foreground">Card with action buttons</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" leftIcon={Edit}>Edit</Button>
                  <Button variant="ghost" size="sm" leftIcon={Trash2}>Delete</Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Accessibility & Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle>Accessibility Features</CardTitle>
          <CardDescription>Built-in accessibility and keyboard navigation</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Typography.H4>✅ What's Included</Typography.H4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Keyboard navigation (Tab, Enter, Space)</li>
                <li>• Focus indicators with visible rings</li>
                <li>• Proper cursor states (pointer, not-allowed)</li>
                <li>• Disabled state handling</li>
                <li>• Loading state management</li>
                <li>• ARIA attributes for screen readers</li>
                <li>• Hover and active state feedback</li>
                <li>• Semantic button elements</li>
              </ul>
            </div>
            <div>
              <Typography.H4>🎨 Visual Feedback</Typography.H4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Smooth transitions and animations</li>
                <li>• Hover color and shadow changes</li>
                <li>• Active state scaling effect</li>
                <li>• Loading spinner animations</li>
                <li>• Brand-consistent color scheme</li>
                <li>• Multiple size options</li>
                <li>• Icon integration support</li>
                <li>• Dark mode compatibility</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}