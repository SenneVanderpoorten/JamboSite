
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

function update_total() {
    const bbq_adult_amount = parseInt(document.getElementById('cart-count-18').value);
    const bbq_kid_amount = parseInt(document.getElementById('cart-count-14').value);
    const veggie_adult_amount = parseInt(document.getElementById('cart-count-veggie-18').value);
    const veggie_kid_amount = parseInt(document.getElementById('cart-count-veggie-14').value);
    const total_price = 
    console.log('CART');
    console.log('-----');
    console.log('BBQ Adult: ', bbq_adult_amount);
    console.log('BBQ Kid: ', bbq_kid_amount);
    console.log('Veggie Adult: ', veggie_adult_amount);
    console.log('Veggie Kid: ', veggie_kid_amount);
    console.log('TOTAL: ', total_price);
}