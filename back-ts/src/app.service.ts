import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    getHello(): string {
        return 'Nest server is up!';
    }
}
