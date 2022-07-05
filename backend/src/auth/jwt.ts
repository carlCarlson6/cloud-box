import { UserContext } from "../common/user-context";
import jwt from "jsonwebtoken";

export class Jwt {
    private constructor(
        readonly value: string
    ) {}

    static Sign(user: UserContext): Jwt {
        const token = jwt.sign(user, process.env.JWT_SECRET!, {expiresIn: process.env.JWT_EXPERIS_IN!});
        return new Jwt(token);
    }
}