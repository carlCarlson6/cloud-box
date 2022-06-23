import type { OverriderNextApiRequest } from "./override-next-api-request";
import type { NextApiResponse } from 'next'

export interface NextApiRouteHandler<TIn, TOut> {
    handle(input: OverriderNextApiRequest<TIn>): Promise<NextApiResponse<TOut>>
}