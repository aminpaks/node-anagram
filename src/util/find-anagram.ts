import { normalizeString } from './string';

const isLettersAvailable = (letters: string[], word: string) => {
  // Quick check if all the letters are available in the word
  // Or the word is equal the original one
  if (letters.join('') === word || letters.every(letter => word.indexOf(letter) >= 0) === false) {
    return null;
  }

  const passedLetters: string[] = [];
  for (const letter of word.split('')) {
    if (letters.includes(letter) && passedLetters.includes(letter) === false) {
      passedLetters.push(letter);
      continue;
    }

    return null;
  }

  // The word is an anagram
  return word;
};

export const findAnagram = (lookupWord: string, dictionary: string[]) => {
  const requiredLetters = normalizeString(lookupWord).split('');

  return dictionary.reduce(
    (result, word) => {
      const potentialAnagram = isLettersAvailable(requiredLetters, normalizeString(word));
      if (potentialAnagram != null) {
        return [...result, potentialAnagram];
      }

      return result;
    },
    [] as string[],
  );
};
