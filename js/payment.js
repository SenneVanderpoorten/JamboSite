$(document).ready(function () {

    $('#CoronaModal').modal('show');
});


function closeToast() {
        document.getElementById("paymentToast").style.display = 'none';
}

function increment_input(id){
    const value = parseInt(document.getElementById(id).value) + 1;
    document.getElementById(id).value = value;
    update_total()
}

function decrement_input(id) {
    let value =0;
    if (parseInt(document.getElementById(id).value) === 0){
        value = 0;
    } else{
        value = parseInt(document.getElementById(id).value) - 1;

    }

    document.getElementById(id).value = value;
    update_total()
}

function update_total() {
    total_price = get_total_price();

    const formatter = new Intl.NumberFormat('be-BE', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 2
    })

    document.getElementById('cart-total').innerHTML = formatter.format(total_price);
}

function get_total_price() {
    const bbq_adult_amount = parseInt(document.getElementById('cart-count-18').value);
    const bbq_kid_amount = parseInt(document.getElementById('cart-count-14').value);
    const veggie_adult_amount = parseInt(document.getElementById('cart-count-veggie-18').value);
    const veggie_kid_amount = parseInt(document.getElementById('cart-count-veggie-14').value);
    return parseFloat((18 * (bbq_adult_amount + veggie_adult_amount) + 14 * (bbq_kid_amount + veggie_kid_amount)+0.5));
}

function pay() {
    console.log('PAYMENT OF', get_total_price())
    const stripe = Stripe('pk_test_lP6f3Zx2ejwtweG4Td77g2l400alrkJFSh');

    stripe.redirectToCheckout({
        // Make the id field from the Checkout Session creation API response
        // available to this file, so you can provide it as parameter here
        // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
        sessionId: '{{CHECKOUT_SESSION_ID}}'
    }).then(function (result) {
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer
        // using `result.error.message`.
    });
}



