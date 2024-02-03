const display = document.querySelector('#display');
const btns = document.querySelectorAll('button');

btns.forEach((item) => {
    item.addEventListener('click', () => {
        if(item.id == 'clear') {

            display.innerText = ''; //resets input field

        } else if (item.id == 'backspace') {

            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1); //removes last text item from input field

        } else if (display.innerText != '' && item.id == 'equal') {
            //calculates the equation
            display.innerText = eval(display.innerText);

        } else if (display.innerText == '' && item.id == 'equal') {

            display.innerText = 'Empty!';
            setTimeout(() => (display.innerText = ''), 2000);

        } else {
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