import { User } from "./user";

export interface UsersRepository {
    save(user: User): Promise<void>;
    get(email: string): Promise<User|null>;
}