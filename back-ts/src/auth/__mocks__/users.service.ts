import { userStub } from '../test/stubs/user.stub';

export const UsersService = jest.fn().mockReturnValue({
    findUserByName: jest.fn().mockResolvedValue(userStub()),
    createUser: jest.fn().mockResolvedValue(userStub()),
});
