import { CreateEmailNotificationUseCase } from "./application/use-cases/create-email-notification.use-case";
import { INotificationRespository } from "./domain/repositories/notification.repository";
import { NotificationDomainService } from "./domain/services/notification.service";
import { NotificationRepository } from "./infrastructure/repositories/notification.repository";
import { registerNotificationProviders } from "./infrastructure/config/notification.config";
import { NotificationProviderFactory } from "./infrastructure/factories/notification.factory";
import { NotificationMode } from "./domain/notification.types";
import { getDataSource } from "../data-source";
import { NotificationModel } from "./infrastructure/models/notification.model";

export class NotificationModule {
  private static _notificationRepository: INotificationRespository;
  private static _notificationDomaineService: NotificationDomainService;
  private static _createEmailNotificationUseCase: CreateEmailNotificationUseCase;

  static async initialize() {
    registerNotificationProviders();
    const dataSource = await getDataSource();
    this._notificationDomaineService = new NotificationDomainService();
    this._notificationRepository = new NotificationRepository(
      dataSource.getRepository(NotificationModel)
    );
  }

  static async createEmailNotificationUseCase(): Promise<CreateEmailNotificationUseCase> {
    if (!this._createEmailNotificationUseCase) {
      if (!this._notificationDomaineService || !this._notificationRepository)
        await this.initialize();
      this._createEmailNotificationUseCase = new CreateEmailNotificationUseCase(
        this._notificationDomaineService,
        this._notificationRepository,
        NotificationProviderFactory.create(NotificationMode.EMAIL)
      );
    }
    return this._createEmailNotificationUseCase;
  }
}
