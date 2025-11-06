import { NotificationProviderFactory } from "../factories/notification.factory";
import { NotificationMode } from "../../domain/notification.types";
import { EmailProvider } from "../providers/email.provider";

export function registerNotificationProviders() {
  NotificationProviderFactory.register(
    NotificationMode.EMAIL,
    new EmailProvider()
  );
}
