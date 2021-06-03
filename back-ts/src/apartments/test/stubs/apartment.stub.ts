import { Apartments } from '../../../typeorm';

export const apartmentStub = function (): Apartments {
    return {
        ApartmentID: 1,
        AuthorID: 1,
        DateCreated: '2021-06-02',
        AccommodationType: 'flat',
        DealType: 'rent',
        GlobalX: 1,
        GlobalY: 1,
        Address: 'Pushkina 5',
        Locality: 'Darnitsa',
        Area: 'Kyiv',
        Region: 'Kyiv',
        Price: 1500,
        Description: 'good flat',
        ContactName: 'gena',
        ContactNumber: '+380737887878',
        RoomCount: 3,
        Space: 50,
        LivingSpace: 50,
        PricePerSq: 30,
        Height: 4,
        Floor: 3,
        TotalFloors: 9,
        YearBuilt: 1973,
        Condition: 'good',
        Heating: 'best',
        Walls: 'beton',
    };
};
