Fancybox.bind("[data-fancybox]");
$(document).ready(function() {
    $('button.cs-submit').click(filterItems);
    $('.cs-submit[data-filter="img"]').addClass('active');
});

function filterItems() { 
    let button = this;
    let selector = $(button).data('filter');
    console.log(selector);
    $('#products img').not(selector).hide(500);
    $(selector).show(500);
    $('.cs-submit').removeClass('active');
    $(button).addClass('active');
}