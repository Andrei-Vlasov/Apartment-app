export class FilterDto {
    Address?: string;
    MinPrice?: number = 0;
    MaxPrice?: number = 2147483647;
    MinPriceSq?: number = 0;
    MaxPriceSq?: number = 2147483647;
    MinSpace?: number = 0;
    MaxSpace?: number = 2147483647;
    MinLivingSpace?: number = 0;
    MaxLivingSpace?: number = 2147483647;
    MinRoomCount?: number = 0;
    MaxRoomCount?: number = 2147483647;
    MinFloor?: number = 0;
    MaxFloor?: number = 2147483647;
    MinTotalFloors?: number = 0;
    MaxTotalFloors?: number = 2147483647;
    MinHeight?: number = 0;
    MaxHeight?: number = 2147483647;
    MinYearBuilt?: number = 0;
    MaxYearBuilt?: number = 2147483647;
    DealTypes?: string;
    Conditions?: string;
    WallTypes?: string;
    HeatingTypes?: string;
    OrderBy?: string;

    constructor(filterDto) {
        Object.assign(this, filterDto);
    }
}
