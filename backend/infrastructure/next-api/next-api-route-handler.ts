import type { NextApiRequest, NextApiResponse } from 'next'

export interface NextApiRouteHandler {
    handle(request: NextApiRequest, response: NextApiResponse): Promise<void>
}