let yourName = prompt("What is your name?","");

if (yourName === "") {
    alert("Hello! How are you?");
}

else {
    alert("Hello," +yourName+ "! How are you?");
}

const wasConfirmed = confirm("Let's start?");

if(wasConfirmed) {
    alert("Start");
}

else {
   alert("End");
}