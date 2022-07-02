import type { NextApiRequest, NextApiResponse } from 'next'

export interface NextApiHandler {
    handle(request: NextApiRequest, response: NextApiResponse): Promise<void>
}