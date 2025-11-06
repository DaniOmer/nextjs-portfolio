import { NotificationMode } from "../../domain/notification.types";
import { INotificationProvider } from "../../application/providers/notification.provider";
import { ApplicationError } from "@/modules/core/domain/errors/application.error";

export class NotificationProviderFactory {
  private static providers: Map<NotificationMode, INotificationProvider> =
    new Map();

  static register(mode: NotificationMode, provider: INotificationProvider) {
    this.providers.set(mode, provider);
  }

  static create(mode: NotificationMode): INotificationProvider {
    const provider = this.providers.get(mode);
    if (!provider) {
      throw new ApplicationError(`No provider available for mode: ${mode}`);
    }
    return provider;
  }
}
