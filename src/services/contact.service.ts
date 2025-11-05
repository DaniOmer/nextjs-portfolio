import { IWorkRequest } from "@/types";
import { httpPublicClient } from "@/lib/axios";
import routes from "@/constants/routes";

export const ContactService = {
  contact: async (data: IWorkRequest): Promise<void> => {
    await httpPublicClient.post(routes.CONTACT, {
      data,
      templateName: "workRequest",
    });
  },
};
