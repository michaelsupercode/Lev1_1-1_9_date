//Lev1_1//
let res = document.getElementById(`print`)

let date1 = new Date();
console.log(date1);
res.innerHTML += `${date1}<br>`

let date2 = new Date(0);
console.log(date2);
res.innerHTML += `${date2}<br>`

let date3 = new Date(31559608800);
console.log(date3);
res.innerHTML += `${date3}<br>`

let date4 = new Date(86400000);
console.log(date4);
res.innerHTML += `${date4}<br>`



//Lev1_2//
let monate = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
]

let wochenTag = [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag"
]

let actualDate = new Date()
d = new Date()
console.log(d);

console.log(actualDate.getFullYear());
res.innerHTML += `${actualDate.getFullYear()} <br>`
res.innerHTML += `${actualDate.getMonth()+ " Monat"}  <br>`
res.innerHTML += `${actualDate.getDay()+ " Tag"} <br>`
console.log(actualDate.getHours());
res.innerHTML += `${actualDate.getHours()+ " Stunden"}  <br>`
console.log(actualDate.getMinutes());
res.innerHTML += `${actualDate.getMinutes()+ " Minuten"} <br>`
console.log(actualDate.getDay(5));
res.innerHTML += `${wochenTag[actualDate.getDay()]} <br>`
console.log(actualDate.getMonth(1));
res.innerHTML += `${monate[actualDate.getMonth()]} <br>`


//Lev1_6//
const formatAMPM = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes.toString().padStart(2, '0');
    let strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}
console.log(formatAMPM(new Date(2000, 1, 1, 11)));

/*(new Date("1999, 10, 5, 15"))); //3:00pm
(new Date())); //5:28pm
(new Date("2019, 12, 3, 12"))); //12.00pm
(new Date("2000, 1, 1, 11"))); //11:00am*/

//1_7//
weekEnd = (date) => {
    let day = date.getDay();

    if (day === 0 || day === 6) {
        return `weekend`;

    } else {
        return `8h to work`;
    }
}
console.log(weekEnd(new Date(`5.22.2022`))); //we
console.log(weekEnd(new Date("15, 12, 2019"))); //work
console.log(weekEnd(new Date("2, 16, 2001"))); //work
console.log(weekEnd(new Date("2, 1, 2020"))); //we
console.log(weekEnd(new Date("2, 29, 2020"))); //we
//credits to Waldi for his solution, thanks//

//Lev1_8//
function paddedFormat(num) {
    return num < 10 ? "0" + num : num;
}

function startCountDown(duration, element) {

    let secondsRemaining = duration;
    let min = 0;
    let sec = 0;

    let countInterval = setInterval(function() {

        min = parseInt(secondsRemaining / 60);
        sec = parseInt(secondsRemaining % 60);

        element.textContent = `${paddedFormat(min)}:${paddedFormat(sec)}`;

        secondsRemaining = secondsRemaining - 1;
        if (secondsRemaining < 0) { clearInterval(countInterval) };

    }, 1000);
}

window.onload = function() {
    let time_minutes = 0; // Value in minutes
    let time_seconds = 10; // Value in seconds

    let duration = time_minutes * 60 + time_seconds;

    element = document.querySelector('#count-down-timer');
    element.textContent = `${paddedFormat(time_minutes)}:${paddedFormat(time_seconds)}`;

    startCountDown(--duration, element);
}

//Lev1_9//
function startTime() {
    let current = new Date().toLocaleString("de-de", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    document.getElementById("Lev1_9").innerHTML = current;
}
setInterval(startTime, 1000);