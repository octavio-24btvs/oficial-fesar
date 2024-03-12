/* global base_url */
angular.module('app').directive('modal', [
    function () {
        return {
            restrict: 'A',
            templateUrl: base_url + 'templates/modals/bienvenida.html',
            link: function ($scope, element) {
                $(document).ready(function () {
                    new Noty({
                        theme: 'bootstrp-v4',
                        text: '<video src="https://www.aragon.unam.mx/fes-aragon/public_html/video/video-institucional-unam.mp4" controls="">\n\
                            Este video no puede ser reproducido en tu navegador\n\
                        </video>',
                        type: 'info',
                        timeout: false,
                        layout: 'center',
                        modal: true,
                        closeWith: ['button'],
                        callbacks: {
                            afterClose: function () {
                                
                            }
                        }
                    }).show();
                });
            }
        };
    }
]);