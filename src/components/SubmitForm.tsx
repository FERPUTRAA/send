"use client";
import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { getSpotifyToken } from "@/lib/spotifyToken";
import SearchBar from "./SearchBar";
import axios from "axios";
import { env } from "@/env";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

const formValidation = z.object({
  recipient: z
    .string()
    .min(3, { message: "recipient's name is at least 3 characters" }),
  message: z.string().min(10, { message: "message is required" }),
  song_id: z.string().min(5, { message: "song is required" }),
});

const SubmitForm = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [token, setToken] = useState<string>("");

  const form = useForm<z.infer<typeof formValidation>>({
    defaultValues: {
      recipient: "",
      message: "",
      song_id: "",
    },
    resolver: zodResolver(formValidation),
  });

  const onSubmit: SubmitHandler<z.infer<typeof formValidation>> = async (
    data,
  ) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const response = await axios.post(
        `${env.NEXT_PUBLIC_API_PORT}/post`,
        data,
      );

      if (response.status === 201) {
        form.reset();
        toast({
          title: "Success",
          description: "Message created successfully",
          variant: "default",
        });
        router.push("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const getToken = async () => {
      const token = await getSpotifyToken();
      setToken(token.access_token);
    };

    getToken();
  }, []);

  return (
    <Form {...form}>
      <form
        className="mt-5 w-[50rem] space-y-5"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="recipient"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-normal text-gray-700">
                Recipient
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="recipient's name..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-normal text-gray-700">
                Message
              </FormLabel>
              <FormControl>
                <Textarea placeholder="drop your thoughts here..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="song_id"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="font-normal text-gray-700">
                Choose a Song
              </FormLabel>
              <FormControl>
                {token ? (
                  <SearchBar token={token} form={form} field={field} />
                ) : (
                  <p>Loading...</p>
                )}
              </FormControl>
            </FormItem>
          )}
        />

        <Button
          type="submit"
          onClick={() => form.handleSubmit(onSubmit)}
          variant={"default"}
          disabled={form.formState.isSubmitting}
        >
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default SubmitForm;
