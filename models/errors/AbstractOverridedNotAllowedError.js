import AppError from "../../interfaces/AppError.js";
export default class AbstractOverridedNotAllowedError extends AppError {
  constructor(message) {
    super(message ? message : "Overriding abstract methods are not allowed.");
  }
}
