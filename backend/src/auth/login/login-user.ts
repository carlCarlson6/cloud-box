import { UseCase } from "../../common/use-case";
import { Jwt } from "../jwt";
import { toUserContext, validateCredentials } from "../user";
import { UsersRepository } from "../users-repository";

export type LoginCommand = {
    email: string
    password: string
}

// TODO - improve naming
export type LoginUserUseCase = UseCase<LoginCommand, Promise<Jwt>>

export class LoginUser implements LoginUserUseCase {
    constructor(
        private readonly usersRepository: UsersRepository,
    ) {}
    
    async execute({email, password}: LoginCommand): Promise<Jwt> {
        const user = await this.usersRepository.get(email);

        if (!user) throw new Error("user not found"); // TODO - create proper error
        if (await validateCredentials(user, {email, password}))
            throw new Error("invalid user credentials");

        return Jwt.Sign(toUserContext(user));
    }
}