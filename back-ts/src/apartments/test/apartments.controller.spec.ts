import { Test } from '@nestjs/testing';
import { ApartmentsController } from '../apartments.controller';
import { ApartmentsService } from '../apartments.service';
import { apartmentStub } from './stubs/apartment.stub';
import { createDtoStub } from './stubs/createDto.stub';

jest.mock('../apartments.service');

describe('ApartmentsController', () => {
    let apartmentsController: ApartmentsController;
    let apartmentsService: ApartmentsService;

    let createDto;

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            controllers: [ApartmentsController],
            providers: [ApartmentsService],
        }).compile();

        apartmentsController = module.get<ApartmentsController>(ApartmentsController);
        apartmentsService = module.get<ApartmentsService>(ApartmentsService);

        createDto = createDtoStub();
        jest.clearAllMocks();
    });

    it('should be defined', () => {
        expect(apartmentsController).toBeDefined();
    });

    it('should create apartment and return apartment', async () => {
        expect(await apartmentsController.create(createDto)).toEqual(apartmentStub());
    });

    it('should filter apartments and return apartment array', async () => {
        expect(await apartmentsController.filter({})).toEqual([apartmentStub()]);
    });

    it('should findbyid and return apartment', async () => {
        expect(await apartmentsController.findByID('1')).toEqual(apartmentStub());
    });
});
