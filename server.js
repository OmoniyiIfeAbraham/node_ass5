const express = require("express");
const app = express();
const mongoose = require("mongoose");
const session = require("express-session");
const dotenv = require("dotenv");
dotenv.config();

const homeRouter = require('./routes/home')
const addNoteRouter = require('./routes/addNote')

const PORT = process.env.PORT || 3000; //PORT Number

// Connect database
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    if (res) {
      console.log("Database Connected Succesfully");
      app.listen(PORT, () => console.log(`App listening on PORT: ${PORT}`));
    }
  })
  .catch((err) => {
    console.log(err);
  });


app.set("view engine", "ejs"); //set Template engine

app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.use('/', homeRouter)
app.use('/addNote', addNoteRouter)