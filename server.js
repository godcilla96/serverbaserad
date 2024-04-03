// installerat samtliga saker med npm:
// ejs - view engine
// nodemon
// express
// body-parser (möjlighet att läsa in form-data)

const port = 3010;
const express = require("express");
const app = express();
// kurser
const courses = [
    { KURSNAMN: "Webbutveckling I", KURSKOD: "DT057G", PROGRESSION: "A", KURSPLAN: "https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/DT057G/" },
    { KURSNAMN: "Introduktion till programmering i JavaScript", KURSKOD: "DT084G", PROGRESSION: "A", KURSPLAN: "https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/DT084G/" },
    { KURSNAMN: "Grafisk teknik för webb", KURSKOD: "DT200G", PROGRESSION: "A", KURSPLAN: "https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/DT200G/" },
    { KURSNAMN: "Webbanvändbarhet", KURSKOD: "DT068G", PROGRESSION: "B", KURSPLAN: "https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/DT068G/" },
];


// view engine
app.set("view engine", "ejs");

// lägger till statiska filer 
app.use(express.static("public"));

// routing
app.get("/", (req, res) => {
    db.all("SELECT * FROM courses", (err, rows) => {
        if (err) {
            console.error("Error fetching courses:", err.message);
            res.render("error", { error: "Det uppstod ett fel när kurserna skulle hämtas." });
        } else {
            res.render("index", { courses: rows });
        }
    });
});
app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/addcourse", (req, res) => {
    res.render("addcourse", { courses: courses });
});

// starta applikation
app.listen(port, () => { 
    console.log("Server started on port: " + port);
});




//Databaskod
const sqlite3 = require("sqlite3").verbose();


app.use(express.urlencoded({ extended: true }));

const db = new sqlite3.Database("./db/cv.db");

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
      res.redirect("/");
    }

  });
});


//ta bort lagrad data
app.post("/delete-course", (req, res) => {
    let courseId = req.body.courseId; 
    
    if (Array.isArray(courseId)) {
        courseId = courseId[0];
    }
    console.log("Received courseId for deletion:", courseId);
    
    db.run("DELETE FROM courses WHERE id = ?", [courseId], function(err) {
        if (err) {
            console.error("Error deleting course:", err.message);
            res.send("Det uppstod ett fel när kursen skulle tas bort.");
        } else {
            console.log("Course deleted successfully. Course ID:", courseId);
            //återsänder användaren till index-sidan
            res.redirect("/");
        }
    });
});
//börjar om index på 1 vid raderande/tillägg av kurser
db.run("DELETE FROM sqlite_sequence WHERE name='courses'", function(err) {
    if (err) {
        console.error("Error resetting auto-increment sequence:", err.message);
    } else {
        console.log("Auto-increment sequence reset successfully for table 'courses'");
    }
});