import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { Users } from 'src/typeorm';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class SessionSerializer extends PassportSerializer {
    constructor(private usersService: UsersService) {
        super();
    }
    serializeUser(user: Users, done: (err: Error, user: Users) => void) {
        done(null, user);
    }
    async deserializeUser(user: Users, done: (err: Error, user: Users) => void) {
        const userFromDB = await this.usersService.findUserByName(user.Username);
        return userFromDB ? done(null, userFromDB) : done(null, null);
    }
}
