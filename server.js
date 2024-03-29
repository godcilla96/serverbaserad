// installerat samtliga saker med npm:
// ejs - view engine
// nodemon
// express
// body-parser (möjlighet att läsa in form-data)

const port = 3330;
const express = require("express");
const app = express();

// view engine
app.set("view engine", "ejs");

// lägger till statiska filer 
app.use(express.static("public"));

// routing
app.get("/", (req, res) => {
    res.render("index");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/addcourse", (req, res) => {
    res.render("addcourse");
});

// starta applikation
app.listen(port, () => {
    console.log("Server started on port: " + port);
});
