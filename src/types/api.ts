export type TourismPicture = {
  readonly PictureUrl1: string
  readonly PictureDescription1?: string
  readonly PictureUrl2?: string
  readonly PictureDescription2?: string
  readonly PictureUrl3?: string
  readonly PictureDescription3?: string
}

export type PointType = {
  readonly PositionLon?: number
  readonly PositionLat?: number
  readonly GeoHash?: string
}

export type NameType = {
  readonly Zh_tw?: string
  readonly En?: string
}

export type BikeStation = {
  readonly StationUID?: String
  readonly StationID?: String
  readonly AuthorityID?: String
  readonly StationName?: NameType
  readonly StationPosition?: PointType
  readonly StationAddress?: NameType
  readonly StopDescription?: String
  readonly BikesCapacity?: number
  readonly ServiceType?: number
  readonly SrcUpdateTime?: string
  readonly UpdateTime: string
}

export type BikeAvailability = {
  readonly StationUID?: String
  readonly StationID?: String
  readonly ServiceStatus?: number
  readonly ServiceType?: number
  readonly AvailableRentBikes?: number
  readonly AvailableReturnBikes?: number
  readonly SrcUpdateTime?: string
  readonly UpdateTime: string
}

export type BikeShape = {
  readonly RouteName: String
  readonly AuthorityName?: String
  readonly CityCode: String
  readonly City: String
  readonly Town?: String
  readonly RoadSectionStart?: String
  readonly RoadSectionEnd?: String
  readonly Direction?: String
  readonly CyclingType?: String
  readonly CyclingLength?: number
  readonly FinishedTime?: String
  readonly UpdateTime: string
  readonly Geometry: String
  readonly EncodedPolyline: String
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