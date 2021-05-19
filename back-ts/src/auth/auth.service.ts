import { Injectable } from '@nestjs/common';
import { checkPassword } from 'src/security/encrypt';
import { Users } from 'src/typeorm';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService) {}

    async validateUser(username: string, password: string): Promise<Users | null> {
        const user = await this.usersService.findUserByName(username);
        if (user && checkPassword(password, user.PasswordHash)) return user;
        return null;
    }
}
