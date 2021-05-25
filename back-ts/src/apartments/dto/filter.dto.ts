export class FilterDto {
    Address?: string;
    MinPrice?: number;
    MaxPrice?: number;
    MinPriceSq?: number;
    MaxPriceSq?: number;
    MinSpace?: number;
    MaxSpace?: number;
    MinLivingSpace?: number;
    MaxLivingSpace?: number;
    MinRoomCount?: number;
    MaxRoomCount?: number;
    MinFloor?: number;
    MaxFloor?: number;
    MinTotalFloors?: number;
    MaxTotalFloors?: number;
    MinHeight?: number;
    MaxHeight?: number;
    MinYearBuilt?: number;
    MaxYearBuilt?: number;
    DealTypes?: string[];
    Conditions?: string[];
    WallTypes?: string[];
    HeatingTypes?: string[];
    OrderBy?: string;
}
