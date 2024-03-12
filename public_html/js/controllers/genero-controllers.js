/* global base_url */
angular.module("app").service('GeneroService', [
    '$http',
    '$q',
    function ($http, $q) {
        this.getImagesPdfs = function () {
            var deferred = $q.defer();
            return  $http.get(base_url + 'content/primera_respuesta/genero/infografias.json?rand=' + Math.random(328762836386)).then(function (data) {
                deferred.resolve(data);
                return deferred.promise;
            }, function () {
                var response = {"data":
                            {
                                "message": "Hubo un error al intentar cargar el contenido"
                            },
                    "status": 404};
                showNoty(response);
                return deferred.promise;
            });
        };
        this.getImagesEquidadFES = function () {
            var deferred = $q.defer();
            return  $http.get(base_url + 'content/vida_universitaria/valores_unam/equidadfes.json?rand=' + Math.random(328762836386)).then(function (data) {
                deferred.resolve(data);
                return deferred.promise;
            }, function () {
                var response = {"data":
                            {
                                "message": "Hubo un error al intentar cargar el contenido"
                            },
                    "status": 404};
                showNoty(response);
                return deferred.promise;
            });
        };
    }
]);
angular.module("app").controller('GeneroCtrl', [
    '$scope',
    'GeneroService',
    function ($scope, GeneroService) {
        $scope.showing = 0;
        $scope.modal = false;
        $scope.genero = {};
        $scope.banners = [
            {
                imagen: 'defensoria.png',
                descripcion: 'Defensoría',
                hipervinculo: 'https://www.defensoria.unam.mx/'
            },
            {
                imagen: 'pronunciamiento-renies.png',
                descripcion: 'Pronunciamiento RENIES',
                hipervinculo: 'public_html/documents/primera_respuesta/genero/pronunciamiento-renies.pdf'
            },
            {
                imagen: 'videos-de-equidad-de-genero.jpg',
                descripcion: 'Videos de equidad de G\u00E9nero',
                hipervinculo: ''
            }
        ];
        GeneroService.getImagesPdfs().then(function (data) {
            $scope.genero.valor_unam = data.data;
        });
        GeneroService.getImagesEquidadFES().then(function (data) {
            $scope.genero.equidad_fes = data.data;
            jQuery(document).ready(function ($) {
                var owl = $('.owl-carousel');
                owl.owlCarousel({
                    rtl: false,
                    items: ($scope.genero.equidad_fes.imagenes.length < 3 ? $scope.genero.equidad_fes.imagenes.length : 3),
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
            });
        });
        jQuery(document).on('keydown', function (e) {
            if (e.keyCode === 27) {
                $scope.$apply(function () {
                    $scope.modal = false;
                });
            }
        });
        $scope.showModal = function (imagen, seccion) {
            if (!imagen.secundaria) {
                $scope.image_source = 'public_html/img/primera_respuesta/genero/' + seccion + '/tamano-real/' + imagen.imagen + '.jpg';
            } else {
                $scope.image_source = 'public_html/img/primera_respuesta/genero/' + seccion + '/secundarias/' + imagen.imagen + '.jpg';
            }
            $scope.image_alt = imagen.alt;
            $scope.modal = true;
        };
        $scope.change = function () {
            $scope.showing = 3;
        };
    }
]);