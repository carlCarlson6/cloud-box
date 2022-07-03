import express, { Express } from 'express';
import cors from 'cors';
import { filesBaseUri, filesRouter } from '../../files/infrastructure/express/files-express-router';

export const expressServer = express()
    .set('port', process.env.SERVER_PORT || 4000)
    .use(express.json())
    .use(cors())
    .use(filesBaseUri, filesRouter);

export const serverRunner = (expressApp: Express) => expressApp.listen(
    expressApp.get('port'), 
    '0.0.0.0', 
    () => console.info('the server is running on', expressApp.get('port'))
);