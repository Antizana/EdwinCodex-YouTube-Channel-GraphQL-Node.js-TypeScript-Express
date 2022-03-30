"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @fileoverview define the schema for graphql
 */
const graphql_1 = require("graphql");
/**
 * @description define the schema for graphql
 */
const schema = (0, graphql_1.buildSchema)(`
    type Query {
        hello: String
    }`);
exports.default = schema;
//# sourceMappingURL=schema.js.map