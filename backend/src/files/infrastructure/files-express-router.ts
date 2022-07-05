import { Request, Response, Router } from "express";
import { filesExpressGetController as get } from "../list/infrastructure/files-express-get-controller";
import { filesExpressPostController as post } from "../upload/infrastructure/files-express-post-controller";

export const filesRouter = Router()
    .get("/", (request: Request, response: Response) => get.handle(request, response))
    .post("/", (request: Request, response: Response) => post.handle(request, response));

export const filesBaseUri = "/api/files";