import { Express, Response, Request } from 'express';

/**
 * @api {get} /ping Heartbeat
 * @apiName Heartbeat
 * @apiDescription This endpoint will return status 200
 *
 * @apiExample {curl} Example usage:
 *   curl -X GET -H "Content-Type: application/json" http://localhost:3001/ping
 *
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 */
export const getPing = (app: Express) =>
  app.get('/ping', (_: Request, res: Response) => {
    res.status(200).end('');
  });
