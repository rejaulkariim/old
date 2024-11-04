"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { CreateProfile } from "@/server/actions/profile.action";
import { uniqueLinkValidationSchema } from "@/server/validations/uniqueLink.validation"; // Or any icon library
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Icons } from "../shared/Icons";

const CreateUniqueLinkForm = () => {
  // 1. Define the form.
  const form = useForm<z.infer<typeof uniqueLinkValidationSchema>>({
    resolver: zodResolver(uniqueLinkValidationSchema),
    defaultValues: {
      username: "",
    },
  });

  const isAvailable = true;

  // 2. Define a submit handler.
  const onSubmit = async (
    values: z.infer<typeof uniqueLinkValidationSchema>
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
        className="space-y-4 max-w-md"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="relative">
                  <span className="absolute text-base left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                    renamer.me/
                  </span>
                  <Input
                    placeholder="username"
                    {...field}
                    className="pl-28 h-12 text-base no-focus !important border bg-transparent shadow-none outline-none focus-visible:ring-primary focus-visible:ring-offset-0"
                    autoComplete="off"
                  />
                  {isAvailable && (
                    <Icons.check className="absolute right-3 top-1/2 transform -translate-y-1/2  text-green-600 h-6 w-6" />
                  )}
                </div>
              </FormControl>
              <FormMessage className="text-red-500 mt-1" />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full py-6 font-semibold">
          Grab my link
        </Button>

        <div>
          <p className="text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
              href="/auth/login"
              className={cn(buttonVariants({ variant: "link" }))}
            >
              LogIn
            </Link>
          </p>
        </div>
      </form>
    </Form>
  );
};

export default CreateUniqueLinkForm;
