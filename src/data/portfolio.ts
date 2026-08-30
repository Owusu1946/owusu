export const profile = {
  name: 'Owusu Kenneth',
  shortName: 'Kenneth',
  role: 'full-stack engineer / ai & llm applications',
  location: 'Accra, Ghana',
  email: 'owusukenneth77@gmail.com',
  phone: '0559182794',
  github: 'https://github.com/Owusu1946',
  summary:
    'I build production web and mobile applications with modern TypeScript stacks, pragmatic AI integration, and a strong bias for clean interfaces and dependable systems.',
} as const;

export const interests = [
  { text: 'build useful web and mobile products', color: '#60a5fa' },
  { text: 'turn LLMs into dependable product features', color: '#c084fc' },
  { text: 'simplify complex systems and interfaces', color: '#5eead4' },
  { text: 'iterate quickly without trading away quality', color: '#f0ad63' },
] as const;

export type Project = {
  title: string;
  description: string;
  technologies: readonly string[];
  mark: string;
  status?: 'private' | 'public';
};

export const projects: readonly Project[] = [
  {
    title: 'Orin',
    mark: 'OR',
    status: 'private',
    description:
      'An AI multi-agent no-code workspace where specialized agents plan, build, test, secure, and optimize applications collaboratively.',
    technologies: ['TypeScript', 'Next.js', 'AI Agents', 'Browser QA'],
  },
  {
    title: 'Docsage / Docsage v2',
    mark: 'DS',
    description:
      'Developer tooling that turns repository context and project metadata into clear, structured README documentation.',
    technologies: ['TypeScript', 'LLMs', 'GitHub', 'Node.js'],
  },
  {
    title: 'eMart',
    mark: 'EM',
    description:
      'An AI-powered multivendor ecommerce platform designed around scalable architecture and an efficient admin experience.',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'AI'],
  },
  {
    title: 'React Native Auth Template',
    mark: 'RN',
    description:
      'A reusable Expo and Supabase starter with authentication scaffolding and a production-friendly project structure.',
    technologies: ['React Native', 'Expo', 'Supabase', 'TypeScript'],
  },
  {
    title: 'Google Meet Clone',
    mark: 'GM',
    description:
      'A real-time communication project exploring modern browser media, presence, and low-latency interaction patterns.',
    technologies: ['React', 'WebRTC', 'WebSockets', 'Node.js'],
  },
] as const;

export const experience = [
  {
    role: 'Web Application Engineer',
    company: 'Ghana Atomic Energy Commission',
    period: 'Dec 2025 - present',
    detail: 'Internal web applications and operational dashboards.',
  },
  {
    role: 'Senior Software Engineer',
    company: 'Pic Konnect',
    period: 'May 2023 - present',
    detail: 'Full-stack product delivery, reliability, and performance.',
  },
  {
    role: 'Founder & Lead Engineer',
    company: 'OptiMediX',
    period: 'Mar 2020 - present',
    detail:
      'Digital health, AI-assisted workflows, telemedicine, and logistics.',
  },
  {
    role: 'Senior Web Developer & Facilitator',
    company: 'GIFEC',
    period: 'Nov 2021 - Dec 2022',
    detail: 'Web solutions, technical facilitation, and stakeholder support.',
  },
] as const;

