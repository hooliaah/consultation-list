export interface ResponseDto<T> {
  message: string;
  response: {
    total: number;
    start: number;
    count: number;
    elements: T[];
  };
  error: string;
}
