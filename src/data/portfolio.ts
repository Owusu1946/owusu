export const profile = {
  name: 'Owusu Kenneth',
  shortName: 'Kenneth',
  role: 'full-stack engineer / ai & llm applications',
  location: 'Accra, Ghana',
  email: 'owusukenneth77@gmail.com',
  phone: '0559182794',
  whatsapp: 'https://wa.me/233559182794',
  github: 'https://github.com/Owusu1946',
  repo: 'https://github.com/Owusu1946/owusu',
  twitter: 'https://x.com/okenneth2255',
  instagram: 'https://instagram.com/okenneth2266',
  linkedin: 'https://linkedin.com/in/okenneth',
  website: 'https://owusu-sigma.vercel.app',
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
  details: readonly string[];
  architecture: {
    entry: { title: string; detail: string };
    core: { title: string; detail: string };
    services: readonly { title: string; detail: string }[];
    data: { title: string; detail: string };
    output: { title: string; detail: string };
  };
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
    details: [
      'Coordinates specialized planning, implementation, QA, security, and optimization agents.',
      'Explores reliable code generation through browser-based verification and explicit agent handoffs.',
    ],
    architecture: {
      entry: { title: 'Build brief', detail: 'Intent, constraints, and acceptance criteria' },
      core: { title: 'Agent orchestrator', detail: 'Plans work and coordinates explicit handoffs' },
      services: [
        { title: 'Planning', detail: 'Architecture and task decomposition' },
        { title: 'Implementation', detail: 'Code generation and workspace changes' },
        { title: 'QA + security', detail: 'Browser checks, review, and verification' },
      ],
      data: { title: 'Workspace context', detail: 'Files, decisions, traces, and test evidence' },
      output: { title: 'Verified app', detail: 'Reviewed, tested, and optimized delivery' },
    },
  },
  {
    title: 'Docsage / Docsage v2',
    mark: 'DS',
    description:
      'Developer tooling that turns repository context and project metadata into clear, structured README documentation.',
    technologies: ['TypeScript', 'LLMs', 'GitHub', 'Node.js'],
    details: [
      'Builds structured documentation from repository context instead of relying on generic prompt templates.',
      'Prioritizes accurate project structure, setup instructions, and maintainable generated output.',
    ],
    architecture: {
      entry: { title: 'Repository', detail: 'Source tree, configuration, and metadata' },
      core: { title: 'Context pipeline', detail: 'Selects and structures relevant project evidence' },
      services: [
        { title: 'Code parser', detail: 'Extracts scripts, dependencies, and structure' },
        { title: 'LLM writer', detail: 'Produces documentation from grounded context' },
        { title: 'Content checks', detail: 'Validates sections, commands, and consistency' },
      ],
      data: { title: 'Project model', detail: 'Normalized facts used across every section' },
      output: { title: 'README', detail: 'Clear setup, architecture, and usage documentation' },
    },
  },
  {
    title: 'eMart',
    mark: 'EM',
    description:
      'An AI-powered multivendor ecommerce platform designed around scalable architecture and an efficient admin experience.',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'AI'],
    details: [
      'Separates merchant, catalog, order, and administrative workflows around clear ownership boundaries.',
      'Uses AI selectively where it improves discovery and operations without obscuring core commerce flows.',
    ],
    architecture: {
      entry: { title: 'Buyer + merchant', detail: 'Storefront and operational workflows' },
      core: { title: 'Commerce API', detail: 'Coordinates policies, identity, and transactions' },
      services: [
        { title: 'Catalog', detail: 'Products, inventory, search, and discovery' },
        { title: 'Orders', detail: 'Checkout, payment state, and fulfillment' },
        { title: 'Vendors', detail: 'Merchant tools, access, and administration' },
      ],
      data: { title: 'PostgreSQL', detail: 'Transactional commerce and operational records' },
      output: { title: 'Commerce experience', detail: 'Responsive buying and efficient operations' },
    },
  },
  {
    title: 'React Native Auth Template',
    mark: 'RN',
    description:
      'A reusable Expo and Supabase starter with authentication scaffolding and a production-friendly project structure.',
    technologies: ['React Native', 'Expo', 'Supabase', 'TypeScript'],
    details: [
      'Provides reusable authentication and session foundations for Expo applications.',
      'Keeps configuration and application structure suitable for extending beyond a demonstration project.',
    ],
    architecture: {
      entry: { title: 'Mobile user', detail: 'Sign-in, recovery, and authenticated actions' },
      core: { title: 'Expo app shell', detail: 'Owns routing, session state, and boundaries' },
      services: [
        { title: 'Authentication', detail: 'Sign-in, registration, and recovery flows' },
        { title: 'Session guard', detail: 'Token lifecycle and protected navigation' },
        { title: 'Feature modules', detail: 'Typed screens ready for product expansion' },
      ],
      data: { title: 'Supabase', detail: 'Identity, persisted user state, and backend access' },
      output: { title: 'Production starter', detail: 'Reusable foundation for shipping mobile apps' },
    },
  },
  {
    title: 'Google Meet Clone',
    mark: 'GM',
    description:
      'A real-time communication project exploring modern browser media, presence, and low-latency interaction patterns.',
    technologies: ['React', 'WebRTC', 'WebSockets', 'Node.js'],
    details: [
      'Explores browser media capture, peer communication, room presence, and real-time state changes.',
      'Focuses on predictable call controls and responsive feedback during connection changes.',
    ],
    architecture: {
      entry: { title: 'Participant', detail: 'Camera, microphone, and call controls' },
      core: { title: 'Session controller', detail: 'Coordinates room lifecycle and peer state' },
      services: [
        { title: 'Signaling', detail: 'WebSocket exchange for negotiation events' },
        { title: 'Media plane', detail: 'WebRTC audio and video peer transport' },
        { title: 'Presence', detail: 'Participants, device state, and room updates' },
      ],
      data: { title: 'Room state', detail: 'Shared session and connection metadata' },
      output: { title: 'Live meeting', detail: 'Low-latency media with responsive controls' },
    },
  },
] as const;

export const engineeringLog = [
  {
    project: 'Orin',
    status: 'building',
    note: 'Reliable multi-agent planning, browser QA, and application delivery.',
  },
  {
    project: 'OptiMediX',
    status: 'developing',
    note: 'AI-assisted healthcare workflows, telemedicine, and logistics.',
  },
  {
    project: 'Portfolio',
    status: 'optimizing',
    note: 'Static-first delivery, minimal client JavaScript, and instant routes.',
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
