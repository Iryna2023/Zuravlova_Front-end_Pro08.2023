function pow(num, degree) {
    if (degree === 0) {
        return 1;
    } else if (degree === 1) {
        return num;
    } else {
        let result = num * pow(num, degree - 1);
        alert(num + ' в ступені ' + degree + ' = ' + result)
        return result;
    }
}

pow(2, 5);