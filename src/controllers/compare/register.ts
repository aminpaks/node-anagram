import { Express } from 'express';
import { getCompare } from './controllers';

export const registerCompareControllers = (app: Express) => {
  getCompare(app);
};
