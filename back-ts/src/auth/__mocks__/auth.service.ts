import { userStub } from '../test/stubs/user.stub';

export const AuthService = jest.fn().mockReturnValue({
    validateUser: jest.fn().mockResolvedValue(userStub()),
    registerUser: jest.fn().mockResolvedValue(userStub()),
});
