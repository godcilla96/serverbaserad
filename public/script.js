
// inputfälten
const courseNameInput = document.getElementById('courseNameInput');
const courseCodeInput = document.getElementById('courseCodeInput');
const progressionInput = document.getElementById('progressionInput');
const syllabusInput = document.getElementById('syllabusInput');

// eventlistener som lyssnar till det första inputfältet
courseNameInput.addEventListener('input', (event) => {
    const selectedCourseName = event.target.value;
    // förinställd kursarray
    const selectedCourse = courses.find(course => course.KURSNAMN === selectedCourseName);
    // uppdaterar automatiskt de övriga fälten när vald kurs klickas på
    if (selectedCourse) {
        courseCodeInput.value = selectedCourse.details.KURSKOD;
        progressionInput.value = selectedCourse.details.PROGRESSION;
        syllabusInput.value = selectedCourse.details.KURSPLAN;
    } else {
        // raderar inputfälten om inget innehåll finns
        courseCodeInput.value = '';
        progressionInput.value = '';
        syllabusInput.value = '';
    }
});

// definierar kurserna 
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
