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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(id, name, birthday, parentName, hobby) {
        this.id = id;
        this.name = name;
        this.birthday = birthday;
        this.parentName = parentName;
        this.hobby = hobby;
    }
    Person.prototype.getId = function () {
        return this.id;
    };
    Person.prototype.setId = function (value) {
        this.id = value;
    };
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setName = function (value) {
        this.name = value;
    };
    Person.prototype.getBirthday = function () {
        return this.birthday;
    };
    Person.prototype.setBirthday = function (value) {
        this.birthday = value;
    };
    Person.prototype.getParentName = function () {
        return this.parentName;
    };
    Person.prototype.setParentName = function (value) {
        this.parentName = value;
    };
    Person.prototype.getHobby = function () {
        return this.hobby;
    };
    Person.prototype.setHobby = function (value) {
        this.hobby = value;
    };
    Person.prototype.getIdPlusName = function () {
        return "".concat(this.id, "_").concat(this.name);
    };
    return Person;
}());
var arik = new Person(1001, "Arik", "16/22/84", "Ra'aya", "Eating");
// console.log('arik:', arik)
// console.log(arik.getHobby())
// arik.setParentName('RAYA')
// console.log('arik:', arik)
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(id, name, birthday, parentName, hobby, professions, schoolName, startDate) {
        var _this = _super.call(this, id, name, birthday, parentName, hobby) || this;
        _this.professions = professions;
        _this.schoolName = schoolName;
        _this.startDate = startDate;
        return _this;
    }
    return Teacher;
}(Person));
var yaron = new Teacher(1, "Yaron Biton", "01/01/70", "Saba", "smoking", ["JS", "Algo"], "CA School", "02/03/2001");
console.log('yaron:', yaron);
// console.log(yaron.name);
// console.log(yaron.professions);
// yaron.name = "YARON";
// yaron.professions.push("css");
// console.log(yaron.professions);
// console.log(yaron.name);
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(id, name, birthday, parentName, hobby, classes, startDate, teacher, grades) {
        var _this = _super.call(this, id, name, birthday, parentName, hobby) || this;
        _this.classes = classes;
        _this.startDate = startDate;
        _this.teacher = teacher;
        _this.grades = grades;
        return _this;
    }
    Student.prototype.getAverage = function () {
        if (this.grades.length === 0) {
            return 0;
        }
        var sum = this.grades.reduce(function (a, c) { return a + c; }, 0);
        var average = sum / this.grades.length;
        return average;
    };
    Student.prototype.getScoreByClass = function (className) {
        var index = this.classes.indexOf(className);
        if (index !== -1 && index < this.grades.length) {
            return this.grades[index];
        }
        return undefined;
    };
    return Student;
}(Person));
var ohav = new Student(1, "Ohav Yaron", "10/10/2000", "Aba Ima", "Coding", ["Html", "css", "js"], "12/06/23", yaron, [100, 89, 95]);
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
