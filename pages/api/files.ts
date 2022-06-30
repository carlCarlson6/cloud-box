import type { NextApiRequest, NextApiResponse } from 'next'
import { filesNextApiRouteHandler } from "../../backend/index";

export const config = {
    api: {
        bodyParser: false,
    }
};

export default (req: NextApiRequest, res: NextApiResponse) => filesNextApiRouteHandler.handle(req, res);