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
    { 
        KURSNAMN: "Webbutveckling I", 
        details: {
            KURSKOD: "DT057G", 
            PROGRESSION: "A", 
            KURSPLAN: "https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/DT057G/" 
        } 
    },
    { 
        KURSNAMN: "Introduktion till programmering i JavaScript", 
        details: {
            KURSKOD: "DT084G", 
            PROGRESSION: "A", 
            KURSPLAN: "https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/DT084G/" 
        } 
    },
    { 
        KURSNAMN: "Grafisk teknik för webb", 
        details: {
            KURSKOD: "DT200G", 
            PROGRESSION: "A", 
            KURSPLAN: "https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/DT200G/" 
        } 
    },
    { 
        KURSNAMN: "Webbanvändbarhet", 
        details: {
            KURSKOD: "DT068G", 
            PROGRESSION: "B", 
            KURSPLAN: "https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/DT068G/" 
        } 
    }, 
    { 
        KURSNAMN: "Databaser", 
        details: {
            KURSKOD: "DT003G", 
            PROGRESSION: "B", 
            KURSPLAN: "https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/DT003G/" 
        }
    },
    { 
        KURSNAMN: "Frontend-baserad webbutveckling", 
        details: {
            KURSKOD: "DT211G", 
            PROGRESSION: "B", 
            KURSPLAN: "https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/DT211G/" 
        }
    },
    { 
        KURSNAMN: "Backend-baserad webbutveckling", 
        details: {
            KURSKOD: "DT207G", 
            PROGRESSION: "B", 
            KURSPLAN: "https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/DT207G/" 
        } 
    },
    { 
        KURSNAMN: "Programmerings i Typescript", 
        details: {
            KURSKOD: "DT208G", 
            PROGRESSION: "B", 
            KURSPLAN: "https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/DT208G/" 
        } 
    },
    { 
        KURSNAMN: "Projektledning", 
        details: {
            KURSKOD: "IK060G", 
            PROGRESSION: "A", 
            KURSPLAN: "https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/IK060G/" 
        } 
    },
    { 
        KURSNAMN: "Programmering i C#.NET", 
        details: {
            KURSKOD: "DT071G", 
            PROGRESSION: "A", 
            KURSPLAN: "https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/DT071G/" 
        } 
    },
    { 
        KURSNAMN: "Fullstack-utveckling med ramverk", 
        details: {
            KURSKOD: "DT193G", 
            PROGRESSION: "B", 
            KURSPLAN: "https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/DT193G/" 
        } 
    },
    { 
        KURSNAMN: "Webbutveckling för WordPress", 
        details: {
            KURSKOD: "DT209G", 
            PROGRESSION: "B", 
            KURSPLAN: "https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/DT209G/" 
        } 
    },
    { 
        KURSNAMN: "Webbutveckling med .NET", 
        details: {
            KURSKOD: "DT191G", 
            PROGRESSION: "B", 
            KURSPLAN: "https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/DT191G/" 
        } 
    },
    { 
        KURSNAMN: "Fördjupad frontend-utveckling", 
        details: {
            KURSKOD: "DT210G", 
            PROGRESSION: "B", 
            KURSPLAN: "https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/DT210G/" 
        } 
    },
    { 
        KURSNAMN: "Självständigt arbete", 
        details: {
            KURSKOD: "DT140G", 
            PROGRESSION: "B", 
            KURSPLAN: "https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/DT140G/" 
        } 
    }
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
    res.render("addcourse", { errors: [], courses: courses });
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
  
    // Skapa en array för att lagra felmeddelanden
    const errors = [];
  
    // Kontrollera om något av fälten är tomma
    if (!coursename) {
      errors.push("Ange kursnamn");
    }
    if (!coursecode) {
      errors.push("Ange kurskod");
    }
    if (!progression) {
      errors.push("Ange progression");
    }
    if (!syllabus) {
      errors.push("Ange länk till kursplan");
    }
  
    // Felmeddelanden
    if (errors.length > 0) {
        return res.render("addcourse", { errors: errors, coursename: coursename, coursecode: coursecode, progression: progression, syllabus: syllabus, courses: courses });
      }
    
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