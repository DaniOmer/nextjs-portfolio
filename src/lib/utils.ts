import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { IWorkRequest } from "@/types";
import { templates } from "@/data/templates";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getEmailTemplate(
  templateName: keyof typeof templates,
  data: IWorkRequest
) {
  const sharedStyles = {
    mainContainer: "font-family: Arial, sans-serif; max-width: 600px;",
    header: "text-align: center; margin-bottom: 30px;",
  };

  return templates[templateName](data);
}
