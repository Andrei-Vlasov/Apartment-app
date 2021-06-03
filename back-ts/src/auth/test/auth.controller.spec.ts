import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from '../auth.controller';
import { AuthService } from '../auth.service';
import { userStub } from './stubs/user.stub';

jest.mock('../auth.service');

describe('AuthController', () => {
    let authController: AuthController;
    let authService: AuthService;

    let registerUserDto;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [AuthController],
            providers: [AuthService],
        }).compile();

        authController = module.get<AuthController>(AuthController);
        authService = module.get<AuthService>(AuthService);

        registerUserDto = {
            username: 'gena',
            password: '0000',
        };

        jest.clearAllMocks();
    });

    it('should be defined', () => {
        expect(authController).toBeDefined();
    });

    it('should register a user and return a user', async () => {
        expect(await authController.register(registerUserDto)).toEqual(userStub());
    });
});
