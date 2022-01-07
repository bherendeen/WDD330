function multiply() {
    let multiArray = [];
    let multiOf = document.getElementById('multiplier').value;
    let multiAmount = document.getElementById('numResults').value;

    if (multiOf.match(/^-?\d+(\.[0-9]{1,})?$/g) && multiAmount.match(/^-?\d+(\.[0-9]{1,})?$/g)) {
        let numOneConvert = parseFloat(multiOf);
        let numTwoConvert = parseFloat(multiAmount);

        let multiplied = "";
        for (let i = 0; i <= (numTwoConvert - 1); i++) {
            multiArray[i] = i;
            multiplied += `${numOneConvert} x ${i} = ${numOneConvert * multiArray[i]}<br>`;
            document.getElementById('multiResults').innerHTML = multiplied;
        }
    } else {
        document.getElementById('multiResults').innerHTML = `Please enter a valid number.`;
    }
};