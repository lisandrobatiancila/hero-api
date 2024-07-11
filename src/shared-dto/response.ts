export type ResponseDTO<T = undefined> = {
  message: string;
  code: number;
  genericDTO: T;
};
