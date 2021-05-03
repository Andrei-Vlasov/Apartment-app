import { Injectable } from '@nestjs/common';

@Injectable()
export class ApartmentService {
    async addApartment() {
        console.log('service_addApartment');
    }

    async getAllApartments() {
        console.log('service_getAllApartments');
    }

    async getOneApartment() {
        console.log('service_getOneApartment');
    }

    async deleteApartment() {
        console.log('service_deleteApartment');
    }
}
