import { config as readEnv} from "dotenv";

readEnv()

import {expressServer, serverRunner} from "./infrastructure/express/bootstrap-express-server";
import { bootstrapUsersTable } from "./auth/infrastructure/users-azure-storage-table";

(async () => {
    await bootstrapUsersTable();
    serverRunner(expressServer);
})();