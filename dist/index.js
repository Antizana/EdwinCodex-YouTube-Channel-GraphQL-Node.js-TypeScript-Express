"use strict";
/**
 * GraphQL - Node.js - Express - Typescript for my YouTube channel
 */
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
app.get('/', (req, res) => {
    return res.json({ message: 'Hello World!!' });
});
app.listen(3000, () => {
    console.log("App is running on PORT 3000");
});
//# sourceMappingURL=index.js.map