function getCountdown(month, day, year, message) {
    month = parseInt(month, 10) - 1;
    day = parseInt(day, 10);

    if (!message) {
        message = "the Unknown Day";
    }

    const now = new Date();
    now.setHours(0, 0, 0, 0);
    
    if (year === null || year <= now.getFullYear()) {
        year = now.getFullYear();
    }

    let dateOfDay = new Date(year, month, day);

    if (now > dateOfDay) {
        dateOfDay = new Date(year + 1, month, day);
    }

    const diff = dateOfDay - now;
    const days = Math.round(diff / (1000 * 60 * 60 * 24));

    let daysOrDay = "days";
    let isOrAre = "are";

    if (days === 1) {
        daysOrDay = "day";
        isOrAre = "is";
    }

    document.getElementById("output").textContent = "Output: There " + isOrAre + " " + days + " " + daysOrDay + " until " + message + "!";
    return days;
}

getCountdown(4, 15, null, "Tax Day");

let requestedMonth = document.getElementById("mm");
let requestedDay = document.getElementById("dd");
let requestedYear = document.getElementById("yy");
let requestedName = document.getElementById("label");

function ClearAll() {
    requestedMonth.value = "";
    requestedDay.value = "";
    requestedYear.value = "";
    requestedName.value = "";
}

function SubmitRequest() {
    if (!requestedMonth.value || !requestedDay.value) {
        ClearAll();
        alert("Please put in the number of the month as well as the day.");
        return;
    }

    getCountdown(requestedMonth.value, requestedDay.value, requestedYear.value, requestedName.value);
}
