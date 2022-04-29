const express = require ("express");
const cors = require ("cors");
const bodyParser = require ("body-parser");
const mongoose = require ("mongoose");

// // we are using port 8000
// const port = 8000;

const app = express();

require('dotenv/config');

// //we will create these todoRoutes in the future
// const todoRoutes = require("./routes/Todo");

 //Db Connection
mongoose.connect(process.env.DB_CONNECTION , { userNewParser : true }, () =>
    console.log('connected to db!')
);

app.use(cors());
app.use(bodyParser.json());

// app.use("/api", todoRoutes);

// app.listen(port, () => {
//     console.log(`Listening to http://localhost:${port}`);
//   });


// How to we start listining to the server 
app.listen(3000);