import { Request, Response, Router } from "express";
import { authExpressPutController as put } from "../sign-in/infrastructure/auth-express-put-controller";
import { authExpressPostController as post } from "../login/infrastructure/auth-express-post-controller";

export const authRouter = Router()
    .put("/", (request: Request, response: Response) => put.handle(request, response))
    .post("/", (request: Request, response: Response) => post.handle(request, response));

export const authBaseUri = "/api/auth";