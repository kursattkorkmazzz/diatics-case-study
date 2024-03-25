import MapController from "../controllers/MapController.js";

/**
 * Prints status of lives in mapController.
 * @param {MapController} mapController
 */
export default function LiveListPrinter(mapController) {
  const liveListStatus = {};
  mapController.liveList.forEach((live) => {
    let m = liveListStatus[live.constructor.name]?.male || 0;
    let f = liveListStatus[live.constructor.name]?.female || 0;

    if (live.gender === "m") {
      m += 1;
    } else if (live.gender === "f") {
      f += 1;
    }

    Object.assign(liveListStatus, {
      [live.constructor.name]: { male: m, female: f, total: m + f },
    });
  });

  console.log(liveListStatus);
}
