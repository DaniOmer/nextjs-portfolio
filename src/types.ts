export type ServiceType = "app" | "cloud" | "ai";

export type IWorkRequest = {
  type: ServiceType;
  email: string;
  name: string;
  message: string;
};
