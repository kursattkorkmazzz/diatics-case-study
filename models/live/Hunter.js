import Live from "../../interfaces/Live.js";
import Sheep from "./Sheep.js";
import Cow from "./Cow.js";
import Chicken from "./Chicken.js";
import Lion from "./Lion.js";
import Rooster from "./Rooster.js";
import Wolf from "./Wolf.js";

export default class Hunter extends Live {
  movementUnit = 1;
  huntables = [Sheep, Cow, Chicken, Lion, Rooster, Wolf];
  huntingRange = 8;
  isHunter = true;
}
