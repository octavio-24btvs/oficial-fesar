/* global base_url, $Jease$, $JssorSlideshowFormations$, $JssorSlideshowRunner$, $JssorArrowNavigator$, $JssorBulletNavigator$ */
angular.module("app").service('NoticiasService', [
    '$http',
    '$q',
    function ($http, $q) {
        this.getNoticias = function () {
            var deferred = $q.defer();
            return  $http.get(base_url + 'content/noticias/noticias.json?rand=' + Math.random(328762836386)).then(function (data) {
                deferred.resolve(data);
                return deferred.promise;
            }, function () {
                var response = {"data":
                            {
                                "message": "Hubo un error al intentar cargar las noticias"
                            },
                    "status": 404};
                showNoty(response);
                return deferred.promise;
            });
        };
        this.getSliderPrincipal = function () {
            var deferred = $q.defer();
            return  $http.get(base_url + 'content/main/slider_principal.json?rand=' + Math.random(328762836386)).then(function (data) {
                deferred.resolve(data);
                return deferred.promise;
            }, function () {
                var response = {"data":
                            {
                                "message": "Hubo un error al intentar cargar los banners"
                            },
                    "status": 404};
                showNoty(response);
                return deferred.promise;
            });
        };
        this.getMuroAragon = function () {
            var deferred = $q.defer();
            return  $http.get(base_url + 'content/muro_aragon/muro_aragon.json?rand=' + Math.random(328762836386)).then(function (data) {
                deferred.resolve(data);
                return deferred.promise;
            }, function () {
                var response = {"data":
                            {
                                "message": "Hubo un error al intentar cargar los banners"
                            },
                    "status": 404};
                showNoty(response);
                return deferred.promise;
            });
        };
    }
]);
angular.module("app").controller('MainCtrl', [
    '$scope',
    'NoticiasService',
    function ($scope, NoticiasService) {
        $scope.sitemap = '';
        $scope.actual_page = 1;
        NoticiasService.getNoticias().then(function (data) {
            $scope.noticias = data.data;
            $scope.pages_count = Math.ceil(data.data.length / 9);
            $scope.noticias.sort(function (a, b) {
                var aa = a.fecha.split('/').reverse().join(),
                        bb = b.fecha.split('/').reverse().join();
                return aa > bb ? -1 : (aa < bb ? 1 : 0);
            });
            $scope.getSubArray = function () {
                var first_notice = $scope.actual_page === 0 ? 1 : (($scope.actual_page - 1) * 9);
                return $scope.noticias.slice(first_notice, first_notice + 9);
            };
        });
        NoticiasService.getMuroAragon().then(function (data) {
            $scope.muro_aragon_main_images = data.data.slice(0, 2);
            $scope.muro_aragon_images = [];
            for (var i = 2; i < data.data.length; i++) {
                $scope.muro_aragon_images.push(data.data[i]);
            }
            NoticiasService.getSliderPrincipal().then(function (data) {
                $scope.slider_principal = data.data;
                jQuery(document).ready(function ($) {
                    var owl = $('.owl-carousel');
                    owl.owlCarousel({
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
                    //transiciones, agregar, eliminar o cambiar orden
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
                    /*$(window).bind("orientationchange", ScaleSlider);
					new Noty({
                        theme: 'metroui',
                        type: 'alert',
                        text: `
                            <div class="embed-responsive embed-responsive-16by9"
                                 style="border-radius: 15px;">
                                <iframe class="embed-responsive-item"
                                        src="https://www.youtube.com/embed/mqfi7ggD6mk"
                                        frameborder="0"
                                        title="Video de bienvenida"
                                        allowfullscreen></iframe>
                            </div>
                        `,
                        layout: 'center',
                        closeWith: ['button'],
                        progressbar: true,
                        modal: true,
                        timeout: false
                    }).show();*/
                });
            });
        });
    }
]);