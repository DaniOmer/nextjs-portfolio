import { INotificationRespository } from "../../domain/repositories/notification.repository";
import {
  ICreateNotification,
  INotification,
  NotificationStatus,
} from "../../domain/notification.types";
import { NotificationDomainService } from "../../domain/services/notification.service";
import { INotificationProvider } from "../providers/notification.provider";
import { Notification } from "../../domain/entities/notification.entity";

export class CreateNotificationUseCase {
  constructor(
    private readonly notificationDomainService: NotificationDomainService,
    private readonly notificationRepository: INotificationRespository,
    private readonly notificationProvider: INotificationProvider
  ) {}

  async execute(data: ICreateNotification): Promise<INotification> {
    try {
      this.notificationDomainService.validateNotification(data);
      const notification = new Notification(data);
      const ormNotification = await this.notificationRepository.create(
        notification
      );
      await this.notificationProvider.send(ormNotification);
      await this.notificationRepository.update(ormNotification.id, {
        status: NotificationStatus.DELIVERED,
        deliveredAt: new Date(),
      });
      return ormNotification;
    } catch (error) {
      throw error;
    }
  }
}
