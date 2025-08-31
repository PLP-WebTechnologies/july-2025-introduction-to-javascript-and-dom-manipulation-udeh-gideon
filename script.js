// Part 1: BASICS (Variables + Conditionals)
document.addEventListener('DOMContentLoaded', () => {
    const greetBtn = document.getElementById('greetBtn');
    const username = document.getElementById('username');
    const greeting = document.getElementById('greeting');

    if (greetBtn && username && greeting) {
        greetBtn.addEventListener('click', () => {
            const name = username.value ? username.value.trim() : '';

            if (name) {
                greeting.textContent = `Hello, ${name}! 👋`;
            }
            else {
                greeting.textContent = 'Please enter your name 😊';
            }
        });
    }
    else {
        console.error('One or more elements not found in the DOM.')
    }
});


// Part 2: Functions (Reusability)
function calculateSum(a, b) {
    return a + b;
}

const sumBtn = document.getElementById('sumBtn');
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const sumResult = document.getElementById('sumResult');

sumBtn.addEventListener('click', () => {
    const n1 = parseFloat(num1.value);
    const n2 = parseFloat(num2.value);

    if (isNaN(n1) || isNaN(n2)) {
        sumResult.textContent = 'Enter valid numbers ❗';
    }
    else {
        sumResult.textContent = `Sum = ${calculateSum(n1, n2)}`;
    }
});

// Part 3: Loops (Repetition Power)
const countdownBtn = document.getElementById('countdownBtn');
const countdownList = document.getElementById('countdownList');

countdownBtn.addEventListener('click', () => {
    countdownList.innerHTML = ''; // reset list
    for (let i = 5; i >= 1; i--) {
        let li = document.createElement('li');
        li.textContent = i;
        countdownList.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = '🚀 Lift Off!';
    countdownList.appendChild(li);
});

// Part 4: DOM Manipulation (interactivity)
const toggleBtn = document.getElementById('toggleBtn');
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Adding some basic style toggling
const style = document.createElement('style');
style.textContent = `
    .dark-mode {
        background-color = #222;
        color: #fff;
        transition: all 0.3s ease;
    }
`;
document.head.appendChild(style);