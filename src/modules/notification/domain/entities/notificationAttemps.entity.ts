import {
  INotificationAttempt,
  NotificationStatus,
} from "../notification.types";

export class NotificationAttempt implements INotificationAttempt {
  public readonly id!: string;
  public notificationId: string;
  public attemptNumber: number;
  public status: NotificationStatus;
  public errorMessage?: string;
  public responseCode?: number;
  public createdAt!: Date;
  public updatedAt!: Date;

  constructor(
    data: Omit<INotificationAttempt, "id" | "createdAt" | "updatedAt">
  ) {
    this.notificationId = data.notificationId;
    this.attemptNumber = data.attemptNumber;
    this.status = data.status;
    this.errorMessage = this.errorMessage;
    this.responseCode = this.responseCode;
  }
}
