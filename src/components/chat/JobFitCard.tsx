'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BriefcaseBusiness,
  Download,
  Mail,
  Sparkles,
  Award,
  ChevronRight,
  ArrowUpRight,
} from '@/components/ui/icons';

export interface JobFitData {
  roleTitle?: string;
  company?: string;
  matchScore?: number;
  keyMatches?: string[];
  relevantProjects?: Array<{
    name: string;
    relevance: string;
  }>;
  whyImAFit?: string;
  suggestedFocus?: string[];
}

interface JobFitCardProps {
  data?: JobFitData;
  onSubmitCustomQuery?: (query: string) => void;
}

export function JobFitCard({ data, onSubmitCustomQuery }: JobFitCardProps) {
  const [copied, setCopied] = useState(false);
  const [showCustomInput, setShowCustomInput] = useState(false);
  const [customJd, setCustomJd] = useState('');

  const roleTitle = data?.roleTitle || 'Full-Stack & AI Engineering Role';
  const company = data?.company;
  const matchScore = Math.min(100, Math.max(50, data?.matchScore || 94));
  const keyMatches = data?.keyMatches && data.keyMatches.length > 0
    ? data.keyMatches
    : [
        'React, Next.js & TypeScript',
        'Python & FastAPI',
        'Multi-Agent LLM Systems',
        'PostgreSQL & Redis',
        'System Architecture & DevOps',
      ];

  const relevantProjects = data?.relevantProjects && data.relevantProjects.length > 0
    ? data.relevantProjects
    : [
        {
          name: 'Orin',
          relevance: 'Proves multi-agent LLM systems, code generation pipelines, and browser QA.',
        },
        {
          name: 'OptiMediX',
          relevance: 'Demonstrates end-to-end full-stack execution, telemedicine, and dependable systems.',
        },
      ];

  const whyImAFit = data?.whyImAFit ||
    'Owusu Kenneth combines strong product intuition with dependable full-stack engineering and pragmatic AI integration, delivering clean, high-performance systems from day one.';

  const handleCopySummary = async () => {
    const summaryText = `[Candidate Fit Briefing: Owusu Kenneth]
Position: ${roleTitle}${company ? ` at ${company}` : ''}
Fit Score: ${matchScore}% Alignment

Key Matched Skills:
${keyMatches.map((m) => `• ${m}`).join('\n')}

Relevant Project Evidence:
${relevantProjects.map((p) => `• ${p.name}: ${p.relevance}`).join('\n')}

Fit Summary:
${whyImAFit}

Contact: owusukenneth77@gmail.com | +233 55 918 2794 | https://github.com/Owusu1946`;

    try {
      await navigator.clipboard.writeText(summaryText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleScheduleCall = () => {
    const subject = encodeURIComponent(`Interview / Intro Call - ${roleTitle}${company ? ` (${company})` : ''}`);
    const body = encodeURIComponent(
      `Hi Owusu,\n\nWe reviewed your portfolio and were impressed with your background. We would love to set up an introductory conversation regarding the ${roleTitle} opportunity.\n\nBest regards,`
    );
    window.open(`mailto:owusukenneth77@gmail.com?subject=${subject}&body=${body}`, '_blank');
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/CV.pdf';
    link.download = 'Owusu_Kenneth_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleAnalyzeNewJd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customJd.trim() || !onSubmitCustomQuery) return;
    onSubmitCustomQuery(
      `Please analyze this job description and provide a fit assessment:\n\n${customJd.trim()}`
    );
    setShowCustomInput(false);
    setCustomJd('');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="mx-auto w-full max-w-3xl font-sans"
    >
      <div className="overflow-hidden rounded-3xl border border-[var(--portfolio-border)] bg-[var(--chat-card-bg)] p-6 shadow-sm backdrop-blur-md transition-colors sm:p-8">
        {/* Header with Title and Match Badge */}
        <div className="flex flex-col gap-4 border-b border-[var(--portfolio-border)] pb-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--portfolio-accent)]">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Recruiter Fit Analysis</span>
            </div>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-[var(--portfolio-primary)] sm:text-3xl">
              {roleTitle}
            </h2>
            {company && (
              <p className="text-sm font-medium text-[var(--portfolio-muted)]">
                {company}
              </p>
            )}
          </div>

          {/* Match Score Display */}
          <div className="flex items-center gap-3 self-start rounded-2xl border border-[var(--portfolio-border)] bg-[var(--portfolio-bg-soft)] px-4 py-3 sm:self-center">
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-[var(--portfolio-primary)] font-mono">
                {matchScore}%
              </span>
              <span className="text-[10px] uppercase tracking-wider text-[var(--portfolio-muted)] font-mono">
                Fit Score
              </span>
            </div>
            <div className="h-8 w-px bg-[var(--portfolio-border)]" />
            <div className="flex flex-col">
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                Strong Match
              </span>
              <span className="text-[11px] text-[var(--portfolio-muted)]">
                Verified Skills
              </span>
            </div>
          </div>
        </div>

        {/* Section 1: Key Matched Technologies */}
        <div className="pt-6">
          <h3 className="text-xs font-mono uppercase tracking-wider text-[var(--portfolio-muted)]">
            Matched Core Capabilities
          </h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {keyMatches.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center gap-1.5 rounded-full border border-[var(--portfolio-border)] bg-[var(--portfolio-bg-soft)] px-3 py-1 text-xs font-medium text-[var(--portfolio-primary)]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--portfolio-accent)]" />
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Section 2: Validating Projects */}
        <div className="mt-6">
          <h3 className="text-xs font-mono uppercase tracking-wider text-[var(--portfolio-muted)]">
            Proven Project Evidence
          </h3>
          <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {relevantProjects.map((proj) => (
              <div
                key={proj.name}
                className="rounded-xl border border-[var(--portfolio-border)] bg-[var(--portfolio-bg-soft)] p-3.5 transition-colors"
              >
                <div className="flex items-center gap-1.5 text-sm font-semibold text-[var(--portfolio-primary)]">
                  <Award className="h-4 w-4 text-[var(--portfolio-accent)]" />
                  <span>{proj.name}</span>
                </div>
                <p className="mt-1 text-xs leading-relaxed text-[var(--portfolio-muted)]">
                  {proj.relevance}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Summary Quote */}
        <div className="mt-6 rounded-2xl border border-[var(--portfolio-border)] bg-[var(--portfolio-bg-soft)] p-4">
          <p className="text-xs leading-relaxed italic text-[var(--portfolio-primary)]">
            &ldquo;{whyImAFit}&rdquo;
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-wrap items-center gap-2.5 pt-2">
          <button
            type="button"
            onClick={handleScheduleCall}
            className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#0171E3] px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <Mail className="h-3.5 w-3.5" />
            <span>Schedule Intro Call</span>
          </button>

          <button
            type="button"
            onClick={handleDownloadResume}
            className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-[var(--portfolio-border)] bg-[var(--portfolio-bg-soft)] px-3.5 py-2.5 text-xs font-medium text-[var(--portfolio-primary)] transition-colors hover:bg-[var(--portfolio-border)]/40"
          >
            <Download className="h-3.5 w-3.5" />
            <span>Download CV</span>
          </button>

          <button
            type="button"
            onClick={handleCopySummary}
            className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-[var(--portfolio-border)] bg-[var(--portfolio-bg-soft)] px-3.5 py-2.5 text-xs font-medium text-[var(--portfolio-primary)] transition-colors hover:bg-[var(--portfolio-border)]/40"
          >
            <span>{copied ? '✓ Brief Copied!' : 'Copy Summary'}</span>
          </button>

          {onSubmitCustomQuery && (
            <button
              type="button"
              onClick={() => setShowCustomInput(!showCustomInput)}
              className="inline-flex cursor-pointer items-center gap-1 rounded-full px-3 py-2 text-xs font-medium text-[var(--portfolio-muted)] hover:text-[var(--portfolio-primary)] transition-colors ml-auto"
            >
              <span>{showCustomInput ? 'Close' : 'Analyze another JD'}</span>
              <ChevronRight className={`h-3 w-3 transition-transform ${showCustomInput ? 'rotate-90' : ''}`} />
            </button>
          )}
        </div>

        {/* Expandable Custom JD Analysis Box */}
        <AnimatePresence>
          {showCustomInput && onSubmitCustomQuery && (
            <motion.form
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onSubmit={handleAnalyzeNewJd}
              className="mt-4 space-y-2 overflow-hidden border-t border-[var(--portfolio-border)] pt-4"
            >
              <label htmlFor="jd-textarea" className="block text-xs font-mono text-[var(--portfolio-muted)]">
                Paste Job Description / Requirements:
              </label>
              <textarea
                id="jd-textarea"
                rows={3}
                value={customJd}
                onChange={(e) => setCustomJd(e.target.value)}
                placeholder="e.g. Looking for a Senior Full-Stack Engineer with React, Next.js, Node.js, and LLM experience..."
                className="w-full rounded-xl border border-[var(--portfolio-border)] bg-[var(--portfolio-bg-soft)] p-3 text-xs text-[var(--portfolio-primary)] placeholder:text-[var(--portfolio-muted)] focus:outline-none focus:ring-1 focus:ring-[var(--portfolio-accent)]"
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={!customJd.trim()}
                  className="inline-flex cursor-pointer items-center gap-1.5 rounded-full bg-[var(--portfolio-primary)] px-4 py-2 text-xs font-semibold text-[var(--portfolio-bg)] transition-opacity disabled:opacity-50"
                >
                  <span>Run Instant Match</span>
                  <ArrowUpRight className="h-3 w-3" />
                </button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default JobFitCard;
