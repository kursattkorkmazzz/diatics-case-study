import Live from "../../interfaces/Live.js";
import Chicken from "./Chicken.js";
import Rooster from "./Rooster.js";
import Sheep from "./Sheep.js";

export default class Wolf extends Live {
  movementUnit = 3;
  huntables = [Sheep, Chicken, Rooster];
  huntingRange = 4;
  isHunter = true;
}
