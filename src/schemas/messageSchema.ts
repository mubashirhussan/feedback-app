import { z } from "zod";

export const aMessageSchema = z.object({
  content: z
    .string()
    .min(20, { message: "content must be atLeast 10 characters" })
    .max(20, { message: "content must be no longer than 300 characters" }),
});
