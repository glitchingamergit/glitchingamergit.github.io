function OpenGame(path, width, height) {
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
}
