'use client';

import React, { useState } from 'react';
import { toast } from 'sonner';
import {
  CheckIcon,
  Link as LinkIcon,
  LinkedIn,
  Reddit,
  ShareIcon,
  WhatsApp,
  XTwitter,
} from '@/components/ui/icons';

interface ShareButtonsProps {
  title: string;
  slug: string;
  description?: string;
}

export function ShareButtons({ title, slug, description }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const url = `https://owusu-sigma.vercel.app/blog/${slug}`;

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(`"${title}" by @okenneth2255`);
  const encodedSummary = encodeURIComponent(
    `${title} — ${description || ''}\n\n${url}`
  );

  const shareLinks = [
    {
      name: 'X (Twitter)',
      icon: XTwitter,
      href: `https://x.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}&via=okenneth2255`,
    },
    {
      name: 'LinkedIn',
      icon: LinkedIn,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    },
    {
      name: 'WhatsApp',
      icon: WhatsApp,
      href: `https://api.whatsapp.com/send?text=${encodedSummary}`,
    },
    {
      name: 'Reddit',
      icon: Reddit,
      href: `https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`,
    },
  ];

  const handleCopy = async () => {
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard) {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        toast.success('Article link copied to clipboard!');
        setTimeout(() => setCopied(false), 2500);
      }
    } catch {
      toast.error('Failed to copy link');
    }
  };

  const handleNativeShare = async () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title,
          text: description || title,
          url,
        });
      } catch {
        // User cancelled or share failed silently
      }
    } else {
      handleCopy();
    }
  };

  return (
    <div className="my-10 border-y border-[var(--portfolio-border)] py-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <span className="font-mono text-xs text-[var(--portfolio-muted)] uppercase tracking-wider">
            Share this article
          </span>
          <p className="mt-0.5 text-sm font-medium text-[var(--portfolio-primary)]">
            Found this insightful? Pass it on to your network.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {shareLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 items-center gap-1.5 rounded-full border border-[var(--portfolio-border)] bg-[var(--portfolio-bg-soft)] px-3 text-xs font-medium text-[var(--portfolio-secondary)] transition-colors hover:border-[var(--portfolio-muted)] hover:text-[var(--portfolio-primary)]"
              title={`Share on ${item.name}`}
              aria-label={`Share on ${item.name}`}
            >
              <item.icon className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">{item.name.split(' ')[0]}</span>
            </a>
          ))}

          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex h-9 cursor-pointer items-center gap-1.5 rounded-full border border-[var(--portfolio-border)] bg-[var(--portfolio-bg-soft)] px-3 text-xs font-medium text-[var(--portfolio-secondary)] transition-colors hover:border-[var(--portfolio-muted)] hover:text-[var(--portfolio-primary)]"
            title="Copy link"
            aria-label="Copy link to clipboard"
          >
            {copied ? (
              <>
                <CheckIcon className="h-3.5 w-3.5 text-emerald-500" />
                <span className="text-emerald-500">Copied</span>
              </>
            ) : (
              <>
                <LinkIcon className="h-3.5 w-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handleNativeShare}
            className="inline-flex h-9 cursor-pointer items-center gap-1.5 rounded-full border border-[var(--portfolio-border)] bg-[var(--portfolio-bg-soft)] px-3 text-xs font-medium text-[var(--portfolio-secondary)] transition-colors hover:border-[var(--portfolio-muted)] hover:text-[var(--portfolio-primary)] sm:hidden"
            title="Native Share"
            aria-label="Open mobile share sheet"
          >
            <ShareIcon className="h-3.5 w-3.5" />
            <span>Share</span>
          </button>
        </div>
      </div>
    </div>
  );
}
