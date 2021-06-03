import { apartmentStub } from '../test/stubs/apartment.stub';

export const ApartmentsService = jest.fn().mockReturnValue({
    createApartment: jest.fn().mockResolvedValue(apartmentStub()),
    filterApartments: jest.fn().mockResolvedValue([apartmentStub()]),
    findApartmentByID: jest.fn().mockResolvedValue(apartmentStub()),
});
