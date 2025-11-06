import { CustomError } from "../../domain/errors/custom.error";
import { ApplicationError } from "../../domain/errors/application.error";

interface Response<T> {
  success: boolean;
  data?: T;
  errors?: { message: string; context?: Record<string, any> }[];
}

export abstract class BaseUseCase<Input = any, Output = any> {
  protected handleError(error: unknown): never {
    if (error instanceof CustomError) {
      throw error;
    }

    const errorInfo = {
      name: error instanceof Error ? error.name : "Unknown",
      message: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
    };

    const appError = new ApplicationError("Unexpected error", {
      error: errorInfo,
    });
    throw appError;
  }

  protected success<T>(data: T): Response<T> {
    return { success: true, data };
  }

  protected failure<T>(
    message: string,
    context?: Record<string, any>
  ): Response<T> {
    return { success: false, errors: [{ message, context }] };
  }

  abstract execute(data: Input): Promise<Output>;
}
