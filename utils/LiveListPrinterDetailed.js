import Live from "../interfaces/Live.js";

/**
 * Prints status of lives in mapController.
 * @param {MapController} mapController
 */
export default function LiveListPrinterDetailed(mapController) {
  const liveListStatus = {};
  mapController.liveList.forEach(
    /**
     *
     * @param {Live} live
     */
    (live) => {
      const status = liveListStatus[live.constructor.name] || [];
      status.push({
        movementUnit: live.movementUnit,
        totalMovementCount: live.totalMovementCount,
        gender: live.gender,
        isHunter: live.isHunter,
        huntingRange: live.huntingRange,
        huntables: JSON.stringify(live.huntables),
        location: JSON.stringify(live.location),
      });
      Object.assign(liveListStatus, {
        [live.constructor.name]: status,
      });
    }
  );

  console.log(liveListStatus);
}
