import { UserContext } from "../common/user-context";
import jwt from "jsonwebtoken";
import { jwtConfig } from "./infrastructure/jwt-config";

export class Jwt {
    private constructor(
        readonly value: string
    ) {}

    static Sign(user: UserContext): Jwt {
        const token = jwt.sign(user, jwtConfig.secret, { expiresIn: jwtConfig.expiresIn });
        return new Jwt(token);
    }

    static Decode(token: string): UserContext {
        token = token.replace("Bearer ", "");

        var decoded = jwt.decode(token, {json: true});
        if (!decoded) {
            throw new Error("TODO create proper error");
        }

        return decoded.payload;
    }
}