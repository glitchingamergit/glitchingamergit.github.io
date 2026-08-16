function OpenGame(path, width, height, shouldRedirect) {
    var win = window.open("", "_blank", `width=${width},height=${height},resizable=yes,scrollbars=no,status=yes`);

    var safePath = path.startsWith('/') ? path : '/' + path;
    var url = window.location.origin + safePath;

    win.document.body.style.margin = "0";
    win.document.body.style.padding = "0";
    win.document.body.style.overflow = "hidden";
    win.document.body.style.backgroundColor = "#111"; 

    var iframe = win.document.createElement('iframe');
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";
    iframe.src = url;

    win.document.body.appendChild(iframe);
    win.focus();

    if (shouldRedirect === true) {
        window.open(".", "_self");
    }
}

const params = new URLSearchParams(window.location.search);

const game = params.get('game')?.toLowerCase();
// console.log(game);

if (game !== "undefined") {
    switch (game) {
        case 'counter':
            OpenGame('/games/ownProjects/Counter/index.html', 1080, 1920, true);
            break;
        case 'dino':
            OpenGame('/games/ownProjects/dino/index.html', 1280, 720, true);
        case 'flappybird':
            OpenGame('/games/ownProjects/flappy/index.html', 1280, 720, true);
            break;
        case 'fnae':
            OpenGame('/games/featured/fnae.html', 1280, 720, true);
            break;
        case 'fnaf':
            OpenGame('/games/featured/fnaf.html', 1280, 720, true);
            break;
        case 'granny':
            OpenGame('/games/featured/granny.html', 1280, 720, true);
            break;
        case 'learntofly':
            OpenGame('/games/featured/learn_to_fly.html', 1280, 720, true);
            break;
        case 'run':
            OpenGame('/games/featured/run_iii.html', 1116, 839, true);
            break;
        case 'slope':
            OpenGame('/games/featured/slope.html', 1280, 720, true);
            break;
        case 'tag':
            OpenGame('/games/featured/tag.html', 1280, 720, true);
            break;
        case 'thatsnotmyneighbor':
            OpenGame('/games/featured/thats_not_my_neighbor.html', 1280, 720, true);
            break;
    }
}

function DownloadGame(winLink, macLink) {
    if (navigator.userAgent.toLowerCase().includes('mac')) {
        const link = document.createElement('a');
        link.href = macLink;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else if (navigator.userAgent.toLowerCase().includes('linux')) {
        alert("You are using Linux, I didn't test the game on the operating system so it may not work. -glitchingamergit");

        const link = document.createElement('a');
        link.href = macLink;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else if (navigator.userAgent.toLowerCase().includes('windows')) {
        const link = document.createElement('a');
        link.href = winLink;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        alert("We're sorry! But the download needs Windows, MacOS, or Linux to work.")
    }
}
