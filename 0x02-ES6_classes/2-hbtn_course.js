export default class HolbertonCourse {
  constructor(name, length, students) {
    this.#checkNameIsString(name);
    this.#checkLengthIsNumber(length);
    this.#checkStudentsIsArrayOfStrings(students);
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this.#checkNameIsString(newName);
    this._name = newName;
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    this.#checkLengthIsNumber(newLength);
    this._length = newLength;
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    this.#checkStudentsIsArrayOfStrings(newStudents);
    this._students = newStudents;
  }

  #checkNameIsString(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
  }

  #checkLengthIsNumber(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
  }

  #checkStudentsIsArrayOfStrings(students) {
    if (!Array.isArray(students)) {
      throw new TypeError('Students must be an array');
    }
    if (students.some((student) => typeof student !== 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
  }
}
