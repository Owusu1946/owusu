'use client';
import { useChat } from '@ai-sdk/react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { toast } from 'sonner';

// Component imports
import ChatBottombar from '@/components/chat/chat-bottombar';
import ChatLanding from '@/components/chat/chat-landing';
import ChatMessageContent from '@/components/chat/chat-message-content';
import { SimplifiedChatView } from '@/components/chat/simple-chat-view';
import {
  ChatBubble,
  ChatBubbleMessage,
} from '@/components/ui/chat/chat-bubble';
import WelcomeModal from '@/components/welcome-modal';
import { Info, Moon, Sun } from '@/components/ui/icons';
import { GithubButton } from '@/components/ui/github-button';
import { profile } from '@/data/portfolio';
import HelperBoost from './HelperBoost';
import { MessageTracking } from '@/lib/message-tracking';

// ClientOnly component for client-side rendering
//@ts-ignore
const ClientOnly = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <>{children}</>;
};

// Define Avatar component props interface
interface AvatarProps {
  hasActiveTool: boolean;
  videoRef: React.RefObject<HTMLVideoElement | null>;
  isTalking: boolean;
}

function Avatar({ hasActiveTool, videoRef }: AvatarProps) {
  const [isIOSDevice, setIsIOSDevice] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const userAgent = window.navigator.userAgent;
    const platform = window.navigator.platform;
    const maxTouchPoints = window.navigator.maxTouchPoints || 0;
    const isIOSByUA = /iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream;
    const isIOSByPlatform = /iPad|iPhone|iPod/.test(platform);
    const isIPadOS = platform === 'MacIntel' && maxTouchPoints > 1 && !(window as any).MSStream;
    const isSafari = /Safari/.test(userAgent) && !/Chrome/.test(userAgent);
    setIsIOSDevice(isIOSByUA || isIOSByPlatform || isIPadOS || isSafari);
  }, []);

  return (
    <div
      className={`flex items-center justify-center rounded-full transition-all duration-300 ${hasActiveTool ? 'h-20 w-20' : 'h-28 w-28'}`}
    >
      <Link
        href="/"
        prefetch={true}
        className="relative block cursor-pointer"
        title="Return to portfolio"
        aria-label="Return to portfolio"
      >
        {isIOSDevice ? (
          <img
            src="/landing-memojis.png"
            alt="iOS avatar"
            className="h-full w-full scale-[1.8] object-contain"
          />
        ) : (
          <video
            ref={videoRef}
            className="h-full w-full scale-[1.8] object-contain"
            muted
            playsInline
            loop
            autoPlay
          >
            <source src="/final_memojis.webm" type="video/webm" />
            <source src="/final_memojis_ios.mp4" type="video/mp4" />
          </video>
        )}
      </Link>
    </div>
  );
}

const MOTION_CONFIG = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
  transition: {
    duration: 0.3,
    ease: 'easeOut',
  },
};

