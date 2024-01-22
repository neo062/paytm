const express = require("express");
const bodyParser = require('body-parser')
const cors = require('cors')
const mainRouter = require('../backend/routes/index')
const app = express()
app.use(cors())
app.use(bodyParser)


app.use("/api/v1", mainRouter)

app.listen(3000, (req, res) => {
    console.log(`Hello From Paytm server`);
});
