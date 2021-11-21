import { StationStatus, AVAILABLE_LIMIT } from '../../constants'

/**********************************/
/******** Ui display logic ********/
/**********************************/

export const getStationStatusType = (serviceStatus: number, availableBikes: number) => {
  if (serviceStatus !== 1) return StationStatus.Disabled
  return availableBikes > AVAILABLE_LIMIT ? StationStatus.Default
    : availableBikes > 0 ? StationStatus.Limited
    : StationStatus.Disabled
}
