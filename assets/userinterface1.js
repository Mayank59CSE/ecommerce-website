$(document).ready(function () {

    // ... (existing code)

    // Existing code for plus button
    $('.plus').click(function () {
        var v = $('#qty').html();
        if (v <= 4)
            v += 2; // Change to increment by 2
        $('#qty').html(v);
        cartContainer($(this).attr('product'), $('#qty').html());
    });

    // Existing code for minus button
    $('.minus').click(function () {
        var v = $('#qty').html();
        if (v > 0)
            v -= 2; // Change to decrement by 2
        if (v == 0) {
            $('.addtocart').show();
            $('#qtycomponent').hide();
            removeCartContainer($(this).attr('productid'));
        } else {
            cartContainer($(this).attr('product'), $('#qty').html());
        }
        $('#qty').html(v);
    });

    // Existing code for add to cart button
    $('.addtocart').click(function () {
        $('.addtocart').hide();
        $('#qtycomponent').show();
        $('#qty').html(2); // Change to start from 2
        cartContainer($(this).attr('product'), $('#qty').html());
    });

    // ... (existing code)
});
