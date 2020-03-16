
//$(".toast").toast('show');

function closeToast() {
        document.getElementById("paymentToast").style.display = 'none';
        console.log('close toast')
}

$(document).ready(function() {
        $('.minus').click(function () {
                var $input = $(this).parent().find('input');
                var count = parseInt($input.val()) - 1;
                count = count < 1 ? 1 : count;
                $input.val(count);
                $input.change();
                return false;
        });
        $('.plus').click(function () {
                var $input = $(this).parent().find('input');
                $input.val(parseInt($input.val()) + 1);
                $input.change();
                return false;
        });
});