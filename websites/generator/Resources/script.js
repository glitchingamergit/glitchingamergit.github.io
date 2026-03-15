let tableOfSites = []; // Start empty
let openedTabs = [];
const output = document.getElementById("output");

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

function showRandomWebsite() {
    if (tableOfSites.length === 0) {
        console.warn("Table of sites is still loading...");
        return;
    }

    const isLucky = chanceFunction();

    // if (!isLucky) {
    //     const RandomIndex = Math.floor(Math.random() * tableOfSites.length);
    //     const url = tableOfSites[RandomIndex];
    //     newWindow = window.open(url, "_blank");
    // } else {
    //     const RandomIndex = Math.floor(Math.random() * taxes.length);
    //     const url = taxes[RandomIndex];
    //     newWindow = window.open(url, "_blank");
    // }

    // if (newWindow) {
    //     openedTabs.push(newWindow);
    // }

    if (!isLucky) {
        document.getElementById("linkForButton").setAttribute("target", "_blank");

        const RandomIndex = Math.floor(Math.random() * tableOfSites.length);
        const url = tableOfSites[RandomIndex];
        output.textContent = url;
        
        if (url === "." || url.includes("..") ) {
            document.getElementById("linkForButton").setAttribute("target", "_self");
        }

        document.getElementById("linkForButton").setAttribute("href", url);
    }
}
