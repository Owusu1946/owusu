'use client';

import { motion } from 'framer-motion';
import { BriefcaseBusiness, Code2, MapPin } from '@/components/ui/icons';

const InternshipCard = () => {
  const openMail = () => {
    window.open('mailto:owusukenneth77@gmail.com', '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-accent mx-auto mt-8 w-full max-w-4xl rounded-3xl px-6 py-8 font-sans sm:px-10 md:px-16 md:py-12"
    >
      <div className="mb-6 flex flex-col items-center sm:flex-row sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-foreground text-background flex h-16 w-16 items-center justify-center rounded-full shadow-md">
            <span className="text-xl font-semibold">OK</span>
          </div>
          <div>
            <h2 className="text-foreground text-2xl font-semibold">
              Owusu Kenneth
            </h2>
            <p className="text-muted-foreground text-sm">
              Full-Stack Engineer | AI and LLM Application Engineer
            </p>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-2 sm:mt-0">
          <span className="flex items-center gap-1 rounded-full border border-green-500 px-3 py-0.5 text-sm font-medium text-green-500">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            Current
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="flex items-start gap-3">
          <BriefcaseBusiness className="mt-1 h-5 w-5 text-blue-500" />
          <div>
            <p className="text-foreground text-sm font-medium">Experience</p>
            <p className="text-muted-foreground text-sm">
              GAEC, Pic Konnect, OptiMediX, and GIFEC
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <MapPin className="mt-1 h-5 w-5 text-green-500" />
          <div>
            <p className="text-foreground text-sm font-medium">Location</p>
            <p className="text-muted-foreground text-sm">Accra, Ghana</p>
          </div>
        </div>

        <div className="flex items-start gap-3 sm:col-span-2">
          <Code2 className="mt-1 h-5 w-5 text-purple-500" />
          <div className="w-full">
            <p className="text-foreground text-sm font-medium">Engineering focus</p>
            <div className="text-muted-foreground grid grid-cols-1 gap-y-1 text-sm sm:grid-cols-2">
              <ul className="list-disc pl-4">
                <li>React, Next.js, TypeScript, and React Native</li>
                <li>Node.js, Python, Django, and FastAPI</li>
                <li>PostgreSQL, MongoDB, and Redis</li>
              </ul>
              <ul className="list-disc pl-4">
                <li>LLM applications and multi-agent systems</li>
                <li>AWS, Google Cloud, Docker, and Kubernetes</li>
                <li>Performance, testing, and secure architecture</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <p className="text-foreground mb-2 text-lg font-semibold">What I bring</p>
        <p className="text-foreground text-sm leading-relaxed">
          Production experience across web, mobile, internal dashboards, digital
          health, social products, and AI-powered developer tools. I care about
          clean UI, fast iteration, reliable delivery, and systems that remain
          maintainable as they grow.
        </p>
      </div>

      <div className="mt-10 flex justify-center">
        <button
          onClick={openMail}
          className="cursor-pointer rounded-full bg-black px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-zinc-800"
        >
          Contact me
        </button>
      </div>
    </motion.div>
  );
};

export default InternshipCard;
