'use client';

import React from 'react';
import { ChevronRight } from '@/components/ui/icons';
import { GithubButton } from '@/components/ui/github-button';
import { profile } from '@/data/portfolio';

export function Contact() {
  const contactInfo = {
    name: 'Owusu Kenneth',
    email: profile.email,
    handle: '@Owusu1946',
    socials: [
      { name: 'GitHub', url: profile.github },
      { name: 'LinkedIn', url: profile.linkedin },
      { name: 'X (Twitter)', url: profile.twitter },
      { name: 'Instagram', url: profile.instagram },
      { name: 'WhatsApp', url: profile.whatsapp },
      { name: 'Phone', url: `tel:${profile.phone}` },
    ],
  };

  const openLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="mx-auto mt-8 w-full font-sans">
      <div className="bg-accent w-full overflow-hidden rounded-3xl px-6 py-8 sm:px-10 md:px-16 md:py-12">
        {/* Header Section */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-foreground text-3xl font-semibold md:text-4xl">
            Contacts
          </h2>
          <span className="mt-2 text-sm text-muted-foreground sm:mt-0">
            {contactInfo.handle}
          </span>
        </div>

        {/* Email & Callouts */}
        <div className="mt-8 flex flex-col md:mt-10">
          <div
            className="group mb-5 cursor-pointer"
            onClick={() => openLink(`mailto:${contactInfo.email}`)}
          >
            <div className="flex items-center gap-1">
              <span className="text-base font-medium text-blue-500 hover:underline sm:text-lg">
                {contactInfo.email}
              </span>
              <ChevronRight className="h-5 w-5 text-blue-500 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
            {contactInfo.socials.map((social) => (
              <button
                key={social.name}
                className="text-muted-foreground hover:text-foreground cursor-pointer text-sm font-medium transition-colors"
                onClick={() => openLink(social.url)}
                title={social.name}
              >
                {social.name}
              </button>
            ))}
          </div>

          {/* Star Repo Prompt */}
          <div className="mt-8 flex flex-col items-start gap-2 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-muted-foreground">
              If you like this portfolio, please give the repo a star on GitHub! ⭐️
            </p>
            <GithubButton
              repoUrl={profile.repo}
              label="Star on GitHub"
              variant="outline"
              size="sm"
              roundStars={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
