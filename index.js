var express = require("express");
var app = express();
var path = require("path");
var mdb = require("mongoose");
const usermodel = require("KecComputingBackend\models/users.js");
const contactmodel = require("KecComputingBackend\models\contact.js");


app.use(express.json());
mdb
  .connect("mongodb://localhost:27017/")
  .then(() => {
    console.log("Mongodb Connected");
  })
  .catch(() => {
    console.log("Mongodb Not Connected");
  });

const PORT = 3001;

app.post("/signup", (req, res) => {
  var { FirstName, LastName, Email, Password } = req.body;
  console.log(FirstName, LastName, Email, Password);
  try {
    var newuser = new usermodel({
      FirstName: FirstName,
      LastName: LastName,
      Email: Email,
      Password: Password,
    });
    newuser.save();
    res.status(200).send("user added succesfully");
    console.log("user added succesfully");
  } catch (error) {
    console.log(error);
  }
});

app.post("/contact", (req, res) => {
  var { Username, Email, Messages } = req.body;
  try {
    var newmess = new contactmodel({
      Username: Username,
      Email: Email,
      Messages: Messages,
    });
    newmess.save();
    res.send("Messages Sent Successfuly");
  } catch (error) {
    console.log(error);
  }
});

app.get("/signin", async (req, res) => {
  try {
    const a = await usermodel.find();
    console.log(a)
    res.json(a)
  } catch (error) {
    console.log(error)
  }
})

app.listen(PORT, () => {
  console.log(`Server starts \nURL: http://localhost:${PORT}`);
});