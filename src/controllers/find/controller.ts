import { Response, Request, Express } from 'express';
import { query } from 'express-validator/check';
import { findAnagram, getWordDict, getValidatorErrorsFromRequest, ValidationMessages } from '../../util';

/**
 * @api {get} /find Find Anagrams
 * @apiName FindAnagrams
 * @apiDescription This endpoint will find all anagrams in the english dictionary based on the string sent
 * @apiGroup Anagram
 *
 * @apiParam (query) {String} word
 *
 * @apiExample {curl} Example usage:
 *   curl -X GET -H "Content-Type: application/json" http://localhost:3001/find?word=test
 *
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   [
 *      "word1",
 *      "word2",
 *      "word3"
 *   ]
 */
export const getFind = (app: Express) =>
  app.get(
    '/find',
    [
      query('word', ValidationMessages.RequiredParam)
        .not()
        .isEmpty(),
      query('lang', ValidationMessages.InvalidLanguage).custom((value = 'en') =>
        ['en', 'es', 'fr', 'de', 'it'].includes(value),
      ),
    ],
    (req: Request, res: Response) => {
      const errorDTO = getValidatorErrorsFromRequest(req);

      if (errorDTO) {
        return res.status(errorDTO.status).json(errorDTO);
      }

      // Get the language
      const { lang = 'en' } = req.query;

      // Retrieve the word list dictionary
      const dict = getWordDict(lang);

      // Finding the anagrams
      const result = findAnagram(req.query.word, dict);

      return res.status(200).json(result);
    },
  );
