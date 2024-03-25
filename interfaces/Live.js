import AbstractNotOverridedError from "../models/errors/AbstractNotOverridedError.js";
import Location from "./Location.js";
import Map from "./Map.js";

export default class Live {
  id = "";
  movementUnit = 0;
  gender = "m";
  isHunter = false;
  huntingRange = 0;
  huntables = [];
  location = new Location();
  totalMovementCount = 0;
  /**
   * @param {Map} map The map object.
   * @returns {boolean} true if movement successful, otherwise false.
   */
  moveLeft(map) {
    const nextMovement = new Location();
    nextMovement.X = this.location.X + 1;
    nextMovement.Y = this.location.Y;

    if (map.checkLocationValid(nextMovement.X, nextMovement.Y)) {
      this.location = nextMovement;
      return true;
    }
    return false;
  }

  /**
   *     @param {Map} map The map object.
   * @returns {boolean} true if movement successful, otherwise false.
   */
  moveRight(map) {
    const nextMovement = new Location();
    nextMovement.X = this.location.X - 1;
    nextMovement.Y = this.location.Y;

    if (map.checkLocationValid(nextMovement.X, nextMovement.Y)) {
      this.location = nextMovement;
      return true;
    }
    return false;
  }

  /**
   *  @param {Map} map The map object.
   * @returns {boolean} true if movement successful, otherwise false.
   */
  moveUp(map) {
    const nextMovement = new Location();
    nextMovement.X = this.location.X;
    nextMovement.Y = this.location.Y - 1;

    if (map.checkLocationValid(nextMovement.X, nextMovement.Y)) {
      this.location = nextMovement;
      return true;
    }
    return false;
  }

  /**
   *  @param {Map} map The map object.
   * @returns {boolean} true if movement successful, otherwise false.
   */
  moveDown(map) {
    const nextMovement = new Location();
    nextMovement.X = this.location.X;
    nextMovement.Y = this.location.Y + 1;

    if (map.checkLocationValid(nextMovement.X, nextMovement.Y)) {
      this.location = nextMovement;
      return true;
    }
    return false;
  }
}
