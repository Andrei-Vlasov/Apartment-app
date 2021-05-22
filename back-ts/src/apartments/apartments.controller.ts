import { Controller, Get, Param } from '@nestjs/common';
import { ApartmentsService } from './apartments.service';

@Controller('apartments')
export class ApartmentsController {
    constructor(private readonly apartmentsService: ApartmentsService) {}

    @Get(':id')
    async findByID(@Param('id') apartmentID: string) {
        const result = await this.apartmentsService.findApartmentByID(apartmentID);

        return result;
    }
}
