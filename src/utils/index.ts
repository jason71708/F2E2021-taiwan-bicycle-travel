import { StationStatus, AVAILABLE_LIMIT } from '../constants'

/**********************************/
/******** Ui display logic ********/
/**********************************/

export const getStationStatusType = (
  serviceStatus: number,
  availableBikes: number
) => {
  if (serviceStatus !== 1) return StationStatus.Disabled
  return availableBikes > AVAILABLE_LIMIT
    ? StationStatus.Default
    : availableBikes > 0
    ? StationStatus.Limited
    : StationStatus.Disabled
}

export const formatLength = (value: number, baseUnit: string = 'm') => {
  switch (baseUnit) {
    case 'm':
      if (value >= 1000) return `${value / 1000} 公里`
      return `${value} 公尺`
    default:
      return `${value} ${baseUnit}`
  }
}
