import { config as readEnv} from "dotenv";

readEnv()

export type JwtConfiguration = {
    secret: string,
    expiresIn: string
}

export const jwtConfig: JwtConfiguration = {
    secret: process.env.JWT_SECRET!,
    expiresIn: process.env.JWT_EXPERIS_IN!
};