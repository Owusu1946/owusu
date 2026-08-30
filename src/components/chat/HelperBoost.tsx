import { Button } from '@/components/ui/button';
import {
  BriefcaseBusiness,
  BriefcaseIcon,
  ChevronRight,
  ChevronUp,
  CircleEllipsis,
  CodeIcon,
  GraduationCapIcon,
  Laugh,
  Layers,
  MailIcon,
  PartyPopper,
  Sparkles,
  UserRoundSearch,
  UserSearch,
} from '@/components/ui/icons';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@radix-ui/react-tooltip';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { Drawer } from 'vaul';

interface HelperBoostProps {
  submitQuery?: (query: string) => void;
  hasReachedLimit?: boolean;
  expanded?: boolean;
}

const questions = {
  Me: 'Who are you? I want to know more about you.',
  Projects: 'What are your projects? What are you working on right now?',
  Skills: 'What are your skills? Give me a list of your soft and hard skills.',
  Fun: 'What are your hobbies? What music do you listen to or poems do you write?',
  Contact:
    'How can I reach you? What kind of project would make you say "yes" immediately?',
};

const questionConfig = [
  { key: 'Me', color: '#329696', icon: Laugh },
  { key: 'Projects', color: '#3E9858', icon: BriefcaseBusiness },
  { key: 'Skills', color: '#856ED9', icon: Layers },
  { key: 'Fun', color: '#B95F9D', icon: PartyPopper },
  { key: 'Contact', color: '#C19433', icon: UserRoundSearch },
];

// Helper drawer data
const specialQuestions = [
  'What are your hobbies & creative interests?',
  'Who are you?',
  'Can I see your resume?',
  'What projects are you most proud of?',
  'What are your skills?',
  'How can I reach you?',
  'Can you share one of your poems?',
];

const questionsByCategory = [
  {
    id: 'me',
    name: 'Me',
    icon: UserSearch,
    questions: [
      'Who are you?',
      'What are your passions?',
      'How did you get started in tech?',
      'Where do you see yourself in 5 years?',
    ],
  },
  {
    id: 'professional',
    name: 'Professional',
    icon: BriefcaseIcon,
    questions: [
      'Can I see your resume?',
      'What makes you a valuable team member?',
      'Where are you working now?',
      'Why should I hire you?',
      "What's your educational background?",
    ],
  },
  {
    id: 'projects',
    name: 'Projects',
    icon: CodeIcon,
    questions: ['What projects are you most proud of?'],
  },
  {
    id: 'skills',
    name: 'Skills',
    icon: GraduationCapIcon,
    questions: [
      'What are your skills?',
      'What is your core tech stack?',
    ],
  },
  {
    id: 'fun',
    name: 'Fun & Hobbies',
    icon: PartyPopper,
    questions: [
      'What are your hobbies and favorite music?',
      'Can you share one of your poems?',
      'What books have influenced you most?',
      'Mac or PC?',
    ],
  },
  {
    id: 'contact',
    name: 'Contact & Future',
    icon: MailIcon,
    questions: [
      'How can I reach you?',
      "What kind of project would make you say 'yes' immediately?",
      'Where are you located?',
    ],
  },
];

// Animated Chevron component
const AnimatedChevron = () => {
  return (
    <motion.div
      animate={{
        y: [0, -4, 0], // Subtle up and down motion
      }}
      transition={{
        duration: 1.5,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'loop',
      }}
      className="text-primary mb-1.5"
    >
      <ChevronUp size={16} />
    </motion.div>
  );
};

