// --- CONFIGURATION ---
// Set your correct password here
const CORRECT_PASSWORD = "HarshveerIshaanMath12345"; 
// Set the URL to redirect to on success
const REDIRECT_URL = "main.html"; 

// --- ELEMENT SELECTION ---
const mainButton = document.getElementById('main-button');
const passwordModal = document.getElementById('password-modal');
const cancelButton = document.getElementById('cancel-button');
const submitButton = document.getElementById('submit-button');
const passwordInput = document.getElementById('password-input');
const wrongPasswordMessage = document.getElementById('wrong-password-message');

// --- FUNCTIONS ---

/**
 * Shows the password modal dialog.
 */
function showPasswordModal() {
    // Clear previous input and hide error message before showing
    passwordInput.value = '';
    wrongPasswordMessage.style.display = 'none';
    passwordModal.classList.add('visible');
    passwordInput.focus(); // Automatically focus the input field
}

/**
 * Hides the password modal dialog.
 */
function hidePasswordModal() {
    passwordModal.classList.remove('visible');
}

/**
 * Checks the entered password and handles the logic.
 */
function checkPassword() {
    const enteredPassword = passwordInput.value;

    if (enteredPassword === CORRECT_PASSWORD) {
        // Correct password
        console.log("Password correct. Creating cookie and redirecting...");
        
        // Create a cookie named 'isLoggedIn' that is valid for 1 day.
        // The 'path=/' makes the cookie available across the entire site.
        const expires = new Date(Date.now() + 7 * 86400e3).toUTCString(); // 7 days
        document.cookie = `isLoggedIn=true; expires=${expires}; path=/; SameSite=Lax`;
        
        // Redirect to the new page
        window.location.href = REDIRECT_URL;
    } else {
        // Incorrect password
        console.log("Password incorrect.");
        // Show the error message inside the modal
        wrongPasswordMessage.style.display = 'block';
        // Shake the modal for visual feedback
        passwordModal.querySelector('.modal-content').animate([
            { transform: 'translateX(0)' },
            { transform: 'translateX(-10px)' },
            { transform: 'translateX(10px)' },
            { transform: 'translateX(-10px)' },
            { transform: 'translateX(10px)' },
            { transform: 'translateX(0)' }
        ], {
            duration: 500,
            easing: 'ease-in-out'
        });
    }
}

// --- EVENT LISTENERS ---

// Show the modal when the main button is clicked
mainButton.addEventListener('click', showPasswordModal);

// Hide the modal when the cancel button is clicked
cancelButton.addEventListener('click', hidePasswordModal);

// Also hide the modal if the user clicks on the dark overlay
passwordModal.addEventListener('click', (event) => {
    // We only hide if the click is on the overlay itself, not its children (the content box)
    if (event.target === passwordModal) {
        hidePasswordModal();
    }
});

// Check the password when the submit button is clicked
submitButton.addEventListener('click', checkPassword);

// Allow pressing 'Enter' in the input field to submit the password
passwordInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        checkPassword();
    }
});
