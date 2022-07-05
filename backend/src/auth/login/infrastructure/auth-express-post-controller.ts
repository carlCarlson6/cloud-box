import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { ExpressRouteController } from "../../../infrastructure/express/express-route-controller";
import { usersAzureStorageTable } from "../../infrastructure/users-azure-storage-table";
import { LoginCommand, LoginUser, LoginUserUseCase } from "../login-user";

class AuthExpressPostController implements ExpressRouteController {
    constructor(
        private readonly useCase: LoginUserUseCase,
    ) {}

    async handle(request: Request<ParamsDictionary, any, LoginCommand, ParsedQs, Record<string, any>>, response: Response): Promise<void> {
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

export const authExpressPostController = new AuthExpressPostController(new LoginUser(usersAzureStorageTable));