export default function HelperBoost({
  submitQuery,
  hasReachedLimit = false,
  expanded = false,
}: HelperBoostProps) {
  const [open, setOpen] = useState(false);

  const handleQuestionClick = (questionKey: string) => {
    if (submitQuery && !hasReachedLimit) {
      submitQuery(questions[questionKey as keyof typeof questions]);
    }
  };

  const handleDrawerQuestionClick = (question: string) => {
    if (submitQuery && !hasReachedLimit) {
      submitQuery(question);
    }
    setOpen(false);
  };

  return (
    <>
      <Drawer.Root open={open} onOpenChange={setOpen}>
        <div className="w-full">
          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                key="quick-questions"
                initial={{ height: 0, opacity: 0, y: 8 }}
                animate={{ height: 'auto', opacity: 1, y: 0 }}
                exit={{ height: 0, opacity: 0, y: 8 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
                className="w-full overflow-hidden pb-2"
              >
                <div
                  className="flex w-full flex-wrap gap-1 md:gap-3"
                  style={{ justifyContent: 'safe center' }}
                >
                  {questionConfig.map(({ key, color, icon: Icon }) => (
                    <Button
                      key={key}
                      onClick={() => handleQuestionClick(key)}
                      variant="outline"
                      disabled={hasReachedLimit}
                      className={`h-auto min-w-[100px] flex-shrink-0 rounded-xl border px-4 py-3 shadow-none backdrop-blur-sm transition-none ${
                        hasReachedLimit
                          ? 'cursor-not-allowed border-gray-200 bg-gray-100 opacity-50 dark:border-neutral-800 dark:bg-neutral-900'
                          : 'border-[var(--portfolio-border)] hover:bg-[var(--portfolio-border)]/30 cursor-pointer bg-[var(--chat-card-bg)] text-[var(--portfolio-primary)] active:scale-95'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon size={18} strokeWidth={2} color={color} />
                        <span className="text-sm font-medium">{key}</span>
                      </div>
                    </Button>
                  ))}

                  {/* Need Inspiration Button */}
                  <TooltipProvider>
                    <Tooltip delayDuration={0}>
                      <TooltipTrigger asChild>
                        <Drawer.Trigger
                          className="group relative flex flex-shrink-0 items-center justify-center"
                          disabled={hasReachedLimit}
                        >
                          <motion.div
                            className={`flex h-auto items-center space-x-1 rounded-xl border px-4 py-3 text-sm backdrop-blur-sm transition-all duration-200 ${
                              hasReachedLimit
                                ? 'cursor-not-allowed border-gray-200 bg-gray-100 opacity-50 dark:border-neutral-800 dark:bg-neutral-900'
                                : 'border-[var(--portfolio-border)] hover:bg-[var(--portfolio-border)]/30 cursor-pointer bg-[var(--chat-card-bg)] text-[var(--portfolio-primary)]'
                            }`}
                            whileHover={!hasReachedLimit ? { scale: 1 } : {}}
                            whileTap={!hasReachedLimit ? { scale: 0.98 } : {}}
                          >
                            <div className="flex items-center gap-3">
                              <CircleEllipsis
                                className="h-[20px] w-[18px]"
                                strokeWidth={2}
                              />
                            </div>
                          </motion.div>
                        </Drawer.Trigger>
                      </TooltipTrigger>
                      <TooltipContent>
                        <AnimatedChevron />
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Drawer Content */}
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 z-100 bg-black/60 backdrop-blur-xs" />
          <Drawer.Content className="fixed right-0 bottom-0 left-0 z-100 mt-24 flex h-[80%] flex-col rounded-t-[10px] bg-[var(--chat-drawer-bg)] outline-none lg:h-[60%]">
            <div className="flex-1 overflow-y-auto rounded-t-[10px] bg-[var(--chat-drawer-bg)] p-4 text-[var(--chat-drawer-text)]">
              <div className="mx-auto max-w-md space-y-4">
                <div
                  aria-hidden
                  className="mx-auto mb-8 h-1.5 w-12 flex-shrink-0 rounded-full bg-[var(--portfolio-border)]"
                />
                <div className="mx-auto w-full max-w-md">
                  <div className="space-y-8 pb-16">
                    {questionsByCategory.map((category) => (
                      <CategorySection
                        key={category.id}
                        name={category.name}
                        Icon={category.icon}
                        questions={category.questions}
                        onQuestionClick={handleDrawerQuestionClick}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </>
  );
}

// Component for each category section
interface CategorySectionProps {
  name: string;
  Icon: React.ElementType;
  questions: string[];
  onQuestionClick: (question: string) => void;
}

function CategorySection({
  name,
  Icon,
  questions,
  onQuestionClick,
}: CategorySectionProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2.5 px-1">
        <Icon className="h-5 w-5 text-[var(--portfolio-primary)]" />
        <Drawer.Title className="text-[22px] font-medium text-[var(--portfolio-primary)]">
          {name}
        </Drawer.Title>
      </div>

      <Separator className="my-4 border-[var(--portfolio-border)]" />

      <div className="space-y-3">
        {questions.map((question, index) => (
          <QuestionItem
            key={index}
            question={question}
            onClick={() => onQuestionClick(question)}
            isSpecial={specialQuestions.includes(question)}
          />
        ))}
      </div>
    </div>
  );
}

// Component for each question item with animated chevron
interface QuestionItemProps {
  question: string;
  onClick: () => void;
  isSpecial: boolean;
}

function QuestionItem({ question, onClick, isSpecial }: QuestionItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      className={cn(
        'flex w-full items-center justify-between rounded-[10px]',
        'text-md px-6 py-4 text-left font-normal',
        'transition-all',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500',
        isSpecial
          ? 'bg-black text-white dark:bg-neutral-900'
          : 'bg-[var(--chat-drawer-item-bg)] text-[var(--chat-drawer-text)] hover:bg-[var(--chat-drawer-item-hover)]'
      )}
      onClick={onClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileTap={{
        scale: 0.98,
      }}
    >
      <div className="flex items-center">
        {isSpecial && <Sparkles className="mr-2 h-4 w-4 text-white" />}
        <span className={isSpecial ? 'font-medium text-white' : ''}>
          {question}
        </span>
      </div>
      <motion.div
        animate={{ x: isHovered ? 4 : 0 }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 25,
        }}
      >
        <ChevronRight
          className={cn(
            'h-5 w-5 shrink-0',
            isSpecial ? 'text-white' : 'text-primary'
          )}
        />
      </motion.div>
    </motion.button>
  );
}
