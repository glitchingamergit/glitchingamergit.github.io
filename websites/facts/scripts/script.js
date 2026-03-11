const factButton = document.getElementById("random-fact-button");
const output = document.getElementById("output");

let tableOfRandom = {
    "facts": [
        "India has a spa just for elephants in Kerala!",
        "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old.",
        "The first YouTube video was uploaded on April 23, 2005: {urlLink:https://www.youtube.com/watch?v=jNQXAC9IVRw,text:You can watch it here!}"
    ],

    "funfacts": [
        "Facts inform, while fun facts entertain!"
    ],
};

let lastFact = "";

function getFact(initString) {
    const keys = Object.keys(tableOfRandom);
    let newFact = "";

    while (newFact === "" || newFact === lastFact) {
        const randomKey = keys[Math.floor(Math.random() * keys.length)];
        const selectedArray = tableOfRandom[randomKey];
        newFact = selectedArray[Math.floor(Math.random() * selectedArray.length)];

        if (Object.values(tableOfRandom).flat().length <= 1) break;
    }

    lastFact = newFact;

    let factText = "";

    if (typeof initString === "string") {
        factText = initString + newFact;
    } else {
        factText = newFact;
    }

    const linkRegex = /\{urlLink:(.*?),text:(.*?)\}/;
    const match = factText.match(linkRegex);

    if (match) {
        const htmlLink = `<a href="${match[1]}" target="_blank">${match[2]}</a>`;
        output.innerHTML = factText.replace(linkRegex, htmlLink);
    } else {
        output.textContent = factText;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    getFact("Initial (Fun) Fact: ");
});
