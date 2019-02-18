import { Request } from 'express';
import { validationResult } from 'express-validator/check';

export enum ValidationMessages {
  RequiredParam = 'Parameter is required!',
  InvalidLanguage = 'Language not supported!',
}

const errorFormatter = <T = any>({
  location,
  msg,
  param,
}: {
  location: string;
  param: string;
  value: T;
  msg: string;
}) => {
  // Build your resulting errors however you want! String, object, whatever - it works!
  return `${location}[${param}]: ${msg}`;
};

export const getValidatorErrorsFromRequest = (req: Request, formatter = errorFormatter) => {
  const validationErrors = validationResult(req).formatWith(formatter);

  if (validationErrors.isEmpty() === false) {
    return { status: 400, message: 'INVALID_REQUEST', errors: validationErrors.array() };
  }

  return null;
};
