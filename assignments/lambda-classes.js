// CODE here for your Lambda Classes.
class Person  {
    constructor (value) {
        this.name = value.name;
        this.age = value.age;
        this.location = value.location;
        this.gender = value.gender;
    }
    speak () {
        return `Hello, my name is ${this.name}, I am from ${this.location}.`
    }
}

class Instructor {
    constructor (value) {
        this.specialty = value.specialty;
        this.favLanguage = value.favLanguage;
        this.catchPhrase = value.catchPhrase;
    }
    demo (subject) {
        return `Today we are learning about ${this.subject}`
    }
    grade (student, subject) {
        return `${this.name} revieves a perfect score on ${this.subject}`
    }
}

class Student {
    constructor (value) {
        this.previousBackground = value.previousBackground;
        this.className = value.className;
        this.favSubjects = value.favSubjects;
    }
    listsSubjects () {
        return listsSubjects.call(this.favSubjects);
    }
    PRAssignment (subject) {
        return `${this.student} has submitted a PR for ${this.subject}`;
    }
    sprintChallenge (subject) {
        return `${this.student} has begun sprint challenge on ${this.subject}`;
    }
}

class ProjectManager {
    constructor (value) {
        this.gradClassName = value.gradClassName;
        this.favInstructor = value.favInstructor;
    }
    standUp (slack) {
        return `${this.name} has begun spring challenge on ${this.subject}`;
    }
    debugsCode (student) {
        return `${this.name} debugs ${student.name}'s code on ${this.subject}`;
    }
}

const cam = new Instructor ({
    name: 'Cam Pope',
    location: 'Utah',
    age: '57',
    gender: 'M',
    specialty: 'Clojure',
    favLanguage: 'JS',
    catchPhrase: "I'm getting married"
})

const max = new Student ({
    name: 'Max Keller',
    location: 'Utah',
    age: '26',
    gender: 'M',
    previousBackground: 'Climbing rocks',
    className: 'WEBPT4',
    favSubjects: ['CSS', 'JS', 'Biology']
})

const jeffe = new ProjectManager ({
    name: 'Jeffe Kangaroo',
    location: 'Californ-ia',
    age: '15',
    gender: 'M',
    gradClassName: 'CS1',
    favInstructor: 'Patrick K.',
    })

