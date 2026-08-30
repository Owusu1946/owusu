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
