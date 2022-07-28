import { Router } from "express"

export type BootstrapRouter = () => {
    uri: string,
    router: Router,
}