const Chat = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('query');
  const [autoSubmitted, setAutoSubmitted] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [isTalking, setIsTalking] = useState(false);
  const [hasReachedLimit, setHasReachedLimit] = useState(false);
  const [composerExpanded, setComposerExpanded] = useState(false);
  const [dark, setDark] = useState(true);

  const toggleTheme = () => {
    const nextDark = !dark;
    document.documentElement.classList.toggle('dark', nextDark);
    document.documentElement.classList.toggle('portfolio-dark', nextDark);
    document.documentElement.style.colorScheme = nextDark ? 'dark' : 'light';
    localStorage.setItem('portfolio-theme', nextDark ? 'dark' : 'light');
    setDark(nextDark);

    const metaColor = nextDark ? '#090909' : '#ffffff';
    let meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute('content', metaColor);
    }
  };

  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    stop,
    setMessages,
    setInput,
    reload,
    addToolResult,
    append,
  } = useChat({
    onResponse: (response) => {
      if (response) {
        setLoadingSubmit(false);
        setIsTalking(true);
        if (videoRef.current) {
          videoRef.current.play().catch((error) => {
            console.error('Failed to play video:', error);
          });
        }
      }
    },
    onFinish: () => {
      setLoadingSubmit(false);
      setIsTalking(false);
      if (videoRef.current) {
        videoRef.current.pause();
      }
    },
    onError: (error) => {
      setLoadingSubmit(false);
      setIsTalking(false);
      if (videoRef.current) {
        videoRef.current.pause();
      }
      console.error('Chat error:', error.message, error.cause);
      toast.error(`Error: ${error.message}`);
    },
    onToolCall: (tool) => {
      const toolName = tool.toolCall.toolName;
      console.log('Tool call:', toolName);
    },
  });

  const { currentAIMessage, latestUserMessage, hasActiveTool } = useMemo(() => {
    const latestAIMessageIndex = messages.findLastIndex(
      (m) => m.role === 'assistant'
    );
    const latestUserMessageIndex = messages.findLastIndex(
      (m) => m.role === 'user'
    );

    const result = {
      currentAIMessage:
        latestAIMessageIndex !== -1 ? messages[latestAIMessageIndex] : null,
      latestUserMessage:
        latestUserMessageIndex !== -1 ? messages[latestUserMessageIndex] : null,
      hasActiveTool: false,
    };

    if (result.currentAIMessage) {
      result.hasActiveTool =
        result.currentAIMessage.parts?.some(
          (part) =>
            part.type === 'tool-invocation' &&
            part.toolInvocation?.state === 'result'
        ) || false;
    }

    if (latestAIMessageIndex < latestUserMessageIndex) {
      result.currentAIMessage = null;
    }

    return result;
  }, [messages]);

  const isToolInProgress = messages.some(
    (m) =>
      m.role === 'assistant' &&
      m.parts?.some(
        (part) =>
          part.type === 'tool-invocation' &&
          part.toolInvocation?.state !== 'result'
      )
  );

  //@ts-ignore
  const submitQuery = (query) => {
    if (MessageTracking.hasReachedLimit()) {
      setHasReachedLimit(true);
      toast.error("You've reached your limit of 5 messages.");
      return;
    }

    if (!query.trim() || isToolInProgress) return;

    setComposerExpanded(false);

    MessageTracking.incrementMessageCount();
    if (MessageTracking.hasReachedLimit()) {
      setHasReachedLimit(true);
    }

    setLoadingSubmit(true);
    append({
      role: 'user',
      content: query,
    });
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.loop = true;
      videoRef.current.muted = true;
      videoRef.current.playsInline = true;
      videoRef.current.pause();
    }

    setDark(document.documentElement.classList.contains('portfolio-dark'));

    if (MessageTracking.hasReachedLimit()) {
      setHasReachedLimit(true);
    }

    if (initialQuery && !autoSubmitted) {
      setAutoSubmitted(true);
      setInput('');
      submitQuery(initialQuery);
    }
  }, [initialQuery, autoSubmitted]);

  useEffect(() => {
    if (videoRef.current) {
      if (isTalking) {
        videoRef.current.play().catch((error) => {
          console.error('Failed to play video:', error);
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isTalking]);

  //@ts-ignore
  const onSubmit = (e) => {
    e.preventDefault();

    if (MessageTracking.hasReachedLimit()) {
      setHasReachedLimit(true);
      toast.error("You've reached your limit of 5 messages.");
      return;
    }

    if (!input.trim() || isToolInProgress) return;
    setComposerExpanded(false);
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    submitQuery(input);
    setInput('');
  };

  const handleStop = () => {
    stop();
    setLoadingSubmit(false);
    setIsTalking(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  // Check if this is the initial empty state (no messages)
  const isEmptyState =
    !currentAIMessage && !latestUserMessage && !loadingSubmit;

  // Calculate header height based on hasActiveTool
  const headerHeight = hasActiveTool ? 90 : 170;

  return (
    <div className="fixed inset-0 h-[100dvh] max-h-[100dvh] min-h-[100dvh] w-full overflow-hidden bg-[var(--portfolio-bg)] text-[var(--portfolio-primary)] transition-colors duration-200">
      <div className="absolute top-[max(0.75rem,env(safe-area-inset-top))] right-4 sm:right-8 z-51 flex items-center justify-center gap-2">
        <GithubButton
          repoUrl={profile.repo}
          label="Star"
          variant="outline"
          size="sm"
          roundStars={true}
          className="hidden sm:inline-flex"
        />
        <button
          type="button"
          onClick={toggleTheme}
          className="hover:bg-accent cursor-pointer rounded-2xl px-3 py-1.5 transition-colors"
          aria-label={dark ? 'Use light theme' : 'Use dark theme'}
          title={dark ? 'Use light theme' : 'Use dark theme'}
        >
          {dark ? (
            <Sun className="text-accent-foreground h-7 w-7" />
          ) : (
            <Moon className="text-accent-foreground h-7 w-7" />
          )}
        </button>
        <WelcomeModal
          trigger={
            <div className="hover:bg-accent cursor-pointer rounded-2xl px-3 py-1.5">
              <Info className="text-accent-foreground h-7 w-7" />
            </div>
          }
        />
      </div>

      {/* Fixed Avatar Header with Gradient */}
      <div
        className="fixed top-0 right-0 left-0 z-50 pt-[env(safe-area-inset-top,0px)] transition-colors duration-200"
        style={{
          background:
            'linear-gradient(to bottom, var(--chat-gradient-start) 0%, var(--chat-gradient-mid) 30%, var(--chat-gradient-sub) 50%, var(--chat-gradient-end) 100%)',
        }}
      >
        <div
          className={`transition-all duration-300 ease-in-out ${hasActiveTool ? 'pt-4 pb-0 sm:pt-6' : 'py-4 sm:py-6'}`}
        >
          <div className="flex justify-center">
            <ClientOnly>
              <Avatar
                hasActiveTool={hasActiveTool}
                videoRef={videoRef}
                isTalking={isTalking}
              />
            </ClientOnly>
          </div>

          <AnimatePresence>
            {latestUserMessage && !currentAIMessage && (
              <motion.div
                {...MOTION_CONFIG}
                className="mx-auto flex max-w-3xl px-4"
              >
                <ChatBubble variant="sent">
                  <ChatBubbleMessage>
                    <ChatMessageContent
                      message={latestUserMessage}
                      isLast={true}
                      isLoading={false}
                      reload={() => Promise.resolve(null)}
                    />
                  </ChatBubbleMessage>
                </ChatBubble>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto flex h-full max-w-3xl flex-col">
        {/* Scrollable Chat Content */}
        <div
          className="chat-thread-scroll flex-1 overflow-y-auto px-2 pb-6"
          style={{ paddingTop: `calc(${headerHeight}px + env(safe-area-inset-top, 0px))` }}
        >
          <AnimatePresence mode="wait">
            {isEmptyState ? (
              <motion.div
                key="landing"
                className="flex min-h-full items-center justify-center pb-20"
                {...MOTION_CONFIG}
              >
                <ChatLanding
                  submitQuery={submitQuery}
                />
              </motion.div>
            ) : currentAIMessage ? (
              <div className="pb-24 sm:pb-32">
                <SimplifiedChatView
                  message={currentAIMessage}
                  isLoading={isLoading}
                  reload={reload}
                  addToolResult={addToolResult}
                />
              </div>
            ) : (
              loadingSubmit && (
                <motion.div
                  key="loading"
                  {...MOTION_CONFIG}
                  className="px-4 pt-18 pb-20"
                >
                  <ChatBubble variant="received">
                    <ChatBubbleMessage isLoading />
                  </ChatBubble>
                </motion.div>
              )
            )}
          </AnimatePresence>
        </div>

        {/* Fixed Bottom Bar */}
        <div className="sticky bottom-0 z-40 w-full bg-[var(--portfolio-bg)] px-3 pt-2 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:px-0 md:pb-4 transition-colors duration-200">
          <motion.div
            layout
            className="relative flex flex-col items-center gap-3"
            onFocusCapture={() => setComposerExpanded(true)}
            onBlurCapture={(event) => {
              const nextTarget = event.relatedTarget;
              if (
                !nextTarget ||
                !event.currentTarget.contains(nextTarget as Node)
              ) {
                setComposerExpanded(false);
              }
            }}
            transition={{ layout: { duration: 0.22, ease: 'easeOut' } }}
          >
            <HelperBoost
              submitQuery={submitQuery}
              hasReachedLimit={hasReachedLimit}
              expanded={composerExpanded && !hasReachedLimit}
            />
            <ChatBottombar
              input={
                hasReachedLimit ? "You've reached your limit of 5 messages." : input
              }
              handleInputChange={hasReachedLimit ? () => {} : handleInputChange}
              handleSubmit={onSubmit}
              isLoading={isLoading}
              stop={handleStop}
              isToolInProgress={isToolInProgress || hasReachedLimit}
              disabled={hasReachedLimit}
              expanded={composerExpanded && !hasReachedLimit}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
