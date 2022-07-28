import { config as readEnv} from "dotenv";

readEnv()

import { bootstrapExpressServer, runServer } from "./infrastructure/express/bootstrap-express-server";
import { bootstrapUsersTable } from "./auth/infrastructure/users-azure-storage-table";

(async () => {
    await bootstrapUsersTable();
    const server = bootstrapExpressServer();
    runServer(server);
})();