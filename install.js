//Installationsfil för sqlite-test

const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./db/cv.db");

db.serialize(() => {
    db.run("DROP TABLE IF EXISTS courses;");

    db.run(`
        CREATE TABLE  courses (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            coursename TEXT NOT NULL,
            coursecode TEXT NOT NULL,
            progression TEXT NOT NULL,
            syllabus TEXT NOT NULL,
            course_added TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
        );
    `);
});

db.close();

