"use client";

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
import { CreateProfile } from "@/server/actions/profile.action";
import { createProfileValidationSchema } from "@/server/validations/profile.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Textarea } from "../ui/textarea";

const ProfileForm = () => {
  // 1. Define the form.
  const form = useForm<z.infer<typeof createProfileValidationSchema>>({
    resolver: zodResolver(createProfileValidationSchema),
    defaultValues: {
      username: "",
      bio: "",
    },
  });

  // 2. Define a submit handler.
  const onSubmit = async (
    values: z.infer<typeof createProfileValidationSchema>
  ) => {
    console.log(values);

    const res = await CreateProfile(values);
    if (res.success) {
      alert("Profile created successfully");
    }
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 max-w-xl"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input
                  placeholder="username"
                  {...field}
                  className="lowercase"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <Textarea placeholder="bio" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default ProfileForm;
