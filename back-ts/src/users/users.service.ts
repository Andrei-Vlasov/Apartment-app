import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { encryptPassword } from 'src/security/encrypt';
import { Users } from 'src/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(Users) private readonly usersRepository: Repository<Users>) {}

    async findUserByName(username: string): Promise<Users | null> {
        const user = await this.usersRepository.findOne({ Username: username });

        if (user) return user;
        return null;
    }

    async createUser(username: string, password: string): Promise<Users> {
        console.log('user service create user');

        const passwordHash = await encryptPassword(password);

        const dateNow = new Date().toISOString().substr(0, 10);

        const user = await this.usersRepository.create({
            DateJoined: dateNow,
            Username: username,
            PasswordHash: passwordHash,
            IsAdmin: false,
        });

        await this.usersRepository.save(user);

        return user;
    }
}
