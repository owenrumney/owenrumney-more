jQuery(document).ready(function($) {

    $('.level-bar-inner').css('width', '0');
    
    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {
        
            var from = $(this).data('from');
            var till = $(this).data('till');
            var level = $(this).data('level');
            
            // var parentwidth = this.parentNode.clientWidth;
            // var year = parentwidth/18;
            // var start = from - 2005;
            // var end = 2023 - till;

            // $(this).animate({
            //     width: parentwidth - (end * year) - (start * year),
            //     left: start * year
            // }, 800);

            $(this).animate({
                width: level
            })
            
        });

    });
   
    

});