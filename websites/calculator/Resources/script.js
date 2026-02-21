let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = "";
let memory = null; // Variable to store memory value
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
    } else if (value == 'M') {
        memory += eval(string); // Store the current value in memory
        string = "";
        input.value = string;
    } else if (value == 'MR') {
        string = eval(memory).toString();
        input.value += string;
    } else if (value == '^') {
        string += '**'; // Use JavaScript exponentiation operator
        input.value = string;
    } else if (value == 'sqrt') {
        string = Math.sqrt(eval(string)).toString(); // Calculate square root
        input.value = string;
    } else if (value == 'sin') {
        string = Math.sin(eval(string)).toString(); // Calculate sine
        input.value = string;
    } else if (value == 'cos') {
        string = Math.cos(eval(string)).toString(); // Calculate cosine
        input.value = string;
    } else if (value == 'tan') {
        string = Math.tan(eval(string)).toString(); // Calculate tangent
        input.value = string;
    } else if (value == 'ln') {
        string = Math.log(eval(string)).toString(); // Calculate natural logarithm
        input.value = string;
    } else if (value == 'log') {
        string = Math.log10(eval(string)).toString(); // Calculate base-10 logarithm
        input.value = string;
    } else if (value == 'exp') {
        string = Math.exp(eval(string)).toString(); // Calculate exponent
        input.value = string;
    } else if (value == 'pi') {
        string += Math.PI.toString(); // Add pi value
        input.value = string;
    } else if (value == 'e') {
        string += Math.E.toString(); // Add e value
        input.value = string;
    } else if (value == 'x!') {
        string = factorial(eval(string)).toString(); // Calculate factorial
        input.value = string;
    } else if (!isNaN(value) || ['+', '-', '*', '/', '.', '(', ')'].includes(value)) {
        if (string.length < 12) {
            string += value;
            input.value = string;
        }
    }
}

function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}