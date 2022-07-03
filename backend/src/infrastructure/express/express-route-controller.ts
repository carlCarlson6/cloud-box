import { Request, Response } from "express";

export interface ExpressRouteController {
    handle(request: Request, response: Response): Promise<void>;
}