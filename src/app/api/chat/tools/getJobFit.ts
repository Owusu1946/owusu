import { tool } from 'ai';
import { z } from 'zod';

export const getJobFit = tool({
  description:
    "Use this tool whenever a recruiter, client, or hiring manager asks if Owusu Kenneth is a fit for a job, pastes a job description (JD), shares role requirements, or asks about role alignment. Analyze the role against Owusu's verified skills, experience, and projects.",
  parameters: z.object({
    roleTitle: z
      .string()
      .describe(
        'Title of the position or role (e.g., Senior Full-Stack Engineer, AI/LLM Application Engineer, Frontend Developer)'
      ),
    company: z
      .string()
      .optional()
      .describe('Company or organization name if mentioned'),
    matchScore: z
      .number()
      .min(50)
      .max(100)
      .describe(
        'Estimated alignment match percentage between 50 and 100 based on required vs owned skills'
      ),
    keyMatches: z
      .array(z.string())
      .describe(
        '3 to 6 key technologies, frameworks, or competencies matched directly from the job description'
      ),
    relevantProjects: z
      .array(
        z.object({
          name: z.string().describe('Project name (e.g., Orin, OptiMediX, Docsage, eMart)'),
          relevance: z
            .string()
            .describe('Brief explanation of how this project demonstrates required competence'),
        })
      )
      .describe('1 to 3 of Owusu\'s projects that directly validate the role requirements'),
    whyImAFit: z
      .string()
      .describe(
        '2 to 3 sentence concise, high-impact summary highlighting why Owusu Kenneth delivers exceptional value in this position'
      ),
    suggestedFocus: z
      .array(z.string())
      .optional()
      .describe('1 to 3 immediate impact areas for the first 30-90 days'),
  }),
  execute: async (args) => {
    return args;
  },
});
