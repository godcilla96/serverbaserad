// installerat samtliga saker med npm:
// ejs - view engine
// nodemon
// express
// body-parser (möjlighet att läsa in form-data)

const port = 3010;
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




//Databaskod
const sqlite3 = require("sqlite3").verbose();


app.use(express.urlencoded({ extended: true }));

const db = new sqlite3.Database("./db/courses.db");

app.post("/add-course", (req, res) => {
  const { coursename, coursecode, progression, syllabus } = req.body;

  db.run(`
    INSERT INTO courses (coursename, coursecode, progression, syllabus)
    VALUES (?, ?, ?, ?)
  `, [coursename, coursecode, progression, syllabus], function(err) {
    if (err) {
      console.error("Error adding course:", err.message);
      res.send("Det uppstod ett fel när kursen skulle läggas till.");
    } else {
      console.log("Course added successfully. Course ID:", this.lastID);
      res.send("Kursen har lagts till framgångsrikt.");
    }
  });
});