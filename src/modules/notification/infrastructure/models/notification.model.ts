import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Notification } from "../../domain/entities/notification.entity";
import {
  NotificationMode,
  NotificationStatus,
} from "../../domain/notification.types";

@Entity("notifications")
export class NotificationModel implements Notification {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: "varchar", length: 65 })
  sender!: string;

  @Column({ type: "varchar", length: 65 })
  mode!: NotificationMode;

  @Column({ type: "varchar", length: 65, nullable: true })
  name?: string;

  @Column({ type: "varchar", length: 65 })
  target!: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  subject?: string;

  @Column({ type: "text", nullable: true })
  template?: string;

  @Column({ type: "varchar", length: 1000, nullable: true })
  message?: string;

  @Column({ type: "varchar", length: 65, default: NotificationStatus.PENDING })
  status!: NotificationStatus;

  @Column({ type: "int" })
  retryCount!: number;

  @Column({ name: "delivered_at", type: "timestamp", nullable: true })
  deliveredAt?: Date;

  @CreateDateColumn({ name: "created_at" })
  createdAt!: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt!: Date;
}
