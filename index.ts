/**
 * GraphQL - Node.js - Express - Typescript for my YouTube channel
 */

 import express = require("express");

 const app = express();

 app.get('/', (req, res) => {
     return res.json({ message: 'Hello World!!' });
 })

 app.listen(3000, () => {
   console.log("App is running on PORT 3000");
 });
