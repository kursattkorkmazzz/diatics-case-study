import Location from "../interfaces/Location.js";

/**
 *
 * @param {Location} locatin1
 * @param {Location} location2
 */
export default function LengthBetweenTwoLocation(locatin1, location2) {
  const x2 = Math.pow(locatin1.X - location2.X, 2);
  const y2 = Math.pow(locatin1.Y - location2.Y, 2);
  const length = Math.sqrt(x2 + y2);
  return length;
}
