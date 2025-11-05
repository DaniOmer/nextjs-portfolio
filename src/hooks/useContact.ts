import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { ContactService } from "@/services/contact.service";
import { IWorkRequest } from "@/types";

export const useContact = (options?: { onSuccess?: () => void }) => {
  return useMutation({
    mutationFn: (data: IWorkRequest) => ContactService.contact(data),
    onSuccess: (data) => {
      options?.onSuccess?.();
      toast("Your message has been sent successfully");
    },
    onError: (error) => {
      console.error(`Something went wrong : ${error}`);
    },
  });
};
