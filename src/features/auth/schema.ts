import { z } from "zod";

const SignInSchema = z.object({
  email: z.string().email({
    message: "Email is required.",
  }),
  password: z.string().min(1, {
    message: "Password is required.",
  }),
});

const SignUpSchema = z.object({
  name: z.string({
    message: "Name is required.",
  }),
  email: z.string().email({
    message: "Email is required.",
  }),
  password: z.string().min(1, {
    message: "Password is required.",
  }),
});

export { SignUpSchema, SignInSchema };
