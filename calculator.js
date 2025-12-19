document.getElementById('calc-btn').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;
    const resultDiv = document.getElementById('result');

    if (isNaN(num1) || isNaN(num2)) {
        resultDiv.textContent = "Erreur : Veuillez entrer des nombres valides.";
        return;
    }

    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        default:
            result = "Opération non supportée";
    }

    resultDiv.textContent = "Résultat : " + result;
});