/**
 * @fileoverview define the schema for graphql
 */
import {buildSchema} from 'graphql'

/**
 * @description define the schema for graphql
 */
const schema = buildSchema(`
    type Query {
        hello: String
    }`);

export default schema
