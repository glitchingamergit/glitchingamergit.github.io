let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        handleInput(e.target.innerHTML);
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
