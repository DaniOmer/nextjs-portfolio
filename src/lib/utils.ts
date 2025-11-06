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

export function getErrorMessage(error: unknown): string {
  if (!error || typeof error !== "object")
    return "An unexpected error occurred";

  if ("response" in error && typeof (error as any).response === "object") {
    const resp = (error as any).response;
    if (
      "data" in resp &&
      typeof resp.data === "object" &&
      "error" in resp.data
    ) {
      return (resp.data as any).error;
    }
  }

  if ("message" in error) return (error as Error).message;

  return "An unexpected error occurred";
}
