// Format number to currency - wrapper
let curForm = function(input) {
    return accounting.formatNumber(input);
}

// Unformat number to currency - wrapper
let curUnForm = function(input) {
    return accounting.unformat(input);
}

$('.container').listen('focusout', function(event) {
    let elem = event.target;
    elem.value = curForm(elem.value);
});

// Process when calculate button is clicked
$('#calculate').listen('click', function() {
    // Get value of input elements
    let shipmentElem = $('#shipment');
    let deliveredElem = $('#delivered');
    let totalBalanceElem = $('#total-balance');
    let availableBalanceElem = $('#available-balance');

    let shipment = Number(curUnForm(shipmentElem.val()));
    let delivered = Number(curUnForm(deliveredElem.val()));

    let objReturned = computeAvailableBalance(shipment, delivered);

    totalBalanceElem.val(curForm(objReturned['totalBalance']));
    availableBalanceElem.val(curForm(objReturned['availableBalance']));
});

// Clear all input elements
$('#clear').listen('click', function() {
    let inputElems = $('input[type=text]');
    for(let i = 0; i < inputElems.length; i++) {
        $('#' + inputElems[i].id).val("");
    }
});

// Compute the total balance
const percentMultiplicator = 5;
let computeAvailableBalance = (shipment, delivered) => {
    let totalBalance = shipment * percentMultiplicator;
    let availableBalance = totalBalance - delivered;
    let returnedObj = {};

    returnedObj['availableBalance'] = availableBalance;
    returnedObj['totalBalance'] = totalBalance;
    return returnedObj;
}