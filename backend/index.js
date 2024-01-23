const express = require("express");
const cors = require('cors');
require('dotenv').config();
const mainRouter = require('../backend/routes/index');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", mainRouter);

const port = process.env.PORT || 3000;

app.listen(port, (error) => {
    if (error) {
        console.error(`Error starting server: ${error.message}`);
    } else {
        console.log(`Hello From Paytm server on port ${port}`);
    }
});
