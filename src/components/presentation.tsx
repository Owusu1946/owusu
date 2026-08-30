'use client';

import { motion } from 'framer-motion';

export function Presentation() {
  const profile = {
    name: 'Owusu Kenneth',
    role: 'Full-Stack Engineer | AI and LLM Application Engineer',
    location: 'Accra, Ghana',
    description:
      'I build production web and mobile applications with modern TypeScript stacks and pragmatic AI integration. I am the founder of OptiMediX and builder of Orin, with a strong bias for clean UI, fast iteration, and dependable systems.',
    tags: ['Full-Stack', 'AI & LLMs', 'React', 'Next.js', 'Product Engineering'],
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <div className="mx-auto w-full max-w-5xl py-6 font-sans">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
        <motion.div
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="bg-foreground text-background mx-auto flex aspect-square w-full max-w-sm items-center justify-center rounded-2xl"
          aria-label="Owusu Kenneth"
        >
          <span className="text-7xl font-semibold">OK</span>
        </motion.div>

        <div className="flex flex-col">
          <motion.div initial="hidden" animate="visible" variants={textVariants}>
            <h1 className="from-foreground to-muted-foreground bg-gradient-to-r bg-clip-text text-xl font-semibold text-transparent md:text-3xl">
              {profile.name}
            </h1>
            <p className="text-muted-foreground mt-1">{profile.role}</p>
            <p className="text-muted-foreground mt-1">{profile.location}</p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="text-foreground mt-6 leading-relaxed"
          >
            {profile.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-4 flex flex-wrap gap-2"
          >
            {profile.tags.map((tag) => (
              <span
                key={tag}
                className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-sm"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Presentation;
