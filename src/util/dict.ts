import fs from 'fs';
import pathUtils from 'path';
import wordListPath from 'word-list';

const endWordList = fs.readFileSync(wordListPath, 'utf8').split('\n');
const spanishWordList = fs.readFileSync(pathUtils.resolve('dictionaries', 'spanish.txt'), 'utf8').split('\n');
const frenchWordList = fs.readFileSync(pathUtils.resolve('dictionaries', 'french.txt'), 'utf8').split('\n');
const germanWordList = fs.readFileSync(pathUtils.resolve('dictionaries', 'german.txt'), 'utf8').split('\n');
const italianWordList = fs.readFileSync(pathUtils.resolve('dictionaries', 'italian.txt'), 'utf8').split('\n');

export const getWordDict = (lang: string) => {
  switch (lang) {
    case 'fr':
      return frenchWordList;
    case 'de':
      return germanWordList;
    case 'it':
      return italianWordList;
    case 'es':
      return spanishWordList;
    case 'en':
    default:
      return endWordList;
  }
};
