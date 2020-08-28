function qty(action) {
    var qty = $('#quantity').text();
    if (action == 'add') {
        $('#quantity').text(parseInt(qty) + parseInt(1))
    } else {
        if (qty > 1) {
            $('#quantity').text(parseInt(qty) - parseInt(1));
        }
    }
}

function addItem() {
    let itemName = $('#item-name').text();
    let quantity = $('#quantity').text();
    let grind = $('#grind')[0].value;
    $('.item-added').css('animation-name', 'item-added');
    setTimeout(() => {
        $('.item-added').css('animation-name', '');
        $('#quantity').text(1);
        $('#grind')[0].value='no';
    }, 1000);
}

window.addEventListener('DOMContentLoaded', function () {
})