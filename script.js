const display = document.querySelector('#display');
const btns = document.querySelectorAll('button');

function handleNumpadInput(key) {
    if (key === '1') { key = '1'; }
    if (key === '2') { key = '2'; }
    if (key === '3') { key = '3'; }
    if (key === '4') { key = '4'; }
    if (key === '5') { key = '5'; }
    if (key === '6') { key = '6'; }
    if (key === '7') { key = '7'; }
    if (key === '8') { key = '8'; }
    if (key === '9') { key = '9'; }
    if (key === '-') { key = '-'; }
    if (key === '+') { key = '+'; }
    if (key === '*') { key = '*'; }
    if (key === '/') { key = '/'; }
    if (key === 'Enter') { key = 'equal'; } // Treat Enter key as equal button
    if (key === 'Backspace') { key = 'backspace'; }
    const button = document.getElementById(key);
    if (button) {
        button.click(); // Simulate click on corresponding button
    }
}

// Event listener for keydown event to detect numpad input
document.addEventListener('keydown', function(event) {
    const key = event.key;

    if (key === '1' || key === '2' || key === '3' || key === '4' || key === '5' || key === '6' || key === '7' || key === '8' || key === '9' || key === '0' || 
    key === '-' || key === '+' || key === '*' || key === '/' || key === 'Enter' || key === 'Backspace') {
        handleNumpadInput(key);
    }
});

btns.forEach((item) => {
    item.addEventListener('click', () => {

        if(item.id == 'clear') {
            display.innerText = ''; //resets input field
        } 
        else if (item.id === 'backspace' || item.id === 'Backspace') {

            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1); //removes last text item from input field
        } 
        else if (display.innerText !== '' && (item.id === 'equal' || item.id === 'Enter')) {
            display.innerText = eval(display.innerText);
        } 
        else {
            display.innerText += item.id;
        }
        
    });
});

//themed color switch
const themeTogglerBtn = document.querySelector('.theme-toggler');
const calculator = document.querySelector('.calculator');
const toggleBtn = document.querySelector('.toggler-icon');
let isDark = true;
themeTogglerBtn.addEventListener('click', () => {
    calculator.classList.toggle('dark');
    themeTogglerBtn.classList.toggle('active');
    isDark = !isDark;
});