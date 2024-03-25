import Live from "../../interfaces/Live.js";
import Sheep from "./Sheep.js";
import Cow from "./Cow.js";

export default class Lion extends Live {
  movementUnit = 4;
  huntables = [Sheep, Cow];
  huntingRange = 5;
  isHunter = true;
}
