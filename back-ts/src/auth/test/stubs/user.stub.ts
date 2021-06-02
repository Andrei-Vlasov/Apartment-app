import { Users } from '../../../typeorm';

export const userStub = function (): Users {
    return {
        UserID: 1,
        DateJoined: '2021-06-02',
        Username: 'gena',
        PasswordHash: 'njdvnldmkvmlk',
        IsAdmin: false,
    };
};
