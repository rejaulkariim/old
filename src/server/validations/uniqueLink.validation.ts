import * as z from "zod";

export const uniqueLinkValidationSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long" })
    .max(20, { message: "Username cannot exceed 20 characters" })
    .trim()
    .regex(/^[A-Za-z]+$/, {
      message: "Username can only contain letters (A-Z, a-z)",
    }),
});
