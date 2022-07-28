import { Request, Response, Router } from "express";
import { AuthExpressPutController } from "../sign-up/infrastructure/auth-express-put-controller";
import { AuthExpressPostController } from "../login/infrastructure/auth-express-post-controller";
import { SignUpAppUser } from "../sign-up/sign-up-app-user";
import { getAzureStoreConfig } from "../../infrastructure/azure-storage/azure-storage-config";
import { UsersAzureStorageTable } from "./users-azure-storage-table";
import { LoginUser } from "../login/login-user";
import { BootstrapRouter } from "../../infrastructure/express/bootstrap-router";

export const bootstrapAuthRouter: BootstrapRouter = () => {
    const userRepository = new UsersAzureStorageTable(getAzureStoreConfig());

    const put = new AuthExpressPutController(new SignUpAppUser(userRepository));
    const post = new AuthExpressPostController(new LoginUser(userRepository));

    const router = Router()
        .put("/", (request: Request, response: Response) => put.handle(request, response))
        .post("/", (request: Request, response: Response) => post.handle(request, response));

    return { uri: "/api/auth", router };
}