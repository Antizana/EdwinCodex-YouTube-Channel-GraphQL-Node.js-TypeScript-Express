"use strict";
/**
 * GraphQL - Node.js - Express - Typescript for my YouTube channel
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const express_graphql_1 = require("express-graphql");
const schema_1 = __importDefault(require("./src/schema"));
const app = express();
app.get('/', (_req, res) => {
    return res.json({ message: 'Hello World!!' });
});
app.use('/graphql', (0, express_graphql_1.graphqlHTTP)({
    schema: schema_1.default,
    rootValue: global,
    graphiql: true
}));
app.listen(3000, () => {
    console.log("App is running on PORT 3000");
});
//# sourceMappingURL=index.js.map