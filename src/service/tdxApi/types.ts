export type TourismPicture = {
  readonly PictureUrl1: string
  readonly PictureDescription1?: string
  readonly PictureUrl2?: string
  readonly PictureDescription2?: string
  readonly PictureUrl3?: string
  readonly PictureDescription3?: string
}

export type PointType = {
  readonly PositionLon: number
  readonly PositionLat: number
  readonly GeoHash?: string
}

export type NameType = {
  readonly Zh_tw: string
  readonly En?: string
}

export type BikeStation = {
  readonly StationUID?: string
  readonly StationID: string
  readonly AuthorityID?: string
  readonly StationName: NameType
  readonly StationPosition: PointType
  readonly StationAddress?: NameType
  readonly StopDescription?: string
  readonly BikesCapacity?: number
  readonly ServiceType?: number
  readonly SrcUpdateTime?: string
  readonly UpdateTime: string
}

export type BikeAvailability = {
  readonly StationUID?: string
  readonly StationID: string
  readonly ServiceStatus: number
  readonly ServiceType?: number
  readonly AvailableRentBikes: number
  readonly AvailableReturnBikes: number
  readonly SrcUpdateTime?: string
  readonly UpdateTime: string
}

export type BikeShape = {
  readonly RouteName: string
  readonly AuthorityName?: string
  readonly CityCode: string
  readonly City: string
  readonly Town: string
  readonly RoadSectionStart: string
  readonly RoadSectionEnd: string
  readonly Direction: string
  readonly CyclingType?: string
  readonly CyclingLength: number
  readonly FinishedTime?: string
  readonly UpdateTime: string
  readonly Geometry: string
  readonly EncodedPolyline: string
}

export type ScenicSpotTourismInfo = {
  readonly ID: string
  readonly Name?: string
  readonly DescriptionDetail?: string
  readonly Description?: string
  readonly Phone?: string
  readonly Address?: string
  readonly ZipCode?: string
  readonly TravelInfo?: string
  readonly OpenTime?: string
  readonly Picture: TourismPicture
  readonly MapUrl?: string
  readonly Position?: PointType
  readonly Class1?: string
  readonly Class2?: string
  readonly Class3?: string
  readonly Level?: string
  readonly WebsiteUrl?: string
  readonly ParkingInfo?: string
  readonly ParkingPosition?: PointType
  readonly TicketInfo?: string
  readonly Remarks?: string
  readonly Keyword?: string
  readonly City?: string
  readonly SrcUpdateTime: string
  readonly UpdateTime: string
}

export type RestaurantTourismInfo = {
  readonly ID: string
  readonly Name: string
  readonly Description?: string
  readonly DescriptionDetail?: string
  readonly Address?: string
  readonly ZipCode?: string
  readonly Phone?: string
  readonly OpenTime?: string
  readonly WebsiteUrl?: string
  readonly Picture: TourismPicture
  readonly Position?: PointType
  readonly Class?: string
  readonly MapUrl?: string
  readonly ParkingInfo?: string
  readonly City?: string
  readonly SrcUpdateTime: string
  readonly UpdateTime: string
}

export type Town = {
  readonly City: string
  readonly CityName: string
  readonly TownCode: string
  readonly TownName: string
}