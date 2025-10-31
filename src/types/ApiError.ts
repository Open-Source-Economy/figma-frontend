/**
 * HTTP Status Codes
 * Common HTTP status codes used throughout the application
 */
export enum StatusCodes {
  // Success
  OK = 200,
  CREATED = 201,
  ACCEPTED = 202,
  NO_CONTENT = 204,
  
  // Client Errors
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  METHOD_NOT_ALLOWED = 405,
  CONFLICT = 409,
  UNPROCESSABLE_ENTITY = 422,
  TOO_MANY_REQUESTS = 429,
  
  // Server Errors
  INTERNAL_SERVER_ERROR = 500,
  NOT_IMPLEMENTED = 501,
  BAD_GATEWAY = 502,
  SERVICE_UNAVAILABLE = 503,
  GATEWAY_TIMEOUT = 504,
}

/**
 * ApiError - Standardized error class for API errors
 * 
 * Provides a consistent error structure throughout the application with:
 * - HTTP status codes
 * - Status text for context
 * - Error messages
 * - Stack traces for debugging
 * 
 * @example
 * ```typescript
 * // Create a specific error
 * const error = new ApiError(
 *   StatusCodes.NOT_FOUND,
 *   'Not Found',
 *   'The requested resource could not be found'
 * );
 * 
 * // Create from unknown error
 * try {
 *   await fetchData();
 * } catch (err) {
 *   const apiError = ApiError.from(err);
 *   setError(apiError);
 * }
 * ```
 */
export class ApiError extends Error {
  statusCode?: StatusCodes;
  statusText?: string;
  message: string;
  stack = "";

  constructor(statusCode?: StatusCodes, statusText?: string, message?: string) {
    super(message);
    this.statusCode = statusCode;
    this.statusText = statusText;
    this.message = message ?? "";
    this.name = "ApiError";

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ApiError);
    }
  }

  /**
   * Converts the error to a string representation
   * Includes status code, status text, and message
   */
  toString(): string {
    return `${this.statusCode ? `Error ${this.statusCode}` : ""} ${this.statusText ? `${this.statusText}` : ""}: ${this.message}`;
  }

  /**
   * Creates an ApiError from an unknown error type
   * Safely handles Error instances and unknown values
   * 
   * @param error - Any error value to convert
   * @returns ApiError instance
   */
  static from(error: unknown): ApiError {
    if (error instanceof ApiError) {
      return error;
    }
    if (error instanceof Error) {
      return new ApiError(undefined, undefined, error.message);
    }
    return new ApiError(undefined, undefined, "An unknown error occurred");
  }
}
