(function($) {

    $.fn.scrollToBottom = function(customSettings) {

        var settings = $.extend({
        'duration': 2500,
        }, customSettings);
        
        var element = this;

        $(element).click(function(){
                $('html, body').animate({scrollTop:$(document).height()-$(window).height()}, settings.duration);
                return false;
        });
    }

})(jQuery);