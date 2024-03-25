import AbstractNotOverridedError from "../models/errors/AbstractNotOverridedError.js";
/**
 * This is a abstract class.
 */
export default class Map {
  setX() {
    throw new AbstractNotOverridedError();
  }

  getX() {
    throw new AbstractNotOverridedError();
  }

  setY() {
    throw new AbstractNotOverridedError();
  }

  getY() {
    throw new AbstractNotOverridedError();
  }

  checkLocationValid(x, y) {
    throw new AbstractNotOverridedError();
  }
}
