import type { NextApiRequest } from 'next'

export type OverriderNextApiRequest<T> = Omit<NextApiRequest, keyof T> & T;