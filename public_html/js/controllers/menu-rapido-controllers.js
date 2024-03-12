/* global $, base_url, $JssorBulletNavigator$, $JssorArrowNavigator$, $JssorSlideshowFormations$, $Jease$, $JssorSlideshowRunner$ */
angular.module("app").service('MenuRapidoService', [
	'$http',
	'$q',
	'$state',
	function ($http, $q, $state) {
		this.getConcursosPdfs = function () {
			var deferred = $q.defer();
			return  $http.get(base_url + 'content/menu_rapido/concursos.json?rand=' + Math.random(328762836386)).then(function (data) {
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
		this.getSIJAPdfs = function () {
			var deferred = $q.defer();
			return  $http.get(base_url + 'content/menu_rapido/sija.json?rand=' + Math.random(328762836386)).then(function (data) {
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
	}
]);
angular.module("app").controller("ConcursoOposicionCtrl", [
	'$scope',
	'MenuRapidoService',
	function ($scope, MenuRapidoService) {
		$scope.concursos = [];
		$scope.showing = {};
		MenuRapidoService.getConcursosPdfs().then(function (data) {
			$scope.concursos = data.data;
			var fecha_actual = getMonthAndYearFromString(new Date().toLocaleDateString());
			for (var i = 0; i < $scope.concursos.length; i++) {
				var fecha_concurso = getMonthAndYearFromString($scope.concursos[i].fecha);
				if ((fecha_actual[0] === fecha_concurso[0]) && (fecha_actual[1] === fecha_concurso[1])) {
					$scope.concursos[i].actual = true;
				} else {
					$scope.concursos[i].actual = false;
				}
			}
		});
		$scope.selectConcurso = function (concurso) {
			$scope.showing = concurso;
		};
		function getMonthAndYearFromString(string) {
			return string.split('/').slice(1);
		}
	}
]);
angular.module("app").controller("SIJACtrl", [
	'$scope',
	'MenuRapidoService',
	function ($scope, MenuRapidoService) {
		$scope.showing = 0;
		$scope.programas = [];
		MenuRapidoService.getSIJAPdfs().then(function (data) {
			console.log(data.data);
			$scope.programas = data.data;
		});

		$scope.selectPrograma = function (programa) {
			$scope.showing = programa;
		};
	}
]);
angular.module("app").controller('ServiciosEscolaresCtrl', [
	'$scope',
	'$stateParams',
	function ($scope, $stateParams) {
		$scope.showing = '0';
		if ($stateParams.seccion) {
			$scope.showing = $stateParams.seccion;
			setTimeout(() => {
				document.getElementById($scope.showing).scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				});
			}, 1000);
		}
	}
]);
angular.module('app').controller('PCPumaCtrl', [
	'$scope',
	function ($scope) {
		$scope.imagenes = ['pcpumas-1.jpg', 'pcpumas-2.jpg', 'pcpumas-3.jpg', 'pcpumas-4.jpg', 'pcpumas-5.jpg', 'pcpumas-6.jpg', 'pcpumas-7.jpg', 'pcpumas-8.jpg'];
		$scope.banners = [
			{
				imagen: 'cuenta-de-correo-aragon.jpg',
				descripcion: 'Cuenta de correo Arag\u00F3n',
				hipervinculo: ''
			},
			{
				imagen: 'como-crear-una-cuenta-aragon.jpg',
				descripcion: 'C\u00F3mo crear una cuenta Arag\u00F3n',
				hipervinculo: ''
			},
			{
				imagen: 'comunicado.jpg',
				descripcion: 'Comunicado',
				hipervinculo: ''
			}
		];
		$scope.modal = false;
		$scope.image_source = '';
		$scope.showModal = function (imagen) {
			$scope.image_source = 'public_html/img/menu_rapido/computo-fesar/carrusel/' + imagen;
			$scope.modal = true;
		};
		$scope.accordion = {
			item1: false,
			item2: false,
			item3: false
		};
		$scope.showItem = function (item) {
			if (item === 1) {
				$scope.accordion.item1 = !($scope.accordion.item1);
				if ($scope.accordion.item2 || $scope.accordion.item3) {
					$scope.accordion.item2 = false;
					$scope.accordion.item3 = false;
				}
			} else if (item === 2) {
				$scope.accordion.item2 = !($scope.accordion.item2);
				if ($scope.accordion.item1 || $scope.accordion.item3) {
					$scope.accordion.item1 = false;
					$scope.accordion.item3 = false;
				}
			} else {
				$scope.accordion.item3 = !($scope.accordion.item3);
				if ($scope.accordion.item1 || $scope.accordion.item2) {
					$scope.accordion.item1 = false;
					$scope.accordion.item2 = false;
				}
			}
		};
		jQuery(document).ready(function ($) {
			var owl = $('.owl-carousel');
			owl.owlCarousel({
				rtl: true,
				responsiveClass: true,
				responsive: {
					0: {
						items: 2,
						nav: false
					},
					600: {
						items: 3,
						nav: false
					},
					1000: {
						items: 3,
						nav: false,
					}
				},
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
	}
]);
angular.module('app').controller('PortalDocenteCtrl', [
	function () {
		$(document).ready(function () {
			const owl = $('.owl-carousel');
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
		});
	}
]);
