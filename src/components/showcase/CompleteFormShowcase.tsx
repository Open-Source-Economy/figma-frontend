import React from 'react';
import { ShowcaseCard } from '../layout/ShowcaseCard';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Checkbox } from '../ui/checkbox';
import { Button } from '../ui/button';
import { Label } from '../ui/label';

export function CompleteFormShowcase() {
  return (
    <ShowcaseCard 
      title="Complete Form Example" 
      description="A comprehensive form showcasing various input types working together"
    >
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="form-name">Full Name *</Label>
            <Input id="form-name" placeholder="John Doe" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="form-email">Email Address *</Label>
            <Input id="form-email" type="email" placeholder="john@example.com" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="form-phone">Phone Number</Label>
            <Input id="form-phone" type="tel" placeholder="+1 (555) 000-0000" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="form-company">Company</Label>
            <Input id="form-company" placeholder="Acme Inc." />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="form-role">Role</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select your role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="developer">Developer</SelectItem>
              <SelectItem value="designer">Designer</SelectItem>
              <SelectItem value="manager">Manager</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="form-message">Message</Label>
          <Textarea 
            id="form-message" 
            placeholder="Tell us about your project..." 
            rows={3} 
            className="resize-y" 
          />
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="form-newsletter" />
            <Label htmlFor="form-newsletter">Subscribe to our newsletter</Label>
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox id="form-terms" />
            <Label htmlFor="form-terms">I agree to the terms and conditions *</Label>
          </div>
        </div>

        <div className="flex gap-4">
          <Button type="submit">Submit Form</Button>
          <Button type="button" variant="outline">Reset</Button>
        </div>
      </form>
    </ShowcaseCard>
  );
}