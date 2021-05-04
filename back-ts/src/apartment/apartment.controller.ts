import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApartmentService } from './apartment.service';
import { CreateApartmentDto } from './dto/create-apartment.dto';

@Controller('/apartments')
export class ApartmentController {
    constructor(private apartmentService: ApartmentService) {}

    @Post()
    addApartment(@Body() dto: CreateApartmentDto) {
        return this.apartmentService.addApartment(dto);
    }

    // Get apartments created by a user
    @Get(':id')
    getAllApartments(@Param('id') id: number) {
        return this.apartmentService.getAllApartments(id);
    }

    getOneApartment() {
        console.log('controller_getOneApartment');
    }

    deleteApartment() {
        console.log('controller_deleteApartment');
    }
}
