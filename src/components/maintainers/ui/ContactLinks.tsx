import React from 'react';
import { Mail, Github, Twitter, Linkedin } from 'lucide-react';

interface ContactInfo {
  email: string;
  github: string;
  twitter?: string;
  linkedin?: string;
}

interface ContactLinksProps {
  contact: ContactInfo;
  className?: string;
}

/**
 * ContactLinks - Displays contact/social links for a maintainer
 * Includes email, GitHub, Twitter, and LinkedIn with appropriate styling
 */
export const ContactLinks: React.FC<ContactLinksProps> = ({ contact, className = '' }) => {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      <a 
        href={`mailto:${contact.email}`}
        className="px-3 py-1.5 bg-brand-accent hover:bg-brand-accent-dark text-white rounded-lg transition-colors flex items-center gap-2"
      >
        <Mail className="h-4 w-4" />
        Contact
      </a>
      <a 
        href={`https://github.com/${contact.github}`}
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-1.5 bg-brand-card-blue hover:bg-brand-card-blue-light border border-brand-neutral-300 text-brand-neutral-900 rounded-lg transition-colors flex items-center gap-2"
      >
        <Github className="h-4 w-4" />
        GitHub
      </a>
      {contact.twitter && (
        <a 
          href={`https://twitter.com/${contact.twitter.replace('@', '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1.5 bg-brand-card-blue hover:bg-brand-card-blue-light border border-brand-neutral-300 text-brand-neutral-900 rounded-lg transition-colors flex items-center gap-2"
        >
          <Twitter className="h-4 w-4" />
          Twitter
        </a>
      )}
      {contact.linkedin && (
        <a 
          href={`https://linkedin.com/in/${contact.linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1.5 bg-brand-card-blue hover:bg-brand-card-blue-light border border-brand-neutral-300 text-brand-neutral-900 rounded-lg transition-colors flex items-center gap-2"
        >
          <Linkedin className="h-4 w-4" />
          LinkedIn
        </a>
      )}
    </div>
  );
};
