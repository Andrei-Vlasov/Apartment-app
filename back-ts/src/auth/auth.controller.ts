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
import { AuthGuard } from '@nestjs/passport';
import { AuthenticatedGuard, LocalAuthGuard } from 'src/guards';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @HttpCode(HttpStatus.OK)
    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req) {
        return 'login success';
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
}
