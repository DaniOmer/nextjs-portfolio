import { IWorkRequest } from "@/types";
import { serviceTypes } from "./services";

const sharedStyles = {
  mainContainer: "font-family: Arial, sans-serif; max-width: 600px;",
  header: "text-align: center; margin-bottom: 30px;",
};

export const templates = {
  workRequest: ({ type, name, email, message }: IWorkRequest) => `
     <div style="${sharedStyles.mainContainer}">
        <h2>Work Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Type:</strong> ${
          serviceTypes.find((s) => (s.value = type))?.label
        }</p>
        <p><strong>Message:</strong> ${message}</p>
      </div>
    `,
};
