import { DataSource } from "typeorm";
import { NotificationModel } from "./notification/infrastructure/models/notification.model";

export const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.NEXT_PUBLIC_SUPABASE_DATABASE_URL,
  synchronize: true,
  logging: true,
  entities: [NotificationModel],
  migrations: [],
  migrationsTableName: "custom_migration_table",
});

let dataSource: DataSource | null = null;

export async function getDataSource(): Promise<DataSource> {
  if (dataSource && dataSource.isInitialized) return dataSource;

  if (!dataSource) {
    dataSource = AppDataSource;
  }

  if (!dataSource.isInitialized) {
    await dataSource.initialize();
  }

  return dataSource;
}
