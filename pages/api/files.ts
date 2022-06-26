import type { NextApiRequest, NextApiResponse } from 'next'
import { filesNextApiRouteHandler } from "../../backend/index";

export default (req: NextApiRequest, res: NextApiResponse) => filesNextApiRouteHandler.handle(req, res);