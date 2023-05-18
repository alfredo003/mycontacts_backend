const express = require('express');
const connectDB = require('./config/dbConnection');
const errorHandler = require('./middleware/errorHandler');
const dotenv = require("dotenv").config();

connectDB();
const app =express();
const port = process.env.PORT || 5000;

app.use(express.json())
app.use("/api/contacts",require('./routes/contactRoute'));
app.use(errorHandler)


app.listen(port,()=>{console.log(`SERVER RUNNING IN PORT: ${port}`)})
