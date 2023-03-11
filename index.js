const express = require("express");
const dotenv = require("dotenv").config({ path: './config/.env'});
const routes =  require("./routes/openaiRoutes");
var logger = require('morgan');

const PORT = process.env.PORT || 5000;

const app = express();

app.set("view engine", "ejs");
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", routes);

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
})