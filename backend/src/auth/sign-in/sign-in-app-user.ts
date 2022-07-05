import { UseCase } from "../../common/use-case";
import { Jwt } from "../jwt";
import { createNewUser, toUserContext } from "../user";
import { UsersRepository } from "../users-repository";
import { SignInAppUserCommand } from "./sign-in-app-user-command";

// TODO - improve naming
export type SigInUseCase = UseCase<SignInAppUserCommand, Promise<Jwt>>;

export class SignInAppUser implements SigInUseCase {
    constructor(
        private readonly usersRepository: UsersRepository,
    ) {}
    
    async execute(input: SignInAppUserCommand): Promise<Jwt> {
        const user = await createNewUser(input);
        await this.usersRepository.save(user);
        return Jwt.Sign(toUserContext(user));
    }
}