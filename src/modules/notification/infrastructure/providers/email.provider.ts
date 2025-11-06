import * as SibApiV3Sdk from "@sendinblue/client";

import { ApplicationError } from "@/modules/core/domain/errors/application.error";
import { INotification } from "../../domain/notification.types";
import { INotificationProvider } from "../../application/providers/notification.provider";

export class EmailProvider implements INotificationProvider {
  private static instance: EmailProvider;
  private readonly client: SibApiV3Sdk.TransactionalEmailsApi;

  constructor() {
    this.client = new SibApiV3Sdk.TransactionalEmailsApi();
    const apiKey = process.env.NEXT_PUBLIC_BREVO_API_KEY;
    if (!apiKey) throw new ApplicationError("Brevo API KEY not found!");
    this.client.setApiKey(
      SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey,
      apiKey
    );
  }

  public static getInstance(): EmailProvider {
    if (!EmailProvider.instance) {
      EmailProvider.instance = new EmailProvider();
    }
    return EmailProvider.instance;
  }

  async send(data: INotification): Promise<void> {
    try {
      const emailData = {
        sender: { email: data.sender, name: data.name },
        to: [{ email: data.target }],
        subject: data.subject,
        htmlContent: data.template,
      };
      await this.client.sendTransacEmail(emailData);
    } catch (error) {
      console.error("Something went wrong when sending notification : ", error);
      throw error;
    }
  }
}
