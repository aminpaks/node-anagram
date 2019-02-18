import request from 'supertest';
import { getCompare } from './controllers';
import { app } from '../../app';

describe('Get /compare', () => {
  beforeAll(() => {
    getCompare(app);
  });

  it('should return 200 OK', done => {
    request(app)
      .get('/compare')
      .query({ word1: 'cat' })
      .query({ word2: 'act' })
      .expect(200, done);
  });

  it('should return 400 Bad request', done => {
    request(app)
      .get('/compare')
      .query({ word1: undefined })
      .query({ word2: 'act' })
      .expect(400, done);
  });
});
