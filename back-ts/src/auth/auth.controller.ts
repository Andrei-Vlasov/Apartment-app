import {
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Post,
    Request,
    UseGuards,
} from '@nestjs/common';
import { AuthenticatedGuard, LocalAuthGuard } from '../guards';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @HttpCode(HttpStatus.OK)
    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req) {
        return req.user;
    }

    @Post('register')
    async register(@Body() { username, password }: RegisterDto) {
        const result = await this.authService.registerUser(username, password);

        return result;
    }

    @Get('status')
    @UseGuards(AuthenticatedGuard)
    status() {
        return 'ok';
    }

    @HttpCode(HttpStatus.ACCEPTED)
    @Post('logout')
    @UseGuards(AuthenticatedGuard)
    logout(@Request() req) {
        req.logout();
    }
}
