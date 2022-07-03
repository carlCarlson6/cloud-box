import { Request, Response, Router } from "express";
import { filesExpressGetController } from "./controllers/files-express-get-controller";
import { filesExpressPostController } from "./controllers/files-express-post-controller";

export const filesRouter = Router()
    .get("/", (request: Request, response: Response) => filesExpressGetController.handle(request, response))
    .post("/", (request: Request, response: Response) => filesExpressPostController.handle(request, response));

export const filesBaseUri = "/api/files";