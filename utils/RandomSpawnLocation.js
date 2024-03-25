import { randomInt } from "crypto";
import Map from "../interfaces/Map.js";
import Location from "../interfaces/Location.js";

/**
 * @param {Map} map
 * @returns {Location} returns random spawnpoint acording to given map.
 */
export default function RandomSpawnLocation(map) {
  const randomX = randomInt(0, map.getX());
  const randomY = randomInt(0, map.getY());

  return {
    X: randomX,
    Y: randomY,
  };
}
