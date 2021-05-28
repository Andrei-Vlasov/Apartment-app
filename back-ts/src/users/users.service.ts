import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { encryptPassword } from 'src/security/encrypt';
import { Users } from 'src/typeorm';
import { InsertResult, Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(Users) private readonly usersRepository: Repository<Users>) {}

    async findUserByName(username: string): Promise<Users | undefined> {
        const user = await this.usersRepository.findOne({ Username: username });

        if (user) return user;
        throw new HttpException('User with such name does not exist', HttpStatus.NOT_FOUND);
    }

    async createUser(username: string, password: string): Promise<InsertResult> {
        const passwordHash = await encryptPassword(password);

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
