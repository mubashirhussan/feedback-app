import { z } from "zod";
// zod library for validation
const userNameValidation = z
  .string()
  .min(2, "Username must be atLeast 2 characters")
  .max(20, "Username must be no more than 20 characters")
  .regex(/^[a-zA-Z0-9_]+$/, "Username must not contain special character");
const emailValidation = z.string().email({ message: "Invalid email address" });
const passwordValidation = z
  .string()
  .min(6, "Password must be atLeast 6 characters");
export const signUpSchema = z.object({
  username: userNameValidation,
  email: emailValidation,
  password: passwordValidation,
});
