import request from 'supertest';
import { getFind } from './controller';
import { app } from '../../app';

describe('Get /compare', () => {
  beforeAll(() => {
    getFind(app);
  });

  it('should return 200 OK with the anagram', done => {
    request(app)
      .get('/find')
      .query({ word: 'cat' })
      .end((_, res) => {
        expect(res.text).toBe('["act"]');
        done();
      })
      .expect(200);
  });

  it('should return 400 Bad request', done => {
    request(app)
      .get('/find')
      .end((_, res) => {
        expect(res.error.text).toBe(
          '{"status":400,"message":"INVALID_REQUEST","errors":["query[word]: Parameter is required!"]}',
        );
        done();
      })
      .expect(400);
  });

  it('should return 400 Bad request for invalid language', done => {
    request(app)
      .get('/find')
      .query({ word: 'word' })
      .query({ lang: 'id' })
      .end((_, res) => {
        expect(res.error.text).toBe(
          '{"status":400,"message":"INVALID_REQUEST","errors":["query[lang]: Language not supported!"]}',
        );
        done();
      })
      .expect(400);
  });
});
