// Helper to get cookie value
function getCookie(name) {
    return document.cookie.split('; ').find(row => row.startsWith(name + '='))?.split('=')[1];
}

// Show popup only if cookie not set
document.querySelectorAll('.external-link').forEach(link => {
    link.addEventListener('click', function(e) {
        if (getCookie('skipExternalPrompt') === 'true') return;
        e.preventDefault();
        const modal = document.getElementById('externalLinkModal');
        modal.style.display = 'flex';
        // Save the link to proceed
        modal.dataset.href = this.href;
    });
});

// Proceed button
document.getElementById('proceedBtn').onclick = function() {
    const modal = document.getElementById('externalLinkModal');
    if (document.getElementById('dontShowAgainCheckbox').checked) {
        // Set cookie for 1 year
        document.cookie = "skipExternalPrompt=true; path=/; max-age=" + (60*60*24*365);
    }
    window.open(modal.dataset.href, '_blank');
    modal.style.display = 'none';
};

// Cancel button
document.getElementById('cancelBtn').onclick = function() {
    document.getElementById('externalLinkModal').style.display = 'none';
};
