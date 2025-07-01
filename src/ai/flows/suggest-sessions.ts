'use server';

/**
 * @fileOverview AI tool that suggests relevant sessions to users based on their profiles and interests.
 *
 * - suggestSessions - A function that suggests relevant sessions based on user profile.
 * - SuggestSessionsInput - The input type for the suggestSessions function.
 * - SuggestSessionsOutput - The return type for the suggestSessions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestSessionsInputSchema = z.object({
  userProfile: z
    .string()
    .describe('A description of the user profile and their interests.'),
  sessionList: z
    .string()
    .describe('A list of available sessions with their descriptions.'),
});
export type SuggestSessionsInput = z.infer<typeof SuggestSessionsInputSchema>;

const SuggestSessionsOutputSchema = z.object({
  suggestedSessions: z
    .string()
    .describe('A list of session titles that are relevant to the user.'),
  reasoning: z
    .string()
    .describe('The AI reasoning behind the session suggestions.'),
});
export type SuggestSessionsOutput = z.infer<typeof SuggestSessionsOutputSchema>;

export async function suggestSessions(input: SuggestSessionsInput): Promise<SuggestSessionsOutput> {
  return suggestSessionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestSessionsPrompt',
  input: {schema: SuggestSessionsInputSchema},
  output: {schema: SuggestSessionsOutputSchema},
  prompt: `You are an AI assistant helping users find the most relevant sessions based on their profile and interests.

  Analyze the user profile and the list of available sessions to suggest the most relevant sessions to the user.
  Explain your reasoning for the session suggestions.

  User Profile: {{{userProfile}}}
  Session List: {{{sessionList}}}

  Output the suggested sessions and reasoning in a structured format.
  `,config: {
    safetySettings: [
      {
        category: 'HARM_CATEGORY_HATE_SPEECH',
        threshold: 'BLOCK_ONLY_HIGH',
      },
      {
        category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
        threshold: 'BLOCK_NONE',
      },
      {
        category: 'HARM_CATEGORY_HARASSMENT',
        threshold: 'BLOCK_MEDIUM_AND_ABOVE',
      },
      {
        category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
        threshold: 'BLOCK_LOW_AND_ABOVE',
      },
    ],
  },
});

const suggestSessionsFlow = ai.defineFlow(
  {
    name: 'suggestSessionsFlow',
    inputSchema: SuggestSessionsInputSchema,
    outputSchema: SuggestSessionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
