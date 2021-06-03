import { HttpStatus, INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Users } from '../src/typeorm';
import * as request from 'supertest';
import { AuthModule } from '../src/auth/auth.module';
import { userStub } from '../src/auth/test/stubs/user.stub';
import * as passport from 'passport';

jest.mock('../src/auth/auth.service');

describe('AppController (e2e)', () => {
    let app: INestApplication;
    let registerDto;

    const mockUsersRepository = {
        save: jest.fn().mockResolvedValue(userStub()),
    };
    beforeEach(async () => {
        const moduleFixture = await Test.createTestingModule({
            imports: [AuthModule],
        })
            .overrideProvider(getRepositoryToken(Users))
            .useValue(mockUsersRepository)
            .compile();

        registerDto = {
            username: 'vasya',
            password: '0000',
        };
        app = moduleFixture.createNestApplication();
        app.use(passport.initialize());
        app.use(passport.session());
        await app.init();
    });

    it('should register and return user', () => {
        return request(app.getHttpServer())
            .post('/auth/register')
            .set('Accept', 'application/json')
            .send({ ...registerDto })
            .expect(HttpStatus.CREATED);
    });

    it('should login and return user', () => {
        return request(app.getHttpServer())
            .post('/auth/login')
            .set('Accept', 'application/json')
            .send({ ...registerDto })
            .expect(HttpStatus.OK);
    });
});
