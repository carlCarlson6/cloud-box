import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { ExpressRouteController } from "../../../infrastructure/express/express-route-controller";
import { SigUpUseCase, SignUpAppUserCommand } from "../sign-up-app-user";

export class AuthExpressPutController implements ExpressRouteController {
    constructor(
        private readonly useCase: SigUpUseCase,
    ) {}

    async handle(request: Request<ParamsDictionary, any, SignUpAppUserCommand, ParsedQs, Record<string, any>>, response: Response): Promise<void> {
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
