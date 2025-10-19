import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Copy, Check, ExternalLink, Terminal, CheckCircle } from 'lucide-react';

interface TechnicalQuickStartProps {
  installCommand: string;
  quickStartCode: string;
  systemRequirements: string[];
  docsUrl: string;
}

export function TechnicalQuickStart({
  installCommand,
  quickStartCode,
  systemRequirements,
  docsUrl
}: TechnicalQuickStartProps) {
  const [copiedInstall, setCopiedInstall] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  const copyToClipboard = async (text: string, type: 'install' | 'code') => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === 'install') {
        setCopiedInstall(true);
        setTimeout(() => setCopiedInstall(false), 2000);
      } else {
        setCopiedCode(true);
        setTimeout(() => setCopiedCode(false), 2000);
      }
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Installation & Quick Start */}
      <div className="space-y-6">
        {/* Installation */}
        <div className="bg-brand-card-blue border border-brand-neutral-300 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <Terminal className="h-5 w-5 text-brand-accent" />
            <h4 className="text-brand-neutral-900">Installation</h4>
          </div>
          <div className="relative">
            <pre className="p-4 bg-brand-secondary border border-brand-neutral-300 rounded-lg overflow-x-auto">
              <code className="text-brand-neutral-800 text-sm">{installCommand}</code>
            </pre>
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-2 right-2"
              onClick={() => copyToClipboard(installCommand, 'install')}
            >
              {copiedInstall ? (
                <>
                  <Check className="h-4 w-4 text-brand-success" />
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Quick Start Code */}
        <div className="bg-brand-card-blue border border-brand-neutral-300 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-brand-neutral-900">Quick Start</h4>
            <Badge variant="secondary">Example</Badge>
          </div>
          <div className="relative">
            <pre className="p-4 bg-brand-secondary border border-brand-neutral-300 rounded-lg overflow-x-auto max-h-80">
              <code className="text-brand-neutral-800 text-sm whitespace-pre">{quickStartCode}</code>
            </pre>
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-2 right-2"
              onClick={() => copyToClipboard(quickStartCode, 'code')}
            >
              {copiedCode ? (
                <>
                  <Check className="h-4 w-4 text-brand-success" />
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* System Requirements & Resources */}
      <div className="space-y-6">
        {/* System Requirements */}
        <div className="bg-brand-card-blue border border-brand-neutral-300 rounded-xl p-6">
          <h4 className="text-brand-neutral-900 mb-4">System Requirements</h4>
          <ul className="space-y-3">
            {systemRequirements.map((req, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-brand-success flex-shrink-0 mt-0.5" />
                <span className="text-brand-neutral-700">{req}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Documentation Link */}
        <div className="bg-gradient-to-br from-brand-accent/10 to-brand-highlight/10 border border-brand-accent/20 rounded-xl p-6">
          <h4 className="text-brand-neutral-900 mb-2">Need More Help?</h4>
          <p className="text-brand-neutral-700 mb-4">
            Check out our comprehensive documentation for guides, API references, and advanced examples.
          </p>
          <Button asChild className="w-full">
            <a href={docsUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              View Full Documentation
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
