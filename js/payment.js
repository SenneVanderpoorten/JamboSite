
function closeToast() {
        document.getElementById("paymentToast").style.display = 'none';
        console.log('close toast')
}

function increment_input(){
    console.log("plus button")
}

function decrement_input() {
    console.log("minus button")
}

function increment_veggie() {

}

$(document).ready(function() {
    $('.minus-btn').click(function () {

        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus-btn').click(function () {

        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
});