export class CreateDto {
    AuthorID: number;
    DateCreated: string;
    AccommodationType: string;
    DealType: string;
    GlobalX: number;
    GlobalY: number;
    Address: string;
    Locality: string;
    Area: string;
    Region: string;
    Price: number;
    Description: string;
    ContactName: string;
    ContactNumber: string;
    RoomCount: number;
    Space: number;
    LivingSpace: number;
    Height?: number;
    Floor?: number;
    TotalFloors?: number;
    YearBuilt?: number;
    Condition?: string;
    Heating?: string;
    Walls?: string;
}
