import { Express, Response, Request } from 'express';
import { query } from 'express-validator/check';
import { findAnagram, getValidatorErrorsFromRequest, ValidationMessages } from '../../util';
import { normalizeString } from 'src/util/string';

/**
 * @api {get} /compare Compare Anagrams
 * @apiName CompareAnagrams
 * @apiDescription This endpoint will receive two words, and compare them to see if they are anagrams
 * @apiGroup Anagram
 *
 * @apiParam (query) {String} word1
 * @apiParam (query) {String} word2
 *
 * @apiExample {curl} Example usage:
 *   curl -X GET -H "Content-Type: application/json" http://localhost:3001/compare?word1=test&word2=tset
 *
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   false
 */
export const getCompare = (app: Express) =>
  app.get(
    '/compare',
    [
      query('word1', ValidationMessages.RequiredParam)
        .not()
        .isEmpty(),
      query('word2', ValidationMessages.RequiredParam)
        .not()
        .isEmpty(),
    ],
    (req: Request, res: Response) => {
      const errorDTO = getValidatorErrorsFromRequest(req);

      if (errorDTO) {
        return res.status(errorDTO.status).json(errorDTO);
      }

      const word1: string = req.query.word1;
      const word2: string = req.query.word2;
      const result = findAnagram(word1, [word2]).length > 0;

      return res.status(200).send(result);
    },
  );