export const stack = [
  {
    name: 'TypeScript',
    mark: 'TS',
    tone: '#3178c6',
    icon: '/icons/typescript.svg',
  },
  {
    name: 'React',
    mark: 'R',
    tone: '#61dafb',
    icon: '/icons/reactjs.svg',
  },
  {
    name: 'Next.js',
    mark: 'N',
    tone: '#f5f5f5',
    icon: '/icons/nextjs.svg',
  },
  {
    name: 'React Native',
    mark: 'RN',
    tone: '#61dafb',
    icon: '/icons/reactjs.svg',
  },
  {
    name: 'Expo',
    mark: 'EX',
    tone: '#f5f5f5',
    icon: '/icons/expo.svg',
  },
  {
    name: 'Tailwind CSS',
    mark: 'TW',
    tone: '#38bdf8',
    icon: '/icons/tailwindcss.svg',
  },
  {
    name: 'Node.js',
    mark: 'JS',
    tone: '#68a063',
    icon: '/icons/nodejs.svg',
  },
  {
    name: 'Python',
    mark: 'PY',
    tone: '#f2c94c',
    icon: '/icons/python.svg',
  },
  {
    name: 'Django',
    mark: 'DJ',
    tone: '#44b78b',
    icon: '/icons/django.svg',
  },
  {
    name: 'FastAPI',
    mark: 'FA',
    tone: '#009688',
    icon: '/icons/fastapi.svg',
  },
  {
    name: 'PostgreSQL',
    mark: 'PG',
    tone: '#60a5fa',
    icon: '/icons/postgresql.svg',
  },
  {
    name: 'MongoDB',
    mark: 'M',
    tone: '#4db33d',
    icon: '/icons/mongodb.svg',
  },
  {
    name: 'Redis',
    mark: 'RD',
    tone: '#ef4444',
    icon: '/icons/redis.svg',
  },
  {
    name: 'LangChain',
    mark: 'LC',
    tone: '#d1fae5',
    icon: '/icons/langchain.svg',
  },
  {
    name: 'Docker',
    mark: 'DK',
    tone: '#2496ed',
    icon: '/icons/docker.svg',
  },
  {
    name: 'Kubernetes',
    mark: 'K8',
    tone: '#326ce5',
    icon: '/icons/kubernetes.svg',
  },
  {
    name: 'AWS',
    mark: 'AWS',
    tone: '#ff9900',
    icon: '/icons/aws.svg',
  },
  {
    name: 'Google Cloud',
    mark: 'GC',
    tone: '#4285f4',
    icon: '/icons/googlecloud.svg',
  },
  {
    name: 'Express',
    mark: 'EX',
    tone: '#828282',
    icon: '/icons/express.svg',
  },
  {
    name: 'Drizzle ORM',
    mark: 'DZ',
    tone: '#c5f74f',
    icon: '/icons/drizzle.svg',
  },
  {
    name: 'Vite',
    mark: 'VT',
    tone: '#646cff',
    icon: '/icons/vite.svg',
  },
  {
    name: 'shadcn/ui',
    mark: 'SH',
    tone: '#e5e7eb',
    icon: '/icons/shadcn-ui.svg',
  },
  {
    name: 'tRPC',
    mark: 'TR',
    tone: '#2563eb',
    icon: '/icons/trpc.svg',
  },
  {
    name: 'Convex',
    mark: 'CX',
    tone: '#ee342f',
    icon: '/icons/convex.svg',
  },
  {
    name: 'Clerk',
    mark: 'CL',
    tone: '#6c47ff',
    icon: '/icons/clerk.svg',
  },
  {
    name: 'Appwrite',
    mark: 'AW',
    tone: '#f02e65',
    icon: '/icons/appwrite.svg',
  },
  {
    name: 'Neon',
    mark: 'NN',
    tone: '#00e599',
    icon: '/icons/neondb.svg',
  },
  {
    name: 'Astro',
    mark: 'AS',
    tone: '#ff5d01',
    icon: '/icons/astro.svg',
  },
  {
    name: 'Nitro',
    mark: 'NT',
    tone: '#f59e0b',
    icon: '/icons/nitro.svg',
  },
  {
    name: 'Turborepo',
    mark: 'TR',
    tone: '#ef4444',
    icon: '/icons/turborepo.svg',
  },
  {
    name: 'TanStack',
    mark: 'TS',
    tone: '#ff4154',
    icon: '/icons/tanstack.svg',
  },
  {
    name: 'TanStack Query',
    mark: 'TQ',
    tone: '#ff4154',
    icon: '/icons/tanstack-query.svg',
  },
  {
    name: 'npm',
    mark: 'NPM',
    tone: '#cb3837',
    icon: '/icons/npm.svg',
  },
  {
    name: 'pnpm',
    mark: 'PN',
    tone: '#f69220',
    icon: '/icons/pnpm.svg',
  },
  {
    name: 'Figma',
    mark: 'FG',
    tone: '#f24e1e',
    icon: '/icons/figma.svg',
  },
  {
    name: 'GSAP',
    mark: 'GS',
    tone: '#0ae448',
    icon: '/icons/gsap.svg',
  },
  {
    name: 'Canva',
    mark: 'CV',
    tone: '#00c4cc',
    icon: '/icons/canva.svg',
  },
  {
    name: 'Photoshop',
    mark: 'PS',
    tone: '#31a8ff',
    icon: '/icons/photoshop.svg',
  },
  {
    name: 'Illustrator',
    mark: 'AI',
    tone: '#ff9a00',
    icon: '/icons/illustrator.svg',
  },
  {
    name: 'Zed',
    mark: 'ZD',
    tone: '#088018',
    icon: '/icons/zed.svg',
  },
] as const;
