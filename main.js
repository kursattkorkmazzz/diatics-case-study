import MapController from "./controllers/MapController.js";
import Map500x500 from "./models/map/Map500x500.js";

import RandomSpawnPoint from "./utils/RandomSpawnLocation.js";

import Sheep from "./models/live/Sheep.js";
import Cow from "./models/live/Cow.js";
import Chicken from "./models/live/Chicken.js";
import Rooster from "./models/live/Rooster.js";
import Wolf from "./models/live/Wolf.js";
import Lion from "./models/live/Lion.js";
import Hunter from "./models/live/Hunter.js";

import LiveListPrinter from "./utils/LiveListPrinter.js";
import Live from "./interfaces/Live.js";

const map500x500 = new Map500x500();
const mapController = new MapController();

mapController.map = map500x500;

// Initialization of initial animals.

// For sheeps
for (let i = 0; i < 30; i++) {
  let gender = "m";
  if (i >= 15) {
    gender = "f";
  }

  const tempSheep = new Sheep();
  tempSheep.gender = gender;
  tempSheep.location = RandomSpawnPoint(map500x500);
  tempSheep.id = "s" + i;
  mapController.liveList.push(tempSheep);
}

// For Cow
for (let i = 0; i < 10; i++) {
  let gender = "m";
  if (i >= 5) {
    gender = "f";
  }

  const tempLive = new Cow();
  tempLive.gender = gender;
  tempLive.location = RandomSpawnPoint(map500x500);
  tempLive.id = "co" + i;
  mapController.liveList.push(tempLive);
}

// For Chicken
for (let i = 0; i < 10; i++) {
  const tempLive = new Chicken();
  tempLive.gender = "f";
  tempLive.location = RandomSpawnPoint(map500x500);
  tempLive.id = "ch" + i;
  mapController.liveList.push(tempLive);
}

// For Rooster
for (let i = 0; i < 10; i++) {
  const tempLive = new Rooster();
  tempLive.gender = "m";
  tempLive.location = RandomSpawnPoint(map500x500);
  tempLive.id = "r" + i;
  mapController.liveList.push(tempLive);
}

// For Wolf
for (let i = 0; i < 10; i++) {
  let gender = "m";
  if (i >= 5) {
    gender = "f";
  }

  const tempLive = new Wolf();
  tempLive.gender = gender;
  tempLive.location = RandomSpawnPoint(map500x500);
  tempLive.id = "w" + i;
  mapController.liveList.push(tempLive);
}

// For Lion
for (let i = 0; i < 8; i++) {
  let gender = "m";
  if (i >= 4) {
    gender = "f";
  }

  const tempLive = new Lion();
  tempLive.gender = gender;
  tempLive.location = RandomSpawnPoint(map500x500);
  tempLive.id = "l" + i;
  mapController.liveList.push(tempLive);
}

// For Hunter
const tempLive = new Hunter();
tempLive.gender = "m";
tempLive.location = RandomSpawnPoint(map500x500);
tempLive.id = "h1";
mapController.liveList.push(tempLive);

mapController.onEveryMovement((moveIndex) => {
  if (moveIndex === 1000) {
    LiveListPrinter(mapController);
  }
});

do {
  const IsMoved1000Unit = mapController.movementCount >= 1000;

  if (IsMoved1000Unit) {
    break;
  }

  mapController.liveList.forEach(
    /**
     *
     * @param {Live} live
     */
    (live) => {
      mapController.moveLive(live);
    }
  );
} while (true);
