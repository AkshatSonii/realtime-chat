const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");

dotenv.config();
connectDB();
const app = express();

app.use(express.json()); // to accept json data



app.use("/api/user", userRoutes);


const PORT = process.env.PORT;


app.listen(PORT, () =>{
    console.log('Server on port', PORT);
})