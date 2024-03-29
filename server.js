// installerat samtliga saker med npm:
// ejs - view engine
// nodemon
// express
// body-parser (möjlighet att läsa in form-data)

const port = 3001;
const express = require("express");
const app = express();

// view engine
app.set("view engine", "ejs");

// lägger till statiska filer 
app.use(express.static("public"));

// routing
app.get("/", (req, resp) => {
    resp.render("index");
});

// starta applikation
app.listen(port, () => {
    console.log("Server started on port: " + port);
});