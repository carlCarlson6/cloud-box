import { v4 as uuidV4 } from "uuid";
import { hash } from "bcrypt";
import { UserContext } from "../common/user-context";

export type User = {
    id: string
    email: string
    hashedPassword: string
}

export const createNewUser = async (newUserData: {email: string, inputPassword: string}): Promise<User> => {
    const id = uuidV4();
    const hashedPassword = await hash(newUserData.inputPassword, 11);
    
    return { id, email: newUserData.email, hashedPassword };
}

export const validateCredentials = async (user: User, {email, password}: {email: string, password: string }): Promise<boolean> => {
    return false;
}

export const toUserContext = (user: User): UserContext => ({
    userIdentifier: user.id
});