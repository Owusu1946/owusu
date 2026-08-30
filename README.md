<div align="center">

# Owusu Kenneth — AI Portfolio & Engineering Studio 🤖✨

**Production Full-Stack & AI/LLM Application Engineer**  
*Accra, Ghana*

[![Next.js](https://img.shields.io/badge/Next.js-15.1-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0-61dafb?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38bdf8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![AI SDK](https://img.shields.io/badge/Vercel_AI_SDK-Streaming-black?style=for-the-badge&logo=vercel)](https://sdk.vercel.ai/)

<br />

> **Static portfolios are a monologue. This portfolio is an interactive conversation.**  
> Powered by Next.js 15, streaming generative AI, and dynamic tool-calling UI widgets that adapt to every visitor in real time.

</div>

---

## 🌟 Key Highlights

- 🤖 **Conversational AI Agent**: Real-time streaming conversational assistant powered by OpenRouter and Vercel AI SDK, with custom system prompts reflecting verified background and projects.
- 🛠️ **Dynamic Tool-Calling UI Widgets**: The AI dynamically invokes interactive React components directly inside the conversation stream:
  - `getJobFit`: Custom **Recruiter Job-Match & Fit Analysis** showing match scores, matched tech capabilities, project evidence, and fast action triggers (intro call email, resume downloader, clipboard copy).
  - `getProjects`: Interactive carousel showcasing featured systems (**Orin**, **Docsage**, **eMart**, **React Native Auth Template**, **Google Meet Clone**).
  - `getHobbies`: Multi-app interactive studio featuring a **Spotify-inspired player**, **Apple Notes-styled poetry reader**, and reading bookshelf.
  - `getSkills`: Categorized skills badges across Frontend, Backend, AI/LLMs, Cloud/DevOps, and Soft Skills.
  - `getPresentation`: Visual biography and profile card.
  - `getResume`: Quick-view and PDF download launcher.
  - `getContact`: Direct communication channels.
- 🎨 **Minimal Editorial Aesthetic**: Refined typography, smooth transitions, dark & light theme modes with adaptive contrast-aware SVG iconography (39 tech stack icons).
- ⚡ **0ms Instant Mode Switching**: Zero-latency transitions powered by background idle prewarming (`requestIdleCallback`) and media pre-caching of `/final_memojis_ios.mp4` so AI Mode mounts instantly without white flashes.
- 📝 **MDX Technical Journal**: Lightweight, high-performance MDX blog engine for systems-level architecture notes and AI engineering essays.
- ⚡ **Ultra-Fast & Type-Safe**: Zero runtime bloat, strict TypeScript types, server-rendered App Router routes, and optimized static asset delivery.


---

## 🛠️ Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Framework** | [Next.js 15](https://nextjs.org/) (App Router, Server Components) |
| **UI & Styling** | [React 19](https://react.dev/), [Tailwind CSS v4](https://tailwindcss.com/), [Framer Motion](https://www.framer.com/motion/), [Radix UI](https://www.radix-ui.com/) |
| **AI & LLM Orchestration** | [Vercel AI SDK](https://sdk.vercel.ai/), [OpenRouter API](https://openrouter.ai/) (GPT-5, Claude 3.7, Llama 3) |
| **Icons & Typography** | [HugeIcons](https://hugeicons.com/), Inter, SF Mono |
| **Content** | MDX, `next-mdx-remote`, `gray-matter`, `reading-time` |
| **Package Manager** | [pnpm](https://pnpm.io/) |

---

## 📁 Project Structure

```text
├── content/
│   └── blog/                   # MDX articles and engineering essays
├── public/
│   ├── icons/                  # 39 curated tech & UI SVG icons (Dark/Light adapted)
│   ├── projects/               # Project visual preview placeholders
│   └── CV.pdf                  # Curriculum Vitae download asset
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── chat/           # AI streaming chat route & specialized tool handlers
│   │   │   └── github-stars/   # Live repository star-tracking API
│   │   ├── blog/               # MDX blog listing and static slug pages
│   │   ├── chat/               # Fullscreen AI chat experience
│   │   ├── globals.css         # Tailwind v4 theme tokens & icon filter styling
│   │   ├── layout.tsx          # Root layout, theme script, and metadata
│   │   └── page.tsx            # Main editorial portfolio showcase
│   ├── components/
│   │   ├── chat/               # Chat UI, tool renderer, and prompt helpers
│   │   ├── editorial/          # Portfolio theme and navigation controls
│   │   ├── projects/           # Project gallery & interactive cards carousel
│   │   ├── ui/                 # Reusable UI primitives (dialogs, buttons, icons)
│   │   └── hobbies.tsx         # Spotify & Apple Notes inspired interactive studio
│   ├── data/
│   │   └── portfolio.ts        # Single source of truth for profile, stack, & projects
│   └── lib/
│       ├── posts.ts            # MDX parser, reading-time, and frontmatter helpers
│       └── utils.ts            # ClassName merging and shared utility functions
```

---

## 🚀 Getting Started Locally

### Prerequisites

- **Node.js** (v18.17 or higher recommended)
- **pnpm** (`npm install -g pnpm`)

### 1. Clone the repository

```bash
git clone https://github.com/Owusu1946/portfolio.git
cd portfolio
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Configure environment variables

Create a `.env` file in the root directory:

```env
# AI Chat Provider (OpenRouter)
OPENROUTER_API_KEY=your_openrouter_api_key_here
OPENROUTER_MODEL=openai/gpt-5.6-luna

# App Metadata
OPENROUTER_SITE_URL=http://localhost:3000
OPENROUTER_SITE_NAME=Owusu Kenneth Portfolio

# GitHub Integration (Optional)
GITHUB_TOKEN=your_github_token_here
```

> **Where to get keys**:
> - OpenRouter API Key: [openrouter.ai/keys](https://openrouter.ai/keys)
> - GitHub Personal Access Token: [github.com/settings/tokens](https://github.com/settings/tokens)

### 4. Run development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for production

```bash
pnpm build
pnpm start
```

---

## 👨‍💻 Author

**Owusu Kenneth**  
*Full-Stack Engineer & AI/LLM Applications*  
Accra, Ghana

- **GitHub**: [@Owusu1946](https://github.com/Owusu1946)
- **Email**: [owusukenneth77@gmail.com](mailto:owusukenneth77@gmail.com)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).