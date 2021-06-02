import { Test } from '@nestjs/testing';
import { UsersService } from '../../users/users.service';
import { AuthService } from '../auth.service';
import { userStub } from './stubs/user.stub';

jest.mock('../../users/users.service');

describe('AuthService', () => {
    let service: AuthService;
    let username: string;
    let password: string;

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            providers: [AuthService, UsersService],
        }).compile();

        service = module.get<AuthService>(AuthService);

        username = 'gena';
        password = '0000';
        jest.clearAllMocks();
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    // it('should validate a user', async () => {
    //     expect(await service.validateUser(username, password)).toEqual(userStub());
    // });

    // it('should register a user and return a user', async () => {
    //     expect(await service.registerUser(username, password)).toEqual(userStub());
    // });
});
