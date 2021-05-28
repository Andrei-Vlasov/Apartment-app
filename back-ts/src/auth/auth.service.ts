import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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

    async registerUser(username: string, password: string) {
        try {
            console.log('authservice');

            const result = await this.usersService.createUser(username, password);
            console.log('authservice created');

            return result;
        } catch (error) {
            if (error?.code == '23505')
                // unique violation
                throw new HttpException(
                    'User with such name already exists',
                    HttpStatus.BAD_REQUEST
                );
            throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
