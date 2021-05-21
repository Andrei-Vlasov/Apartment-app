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

// @Controller('auth')
// export class AuthController {
//     constructor(private readonly authService: AuthService) {}
//
//     @UseGuards(AuthGuard('local'))
//     @Post('login')
//     async login(@Request() req) {
//         return req.user;
//     }
//
//     @Post('register')
//     async register(@Body() { username, password }: RegisterDto) {
//         const result = await this.authService.registerUser(username, password);
//
//         return result;
//     }
// }
