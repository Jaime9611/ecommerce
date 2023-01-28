import { ApiResponse } from '../models/responses';

export class HttpError {
  constructor(public message: string, statusCode: number, public data: ApiResponse) {}
}
