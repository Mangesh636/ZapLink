"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { AuthCard } from "./auth-card";
import { FormFooter } from "./form-footer";

import { SignUpSchema } from "../schema";

export const SignUpForm = () => {
  const signInForm = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof SignUpSchema>) => {
    console.log(values);
  };
  return (
    <AuthCard
      authTitle="Create an Account"
      authDescription="Please enter your details to sign up"
      authFooter={
        <FormFooter
          infoText="Already have an account?"
          linkLabel="Sign In"
          linkHref="/auth/sign-in"
        />
      }
    >
      <Form {...signInForm}>
        <form
          onSubmit={signInForm.handleSubmit(onSubmit)}
          className="space-y-6"
        >
          <div className="space-y-4">
            <FormField
              control={signInForm.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Enter your name</FormLabel>
                  <FormControl>
                    <Input type="text" autoComplete="off" {...field} className="mt-2.5" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={signInForm.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Enter your email</FormLabel>
                  <FormControl>
                    <Input type="email" autoComplete="off" {...field} className="mt-2.5" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={signInForm.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Enter your password</FormLabel>
                  <FormControl>
                    <Input type="password" autoComplete="off" {...field} className="mt-2.5" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-ecstasy-500 hover:bg-ecstasy-500/80 cursor-pointer text-white font-medium text-lg"
          >
            Sign In
          </Button>
        </form>
      </Form>
    </AuthCard>
  );
};
