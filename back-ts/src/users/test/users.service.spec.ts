import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { userStub } from '../../auth/test/stubs/user.stub';
import { encryptPassword } from '../../security/encrypt';
import { Users } from '../../typeorm';
import { UsersService } from '../users.service';

describe('UsersService', () => {
    let service: UsersService;

    const username = 'gena';
    const password = '0000';
    const dateJoined = new Date().toISOString().substr(0, 10);

    const mockUsersRepository = {
        create: jest.fn().mockImplementation((dto) => dto),
        save: jest.fn().mockImplementation((user) =>
            Promise.resolve({
                ...user,
            })
        ),
        findOne: jest.fn().mockResolvedValue(userStub()),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                UsersService,
                {
                    provide: getRepositoryToken(Users),
                    useValue: mockUsersRepository,
                },
            ],
        }).compile();

        service = module.get<UsersService>(UsersService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('should create a new user record and return that', async () => {
        expect(await service.createUser(username, password)).toEqual({
            DateJoined: dateJoined,
            Username: username,
            PasswordHash: expect.any(String),
            IsAdmin: false,
        });
    });

    it('should find a user record and return that', async () => {
        expect(await service.findUserByName(username)).toEqual(userStub());
    });
});
