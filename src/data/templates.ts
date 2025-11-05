import { IWorkRequest } from "@/types";

const sharedStyles = {
  mainContainer: "font-family: Arial, sans-serif; max-width: 600px;",
  header: "text-align: center; margin-bottom: 30px;",
};

export const templates = {
  workRequest: ({ name, email, message }: Omit<IWorkRequest, "type">) => `
     <div style="${sharedStyles.mainContainer}">
        <h2>Work Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Type:</strong> ${message}</p>
        <p><strong>Message:</strong> ${message}</p>
      </div>
    `,
};
