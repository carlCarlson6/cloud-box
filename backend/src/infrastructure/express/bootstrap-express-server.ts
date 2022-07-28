import express, { Express } from 'express';
import cors from 'cors';
import { bootstrapFilesRouter } from '../../files/infrastructure/files-express-router';
import { bootstrapAuthRouter } from '../../auth/infrastructure/auth-express-router';

export const bootstrapExpressServer = () => {
    const { uri: authUri, router: authRouter } = bootstrapAuthRouter();
    const { uri: filesUri, router: filesRouter } = bootstrapFilesRouter();

    return express()
        .set('port', process.env.SERVER_PORT || 4000)
        .use(express.json())
        .use(cors())
        .use(filesUri, filesRouter)
        .use(authUri, authRouter);
}

export const runServer = (expressApp: Express) => expressApp.listen(
    expressApp.get('port'), 
    '0.0.0.0', 
    () => console.info('the server is running on', expressApp.get('port'))
)
