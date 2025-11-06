import { CustomError, CustomErrorContent } from "./custom.error";

export class DomainError extends CustomError {
  readonly statusCode: number = 400;
  readonly errors: CustomErrorContent[];
  readonly logging?: boolean = false;

  constructor(
    message: string,
    context?: { [key: string]: any },
    logging?: false
  ) {
    super(message);
    this.errors = [{ message, context }];
    this.logging = logging;
  }
}
