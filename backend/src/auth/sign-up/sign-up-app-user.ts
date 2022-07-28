import { UseCase } from "../../common/use-case";
import { Jwt } from "../jwt";
import { createNewUser, toUserContext } from "../user";
import { UsersRepository } from "../users-repository";

export type SignUpAppUserCommand = {
    email: string;
    inputPassword: string;
};

export type SigUpUseCase = UseCase<SignUpAppUserCommand, Promise<Jwt>>;

export class SignUpAppUser implements SigUpUseCase {
    constructor(
        private readonly usersRepository: UsersRepository,
    ) {}
    
    async execute(input: SignUpAppUserCommand): Promise<Jwt> {
        const user = await createNewUser(input);
        await this.usersRepository.save(user);
        return Jwt.Sign(toUserContext(user));
    }
}
