function submitForm() {
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var dob = document.getElementById('dob').value;
    var genderRadio = document.querySelector('input[name=gender]:checked');
    var gender = genderRadio ? genderRadio.value : "";
    var city = document.getElementById('city').value;
    var address = document.getElementById('address').value;
    var email = document.getElementById('email').value;
    var sport = document.getElementById('sport').value;
    var ukrainian = document.getElementById('ukrainian').checked;
    var english = document.getElementById('english').checked;
    var polish = document.getElementById('polish').checked;
    var languages = [];

        if (ukrainian) languages.push('Українська');
        if (english) languages.push('Англійська');
        if (polish) languages.push('Польська');

        if (fname === "" || lname === "" || dob === "" || gender === "" || city === "" || address === "" || email === "" || sport === "") {
            alert("Зверніть увагу, що всі поля форми повинні бути заповнені.");
            return false;
        }

    var date_regex = /^\d{4}-\d{2}-\d{2}$/;
        if (!dob.match(date_regex)) {
            alert("Дата народження повинна бути у форматі РРРР-ММ-ДД");
            return false;
        }

    var email_regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        if (!email.match(email_regex)) {
            alert("Будь ласка, введіть правильну електронну адресу.");
            return false;
        }

        if (!ukrainian && !english && !polish) {
            alert("Будь ласка, оберіть хоча б одну мову.");
            return false;
        }

    document.querySelector('h2').innerText = "Данні реєстрації:";

    var output = "Ім'я: " + fname + "<br>" +
                "Прізвище: " + lname + "<br>" +
                "Дата народження: " + dob + "<br>" +
                "Стать: " + gender + "<br>" +
                "Місто: " + city + "<br>" +
                "Адреса: " + address + "<br>" +
                "Ваша пошта: " + email + "<br>" +
                "Спорт, який Вам подобається більше: " + sport + "<br>" +
                "Мови: " + languages.join(', ');

    document.getElementById('output').innerHTML = output;
    document.getElementById('registrationForm').style.display = 'none';
    document.getElementById('output').style.display = 'block';
}