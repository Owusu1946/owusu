import { tool } from 'ai';
import { z } from 'zod';

export const getPresentation = tool({
  description:
    'Shows a concise professional introduction for Owusu Kenneth. Use it for questions such as "Who are you?" or "Tell me about yourself."',
  parameters: z.object({}),
  execute: async () => {
    return {
      presentation:
        "I'm Owusu Kenneth, a Full-Stack Engineer and AI/LLM Application Engineer based in Accra, Ghana. I build production web and mobile products, pragmatic AI systems, and dependable developer tooling.",
    };
  },
});
