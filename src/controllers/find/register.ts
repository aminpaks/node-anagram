import { Express } from 'express';
import { getFind } from './controller';

export const registerFindControllers = (app: Express) => {
  getFind(app);
};
