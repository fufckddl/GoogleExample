$(document).ready(function() {
    $('.open-popup').on('click', function() {
        var popupName = $(this).attr('data-popup-name');
        var popupType = $(this).attr('data-popup-open-type');
        var $popup = $('.' + popupName + '-popup[data-popup-type="' + popupType + '"]');

        $('[data-popup-type="' + popupType + '"]').not($popup).hide();

        $popup.toggle();
    });
});