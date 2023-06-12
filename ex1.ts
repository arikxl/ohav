// 1) 1.1- Create a Person class, has 5 attributes - id, name, birthday, parentName, hobby.
//   1.2 - Create getters / setters for each attribute (getName, setName etc..)
//   1.3 - Create a class Teacher that extends Person, and adds new attributes:
//    a) array of professions the teacher is teaching
//    b) schoolName: string - the school the teacher is teaching
//    c) startDate: string - a date string when the teacher started teaching
//  2) create a Student class that extends Person with 3 additional attributes:
//   a) the classes the student takes (array of strings)
//   b) startDate: a date string when the student started studying
//   c) teacher: Teacher - the "educator" teacher of the student (needs to be an instance of the class Teacher)
// // read at home about public/protected/private functions in Classes
//   2.1 add to student a public method - getAverage() - that returns the average score of the student
//   2.2 add a private method getScoreByClass(class: string) that returns the score per provided argument class
//   2.3 - protected method in Person - getIdPlusName - that returns the string: '{ID}_{NAME}'
// 3) [Bonus] - Solve the let o = '( [ ) ]' example in leetcode challenge we did in class (isValid string ((())))

class Person {
    id: number;
    name: string;
    birthday: string;
    parentName: string;
    hobby: string;
    constructor(id: number, name: string, birthday: string, parentName: string, hobby: string) {
        this.id = id;
        this.name = name;
        this.birthday = birthday;
        this.parentName = parentName;
        this.hobby = hobby;
    }

    getId(): number {
        return this.id;
    }
    setId(value: number) {
        this.id = value;
    }

    getName(): string {
        return this.name;
    }
    setName(value: string) {
        this.name = value;
    }

    getBirthday(): string {
        return this.birthday;
    }
    setBirthday(value: string) {
        this.birthday = value;
    }

    getParentName(): string {
        return this.parentName;
    }
    setParentName(value: string) {
        this.parentName = value;
    }

    getHobby(): string {
        return this.hobby;
    }
    setHobby(value: string) {
        this.hobby = value;
    }

    protected getIdPlusName(): string {
        return `${this.id}_${this.name}`;
    }

}

const arik = new Person(1001, "Arik", "16/22/84", "Ra'aya", "Eating");
// console.log('arik:', arik)
// console.log(arik.getHobby())
// arik.setParentName('RAYA')
// console.log('arik:', arik)



class Teacher extends Person {
    professions: string[];
    schoolName: string;
    startDate: string;

    constructor(
        id: number,
        name: string,
        birthday: string,
        parentName: string,
        hobby: string,
        professions: string[],
        schoolName: string,
        startDate: string
    ) {
        super(id, name, birthday, parentName, hobby);
        this.professions = professions;
        this.schoolName = schoolName;
        this.startDate = startDate;
    }
}

const yaron = new Teacher(
    1,
    "Yaron Biton",
    "01/01/70",
    "Saba",
    "smoking",
    ["JS", "Algo"],
    "CA School",
    "02/03/2001"
);

console.log('yaron:', yaron)
// console.log(yaron.name);
// console.log(yaron.professions);
// yaron.name = "YARON";
// yaron.professions.push("css");
// console.log(yaron.professions);
// console.log(yaron.name);



class Student extends Person {
    classes: string[];
    startDate: string;
    teacher: Teacher;
    grades: number[];


    constructor(
        id: number,
        name: string,
        birthday: string,
        parentName: string,
        hobby: string,
        classes: string[],
        startDate: string,
        teacher: Teacher,
        grades: number[]
    ) {
        super(id, name, birthday, parentName, hobby);
        this.classes = classes;
        this.startDate = startDate;
        this.teacher = teacher;
        this.grades = grades;
    }

    getAverage(): number {
        if (this.grades.length === 0) {
            return 0;
        }

        const sum = this.grades.reduce((a, c) => a + c, 0);
        const average = sum / this.grades.length;
        return average;
    }

    private getScoreByClass(className: string): number | undefined {
        const index = this.classes.indexOf(className);
        if (index !== -1 && index < this.grades.length) {
            return this.grades[index];
        }
        return undefined;
    }
}

const ohav = new Student(
    1,
    "Ohav Yaron",
    "10/10/2000",
    "Aba Ima",
    "Coding",
    ["Html", "css", "js"],
    "12/06/23",
    yaron,
    [100, 89, 95]
);


// console.log('ohav:', ohav)
// console.log(ohav.name);
// console.log(ohav.classes);
// console.log(ohav.teacher.name);
// console.log(ohav.getAverage()); 

// ohav.name = "OHAV!!!";
// ohav.classes.push("TS");
// ohav.teacher.name = "ARIK";

// console.log(ohav.name);
// console.log(ohav.classes);
// console.log(ohav.teacher.name);
// console.log(ohav.getAverage()); 
