import express, { Express } from 'express';
import cors from 'cors';
import { filesBaseUri, filesRouter } from '../../files/infrastructure/files-express-router';
import { authBaseUri, authRouter } from '../../auth/infrastructure/auth-express-router';

export const expressServer = express()
    .set('port', process.env.SERVER_PORT || 4000)
    .use(express.json())
    .use(cors())
    .use(filesBaseUri, filesRouter)
    .use(authBaseUri, authRouter);

export const serverRunner = (expressApp: Express) => expressApp.listen(
    expressApp.get('port'), 
    '0.0.0.0', 
    () => console.info('the server is running on', expressApp.get('port'))
);