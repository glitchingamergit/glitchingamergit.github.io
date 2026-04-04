const linkValue = document.getElementById("linkValue");

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

window.addEventListener("keypress", function(event){
    if (event.key === "Enter") {
        OpenWebsiteWindow();
    }
});

const searchParams = new URLSearchParams(window.location.search);

if (searchParams.get('link').toLowerCase()) {
    OpenWebsiteWindow(searchParams.get('link').toString().toLowerCase());
    window.close();
}
