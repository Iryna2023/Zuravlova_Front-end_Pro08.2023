class Student {
    constructor(name, surname, birthYear, grades) {
        this.name = name;
        this.surname = surname;
        this.birthYear = birthYear;
        this.grades = grades;
        this.attendance = new Array(25).fill(null);
    }

    getAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    }

    getAverageGrade() {
        const sum = this.grades.reduce((a, b) => a + b, 0);
        return sum / this.grades.length || 0;
    }

    present() {
        const firstEmptyIndex = this.attendance.indexOf(null);
        if (firstEmptyIndex === -1)  {
            return;
        }
        this.attendance[firstEmptyIndex] = true;
        }
     
    absent() {
        const firstEmptyIndex = this.attendance.indexOf(null);
        if (firstEmptyIndex === -1) {
            return;
        }
        this.attendance[firstEmptyIndex] = false;
    }
        
    summary() {
        const averageGrade = this.getAverageGrade();
        const averageAttendance = this.attendance.filter(Boolean).length / this.attendance.length;

        if (averageGrade > 90 && averageAttendance > 0.9) {
            alert ('Молодець!');
        } else 
                if ((averageGrade < 90 && averageAttendance >= 0.9) || (averageGrade >= 90 && averageAttendance < 0.9)) {
                alert ('Добре, але можна краще!');
        } else {
            alert ('Редиска!');
        }
    }
}

const student1 = new Student('Сергій', 'Омельченко', 1993, [100, 100, 100, 100, 100]);
    for (let i = 0; i < 25; i++) {
        student1.present();
    }
    for (let i = 0; i < 0; i++) {
        student1.absent();
    }
    alert(`Студент: ${student1.name} ${student1.surname}, Вік: ${student1.getAge()}`)
    student1.summary();

const student2 = new Student('Ярослав', 'Демченко', 1994, [81, 82, 83, 84, 85]);
    for (let i = 0; i < 25; i++) {
        student2.present();
    }
    for (let i = 0; i < 0; i++) {
        student2.absent();
    }
    alert(`Студент: ${student2.name} ${student2.surname}, Вік: ${student2.getAge()}`);
    student2.summary();

const student3 = new Student('Олег', 'Гриненко', 1993, [5, 2, 3, 4, 5]);
    for (let i = 0; i < 5; i++) {
        student3.present();
    }
    for (let i = 0; i < 20; i++) {
        student3.absent();
    }
    alert(`Студент: ${student3.name} ${student3.surname}, Вік: ${student3.getAge()}`);
    student3.summary();