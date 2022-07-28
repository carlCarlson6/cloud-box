import { Request } from "express";
import { UserContext } from "../../common/user-context";

export const readUserContext = (request: Request): UserContext => {
    const authHeader = request.headers.authorization;
    if(!authHeader) throw new Error("missing header");
    
    const cleannedHeader = authHeader.replace("Bearer ", "");
    if (cleannedHeader.length === 0) throw new Error("missing header");

    throw new Error("NOT IMPLEMENTED");
}