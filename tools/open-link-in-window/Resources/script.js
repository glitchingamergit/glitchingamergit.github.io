const linkValue = document.getElementById("linkValue");
const copyBtn = document.getElementById("copy");

function formatUrl(urlToOpen) {
    if (!urlToOpen.startsWith("https://") && !urlToOpen.startsWith("http://")) {
        urlToOpen = "https://" + urlToOpen;
    }

    try {
        let urlObj = new URL(urlToOpen);
        let hostname = urlObj.hostname;
        let parts = hostname.split('.');

        if (parts.length === 2) {
            urlToOpen = urlToOpen.replace(hostname, "www." + hostname);
        }
    } catch (e) {
        console.error("Invalid URL format");
    }

    return urlToOpen;
}

function OpenWebsiteWindow(urlToOpen) {  
    if (!urlToOpen && linkValue) urlToOpen = linkValue.value;
    if (!urlToOpen) return alert("Please enter a link!");

    urlToOpen = formatUrl(urlToOpen);

    var newWindow = window.open(urlToOpen, "_blank", "width=1250,height=1000,resizable=yes,scrollbars=no,status=yes");
    
    if (newWindow) {
        newWindow.focus();
    }

    linkValue.value = "";
}

 function FormatLink() {
    let urlFormatter = document.getElementById("makeYourOwnURL").value;
    let formattedLink = window.location.origin + "?w=window-open&link=" + formatUrl(urlFormatter);
    console.log(formattedLink);
    

    let URLOfLink = document.getElementById("link-url");
    let textOfLink = document.getElementById("link-text");

    URLOfLink.href = formattedLink;
    textOfLink.innerHTML = formattedLink;

    window.open("#link-text", "_self");
 }

window.addEventListener("keypress", function(event){
    if (event.key === "Enter") {
        OpenWebsiteWindow();
    }
});

function copyLink() {
    const link = document.getElementById('link-url').href;
    navigator.clipboard.writeText(link);
}

const searchParams = new URLSearchParams(window.location.search);

if (searchParams.get('link')) {
    OpenWebsiteWindow(searchParams.get('link').toString());
    window.open(".", "_self");
}
