const screen = document.getElementById('screen');
const buttons = document.querySelectorAll('button');
let screenValue = '';

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let buttonValue = e.target.value;

        if (buttonValue === 'C') {
            screenValue = '';
            screen.value = screenValue;
        } else if (buttonValue === '=') {
            try {
                screen.value = eval(screenValue);
            } catch (err) {
                screen.value = 'Error';
            }
        } else {
            screenValue += buttonValue;
            screen.value = screenValue;
        }
    });
});
