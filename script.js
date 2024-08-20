// script.js
document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    let displayValue = '0';

    function updateDisplay() {
        display.textContent = displayValue;
    }

    function calculateExpression(expression) {
        try {
            // Validate and evaluate the expression
            if (/[^0-9+\-*/().]/.test(expression)) {
                throw new Error("Invalid characters");
            }
            return String(eval(expression));
        } catch (error) {
            return 'Error';
        }
    }

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.getAttribute('data-value');

            switch (this.id) {
                case 'all-clear':
                    displayValue = '0';
                    break;
                case 'clear':
                    displayValue = (displayValue.length > 1) ? displayValue.slice(0, -1) : '0';
                    break;
                case 'equals':
                    displayValue = calculateExpression(displayValue);
                    break;
                default:
                    displayValue = (displayValue === '0') ? value : displayValue + value;
                    break;
            }

            updateDisplay();
        });
    });

    updateDisplay();
});
