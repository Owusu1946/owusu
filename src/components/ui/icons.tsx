import {
  HugeiconsIcon,
  type HugeiconsIconProps,
  type IconSvgElement,
} from '@hugeicons/react';
import ArrowLeft01Icon from '@hugeicons/core-free-icons/ArrowLeft01Icon';
import ArrowRight01Icon from '@hugeicons/core-free-icons/ArrowRight01Icon';
import ArrowUp01Icon from '@hugeicons/core-free-icons/ArrowUp01Icon';
import ArrowUpRight01Icon from '@hugeicons/core-free-icons/ArrowUpRight01Icon';
import Award01Icon from '@hugeicons/core-free-icons/Award01Icon';
import BotIcon from '@hugeicons/core-free-icons/BotIcon';
import Briefcase01Icon from '@hugeicons/core-free-icons/Briefcase01Icon';
import BriefcaseBusinessIcon from '@hugeicons/core-free-icons/BriefcaseBusinessIcon';
import Cancel01Icon from '@hugeicons/core-free-icons/Cancel01Icon';
import Chart03Icon from '@hugeicons/core-free-icons/Chart03Icon';
import ChevronDownIcon from '@hugeicons/core-free-icons/ChevronDownIcon';
import ChevronRightIcon from '@hugeicons/core-free-icons/ChevronRightIcon';
import ChevronUpIcon from '@hugeicons/core-free-icons/ChevronUpIcon';
import CircleEllipsisIcon from '@hugeicons/core-free-icons/CircleEllipsisIcon';
import HugeCodeIcon from '@hugeicons/core-free-icons/CodeIcon';
import CpuIcon from '@hugeicons/core-free-icons/CpuIcon';
import Download01Icon from '@hugeicons/core-free-icons/Download01Icon';
import EllipsisVerticalIcon from '@hugeicons/core-free-icons/EllipsisVerticalIcon';
import File01Icon from '@hugeicons/core-free-icons/File01Icon';
import GithubIcon from '@hugeicons/core-free-icons/GithubIcon';
import Globe02Icon from '@hugeicons/core-free-icons/Globe02Icon';
import HugeGraduationCapIcon from '@hugeicons/core-free-icons/GraduationCapIcon';
import Image01Icon from '@hugeicons/core-free-icons/Image01Icon';
import InformationCircleIcon from '@hugeicons/core-free-icons/InformationCircleIcon';
import LaughingIcon from '@hugeicons/core-free-icons/LaughingIcon';
import Layers01Icon from '@hugeicons/core-free-icons/Layers01Icon';
import Link01Icon from '@hugeicons/core-free-icons/Link01Icon';
import Mail01Icon from '@hugeicons/core-free-icons/Mail01Icon';
import MapPinIcon from '@hugeicons/core-free-icons/MapPinIcon';
import Message01Icon from '@hugeicons/core-free-icons/Message01Icon';
import Moon02Icon from '@hugeicons/core-free-icons/Moon02Icon';
import PartyIcon from '@hugeicons/core-free-icons/PartyIcon';
import PenTool01Icon from '@hugeicons/core-free-icons/PenTool01Icon';
import SparklesIcon from '@hugeicons/core-free-icons/SparklesIcon';
import StarIcon from '@hugeicons/core-free-icons/StarIcon';
import Sun03Icon from '@hugeicons/core-free-icons/Sun03Icon';
import UserMultipleIcon from '@hugeicons/core-free-icons/UserMultipleIcon';
import UserSearch01Icon from '@hugeicons/core-free-icons/UserSearch01Icon';
import { forwardRef } from 'react';

type IconProps = Omit<HugeiconsIconProps, 'icon' | 'altIcon'>;

function createIcon(icon: IconSvgElement, displayName: string) {
  const Icon = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
    <HugeiconsIcon ref={ref} icon={icon} {...props} />
  ));
  Icon.displayName = displayName;
  return Icon;
}

export const ArrowLeft = createIcon(ArrowLeft01Icon, 'ArrowLeft');
export const ArrowRight = createIcon(ArrowRight01Icon, 'ArrowRight');
export const ArrowUp = createIcon(ArrowUp01Icon, 'ArrowUp');
export const ArrowUpRight = createIcon(ArrowUpRight01Icon, 'ArrowUpRight');
export const Award = createIcon(Award01Icon, 'Award');
export const BarChart3 = createIcon(Chart03Icon, 'BarChart3');
export const Bot = createIcon(BotIcon, 'Bot');
export const BriefcaseBusiness = createIcon(
  BriefcaseBusinessIcon,
  'BriefcaseBusiness'
);
export const BriefcaseIcon = createIcon(Briefcase01Icon, 'BriefcaseIcon');
export const ChevronDown = createIcon(ChevronDownIcon, 'ChevronDown');
export const ChevronRight = createIcon(ChevronRightIcon, 'ChevronRight');
export const ChevronUp = createIcon(ChevronUpIcon, 'ChevronUp');
export const CircleEllipsis = createIcon(
  CircleEllipsisIcon,
  'CircleEllipsis'
);
export const Code = createIcon(HugeCodeIcon, 'Code');
export const Code2 = Code;
export const CodeIcon = Code;
export const Cpu = createIcon(CpuIcon, 'Cpu');
export const Download = createIcon(Download01Icon, 'Download');
export const FileText = createIcon(File01Icon, 'FileText');
export const Github = createIcon(GithubIcon, 'Github');
export const Globe = createIcon(Globe02Icon, 'Globe');
export const GraduationCapIcon = createIcon(
  HugeGraduationCapIcon,
  'GraduationCapIcon'
);
export const Image = createIcon(Image01Icon, 'Image');
export const Info = createIcon(InformationCircleIcon, 'Info');
export const Laugh = createIcon(LaughingIcon, 'Laugh');
export const Layers = createIcon(Layers01Icon, 'Layers');
export const Link = createIcon(Link01Icon, 'Link');
export const Mail = createIcon(Mail01Icon, 'Mail');
export const MailIcon = Mail;
export const MapPin = createIcon(MapPinIcon, 'MapPin');
export const MessageSquare = createIcon(Message01Icon, 'MessageSquare');
export const Moon = createIcon(Moon02Icon, 'Moon');
export const PartyPopper = createIcon(PartyIcon, 'PartyPopper');
export const PenTool = createIcon(PenTool01Icon, 'PenTool');
export const Sparkles = createIcon(SparklesIcon, 'Sparkles');
export const Star = createIcon(StarIcon, 'Star');
export const Sun = createIcon(Sun03Icon, 'Sun');
export const UserRoundSearch = createIcon(
  UserSearch01Icon,
  'UserRoundSearch'
);
export const UserSearch = UserRoundSearch;
export const Users = createIcon(UserMultipleIcon, 'Users');
export const X = createIcon(Cancel01Icon, 'X');
export const XIcon = X;

export const IconArrowLeft = ArrowLeft;
export const IconArrowRight = ArrowRight;
export const IconArrowNarrowLeft = ArrowLeft;
export const IconArrowNarrowRight = ArrowRight;
export const IconDotsVertical = createIcon(
  EllipsisVerticalIcon,
  'IconDotsVertical'
);
export const IconX = X;

export function XTwitter({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function LinkedIn({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z" />
    </svg>
  );
}

export function Instagram({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function WhatsApp({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}

export function Reddit({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.197-2.512-.73a.326.326 0 0 0-.232-.095z" />
    </svg>
  );
}

export function CheckIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export function ShareIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  );
}
