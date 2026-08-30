# Contributing Guide: AI Portfolio & Engineering Studio

Welcome! This guide outlines how to contribute to the portfolio repository, including details on folder structures, how to build and register interactive AI tools, code style preferences, and git commit guidelines.

---

## 📁 Codebase Architecture & File Mapping

Here is where different parts of the system live and how they interact:

| Area / Feature | Path | Description |
| :--- | :--- | :--- |
| **Homepage (Editorial)** | `src/app/page.tsx` | Statically pre-rendered homepage showing profile, timeline, selected projects, and stack. |
| **AI Chat Screen** | `src/app/chat/page.tsx` | Statically pre-rendered fullscreen chat container hosting the interactive avatar. |
| **API Chat Route** | `src/app/api/chat/route.ts` | OpenRouter model connection and tool registration handler (`maxDuration = 30`, dynamic streaming). |
| **AI Prompt System** | `src/app/api/chat/prompt.ts` | Global system instructions containing Kenneth's verified background information and tool use boundaries. |
| **Theme & Global CSS** | `src/app/globals.css` | CSS theme tokens (`--portfolio-bg`, `--portfolio-primary`), typography rules, and skeleton animations. |
| **Portfolio Data** | `src/data/portfolio.ts` | The single source of truth for stack lists, timeline cards, and contact information. |

---

## 🛠️ Step-by-Step: Adding a New AI Tool

Adding an interactive capability to the AI chat involves five straightforward steps:

### 1. Define the Tool Capability in System Prompt
Update [`prompt.ts`](file:///c:/Users/HP/Desktop/portfolio/src/app/api/chat/prompt.ts) under `## Tool Usage Guidelines` so the LLM knows **when** and **why** to call the new tool.
```text
- Use getMyNewTool whenever the user asks about [your specific topic].
```

### 2. Create the Tool Module
Create a new file in `src/app/api/chat/tools/getMyNewTool.ts`:
```typescript
import { tool } from 'ai';
import { z } from 'zod';

export const getMyNewTool = tool({
  description: 'Use this tool to show [specific capability or details].',
  parameters: z.object({
    argName: z.string().describe('Explanation of argument'),
  }),
  execute: async (args) => {
    return args; // Retuned result is passed directly to the renderer
  },
});
```

### 3. Register the Tool in the Chat Endpoint
Import and register your tool in [`route.ts`](file:///c:/Users/HP/Desktop/portfolio/src/app/api/chat/route.ts):
```typescript
import { getMyNewTool } from './tools/getMyNewTool';

// Add it to the tools object inside the POST function
const tools = {
  // ...other tools,
  getMyNewTool,
};
```

### 4. Create the Interactive React Component
Create a clean, responsive component in `src/components/chat/NewToolComponent.tsx`. Make sure it supports both light and dark themes using CSS variables:
```typescript
export function NewToolComponent({ data }: { data: any }) {
  return (
    <div className="rounded-3xl border border-[var(--portfolio-border)] bg-[var(--portfolio-bg-soft)] p-6">
      <h3 className="text-xl font-bold text-[var(--portfolio-primary)]">Title</h3>
      <p className="text-sm text-[var(--portfolio-muted)]">{data.argName}</p>
    </div>
  );
}
```

### 5. Hook up the Renderer
Register the case in [`tool-renderer.tsx`](file:///c:/Users/HP/Desktop/portfolio/src/components/chat/tool-renderer.tsx):
```typescript
import { NewToolComponent } from './NewToolComponent';

// Inside the switch (toolName) block
case 'getMyNewTool':
  return (
    <div key={toolCallId} className="w-full">
      <NewToolComponent data={tool.result || tool.args} />
    </div>
  );
```

---

## 🎨 Theme Tokens & Styling System

The application uses **CSS variables** mapped to custom utility names under Tailwind CSS v4.

### The Double-Class Sync
To support both standard Tailwind `dark:` utilities and custom editor overrides, the `html` element holds **both** classes when in dark theme:
```html
<html class="dark portfolio-dark">
```

### Standard Theme Variables
Ensure components use CSS variables for colors to support seamless 0ms transitions:
- Background: `var(--portfolio-bg)` (Editorial background)
- Text Color: `var(--portfolio-primary)`
- Soft Backgrounds: `var(--portfolio-bg-soft)`
- Muted Details: `var(--portfolio-muted)`
- Border Lines: `var(--portfolio-border)`
- Accent Highlights: `var(--portfolio-accent)` (e.g. blue or custom brand colors)

---

## ⚡ Performance Guidelines

Maintain a blindingly fast portfolio at all times:
1. **0ms Navigation**: Avoid introducing blocking scripts or artificial timeouts during page changes.
2. **Idle Prewarming**: Always trigger resource prewarming (`router.prefetch()`, asset caching) during background **idle callback states** (`requestIdleCallback`) to preserve initial page score metrics (LCP/FID).
3. **Optimized Media**: Ensure videos (`/final_memojis_ios.mp4`, etc.) are compressed, loop natively, and use prefetching hints in layouts.

---

## 🚀 Git Workflow & Commit Guidelines

We use clean conventional commit standards to preserve a structured logs history.

### Commit Format
```text
<type>(<scope>): <short description>
```

**Types**:
- `feat`: A new feature (e.g. `feat(chat): add job-match briefing tool`)
- `fix`: A bug fix (e.g. `fix(theme): resolve text contrast issues in dark mode`)
- `perf`: Performance optimizations (e.g. `perf(navigation): implement idle prewarming`)
- `docs`: Documentation updates (e.g. `docs(readme): update setup guidelines`)
- `refactor`: Structural codebase improvements with no visual or feature changes

---

## 📨 Pull Request Description Template

When opening a Pull Request, use this clean summary structure:

```markdown
## Goal
Brief explanation of the feature or bug resolved.

## Changes Made
- Component/File path: short summary of addition/modification.

## Verification
- List of automated build scripts run (e.g. `npm run build`).
- Browsers/mobile devices verified (e.g. iPhone SE layout, Safari, Chrome).
```
