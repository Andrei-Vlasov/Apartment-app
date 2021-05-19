import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { encryptPassword } from 'src/security/encrypt';
import { Users } from 'src/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(Users) private readonly usersRepository: Repository<Users>) {}

    async findUserByName(username: string): Promise<Users | undefined> {
        const user = await this.usersRepository.findOne({ Username: username });

        return user;
    }

    async createUser(username, password) {
        const passwordHash = await encryptPassword(password, process.env.ENCRYPT_ROUNDS);

        const dateNow = new Date().toISOString().substr(0, 10);

        const user = await this.usersRepository.insert({
            DateJoined: dateNow,
            Username: username,
            PasswordHash: passwordHash,
            IsAdmin: false,
        });

        return user;
    }
}
