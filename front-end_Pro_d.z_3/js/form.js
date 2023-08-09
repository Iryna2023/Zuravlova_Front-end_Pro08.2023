let yourAddress = prompt("My address: ","");

let deliveryTime = prompt("Desired delivery time: ","");

let deliveryDate = prompt("Delivery date:","");

alert(`Let's check: ${yourAddress}; ${deliveryTime}; ${deliveryDate}.`);

let enterNumber = String(prompt("Please enter five digits:", ""));

alert(enterNumber.replace(/\d/g, '$& '));