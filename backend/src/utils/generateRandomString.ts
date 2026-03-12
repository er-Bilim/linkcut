import { ALPHABET } from '../constants/constants.js';

const generateRandomString = (length: number): string => {
  let result: string = '';
  const alphabetLength: number = ALPHABET.length;

  for (let i = 0; i < length; i++) {
    result += ALPHABET.charAt(Math.floor(Math.random() * alphabetLength));
  }

  return result;
};

export default generateRandomString;
