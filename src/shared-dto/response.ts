export type ResponseDTO<T> = {
  message: string;
  code: number;
  genericDTO: T;
};
