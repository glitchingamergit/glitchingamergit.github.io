function getCountdown(month, day, year, message) {
    month = parseInt(month, 10) - 1; 
    day = parseInt(day, 10);
    
    year = year ? parseInt(year, 10) : null;

    if (!message) {
        message = "the Unknown Day";
    }

    const now = new Date();
    now.setHours(0, 0, 0, 0);
    
    let targetYear;
    if (year === null || year === 0) {
        targetYear = now.getFullYear();
    } else if (year < now.getFullYear()) {
        document.getElementById("output").textContent = "Please pick a future year!";
        return null;
    } else {
        targetYear = year;
    }

    let dateOfDay = new Date(targetYear, month, day);

    if (now > dateOfDay && (year === null || year === 0)) {
        dateOfDay.setFullYear(targetYear + 1);
    }

    const diff = dateOfDay - now;
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

    if (days === 0) {
        document.getElementById("output").textContent = "Today is " + message + "!";
        return 0;
    }

    let daysOrDay = days === 1 ? "day" : "days";
    let isOrAre = days === 1 ? "is" : "are";

    document.getElementById("output").textContent = "There " + isOrAre + " " + days + " " + daysOrDay + " until " + message + "!";
    return days;
}

const requestedMonth = document.getElementById("mm");
const requestedDay = document.getElementById("dd");
const requestedYear = document.getElementById("yy");
const requestedName = document.getElementById("label");

function ClearAll() {
    requestedMonth.value = "";
    requestedDay.value = "";
    requestedYear.value = "";
    requestedName.value = "";
}

function SubmitRequest() {
    if (!requestedMonth.value || !requestedDay.value) {
        alert("Please select a month and enter a day.");
        return;
    }

    getCountdown(requestedMonth.value, requestedDay.value, requestedYear.value, requestedName.value);
}

// Get the tax day :)
getCountdown(4, 15, null, "Tax Day");
