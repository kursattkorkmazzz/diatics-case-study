import AppError from "../../interfaces/AppError.js";
export default class AbstractNotOverridedError extends AppError {
  constructor(message) {
    super(message ? message : "Abstract methods are not overrided.");
  }
}
