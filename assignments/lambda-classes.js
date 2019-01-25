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

class Instructor extends Person {
    constructor (value) {
        super (value);
        this.specialty = value.specialty;
        this.favLanguage = value.favLanguage;
        this.catchPhrase = value.catchPhrase;
    }
    demo (subject) {
        return `Today we are learning about ${this.specialty}.`
    }
    grade (student, subject) {
        return `${student.name} revieves a perfect score on ${subject}.`
    }
}

class Student extends Person{
    constructor (value) {
        super (value);
        this.previousBackground = value.previousBackground;
        this.className = value.className;
        this.favSubjects = value.favSubjects;
    }
    listsSubjects (subject) {
         return this.subject;
    }
    PRAssignment (subject) {
        return `${this.name} has submitted a PR for ${subject}.`;
    }
    sprintChallenge (subject) {
        return `${this.name} has begun sprint challenge on ${subject}.`;
    }
}

class ProjectManager extends Instructor {
    constructor (value) {
        super (value);
        this.gradClassName = value.gradClassName;
        this.favInstructor = value.favInstructor;
    }
    standUp (slack) {
        return `${this.name} announces to ${slack}, @channel standy times!`;
    }
    debugsCode (student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
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
    location: 'Dallas, TX',
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
console.log('Lambda-Classes')
console.log(cam.specialty);
console.log(cam.favLanguage);
console.log(cam.catchPhrase);
console.log(cam.demo());
console.log(cam.grade(max, "HTML"))
console.log(max.previousBackground);
console.log(max.className);
console.log(max.favSubjects);
console.log(max.listsSubjects());
console.log(max.sprintChallenge("JS Fundamentals"));
console.log(max.PRAssignment('CSS'));
console.log(jeffe.gradClassName);
console.log(jeffe.favInstructor);
console.log(jeffe.standUp('WebPT4'));
console.log(jeffe.debugsCode(max, 'Javascript'));


