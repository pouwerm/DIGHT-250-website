
$(document).ready(function () {
    $('.navbar-nav .nav-item.dropdown').hover(function () {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
    }, function () {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp(100);
    });

    $('.navbar-nav .nav-item.dropdown > a').on('click', function () {
        location.href = this.href;
    });
});