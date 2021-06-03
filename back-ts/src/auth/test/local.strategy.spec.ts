import { Test } from '@nestjs/testing';
import { AuthService } from '../auth.service';
import { LocalStrategy } from '../local.strategy';
import { userStub } from './stubs/user.stub';

jest.mock('../auth.service');

describe('LocalStrategy', () => {
    let localStrategy;
    let username;
    let password;
    beforeEach(async () => {
        const module = await Test.createTestingModule({
            providers: [AuthService, LocalStrategy],
        }).compile();

        localStrategy = module.get<LocalStrategy>(LocalStrategy);
        username = 'gena';
        password = '0000';
    });

    it('should be defined', () => {
        expect(localStrategy).toBeDefined();
    });

    it('should validate and return user', async () => {
        expect(await localStrategy.validate(username, password)).toEqual(userStub());
    });
});
