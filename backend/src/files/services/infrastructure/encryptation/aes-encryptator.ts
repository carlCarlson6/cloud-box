import { SHA256 } from "crypto-js";
import { Encryptator } from "../../encryptator";

export class Sha256Encryptator implements Encryptator {
    encode(input: string): string {
        return SHA256(input).toString().toLowerCase();
    }
}

export const encriptator = new Sha256Encryptator();