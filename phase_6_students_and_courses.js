function Student(first_name, last_name) {
  this.first_name = first_name;
  this.last_name = last_name;
  this.courses = [];
}

Student.prototype.name = function() {
  return `${this.first_name} ${this.last_name}`;
};

Student.prototype.enroll = function(course) {
  this.courses.push(course);
  course.addStudent(this);
};

function Course(name, department, credits) {
  this.name = name;
  this.department = department;
  this.credits = credits;
  this.students = [];
}

Course.prototype.addStudent = function(student) {
  this.students.push(student);
};

const a = new Student("hello", "hi");
console.log(a.name());
