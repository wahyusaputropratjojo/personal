import { z } from "zod";

export const MessageSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }).trim(),
  email: z
    .email({ message: "Must be a valid email address" })
    .min(1, { message: "Email is required." })
    .toLowerCase(),
  message: z.string().min(1, { message: "Message is required" }).trim(),
});
