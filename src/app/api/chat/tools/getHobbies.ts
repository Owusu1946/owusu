import { tool } from 'ai';
import { z } from 'zod';

export const getHobbies = tool({
  description:
    "This tool displays Owusu Kenneth's hobbies, music rotation, poetry, reading interests, and life outside of code.",
  parameters: z.object({}),
  execute: async () => {
    return "Here are my hobbies, music rotation, poems, and interests outside of work (displayed above)!";
  },
});
