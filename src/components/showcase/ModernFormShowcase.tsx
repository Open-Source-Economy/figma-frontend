import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { SearchInput } from '../ui/search-input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { FilterSelect } from '../ui/filter-select';
import { FormFieldModern } from '../ui/form-field-modern';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { SectionHeader } from '../ui/section-header';
import { ShowcaseGrid } from '../layout/ShowcaseGrid';
import { ShowcaseCard } from '../layout/ShowcaseCard';
import { Mail, User, Search, Filter, MessageSquare, Building } from 'lucide-react';

export function ModernFormShowcase() {
  const [email, setEmail] = React.useState('');
  const [name, setName] = React.useState('');
  const [searchTerm, setSearchTerm] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [selectedRole, setSelectedRole] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('all');

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <SectionHeader
            title="Modern Form Elements"
            description="Contemporary form styling with elevation, smooth animations, and floating labels"
            centered
          />
          
          {/* Feature Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <Badge variant="outline" className="text-brand-primary border-brand-primary/20">
              Subtle Elevation
            </Badge>
            <Badge variant="outline" className="text-brand-accent border-brand-accent/20">
              Smooth Animations
            </Badge>
            <Badge variant="outline" className="text-brand-success border-brand-success/20">
              Floating Labels
            </Badge>
            <Badge variant="outline" className="text-muted-foreground border-border">
              Micro-interactions
            </Badge>
          </div>
        </div>

        <ShowcaseGrid>
          {/* Modern Input Fields */}
          <ShowcaseCard
            title="Modern Input Fields"
            description="Elevated inputs with subtle shadows, smooth hover effects, and refined styling"
          >
            <div className="space-y-6">
              {/* Floating Label Inputs */}
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                  Floating Labels
                </h4>
                
                <FormFieldModern
                  label="Email Address"
                  required
                  help="We'll never share your email with anyone else."
                >
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder=""
                  />
                </FormFieldModern>

                <FormFieldModern
                  label="Full Name"
                  required
                >
                  <Input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder=""
                  />
                </FormFieldModern>
              </div>

              {/* Traditional Stacked Inputs */}
              <div className="space-y-4 pt-6 border-t border-border">
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                  Stacked Labels
                </h4>
                
                <FormFieldModern
                  variant="stacked"
                  label="Company Name"
                  help="Enter your organization's legal name"
                >
                  <Input
                    type="text"
                    placeholder="Acme Corporation"
                    leftIcon={Building}
                  />
                </FormFieldModern>

                <FormFieldModern
                  variant="stacked"
                  label="Contact Email"
                  error="Please enter a valid email address"
                >
                  <Input
                    type="email"
                    placeholder="hello@example.com"
                    leftIcon={Mail}
                    variant="error"
                  />
                </FormFieldModern>
              </div>
            </div>
          </ShowcaseCard>

          {/* Search and Filter Elements */}
          <ShowcaseCard
            title="Search & Filter Elements"
            description="Modern search inputs and filter components with enhanced interactivity"
          >
            <div className="space-y-6">
              {/* Search Input */}
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                  Search Input
                </h4>
                
                <SearchInput
                  placeholder="Search projects, maintainers, or technologies..."
                  value={searchTerm}
                  onChange={setSearchTerm}
                  size="lg"
                />

                <SearchInput
                  placeholder="Quick search..."
                  value=""
                  onChange={() => {}}
                  size="default"
                  variant="outline"
                />
              </div>

              {/* Filter Selects */}
              <div className="space-y-4 pt-6 border-t border-border">
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                  Filter Controls
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FilterSelect
                    value={selectedCategory}
                    onValueChange={setSelectedCategory}
                    placeholder="All Categories"
                    icon={Filter}
                    width="w-full"
                    options={[
                      { value: "all", label: "All Categories" },
                      { value: "frontend", label: "Frontend" },
                      { value: "backend", label: "Backend" },
                      { value: "database", label: "Database" },
                      { value: "devops", label: "DevOps" }
                    ]}
                  />

                  <Select value={selectedRole} onValueChange={setSelectedRole}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="developer">Developer</SelectItem>
                      <SelectItem value="designer">Designer</SelectItem>
                      <SelectItem value="manager">Manager</SelectItem>
                      <SelectItem value="founder">Founder</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </ShowcaseCard>

          {/* Textarea Elements */}
          <ShowcaseCard
            title="Textarea & Large Inputs"
            description="Multi-line text areas with consistent modern styling"
          >
            <div className="space-y-6">
              <FormFieldModern
                variant="stacked"
                label="Project Description"
                help="Describe your project goals and requirements"
                required
              >
                <Textarea
                  placeholder="Tell us about your project..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="min-h-32"
                />
              </FormFieldModern>

              <FormFieldModern
                variant="floating"
                label="Additional Notes"
              >
                <Textarea
                  value=""
                  onChange={() => {}}
                  placeholder=""
                  className="min-h-24"
                />
              </FormFieldModern>
            </div>
          </ShowcaseCard>

          {/* Form Variants */}
          <ShowcaseCard
            title="Input Variants"
            description="Different styling variants for various use cases"
          >
            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Default
                  </label>
                  <Input placeholder="Default input styling" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Outline
                  </label>
                  <Input variant="outline" placeholder="Outline variant" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Filled
                  </label>
                  <Input variant="filled" placeholder="Filled variant" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Success State
                  </label>
                  <Input variant="success" placeholder="Success variant" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Error State
                  </label>
                  <Input variant="error" placeholder="Error variant" />
                </div>
              </div>
            </div>
          </ShowcaseCard>

          {/* Size Variants */}
          <ShowcaseCard
            title="Size Variants"
            description="Multiple size options for different contexts"
          >
            <div className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Small
                  </label>
                  <Input size="sm" placeholder="Small input" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Default
                  </label>
                  <Input placeholder="Default size" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Large
                  </label>
                  <Input size="lg" placeholder="Large input" />
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">
                  Search Sizes
                </h4>
                <div className="space-y-4">
                  <SearchInput size="sm" placeholder="Small search" value="" onChange={() => {}} />
                  <SearchInput placeholder="Default search" value="" onChange={() => {}} />
                  <SearchInput size="lg" placeholder="Large search" value="" onChange={() => {}} />
                </div>
              </div>
            </div>
          </ShowcaseCard>

          {/* Interactive Form */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Complete Modern Form</CardTitle>
              <p className="text-muted-foreground">
                A fully interactive form demonstrating all modern form elements together
              </p>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormFieldModern
                    label="First Name"
                    required
                  >
                    <Input type="text" placeholder="" />
                  </FormFieldModern>

                  <FormFieldModern
                    label="Last Name"
                    required
                  >
                    <Input type="text" placeholder="" />
                  </FormFieldModern>
                </div>

                <FormFieldModern
                  label="Email Address"
                  required
                  help="We'll use this to send you project updates"
                >
                  <Input type="email" placeholder="" />
                </FormFieldModern>

                <FormFieldModern
                  variant="stacked"
                  label="Company Size"
                  required
                >
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select company size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-10">1-10 employees</SelectItem>
                      <SelectItem value="11-50">11-50 employees</SelectItem>
                      <SelectItem value="51-200">51-200 employees</SelectItem>
                      <SelectItem value="201-1000">201-1000 employees</SelectItem>
                      <SelectItem value="1000+">1000+ employees</SelectItem>
                    </SelectContent>
                  </Select>
                </FormFieldModern>

                <FormFieldModern
                  variant="stacked"
                  label="Project Requirements"
                  help="Describe your project goals and timeline"
                  required
                >
                  <Textarea
                    placeholder="Tell us about your project..."
                    className="min-h-32"
                  />
                </FormFieldModern>

                <div className="flex gap-3 pt-4">
                  <Button size="lg" className="flex-1 sm:flex-initial">
                    Submit Application
                  </Button>
                  <Button variant="outline" size="lg">
                    Save Draft
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </ShowcaseGrid>
      </div>
    </div>
  );
}