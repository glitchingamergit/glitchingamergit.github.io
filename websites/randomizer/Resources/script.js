let tableOfSites = []; // Start empty
let openedTabs = [];

let taxes = [
    "https://www.youtube.com/watch?v=QDia3e12czc"
];

const CloseButton = document.getElementById("CloseAllWebsites");
const CurrentStyle = CloseButton.style.display;
CloseButton.style.display = "none";

async function loadSites() {
    try {
        const response = await fetch('sites.json');
        if (!response.ok) throw Error(response.status);

        tableOfSites = await response.json();
        console.log("Sites loaded successfully");
    } catch (error) {
        console.error("Failed to load external sites:", error);
    }
}
loadSites();

function chanceFunction() {
    const probability = 0.1; 
    return Math.random() < probability;
}

function OpenRandomWebsite() {
    if (tableOfSites.length === 0) {
        console.warn("Table of sites is still loading...");
        return;
    }

    if (CloseButton.style.display == "none") {
        CloseButton.style.display = CurrentStyle;
    }

    const isLucky = chanceFunction();
    let newWindow = null;

    if (!isLucky) {
        const RandomIndex = Math.floor(Math.random() * tableOfSites.length);
        const url = tableOfSites[RandomIndex];
        newWindow = window.open(url, "_blank");
    } else {
        const RandomIndex = Math.floor(Math.random() * taxes.length);
        const url = taxes[RandomIndex];
        newWindow = window.open(url, "_blank");
    }

    if (newWindow) {
        openedTabs.push(newWindow);
    }
}


setInterval(function(){
    const initialCount = openedTabs.length;
    openedTabs = openedTabs.filter(tab => !tab.closed);

    if (openedTabs.length <= 0) {
        CloseButton.style.display = "none"
    }
}, 1);

function closeAllOpenedTabs() {
    CloseButton.style.display = "none"

    openedTabs.forEach(tab => {
        if (!tab.closed) {
            tab.close();
        }
    });
    openedTabs = [];
}
