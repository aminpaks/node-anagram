import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import expressValidator from 'express-validator';
import session from 'express-session';
import lusca from 'lusca';
import { registerFindControllers, registerCompareControllers, registerPingControllers } from './controllers';

// Instantiating the app
export const app = express();

// Configuring the app
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(
  session({ resave: true, saveUninitialized: true, secret: 'testing_secret_api_key', cookie: { maxAge: 60000 } }),
);
app.use(lusca.xframe('SAMEORIGIN'));
app.use(lusca.xssProtection(true));

// Registering the controllers
registerPingControllers(app);
registerFindControllers(app);
registerCompareControllers(app);
