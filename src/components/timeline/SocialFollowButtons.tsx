import React from 'react';
import { Button } from '../ui/button';
import { Linkedin, Github, Youtube, Twitter, Share2, Sparkles } from 'lucide-react';

interface SocialFollowButtonsProps {
  color: string;
  borderColor: string;
  hoverBorderColor: string;
  hoverBgColor: string;
}

export function SocialFollowButtons({
  color,
  borderColor,
  hoverBorderColor,
  hoverBgColor
}: SocialFollowButtonsProps) {
  return (
    <>
      {/* CTA Header */}
      <div className={`bg-${color}/10 border-l-4 border-${color} rounded px-3 py-2 mb-3`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Share2 className={`h-4 w-4 text-${color}`} />
            <span className={`text-${color}`}>Follow us on:</span>
          </div>
          <div className={`bg-${color}/20 text-${color} text-[10px] px-2 py-1 rounded`}>
            Pick 1+
          </div>
        </div>
      </div>

      {/* Buttons Grid */}
      <div className="grid grid-cols-2 gap-2">
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => window.open('https://www.linkedin.com/company/opensourceeconomy', '_blank')}
          className={`gap-1.5 ${borderColor} ${hoverBorderColor} ${hoverBgColor} justify-start`}
        >
          <Linkedin className="h-4 w-4" />
          LinkedIn
        </Button>
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => window.open('https://github.com/opensourceeconomy', '_blank')}
          className={`gap-1.5 ${borderColor} ${hoverBorderColor} ${hoverBgColor} justify-start`}
        >
          <Github className="h-4 w-4" />
          GitHub
        </Button>
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => window.open('https://youtube.com/@opensourceeconomy', '_blank')}
          className={`gap-1.5 ${borderColor} ${hoverBorderColor} ${hoverBgColor} justify-start`}
        >
          <Youtube className="h-4 w-4" />
          YouTube
        </Button>
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => window.open('https://x.com/opensourceeco', '_blank')}
          className={`gap-1.5 ${borderColor} ${hoverBorderColor} ${hoverBgColor} justify-start`}
        >
          <Twitter className="h-4 w-4" />
          X
        </Button>
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => window.open('https://mastodon.social/@opensourceeconomy', '_blank')}
          className={`gap-1.5 ${borderColor} ${hoverBorderColor} ${hoverBgColor} justify-start col-span-2`}
        >
          <Share2 className="h-4 w-4" />
          Mastodon
        </Button>
      </div>

      {/* Encouragement Badge */}
      <div className="mt-3 text-center">
        <div className={`inline-flex items-center gap-1.5 bg-${color}/5 border border-${color}/30 text-${color} text-[11px] px-3 py-1.5 rounded-full`}>
          <Sparkles className="h-3 w-3" />
          <span>Follow multiple = bigger impact! 🚀</span>
        </div>
      </div>
    </>
  );
}
