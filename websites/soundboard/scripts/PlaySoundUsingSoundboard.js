const sounds = [];
let numOfSounds = 29; // This has to be of how many sounds because HTML Javascript doesn't have one built-in

function getSounds() {
    for (let i = 1; i <= numOfSounds; i++) {
        sounds[i] = new Audio(`sounds/sound${i}.mp3`);
        document.getElementById(`sound${i}`).addEventListener('click', () => {
            sounds[i].play();
        });
    }
}; getSounds();

function StopAllSounds() {
    sounds.forEach(sound => {
        if (sound) {
            sound.pause();
            sound.currentTime = 0;
        }
    });
}

function PlayAllSounds() {
    if (sounds.length !== numOfSounds) {
        sounds.length = 0;
        getSounds();
    }

    sounds.forEach(sound => {
        if (sound) {
            sound.currentTime = 0;
            sound.play();
        }
    });
}

const url = window.location.search;
const urlParams = new URLSearchParams(url);
let userInteracted = false;

let allElements = null; 
const notImposters = "crewmate";
const imposters = "notCrewmate";

const imposterElements = document.getElementsByClassName(imposters);
for (let i = 0; i < imposterElements.length; i++) {
    imposterElements[i].style.display = "none";
}

if (urlParams.get('i')?.toLowerCase() === "playall") {
    document.addEventListener('click', handleInteraction);
    document.addEventListener('keydown', handleInteraction);
    allElements = document.body.children;

    for (let i = 0; i < allElements.length; i++) {
        let el = allElements[i];

        if (el.classList.contains(notImposters)) {
            continue; 
        }

        if (!el.classList.contains(imposters)) {
            if (el.tagName !== 'SCRIPT') {
                el.dataset.originalDisplay = el.style.display || ''; 
                el.style.display = 'none';
            }
        } else if (el.classList.contains(imposters) && el.tagName !== 'SCRIPT') {
            el.style.display = "block";
        }
    }
}

function handleInteraction() {
    userInteracted = true;
    document.removeEventListener('click', handleInteraction);
    document.removeEventListener('keydown', handleInteraction);
    
    PlayAllSounds(); 

    allElements = document.body.children; 

    for (let i = 0; i < allElements.length; i++) {
        let el = allElements[i];
        
        if (el.classList.contains(notImposters)) {
            continue;
        }

        if (!el.classList.contains(imposters) && el.tagName !== 'SCRIPT') {
            el.style.display = el.dataset.originalDisplay || ''; 
        } else if (el.classList.contains(imposters) && el.tagName !== 'SCRIPT') {
            el.style.display = "none";
        }
    }
}
