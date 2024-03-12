/* global base_url, $JssorBulletNavigator$, $JssorArrowNavigator$, $JssorSlideshowRunner$, $Jease$, $JssorSlideshowFormations$ */
angular.module("app").service('Covid19Service', [
    '$http',
    '$q',
    function ($http, $q) {
        this.getComics = function () {
            var deferred = $q.defer();
            return  $http.get(base_url + 'content/covid-19/comics.json?rand=' + Math.random(328762836386)).then(function (data) {
                deferred.resolve(data);
                return deferred.promise;
            }, function () {
                var response = {
                    data: {
                        message: "Hubo un error al intentar cargar el contenido"
                    },
                    status: 404
                };
                showNoty(response);
                return deferred.promise;
            });
        };
        this.getInformacionDeInteres = function () {
            var deferred = $q.defer();
            return  $http.get(base_url + 'content/covid-19/informacion-de-interes.json?rand=' + Math.random(328762836386)).then(function (data) {
                deferred.resolve(data);
                return deferred.promise;
            }, function () {
                var response = {
                    data: {
                        message: "Hubo un error al intentar cargar el contenido"
                    },
                    status: 404
                };
                showNoty(response);
                return deferred.promise;
            });
        };
        this.getInformacionOficial = function () {
            var deferred = $q.defer();
            return  $http.get(base_url + 'content/covid-19/informacion-oficial.json?rand=' + Math.random(328762836386)).then(function (data) {
                deferred.resolve(data);
                return deferred.promise;
            }, function () {
                var response = {
                    data: {
                        message: "Hubo un error al intentar cargar el contenido"
                    },
                    status: 404
                };
                showNoty(response);
                return deferred.promise;
            });
        };
    }
]);
angular.module("app").controller('UnidadJuridicaCtrl', [
    function () {
        jQuery(document).ready(function ($) {
            var owl = $('.owl-carousel');
            owl.owlCarousel({
                rtl: true,
                items: 3,
                loop: true,
                margin: 8,
                autoplay: true,
                autoplayTimeout: 2000,
                autoplayHoverPause: true
            });
            $('.play').on('click', function () {
                owl.trigger('play.owl.autoplay', [1000]);
            });
            $('.stop').on('click', function () {
                owl.trigger('stop.owl.autoplay');
            });
        });
    }
]);
angular.module('app').controller('Covid19Ctrl', [
    '$scope',
    'Covid19Service',
    function ($scope, Covid19Service) {
        $scope.modal = false;
        $scope.showing = 0;
        $scope.informacion_de_interes = null;
        $scope.informacion_oficial = null;
        $scope.comics = null;
        $scope.banners = [
            {
                imagen: 'quedate-en-casa.jpg',
                descripcion: 'Quedate en casa',
                hipervinculo: ''
            },
            {
                imagen: 'aviso-fesar.jpg',
                descripcion: 'Aviso FESAR',
                hipervinculo: ''
            }
        ];
        $scope.showModal = function (imagen, seccion) {
            $scope.image_source = 'public_html/img/covid-19/' + seccion + '/tamano-real/' + imagen.imagen;
            $scope.image_alt = imagen.alt;
            $scope.modal = true;
        };
        $scope.change = function () {
            $scope.showing = 3;
        };
        Covid19Service.getComics().then(function (response) {
            $scope.comics = response.data;
            loadCarrousel();
        });
        Covid19Service.getInformacionDeInteres().then(function (response) {
            $scope.informacion_de_interes = response.data;
            loadCarrousel();
        });
        Covid19Service.getInformacionOficial().then(function (response) {
            $scope.informacion_oficial = response.data;
            loadCarrousel();
        });
        loadSlider();
        function loadSlider() {
            jQuery(document).ready(function ($) {
                var jssor_1_SlideshowTransitions = [
                    {$Duration: 500, x: 1, y: -1, $Delay: 40, $Cols: 10, $Rows: 5, $SlideOut: true, $ChessMode: {$Column: 3, $Row: 12}, $Easing: {$Left: $Jease$.$InCubic, $Top: $Jease$.$InCubic, $Opacity: $Jease$.$OutQuad}, $Opacity: 2},
                    {$Duration: 1200, x: 0.3, y: -0.3, $Delay: 80, $Cols: 10, $Rows: 5, $Opacity: 2, $Clip: 15, $During: {$Left: [0.2, 0.8], $Top: [0.2, 0.8]}, $Assembly: 260, $Easing: {$Left: $Jease$.$InJump, $Top: $Jease$.$InJump, $Clip: $Jease$.$Swing}, $Round: {$Left: 0.8, $Top: 0.8}},
                    {$Duration: 600, x: -1, y: 1, $Delay: 50, $Cols: 10, $Rows: 5, $Opacity: 2, $SlideOut: true, $Formation: $JssorSlideshowFormations$.$FormationStraightStairs, $Easing: {$Left: $Jease$.$InQuart, $Top: $Jease$.$InQuart, $Opacity: $Jease$.$Linear}},
                    {$Duration: 500, x: 1, $Delay: 40, $Cols: 10, $Rows: 5, $Easing: {$Left: $Jease$.$InCubic, $Opacity: $Jease$.$OutQuad}, $Opacity: 2},
                    {$Duration: 500, y: -1, $Delay: 40, $Cols: 10, $Rows: 5, $Easing: {$Top: $Jease$.$InCubic, $Opacity: $Jease$.$OutQuad}, $Opacity: 2},
                    {$Duration: 600, x: -1, y: 1, $Delay: 40, $Cols: 10, $Rows: 5, $ChessMode: {$Column: 3, $Row: 12}, $Easing: {$Left: $Jease$.$InCubic, $Top: $Jease$.$InCubic, $Opacity: $Jease$.$OutQuad}, $Opacity: 2},
                    {$Duration: 1500, x: 0.3, y: -0.3, $Delay: 20, $Cols: 10, $Rows: 5, $Opacity: 2, $Clip: 15, $During: {$Left: [0.1, 0.9], $Top: [0.1, 0.9]}, $SlideOut: true, $Formation: $JssorSlideshowFormations$.$FormationSwirl, $Assembly: 260, $Easing: {$Left: $Jease$.$InJump, $Top: $Jease$.$InJump, $Clip: $Jease$.$OutQuad}, $Round: {$Left: 0.8, $Top: 2.5}}
                ];
                var jssor_1_options = {
                    $AutoPlay: 1,
                    $SlideshowOptions: {
                        $Class: $JssorSlideshowRunner$,
                        $Transitions: jssor_1_SlideshowTransitions,
                        $TransitionsOrder: 1
                    },
                    $ArrowNavigatorOptions: {
                        $Class: $JssorArrowNavigator$
                    },
                    $BulletNavigatorOptions: {
                        $Class: $JssorBulletNavigator$
                    }
                };
                var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);
                /*#region responsive code begin*/
                var MAX_WIDTH = 3000;
                function ScaleSlider() {
                    var containerElement = jssor_1_slider.$Elmt.parentNode;
                    var containerWidth = containerElement.clientWidth;
                    if (containerWidth) {
                        var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);
                        jssor_1_slider.$ScaleWidth(expectedWidth);
                    } else {
                        window.setTimeout(ScaleSlider, 30);
                    }
                }
                ScaleSlider();
                $(window).bind("load", ScaleSlider);
                $(window).bind("resize", ScaleSlider);
                $(window).bind("orientationchange", ScaleSlider);
                jQuery(document).on('keydown', function (e) {
                    if (e.keyCode === 27) {
                        $scope.$apply(function () {
                            $scope.modal = false;
                        });
                    }
                });
            });
        }
        function loadCarrousel() {
            jQuery(document).ready(function ($) {
                var owl = $('.owl-carousel');
                owl.owlCarousel({
                    rtl: true,
                    items: 3,
                    margin: 8,
                    autoplay: true,
                    autoplayTimeout: 2000,
                    autoplayHoverPause: true
                });
                $('.play').on('click', function () {
                    owl.trigger('play.owl.autoplay', [1000]);
                });
                $('.stop').on('click', function () {
                    owl.trigger('stop.owl.autoplay');
                });
            });
        }
    }
]);
