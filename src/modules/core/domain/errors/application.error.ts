import { CustomError, CustomErrorContent } from "./custom.error";

export class ApplicationError extends CustomError {
  readonly statusCode: number = 500;
  readonly errors: CustomErrorContent[];
  readonly logging?: boolean = true;

  constructor(
    message: string,
    context?: { [key: string]: any },
    logging?: true
  ) {
    super(message);
    this.errors = [{ message, context }];
    this.logging = logging;
  }
}
