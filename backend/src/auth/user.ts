import { v4 as uuidV4 } from "uuid";
import { hash, compare } from "bcrypt";
import { UserContext } from "../common/user-context";

export type User = {
    id: string
    email: string
    hashedPassword: string
}

export const createNewUser = async (newUserData: {email: string, inputPassword: string}): Promise<User> => {
    const hashedPassword = await hash(newUserData.inputPassword, 11);
    return { id: uuidV4(), email: newUserData.email, hashedPassword };
}

export const validateCredentials = async (user: User, {email, password}: {email: string, password: string }): Promise<boolean> => {
    const emailValidation = user.email === email;
    const passwordValidation = compare(password, user.hashedPassword);
    return emailValidation && passwordValidation;
}

export const toUserContext = (user: User): UserContext => ({
    userIdentifier: user.id
});
