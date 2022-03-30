/**
 * GraphQL - Node.js - Express - Typescript for my YouTube channel
 */

 import express = require("express");
import { graphqlHTTP } from 'express-graphql';
 import schema from './src/schema';

 const app = express();

 app.get('/', (req, res) => {
     return res.json({ message: 'Hello World!!' });
 })

 app.use('/graphql', graphqlHTTP({
     schema,
        rootValue: global,
        graphiql: true
    })
);

 app.listen(3000, () => {
   console.log("App is running on PORT 3000");
 });
