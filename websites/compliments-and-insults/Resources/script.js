let outputText;
let insults = [];
let compliments = [];

async function loadJson(path) {
    try {
        const response = await fetch(path);
        if (!response.ok) throw Error(response.status);
        return await response.json();
    } catch (error) {
        console.error("Failed to load external sites:", error);
        return [];
    }
}

window.addEventListener("DOMContentLoaded", async () => {
    outputText = document.getElementById("output");
    if (outputText) {
        outputText.style.display = "none";
    }

    compliments = await loadJson('../../asset/configuration/compliments_ci.json');
    insults = await loadJson('../../asset/configuration/insults_ci.json');

    const args = window.location.search;
    const searchParams = new URLSearchParams(args);

    if (searchParams.get('message') !== null) {
        if (outputText !== null) {
            outputText.style.display = "block";
            outputText.textContent = searchParams.get('message');
        }
    } else if (searchParams.get('m') !== null) {
        if (outputText !== null) {
            outputText.style.display = "block";
            outputText.textContent = searchParams.get('m');
        }
    }
});

async function ShowCompliment() {
    if (compliments.length <= 0) {
        compliments = await loadJson('../../asset/configuration/compliments_ci.json');
    }

    if (compliments.length > 0) {
        const randomIndex = Math.floor(Math.random() * compliments.length);
        const compliment = compliments[randomIndex];

        if (compliment === outputText.textContent) ShowCompliment();
        outputText.textContent = compliment.toString();
        outputText.style.display = "block";
    }
}

async function ShowInsult() {
    if (insults.length <= 0) {
        insults = await loadJson('../../asset/configuration/insults_ci.json');
    }

    if (insults.length > 0) {
        const randomIndex = Math.floor(Math.random() * insults.length);
        const insult = insults[randomIndex];

        if (insult === outputText.textContent) ShowInsult();
        outputText.textContent = insult.toString();
        outputText.style.display = "block";
    }
}
