
var project = setInterval(projectDone, 10)
var clients = setInterval(happyClients, 10)
var coffee = setInterval(cupsCoffee, 10)
let count1 = 1;
let count2 = 1;
let count3 = 1;

function projectDone() {
    count1++
    document.querySelector("#number1").innerHTML = count1
    if (count1 == 548) {
        clearInterval(project)
    }
}

function happyClients() {
    count2++
    document.querySelector("#number2").innerHTML = count2
    if (count2 == 735) {
        clearInterval(clients)
    }
}

function cupsCoffee() {
    count3++
    document.querySelector("#number3").innerHTML = count3
    if (count3 == 1465) {
        clearInterval(coffee)
    }
}