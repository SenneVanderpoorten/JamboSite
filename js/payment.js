
function closeToast() {
        document.getElementById("paymentToast").style.display = 'none';
        console.log('close toast')
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

const formatter = new Intl.NumberFormat('be-BE', {
    style: 'currency',
    currency: 'EUR'
})

function update_total() {
    const bbq_adult_amount = parseInt(document.getElementById('cart-count-18').value);
    const bbq_kid_amount = parseInt(document.getElementById('cart-count-14').value);
    const veggie_adult_amount = parseInt(document.getElementById('cart-count-veggie-18').value);
    const veggie_kid_amount = parseInt(document.getElementById('cart-count-veggie-14').value);
    const total_price = parseFloat(18*(bbq_adult_amount+veggie_adult_amount) + 14*(bbq_kid_amount+veggie_kid_amount));

    document.getElementById('cart-total').innerHTML = formatter.format(total_price);
}