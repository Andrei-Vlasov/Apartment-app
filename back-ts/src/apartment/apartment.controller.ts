import { Controller, Get } from '@nestjs/common';

@Controller('/apartments')
export class ApartmentController {
    addApartment() {
        console.log('controller_addApartment');
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
