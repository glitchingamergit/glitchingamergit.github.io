// Example div format:

// <a href="https://www.youtube.com/channel/UCDDupcLC-TB0g34qXX6Pexw?sub_confirmation=1" target="_blank">
//             <img src="Resources/YouTube.png" class="image-link" width="50px" style="top: 17px;">
// </a>
// <p style="right: 75px;">Subscribe to GlitchinGamer:</p>

const imageElement = document.getElementById("imageOfAd");
const linkElement = document.getElementById("linkOfAd");
const messageElement = document.getElementById("messageOfAd");

let tableOfAds = [];

async function loadJson(path) {
    try {
        const response = await fetch(path);
        if (!response.ok) throw Error(response.status);
        return await response.json();
    } catch (error) {
        console.error("Failed to load external sites:", error);
        return {};
    }
}

window.addEventListener("DOMContentLoaded", async () => {
    const tableOfAds = await loadJson("scripts/advert.json");
    const keys = Object.keys(tableOfAds);

    if (keys.length > 0) {
        const randomKey = keys[Math.floor(Math.random() * keys.length)];
        const adData = tableOfAds[randomKey];

        imageElement.setAttribute("src", adData.imageURL);
        linkElement.setAttribute("href", adData.linkOfAd);
        linkElement.setAttribute("target", "_blank");
        messageElement.textContent = adData.message;

        // Additional attributes:
        imageElement.setAttribute("style", adData.imageStyle);
        imageElement.setAttribute("width", adData.imageWidth);
        messageElement.setAttribute("style", adData.messageStyle);

        if (adData.isDownload == true) linkElement.setAttribute("download", "");
    } else {
        console.warn("The ad JSON object is empty!");
    }
});
