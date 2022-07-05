import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { ExpressRouteController } from "../../../infrastructure/express/express-route-controller";
import { usersAzureStorageTable } from "../../infrastructure/users-azure-storage-table";
import { SigInUseCase, SignInAppUser } from "../sign-in-app-user";
import { SignInAppUserCommand } from "../sign-in-app-user-command";

class AuthExpressPutController implements ExpressRouteController {
    constructor(
        private readonly useCase: SigInUseCase,
    ) {}

    async handle(request: Request<ParamsDictionary, any, SignInAppUserCommand, ParsedQs, Record<string, any>>, response: Response): Promise<void> {
        try {
            const jwt = await this.useCase.execute(request.body);
            response.status(200).json({
                token: jwt.value
            });
        }
        catch(e) {
            const error = e as Error;
            response.status(500).json({ message: error.message });
        }
    }
}

export const authExpressPutController = new AuthExpressPutController(new SignInAppUser(usersAzureStorageTable));