import Map from "../../interfaces/Map.js";
import AbstractOverridedNotAllowedError from "../errors/AbstractOverridedNotAllowedError.js";
import Location from "../../interfaces/Location.js";
export default class Map500x500 extends Map {
  #X = 500;
  #Y = 500;

  getX() {
    return this.#X;
  }
  setX(X) {
    throw new AbstractOverridedNotAllowedError();
  }
  getY() {
    return this.#Y;
  }
  setY() {
    throw new AbstractOverridedNotAllowedError();
  }

  /**
   * @param {Location} location
   * @returns true if valid, false otherwise.
   * */
  checkLocationValid(location) {
    if (location.X < 0 || location.X >= this.#X) {
      return false;
    }
    if (location.Y < 0 || location.Y >= this.#Y) {
      return false;
    }
    return true;
  }
}
