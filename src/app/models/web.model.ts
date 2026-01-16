export class WebResponse<T> {
  statusCode: number;
  message: string;
  data?: T | null;
  error: string | null;

  constructor(statusCode: number, message: string, data: T | null = null) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
    this.error = message;
  }
}
