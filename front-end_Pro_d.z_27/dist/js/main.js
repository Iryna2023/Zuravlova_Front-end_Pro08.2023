function submitForm(){var e=document.getElementById("fname").value,t=document.getElementById("lname").value,n=document.getElementById("dob").value,d=document.querySelector("input[name=gender]:checked"),d=d?d.value:"",u=document.getElementById("city").value,m=document.getElementById("address").value,l=document.getElementById("email").value,r=document.getElementById("sport").value,c=document.getElementById("ukrainian").checked,o=document.getElementById("english").checked,a=document.getElementById("polish").checked,i=[];if(c&&i.push("Українська"),o&&i.push("Англійська"),a&&i.push("Польська"),""===e||""===t||""===n||""===d||""===u||""===m||""===l||""===r)return alert("Зверніть увагу, що всі поля форми повинні бути заповнені."),!1;if(!n.match(/^\d{4}-\d{2}-\d{2}$/))return alert("Дата народження повинна бути у форматі РРРР-ММ-ДД"),!1;if(!l.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/))return alert("Будь ласка, введіть правильну електронну адресу."),!1;if(!c&&!o&&!a)return alert("Будь ласка, оберіть хоча б одну мову."),!1;document.querySelector("h2").innerText="Данні реєстрації:";c="Ім'я: "+e+"<br>Прізвище: "+t+"<br>Дата народження: "+n+"<br>Стать: "+d+"<br>Місто: "+u+"<br>Адреса: "+m+"<br>Ваша пошта: "+l+"<br>Спорт, який Вам подобається більше: "+r+"<br>Мови: "+i.join(", ");document.getElementById("output").innerHTML=c,document.getElementById("registrationForm").style.display="none",document.getElementById("output").style.display="block"}