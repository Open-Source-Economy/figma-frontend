import React, { useState } from 'react';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { SearchInput } from '../ui/search-input';
import { FilterSelect } from '../ui/filter-select';
import { InputWithIcon } from '../forms/InputWithIcon';
import { InputWithAddon } from '../forms/InputWithAddon';
import { Button } from '../ui/button';
import { SectionHeader } from '../ui/section-header';
import { Badge } from '../ui/badge';
import { 
  User, 
  Mail, 
  Lock, 
  Search, 
  Filter,
  DollarSign,
  Phone,
  Calendar,
  CheckCircle,
  AlertCircle,
  Eye,
  EyeOff,
  Globe
} from 'lucide-react';

export function InputShowcase() {
  const [searchValue, setSearchValue] = useState('');
  const [filterValue, setFilterValue] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [textareaValue, setTextareaValue] = useState('');
  const [selectValue, setSelectValue] = useState('');

  const filterOptions = [
    { value: 'all', label: 'All Categories' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'backend', label: 'Backend' },
    { value: 'database', label: 'Database' },
  ];

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Design System
          </Badge>
          <SectionHeader
            title="Input Design System"
            subtitle="Sophisticated blue-to-green gradient inputs with consistent branding"
            description="Explore our comprehensive input components featuring the Open Source Economy brand color system with elegant hover states, focus effects, and validation styles."
          />
        </div>

        <div className="grid gap-12">
          {/* Basic Input Variants */}
          <section>
            <h3 className="text-2xl font-semibold mb-6 text-brand-primary">Input Variants</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Default</label>
                  <Input placeholder="Enter your name..." />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Outline</label>
                  <Input variant="outline" placeholder="Enter your email..." />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Filled</label>
                  <Input variant="filled" placeholder="Enter your message..." />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Ghost</label>
                  <Input variant="ghost" placeholder="Minimal input..." />
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Success State</label>
                  <Input variant="success" placeholder="Valid input" defaultValue="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Error State</label>
                  <Input variant="error" placeholder="Invalid input" defaultValue="invalid-email" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Warning State</label>
                  <Input variant="warning" placeholder="Check required" defaultValue="example@gmail.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Disabled</label>
                  <Input placeholder="Disabled input" disabled />
                </div>
              </div>
            </div>
          </section>

          {/* Input Sizes */}
          <section>
            <h3 className="text-2xl font-semibold mb-6 text-brand-primary">Input Sizes</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Small</label>
                <Input size="sm" placeholder="Small input" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Default</label>
                <Input size="default" placeholder="Default input" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Large</label>
                <Input size="lg" placeholder="Large input" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Extra Large</label>
                <Input size="xl" placeholder="Extra large input" />
              </div>
            </div>
          </section>

          {/* Inputs with Icons */}
          <section>
            <h3 className="text-2xl font-semibold mb-6 text-brand-primary">Inputs with Icons</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Left Icon</label>
                  <Input leftIcon={User} placeholder="Full name" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Right Icon</label>
                  <Input rightIcon={Mail} placeholder="Email address" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Both Icons</label>
                  <Input leftIcon={Globe} rightIcon={CheckCircle} placeholder="Website URL" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Loading State</label>
                  <Input leftIcon={User} placeholder="Processing..." loading />
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Password Field</label>
                  <Input 
                    type={showPassword ? "text" : "password"}
                    leftIcon={Lock}
                    rightIcon={showPassword ? EyeOff : Eye}
                    placeholder="Enter password"
                    className="cursor-pointer"
                    onRightIconClick={() => setShowPassword(!showPassword)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <Input leftIcon={Phone} placeholder="+1 (555) 123-4567" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Date Input</label>
                  <Input leftIcon={Calendar} type="date" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Search with Icon</label>
                  <Input leftIcon={Search} placeholder="Search projects..." variant="outline" />
                </div>
              </div>
            </div>
          </section>

          {/* Enhanced Input Components */}
          <section>
            <h3 className="text-2xl font-semibold mb-6 text-brand-primary">Enhanced Components</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Search Input</label>
                  <SearchInput 
                    value={searchValue}
                    onChange={setSearchValue}
                    placeholder="Search open source projects..."
                    variant="outline"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Filter Select</label>
                  <FilterSelect
                    value={filterValue}
                    onValueChange={setFilterValue}
                    placeholder="Select category"
                    icon={Filter}
                    options={filterOptions}
                    variant="filled"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Input with State Icons</label>
                  <InputWithIcon 
                    leftIcon={Mail}
                    state="success"
                    placeholder="Validated email"
                    defaultValue="user@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Input with Error State</label>
                  <InputWithIcon 
                    leftIcon={User}
                    state="error"
                    placeholder="Invalid input"
                    defaultValue="invalid@"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Input Addons */}
          <section>
            <h3 className="text-2xl font-semibold mb-6 text-brand-primary">Input with Addons</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Currency Input</label>
                  <InputWithAddon 
                    prefix={<DollarSign className="h-4 w-4" />}
                    placeholder="0.00"
                    type="number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Website URL</label>
                  <InputWithAddon 
                    prefix="https://"
                    suffix=".com"
                    placeholder="yoursite"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Funding Amount</label>
                  <InputWithAddon 
                    prefix="$"
                    suffix="USD"
                    placeholder="10,000"
                    state="success"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">GitHub Repository</label>
                  <InputWithAddon 
                    prefix="github.com/"
                    placeholder="username/repository"
                    variant="outline"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Textarea Variants */}
          <section>
            <h3 className="text-2xl font-semibold mb-6 text-brand-primary">Textarea Components</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Default Textarea</label>
                  <Textarea 
                    placeholder="Describe your project needs..."
                    value={textareaValue}
                    onChange={(e) => setTextareaValue(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Outline Textarea</label>
                  <Textarea 
                    variant="outline"
                    placeholder="Tell us about your open source goals..."
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Large Textarea</label>
                  <Textarea 
                    size="lg"
                    variant="filled"
                    placeholder="Provide detailed project requirements..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Success State</label>
                  <Textarea 
                    variant="success"
                    placeholder="Requirements validated"
                    defaultValue="This project aligns perfectly with our sustainability goals and will benefit the entire open source ecosystem."
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Select Components */}
          <section>
            <h3 className="text-2xl font-semibold mb-6 text-brand-primary">Select Components</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Default Select</label>
                  <Select value={selectValue} onValueChange={setSelectValue}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a framework" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="react">React</SelectItem>
                      <SelectItem value="vue">Vue.js</SelectItem>
                      <SelectItem value="angular">Angular</SelectItem>
                      <SelectItem value="svelte">Svelte</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Outline Select</label>
                  <Select>
                    <SelectTrigger variant="outline">
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="javascript">JavaScript</SelectItem>
                      <SelectItem value="typescript">TypeScript</SelectItem>
                      <SelectItem value="python">Python</SelectItem>
                      <SelectItem value="rust">Rust</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Large Select</label>
                  <Select>
                    <SelectTrigger size="lg" variant="filled">
                      <SelectValue placeholder="Choose company size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="startup">Startup (1-10)</SelectItem>
                      <SelectItem value="small">Small (11-50)</SelectItem>
                      <SelectItem value="medium">Medium (51-200)</SelectItem>
                      <SelectItem value="large">Large (200+)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Success Select</label>
                  <Select>
                    <SelectTrigger variant="success">
                      <SelectValue placeholder="Validation passed" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="valid">Configuration Valid</SelectItem>
                      <SelectItem value="verified">Email Verified</SelectItem>
                      <SelectItem value="approved">Application Approved</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center pt-8">
            <div className="bg-gradient-to-r from-brand-primary/5 via-brand-accent/5 to-brand-success/5 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-4 text-brand-primary">Ready to Build?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Use these input components to create consistent, accessible forms throughout your Open Source Economy platform.
              </p>
              <div className="flex gap-4 justify-center">
                <Button variant="default">
                  Get Started
                </Button>
                <Button variant="outline">
                  View Documentation
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}