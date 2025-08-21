import { z } from "zod";
import isValidEmailAddress from "../helpers/isValidEmailAddress";

enum ContactFieldMinimumLength {
  Message = 10,
}

/**
 * A Zod schema for validating the contact form inputs.
 */
const contactSchema = z.object({
  preferredName: z
    .string({ message: "Preferred name is required" })
    .min(1, "Preferred name cannot be empty"),
  emailAddress: z
    .string({ message: "Email address is required" })
    .min(1, "Email address cannot be empty")
    .refine(isValidEmailAddress, "Invalid email address"),
  message: z
    .string({ message: "Message is required" })
    .min(ContactFieldMinimumLength.Message, "Message cannot be empty"),
});

export default contactSchema;
export type Contact = z.infer<typeof contactSchema>;
