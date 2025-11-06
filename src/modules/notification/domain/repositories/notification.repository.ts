import { ICreateNotification, INotification } from "../notification.types";
import { IRepository } from "@/modules/core/domain/repositories/base.repository";

export interface INotificationRespository {
  create(entity: ICreateNotification): Promise<INotification>;
  update(id: string, entity: Partial<INotification>): Promise<INotification>;
  findById(id: string): Promise<INotification | null>;
}
