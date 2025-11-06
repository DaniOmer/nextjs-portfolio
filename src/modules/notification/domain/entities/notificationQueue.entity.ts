import { INotificationQueue, NotificationStatus } from "../notification.types";

export class NotificationQueue implements INotificationQueue {
  public readonly id!: string;
  public notificationId: string;
  public priority: "low" | "normal" | "high";
  public scheduledFor?: Date | undefined;
  public nextRetryAt?: Date | undefined;
  public maxRetries: number;
  public currentAttempt: number;
  public status: NotificationStatus;
  public lastError?: string | undefined;
  public createdAt!: Date;
  public updatedAt!: Date;

  constructor(
    data: Omit<INotificationQueue, "id" | "createdAt" | "updatedAt">
  ) {
    this.notificationId = data.notificationId;
    this.priority = data.priority;
    this.scheduledFor = data.scheduledFor;
    this.nextRetryAt = data.nextRetryAt;
    this.maxRetries = data.maxRetries;
    this.currentAttempt = data.currentAttempt;
    this.status = data.status;
    this.lastError = data.lastError;
  }
}
