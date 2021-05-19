import { Injectable } from '@nestjs/common';
import { checkPassword } from 'src/security/encrypt';
import { Users } from 'src/typeorm';
import { UsersService } from 'src/users/users.service';
import { InsertResult } from 'typeorm';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService) {}

    async validateUser(username: string, password: string): Promise<Users | null> {
        const user = await this.usersService.findUserByName(username);
        if (user && checkPassword(password, user.PasswordHash)) return user;
        return null;
    }

    async registerUser(username: string, password: string): Promise<InsertResult> {
        const result = this.usersService.createUser(username, password);

        return result;
    }
}
