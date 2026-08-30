import { tool } from 'ai';
import { z } from 'zod';

export const getInternship = tool({
  description:
    'Shows a summary of my professional experience, engineering focus, and contact details for opportunities.',
  parameters: z.object({}),
  execute: async () => {
    return `Professional focus:

- Full-stack web and mobile product engineering
- AI and LLM application development
- Internal dashboards, reusable templates, and dependable production systems
- Current roles at GAEC, Pic Konnect, and OptiMediX

Contact:
- Email: owusukenneth77@gmail.com
- Phone: 0559182794
- GitHub: https://github.com/Owusu1946`;
  },
});
