import { Repository } from "typeorm";

import { NotificationModel } from "../models/notification.model";
import { INotificationRespository } from "../../domain/repositories/notification.repository";
import {
  ICreateNotification,
  INotification,
} from "../../domain/notification.types";

export class NotificationRepository implements INotificationRespository {
  constructor(private readonly ormRepository: Repository<NotificationModel>) {}

  async create(entity: ICreateNotification): Promise<INotification> {
    const notification = this.ormRepository.create(entity);
    return await this.ormRepository.save(notification);
  }

  async update(
    id: string,
    entity: Partial<INotification>
  ): Promise<INotification> {
    await this.ormRepository.update(id, entity);
    return (await this.findById(id)) as INotification;
  }

  async findById(id: string): Promise<INotification | null> {
    return await this.ormRepository.findOne({ where: { id } });
  }
}
