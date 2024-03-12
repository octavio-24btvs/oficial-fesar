$(document).ready(function () {
    $('#menu-toggle').prop('checked', false);
    $('a').on('click', function () {
        $('.responsive-menu').css('display', 'none');
        $('#menu-toggle').prop('checked', false);
        $('.clasedvt').removeClass('d-none');
    });
    $('#menu-toggle').on('click', function () {
        $('.responsive-menu').css('display', 'inline-block');
        $('.clasedvt').addClass('d-none');
        if ($('.responsive-menu').css('display') == 'none') {
            $('.clasedvt').removeClass('d-none');
        }
    });
    $('#open-google-modal').on('click', function () {
        $('.google-modal').show();
        $('input[name="q"]').val('');
    });
    $('.google-modal-close').on('click', function () {
        $('.google-modal').hide();
    });

});
function googleSearch() {
    if ($('input[name="q"]').val() !== '') {
        var $searching_value = $('input[name="q"]').val();
        $('input[name="q"]').val('site:aragon.unam.mx/ ' + $searching_value);
        $('.google-modal').hide();
    }
}
;
