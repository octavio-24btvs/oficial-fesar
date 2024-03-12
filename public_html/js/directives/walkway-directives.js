/* global ScrollReveal */
angular.module('app').directive('walkwayBoot', [
    function () {
        return {
            restrict: 'A',
            link: function () {
                $(document).ready(function () {
                    document.oncontextmenu = function(){return false}
                    $(window).on('scroll', function () {
                        $('div.col-md-3.pull-up').each(function () {
                            var imagePos = $(this).offset().top;
                            var topOfWindow = $(window).scrollTop();
                            if (imagePos < topOfWindow + 400) {
                                $(this).addClass("slideUp");
                            }
                        });
                    });
                    // Carrusel
                    $('.owl-carousel').owlCarousel({
                        loop: true,
                        margin: 10,
                        nav: false,
                        responsive: {
                            0: {
                                items: 1
                            },
                            600: {
                                items: 3
                            },
                            1000: {
                                items: 5
                            }
                        }
                    })
                });
            }
        };
    }
]);