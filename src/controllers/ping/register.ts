import { Express } from 'express';
import { getPing } from './controllers';

export const registerPingControllers = (app: Express) => {
  getPing(app);
};
