import { Post } from "./entities/Post";
import { __prod__ } from "./constants";
import * as path from "path";
export default {
    migrations: {
        path: path.join(__dirname, './migrations'),
        pattern: /^[\w-]+\d+\.[tj]s$/,
    },
    entities: [Post],
    dbName: 'lireddit',
    type: 'postgresql',
    debug: !__prod__,
    user: "postgres",
    password: "example"
};
//# sourceMappingURL=mikro-orm.config.js.map