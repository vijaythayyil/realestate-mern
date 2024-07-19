export const errorHandler = (status, message) => {
  const error = new Error(); // Create a new error object with the Error constructor function
  error.statusCode = statusCode;
  error.message = message;
  return error;
};
