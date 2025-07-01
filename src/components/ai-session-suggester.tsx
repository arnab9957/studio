"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, Wand2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  suggestSessions,
  type SuggestSessionsOutput,
} from "@/ai/flows/suggest-sessions";

const formSchema = z.object({
  profile: z.string().min(20, {
    message: "Please describe your role and interests in a bit more detail.",
  }),
});

type AiSessionSuggesterProps = {
  sessionList: string;
};

export function AiSessionSuggester({ sessionList }: AiSessionSuggesterProps) {
  const [suggestions, setSuggestions] = useState<SuggestSessionsOutput | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      profile: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setSuggestions(null);
    try {
      const result = await suggestSessions({
        userProfile: values.profile,
        sessionList: sessionList,
      });
      setSuggestions(result);
    } catch (error) {
      console.error("Error getting suggestions:", error);
      toast({
        variant: "destructive",
        title: "Oh no! Something went wrong.",
        description: "There was a problem with our AI. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wand2 className="text-primary" />
              AI Session Suggester
            </CardTitle>
            <CardDescription>
              Describe your professional role and technical interests below.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <FormField
              control={form.control}
              name="profile"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Profile</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., I am a full-stack developer interested in serverless architecture, CI/CD pipelines, and application security."
                      className="resize-none"
                      rows={4}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Thinking...
                </>
              ) : (
                "Suggest Sessions"
              )}
            </Button>
          </CardFooter>
        </form>
      </Form>
      {suggestions && (
        <CardContent className="border-t pt-6">
          <h3 className="text-lg font-semibold mb-2 font-headline">
            Recommended Sessions For You
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            <span className="font-semibold">AI Reasoning:</span>{" "}
            {suggestions.reasoning}
          </p>
          <ul className="list-disc list-inside space-y-1">
            {suggestions.suggestedSessions.split(', ').map((session, index) => (
              <li key={index} className="font-medium">{session}</li>
            ))}
          </ul>
        </CardContent>
      )}
    </Card>
  );
}
