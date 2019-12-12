
/* =========================================
                Preloader
============================================ */

/* =========================================
                overlay
============================================ */
$(window).on('load', function () { // makes sure that whole site is loaded
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});

/* =========================================
                team
============================================ */


$(function(){
    $("#team-members").owlCarousel();
});

/* =========================================
                responsive tabs
============================================ */

$(function () {
    $("#services-tabs").responsiveTabs({
        animation:'slide'
    });

});

/* =========================================
               portfolio
============================================ */
$(Window).on(
    'load', function () {

        //initialise isotope
        $("#isotope-container").isotope({

        })

        //filter items on button click
        $("#isotope-filters").on('click', 'button', function () {

           //get filter value
            var filtervalue = $(this).attr('data - filter');

            //filter portfolio
            $("#isotope-container").isotope({
                filter:filtervalue
            })

            //active button 
            $("#isotope-filters").find('.active').removeclass('active');
            $(this).addclass('active');
        });

     });