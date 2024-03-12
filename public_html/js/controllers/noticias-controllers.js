/* global base_url, $Jease$, $JssorSlideshowFormations$, $JssorSlideshowRunner$, $JssorArrowNavigator$, $JssorThumbnailNavigator$, $JssorBulletNavigator$ */
angular.module("app").service('NoticiaService', [
    '$http',
    '$q',
    '$state',
    function ($http, $q, $state) {
        this.getDataNoticia = function (noticia) {
            var deferred = $q.defer();
            return  $http.get(base_url + 'content/noticias/' + noticia + '.json?rand=' + Math.random(328762836386)).then(function (data) {
                deferred.resolve(data);
                return deferred.promise;
            }, function () {
                var response = {"data":
                            {
                                "message": "No se pudo cargar el contenido, por favor intentelo mas tarde"
                            },
                    "status": 404};
                showNoty(response);
                $state.go('main');
                return deferred.promise;
            });
        };
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
    }
]);
angular.module("app").controller('NoticiasCtrl', [
    '$scope',
    '$stateParams',
    'NoticiaService',
    '$sce',
    function ($scope, $stateParams, NoticiaService, $sce) {
        $scope.note = {};
        $scope.actual_page = ($stateParams.page === null ? 1 : $stateParams.page);
        NoticiaService.getNoticias().then(function (data) {
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
        NoticiaService.getDataNoticia($stateParams.noticia).then(function (data) {
            $scope.note = data.data;
            $scope.note.autor = $sce.trustAsHtml($scope.note.autor);
            $scope.note.contenido = $sce.trustAsHtml($scope.note.contenido);
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
                    },
                    $ThumbnailNavigatorOptions: {//[Optional] Options to specify and enable thumbnail navigator or not
                        $Class: $JssorThumbnailNavigator$, //[Required] Class to create thumbnail navigator instance
                        $ChanceToShow: 2, //[Required] 0 Never, 1 Mouse Over, 2 Always
                        $ActionMode: 1, //[Optional] 0 None, 1 act by click, 2 act by mouse hover, 3 both, default value is 1
                        $SpacingX: 8, //[Optional] Horizontal space between each thumbnail in pixel, default value is 0
                        $Cols: 4, //[Optional] Number of pieces to display, default value is 1
                        $Align: 0                          //[Optional] The offset position to park thumbnail
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
    }
]);