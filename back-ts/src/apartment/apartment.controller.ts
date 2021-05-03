import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApartmentService } from './apartment.service';
import { CreateApartmentDto } from './dto/create-apartment.dto';

@Controller('/apartments')
export class ApartmentController {
    constructor(private apartmentService: ApartmentService) {}

    @Post()
    addApartment(@Body() dto: CreateApartmentDto) {
        return this.apartmentService.addApartment(dto);
    }

    @Get()
    getAllApartments() {
        console.log('controller_getAllApartments');
        return 'return all apartments';
    }

    getOneApartment() {
        console.log('controller_getOneApartment');
    }

    deleteApartment() {
        console.log('controller_deleteApartment');
    }
}
