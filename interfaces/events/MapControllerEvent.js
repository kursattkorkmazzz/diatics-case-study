import AbstractNotOverridedError from "../../models/errors/AbstractNotOverridedError.js";
import Event from "./Event.js";

export default class MapControllerEvent extends Event {
  /**
   *
   * @param {number} moveIndex
   * @returns {void}
   */
  _onEveryMovementCallback = (moveIndex) => {};

  /**
   *
   * @param {(moveIndex : number)=>void} callback
   */
  onEveryMovement(callback) {
    this._onEveryMovementCallback = callback;
  }
}
