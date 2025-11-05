import * as z from "zod";

const contactFormSchema = z.object({
  serviceType: z
    .string()
    .min(1, "Please select service type.")
    .refine((val) => val !== "auto", {
      message:
        "Auto-detection is not allowed. Please select a specific service type.",
    }),
  name: z
    .string()
    .min(2, "Too short. Please, provide a valid name")
    .max(50, "Too long. Please, provide a valid name.")
    .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ'-\s]+$/, "Your name must contain letters only."),
  email: z.email("Please, provide a valid email address."),
  message: z.string().min(100, "Your message is too short."),
});

export default contactFormSchema;
