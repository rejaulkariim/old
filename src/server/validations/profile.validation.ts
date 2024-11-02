import * as z from "zod";

export const createProfileValidationSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long" })
    .max(20, { message: "Username cannot exceed 20 characters" })
    .trim(),
  bio: z.string().trim(),
});
