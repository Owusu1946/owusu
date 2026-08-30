import Image from 'next/image';
import { ChevronRight, Link } from '@/components/ui/icons';
import { Separator } from '@/components/ui/separator';

// Enhanced project content array with Kenneth's projects
const PROJECT_CONTENT = [
  {
    title: 'Orin',
    description:
      'An AI multi-agent no-code workspace where specialized agents plan, build, test, secure, and optimize applications collaboratively.',
    techStack: ['TypeScript', 'Next.js', 'AI Agents', 'Browser QA'],
    date: '2025',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/Owusu1946',
      },
    ],
    images: [
      {
        src: '/projects/orin-preview.svg',
        alt: 'Orin AI Multi-agent Workspace preview',
      },
    ],
  },
  {
    title: 'Docsage / Docsage v2',
    description:
      'Developer tooling that turns repository context and project metadata into clear, structured README documentation.',
    techStack: ['TypeScript', 'LLMs', 'GitHub', 'Node.js'],
    date: '2025',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/Owusu1946',
      },
    ],
    images: [
      {
        src: '/projects/docsage-preview.svg',
        alt: 'Docsage Documentation Tooling preview',
      },
    ],
  },
  {
    title: 'eMart',
    description:
      'An AI-powered multivendor ecommerce platform designed around scalable architecture and an efficient admin experience.',
    techStack: ['Next.js', 'Node.js', 'PostgreSQL', 'AI'],
    date: '2024',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/Owusu1946',
      },
    ],
    images: [
      {
        src: '/projects/emart-preview.svg',
        alt: 'eMart AI Multivendor Ecommerce preview',
      },
    ],
  },
  {
    title: 'React Native Auth Template',
    description:
      'A reusable Expo and Supabase starter with authentication scaffolding and a production-friendly project structure.',
    techStack: ['React Native', 'Expo', 'Supabase', 'TypeScript'],
    date: '2024',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/Owusu1946',
      },
    ],
    images: [
      {
        src: '/projects/rn-auth-preview.svg',
        alt: 'React Native Auth Template preview',
      },
    ],
  },
  {
    title: 'Google Meet Clone',
    description:
      'A real-time communication project exploring modern browser media, presence, and low-latency interaction patterns.',
    techStack: ['React', 'WebRTC', 'WebSockets', 'Node.js'],
    date: '2023',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/Owusu1946',
      },
    ],
    images: [
      {
        src: '/projects/google-meet-preview.svg',
        alt: 'Google Meet Clone preview',
      },
    ],
  },
];

// Define interface for project prop
interface ProjectProps {
  title: string;
  description?: string;
  techStack?: string[];
  date?: string;
  links?: { name: string; url: string }[];
  images?: { src: string; alt: string }[];
}

const ProjectContent = ({ project }: { project: ProjectProps }) => {
  // Find the matching project data
  const projectData = PROJECT_CONTENT.find((p) => p.title === project.title);

  if (!projectData) {
    return <div>Project details not available</div>;
  }

  return (
    <div className="space-y-10">
      {/* Header section with description */}
      <div className="rounded-3xl bg-[#F5F5F7] p-8 dark:bg-[#1D1D1F]">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <span>{projectData.date}</span>
          </div>

          <p className="text-secondary-foreground font-sans text-base leading-relaxed md:text-lg">
            {projectData.description}
          </p>

          {/* Tech stack */}
          <div className="pt-4">
            <h3 className="mb-3 text-sm tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {projectData.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-full bg-neutral-200 px-3 py-1 text-sm text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Links section */}
      {projectData.links && projectData.links.length > 0 && (
        <div className="mb-24">
          <div className="px-6 mb-4 flex items-center gap-2">
            <h3 className="text-sm tracking-wide text-neutral-500 dark:text-neutral-400">
              Links
            </h3>
            <Link className="text-muted-foreground w-4" />
          </div>
          <Separator className="my-4" />
          <div className="space-y-3">
            {projectData.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#F5F5F7] flex items-center justify-between rounded-xl p-4 transition-colors hover:bg-[#E5E5E7] dark:bg-neutral-800 dark:hover:bg-neutral-700"
              >
                <span className="font-light capitalize">{link.name}</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Images gallery */}
      {projectData.images && projectData.images.length > 0 && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            {projectData.images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-video overflow-hidden rounded-2xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Main data export with updated project list
export const data = [
  {
    category: 'AI Multi-Agent System',
    title: 'Orin',
    src: '/projects/orin-preview.svg',
    content: <ProjectContent project={{ title: 'Orin' }} />,
  },
  {
    category: 'Developer Tooling',
    title: 'Docsage / Docsage v2',
    src: '/projects/docsage-preview.svg',
    content: <ProjectContent project={{ title: 'Docsage / Docsage v2' }} />,
  },
  {
    category: 'AI E-Commerce',
    title: 'eMart',
    src: '/projects/emart-preview.svg',
    content: <ProjectContent project={{ title: 'eMart' }} />,
  },
  {
    category: 'Mobile Application',
    title: 'React Native Auth Template',
    src: '/projects/rn-auth-preview.svg',
    content: <ProjectContent project={{ title: 'React Native Auth Template' }} />,
  },
  {
    category: 'Real-Time Communication',
    title: 'Google Meet Clone',
    src: '/projects/google-meet-preview.svg',
    content: <ProjectContent project={{ title: 'Google Meet Clone' }} />,
  },
];
