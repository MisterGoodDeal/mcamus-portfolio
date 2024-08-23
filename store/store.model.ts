export interface GenericApiError {
  error: {
    status: number;
    data: {
      traceId: string;
      code: string;
      message: string;
      payload: object;
    };
  };
  isUnhandledError: boolean;
  meta: {
    request: object;
    response: object;
  };
}
