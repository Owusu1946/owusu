import { createOpenRouter } from '@openrouter/ai-sdk-provider';
import { streamText } from 'ai';
import { SYSTEM_PROMPT } from './prompt';
import { getContact } from './tools/getContact';
import { getCrazy } from './tools/getCrazy';
import { getHobbies } from './tools/getHobbies';
import { getInternship } from './tools/getIntership';
import { getPresentation } from './tools/getPresentation';
import { getProjects } from './tools/getProjects';
import { getResume } from './tools/getResume';
import { getSkills } from './tools/getSkills';
import { getSports } from './tools/getSport';

export const maxDuration = 30;

// Internal error handler helper
function errorHandler(error: unknown) {
  if (error == null) {
    return 'Unknown error';
  }
  if (typeof error === 'string') {
    return error;
  }
  if (error instanceof Error) {
    return error.message;
  }
  return JSON.stringify(error);
}

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    console.log('[CHAT-API] Incoming messages:', messages);

    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) {
      return new Response('OPENROUTER_API_KEY is not configured', { status: 500 });
    }

    const openrouter = createOpenRouter({
      apiKey,
      headers: {
        'HTTP-Referer': process.env.OPENROUTER_SITE_URL ?? 'http://localhost:3000',
        'X-Title': process.env.OPENROUTER_SITE_NAME ?? 'Owusu Kenneth Portfolio',
      },
    });

    // Keep the system prompt server-owned and avoid mutating the client payload.
    const chatMessages = [SYSTEM_PROMPT, ...messages];

    const tools = {
      getProjects,
      getPresentation,
      getResume,
      getContact,
      getSkills,
      getHobbies,
      getSports,
      getCrazy,
      getInternship,
    };

    const result = streamText({
      model: openrouter(
        process.env.OPENROUTER_MODEL ?? 'openai/gpt-5.6-luna'
      ),
      messages: chatMessages,
      toolCallStreaming: true,
      tools,
      maxSteps: 2,
    });

    return result.toDataStreamResponse({
      getErrorMessage: errorHandler,
    });
  } catch (err) {
    console.error('Global error:', err);
    const errorMessage = errorHandler(err);
    return new Response(errorMessage, { status: 500 });
  }
}
