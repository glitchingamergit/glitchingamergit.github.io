let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = "";
let arr = Array.from(buttons);

const copyBtn = document.getElementById("copy");

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e !== copyBtn) {
            handleInput(e.target.innerHTML);
        }
    });
});

document.addEventListener('keydown', (e) => {
    if (!isNaN(e.key) || ['+', '-', '*', '/', '.', 'Enter', 'Backspace', 'Delete', '(', ')'].includes(e.key)) {
        handleInput(e.key);
    }
});

function handleInput(value) {
    if (value == '=' || value == 'Enter') {
        try {
            string = eval(string).toString();
            input.value = string;
        } catch {
            input.value = "Error";
            string = "";
        }
    } else if (value == 'AC' || value == 'Delete') {
        string = "";
        input.value = string;
    } else if (value == 'DEL' || value == 'Backspace') {
        string = string.substring(0, string.length - 1);
        input.value = string;
    } else if (value == '^') {
        string += '**';
        input.value = string;
    } else if (!isNaN(value) || ['+', '-', '*', '/', '.', '(', ')'].includes(value)) {
        if (string.length < 12) {
            string += value;
            input.value = string;
        }
    }
}

async function copyTextToClipboard() {
    try {
        await navigator.clipboard.writeText(string);
        string = "";
        input.value = "Copied!";

        setTimeout(() => {
            input.value = "";
        }, 2000);
    } catch (err) {
        console.error('Failed to copy text: ', err);
    }
}

