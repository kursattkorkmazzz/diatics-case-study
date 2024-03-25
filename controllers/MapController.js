// Contains map controller model.
import { randomInt } from "crypto";
import Live from "../interfaces/Live.js";
import Map from "../interfaces/Map.js";
import MapControllerEvent from "../interfaces/events/MapControllerEvent.js";

import LengthBetweenTwoLocation from "../utils/LengthBetweenTwoLocation.js";
import RandomSpawnPoint from "../utils/RandomSpawnLocation.js";

import Hunter from "../models/live/Hunter.js";
import Lion from "../models/live/Lion.js";
import Rooster from "../models/live/Rooster.js";
import Chicken from "../models/live/Chicken.js";
import Sheep from "../models/live/Sheep.js";
import Wolf from "../models/live/Wolf.js";
import Cow from "../models/live/Cow.js";

export default class MapController extends MapControllerEvent {
  liveList = [];
  map = new Map();
  movementCount = 0;

  /**
   *
   * @param {Live} live
   */
  moveLive(live) {
    if (!live) {
      console.log("Argument not specified for moveLive function.");
      return;
    }

    for (
      let currentMovementIndex = 0;
      currentMovementIndex < live.movementUnit;
      undefined
    ) {
      const direction = this.#selectRandomDirection();

      let movementStatus = false;

      switch (direction) {
        case 0:
          movementStatus = live.moveUp(this.map);
          break;
        case 1:
          movementStatus = live.moveLeft(this.map);
          break;
        case 2:
          movementStatus = live.moveDown(this.map);
          break;
        case 3:
          movementStatus = live.moveRight(this.map);
          break;
      }

      if (movementStatus) {
        currentMovementIndex++;
        this.movementCount++;
        live.totalMovementCount++;

        this.#breeding(live);
        this.#hunting(live);
        this._onEveryMovementCallback(this.movementCount);
      }
    }
  }

  /**
   *
   * @param {Live} live
   */
  #breeding(live) {
    this.liveList.forEach(
      /**
       *
       * @param {Live} tempLive
       */
      (tempLive) => {
        if (
          live.constructor.name === tempLive.constructor.name &&
          live.id !== tempLive.id
        ) {
          if (LengthBetweenTwoLocation(live.location, tempLive.location) <= 3) {
            switch (live.constructor.name) {
              case "Chicken":
                var tempLive = new Chicken();
                tempLive.gender = "f";
                tempLive.location = RandomSpawnPoint(this.map);
                this.liveList.push(tempLive);
                break;
              case "Cow":
                var tempLive = new Cow();
                tempLive.gender = randomInt(0, 2) === 0 ? "f" : "m";
                tempLive.location = RandomSpawnPoint(this.map);
                this.liveList.push(tempLive);
                break;
              case "Hunter":
                var tempLive = new Hunter();
                tempLive.gender = "m";
                tempLive.location = RandomSpawnPoint(this.map);
                this.liveList.push(tempLive);
                break;
              case "Lion":
                var tempLive = new Lion();
                tempLive.gender = randomInt(0, 2) === 0 ? "f" : "m";
                tempLive.location = RandomSpawnPoint(this.map);
                this.liveList.push(tempLive);
                break;
              case "Rooster":
                var tempLive = new Rooster();
                tempLive.gender = "m";
                tempLive.location = RandomSpawnPoint(this.map);
                this.liveList.push(tempLive);
                break;
              case "Sheep":
                var tempLive = new Sheep();
                tempLive.gender = randomInt(0, 2) === 0 ? "f" : "m";
                tempLive.location = RandomSpawnPoint(this.map);
                this.liveList.push(tempLive);
                break;
              case "Wolf":
                var tempLive = new Wolf();
                tempLive.gender = randomInt(0, 2) === 0 ? "f" : "m";
                tempLive.location = RandomSpawnPoint(this.map);
                this.liveList.push(tempLive);
                break;
            }
          }
        }
      }
    );
  }

  /**
   *
   * @param {Live} live
   */
  #hunting(live) {
    if (!live.isHunter) {
      return;
    }

    const huntedLiveList = this.liveList.filter(
      /**
       *
       * @param {Live} live
       */
      (tempLive) => {
        let isHuntable = live.huntables.some(
          /**
           *
           * @param {Live} huntable
           */
          (huntable) => {
            if (tempLive instanceof huntable) {
              return true;
            }
            return false;
          }
        );

        if (
          !isHuntable ||
          LengthBetweenTwoLocation(tempLive.location, live.location) >
            live.huntingRange
        ) {
          return false;
        }

        return true;
      }
    );

    this.liveList = this.liveList.filter(
      /**
       *
       * @param {Live} live
       */
      (live) => {
        const isFound = huntedLiveList.find(
          /**
           *
           * @param {Live} tempLive
           */
          (tempLive) => {
            return live.id === tempLive.id;
          }
        );

        if (isFound) {
          return false;
        }

        return true;
      }
    );
  }

  /**
   * @returns {number} random direction 0: up, 1:left, 2:down, 3:right.
   */
  #selectRandomDirection() {
    return randomInt(0, 4);
  }
}
