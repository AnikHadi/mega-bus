function ticketHandilar(isIncrease, whichClass) {
    const firstClassCount = stringToNumber(whichClass);

    let ticketCount = firstClassCount;
    if(isIncrease == true ) {
        ticketCount = ticketCount + 1;
    }
    if(isIncrease == false && ticketCount > 0) {
        ticketCount = ticketCount - 1;
    }
    document.getElementById(whichClass + '-class-count').value = ticketCount;

    amountCalculate()
}

function amountCalculate() {
    const firstClassCount =  stringToNumber('first');
    const economyClassCount = stringToNumber('economy');

    const totalAmount = firstClassCount * 150 + economyClassCount * 100;
    document.getElementById('total-amount').innerText = '$ ' + totalAmount;

    const taxAmount = totalAmount * 0.1;
    document.getElementById('tax-amount').innerText = '$ ' + taxAmount;

    const grandAmount = totalAmount + taxAmount;
    document.getElementById('grand-amount').innerText =  grandAmount;
}

function stringToNumber(whichClass) {
    const number = parseFloat(document.getElementById(whichClass + '-class-count').value);
    return number;
}

function orderNow() {
    document.getElementById('booking-form').style.display = "none";
    const grandAmount = parseFloat(document.getElementById('grand-amount').innerText);
    if (grandAmount > 0) {
        document.getElementById('order-complete-msg').style.display = "block";
    }
    if(grandAmount == 0) {
        document.getElementById('order-error-msg').style.display = "block";
    }
}