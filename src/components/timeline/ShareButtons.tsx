import React from 'react';
import { Button } from '../ui/button';
import { Twitter, Linkedin, Mail, Share2 } from 'lucide-react';

interface ShareButtonsProps {
  borderColor: string;
  hoverBorderColor: string;
  hoverBgColor: string;
  onShare: (platform: 'twitter' | 'linkedin' | 'email' | 'copy') => void;
  copied: boolean;
}

export function ShareButtons({
  borderColor,
  hoverBorderColor,
  hoverBgColor,
  onShare,
  copied
}: ShareButtonsProps) {
  return (
    <div className="grid grid-cols-2 gap-2">
      <Button 
        variant="outline" 
        size="sm"
        onClick={() => onShare('twitter')}
        className={`gap-1.5 ${borderColor} ${hoverBorderColor} ${hoverBgColor} justify-start`}
      >
        <Twitter className="h-4 w-4" />
        Twitter
      </Button>
      <Button 
        variant="outline" 
        size="sm"
        onClick={() => onShare('linkedin')}
        className={`gap-1.5 ${borderColor} ${hoverBorderColor} ${hoverBgColor} justify-start`}
      >
        <Linkedin className="h-4 w-4" />
        LinkedIn
      </Button>
      <Button 
        variant="outline" 
        size="sm"
        onClick={() => onShare('email')}
        className={`gap-1.5 ${borderColor} ${hoverBorderColor} ${hoverBgColor} justify-start`}
      >
        <Mail className="h-4 w-4" />
        Email
      </Button>
      <Button 
        variant="outline" 
        size="sm"
        onClick={() => onShare('copy')}
        className={`gap-1.5 ${borderColor} ${hoverBorderColor} ${hoverBgColor} justify-start`}
      >
        <Share2 className="h-4 w-4" />
        {copied ? '✓ Copied!' : 'Copy'}
      </Button>
    </div>
  );
}
