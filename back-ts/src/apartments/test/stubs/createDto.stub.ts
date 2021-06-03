import { CreateDto } from '../../dto/create.dto';

export const createDtoStub = function (): CreateDto {
    return {
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
        Height: 4,
        Floor: 3,
        TotalFloors: 9,
        YearBuilt: 1973,
        Condition: 'good',
        Heating: 'best',
        Walls: 'beton',
    };
};
