const sounds = [];
for (let i = 1; i <= 29; i++) {
    sounds[i] = new Audio(`sounds/sound${i}.mp3`);
    document.getElementById(`sound${i}`).addEventListener('click', () => {
        sounds[i].play();
    });
}

function StopAllSounds() {
    sounds.forEach(sound => {
        if (sound) {
            sound.pause();
            sound.currentTime = 0;
        }
    });
}
