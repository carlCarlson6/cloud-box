import { config as readEnv} from "dotenv";

readEnv()

import {expressServer, serverRunner} from "./infrastructure/express/bootstrap-express-server";

serverRunner(expressServer);