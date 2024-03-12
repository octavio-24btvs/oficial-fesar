/* global base_url, angular */
angular.module('app', [
	'ui.router',
	'oc.lazyLoad',
	'jcs-autoValidate',
	'ngDialog'
]);
angular.module("app").run([
	'$transitions',
	'$window',
	function ($transitions, $window) {
		$transitions.onSuccess({}, function (transition) {
			var title = transition.to().title;
			var wintitle = title.name;
			$window.document.title = wintitle + ', FES Arag\u00F3n, UNAM, M\u00E9xico';
			$window.scrollTo(0, 0);
		});
	}
]);
angular.module('app').filter('to_trusted', [
	'$sce',
	function ($sce) {
		return function (text) {
			var txt = document.createElement("textarea");
			txt.innerHTML = text;
			return $sce.trustAsHtml(txt.value);
		};
	}
]);
angular.module('app').filter('startFrom', function () {
	return function (input, start) {
		if (input) {
			start = +start;
			return input.slice(start);
		}
		return [];
	};
});
angular.module('app').config([
	'$stateProvider',
	'$urlRouterProvider',
	function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/inicio');
		$stateProvider.state('main', {
			url: "/inicio",
			templateUrl: base_url + 'templates/main/main.html',
			controller: 'MainCtrl',
			title: {
				name: "Inicio"
			},
			resolve: {
				loadMyCtrl: [
					'$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							base_url + 'js/controllers/main-controllers.js'
						]);
					}
				]
			}
		});
		$stateProvider.state('concurso_oposicion_prueba', {
			url: "/concurso-oposicion-prueba",
			templateUrl: base_url + 'templates/menu_rapido/concurso-oposicion-prueba.html',
			controller: 'ConcursoOposicionCtrl',
			title: {
				name: "Concurso de Oposici\u00F3n"
			},
			resolve: {
				loadMyCtrl: [
					'$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							base_url + 'js/controllers/menu-rapido-controllers.js'
						]);
					}
				]
			}
		});
		$stateProvider.state('concurso_oposicion', {
			url: "/concurso-de-oposicion",
			templateUrl: base_url + 'templates/menu_rapido/concurso-oposicion.html',
			title: {
				name: "Concurso de Oposici\u00F3n"
			}
		});
		$stateProvider.state('concurso_de_asignatura', {
			url: "/concurso-de-asignatura",
			templateUrl: base_url + 'templates/menu_rapido/concurso/concurso-de-asignatura.html',
			title: {
				name: "Concurso de Asignatura"
			}
		});
		$stateProvider.state('concurso_de_carrera', {
			url: "/concurso-de-carrera",
			templateUrl: base_url + 'templates/menu_rapido/concurso/concurso-de-carrera.html',
			title: {
				name: "Concurso de Carrera"
			}
		});
		$stateProvider.state('concurso_de_tecnicos_academicos', {
			url: "/concurso-de-tecnicos-academicos",
			templateUrl: base_url + 'templates/menu_rapido/concurso/concurso-de-tecnicos-academicos.html',
			title: {
				name: "Concurso de Técnicos Académicos"
			}
		});
		$stateProvider.state('sija', {
			url: "/sija",
			templateUrl: base_url + 'templates/menu_rapido/sija.html',
			controller: 'SIJACtrl',
			title: {
				name: "Subprograma de Incorporaci\u00F3n a J\u00F3venes Acad\u00E9micos"
			},
			resolve: {
				loadMyCtrl: [
					'$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							base_url + 'js/controllers/menu-rapido-controllers.js'
						]);
					}
				]
			}
		});
		$stateProvider.state('congresos', {
			url: "/congresos/:congreso",
			templateUrl: base_url + 'templates/congresos/congresos.html',
			controller: 'CongresosCtrl',
			title: {
				name: "Pr\u00F3ximos Congresos"
			},
			resolve: {
				loadMyCtrl: [
					'$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							base_url + 'js/controllers/congresos-controllers.js'
						]);
					}
				]
			}
		});
		$stateProvider.state('informe', {
			url: "/informe/:informe",
			templateUrl: base_url + 'templates/informes/informes.html',
			controller: 'InformesCtrl',
			title: {
				name: "Informe anual"
			},
			resolve: {
				loadMyCtrl: [
					'$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							base_url + 'js/controllers/informes-controllers.js'
						]);
					}
				]
			}
		});
		$stateProvider.state('materiales_de_apoyo', {
			url: "/ingenieria/materiales-de-apoyo",
			templateUrl: base_url + 'templates/slider/materiales-de-apoyo.html',
			title: {
				name: "Material de Apoyo a la Docencia"
			}
		});
		$stateProvider.state('sni', {
			url: "/sni",
			templateUrl: base_url + 'templates/slider/sni.html',
			title: {
				name: "Reconocimiento en el sistema nacional de investigadoras e investigadores 2024"
			}
		});
		$stateProvider.state('cimi2024', {
			url: "/cimi2024",
			templateUrl: base_url + 'templates/slider/cimi2024.html',
			title: {
				name: "XVII Congreso Internacional Multidisciplinario de Investigación"
			}
		});
		$stateProvider.state('45_aniversario', {
			url: "/45-aniversario",
			templateUrl: base_url + 'templates/aniversario/45-aniversario.html',
			title: {
				name: "45 aniversario"
			},
			resolve: {
				loadMyCtrl: [
					'$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							base_url + 'js/directives/walkway-directives.js'
						]);
					}
				]
			}
		});
		$stateProvider.state('convocatoria_actividades_culturales', {
			url: "/convocatoria-actividades-culturales",
			templateUrl: base_url + 'templates/slider/convocatoria-actividades-culturales.html',
			title: {
				name: "Convocatoria Actividades Culturales"
			}
		});
		$stateProvider.state('feria_de_la_proteccion_civil', {
			url: "/feriadeproteccioncivil",
			templateUrl: base_url + 'templates/slider/feriadeproteccioncivil.html',
			title: {
				name: "Feria de la Protección Civil"
			}
		});
		$stateProvider.state('convocatorias_de_posgrado', {
			url: "/convocatorias-de-posgrado",
			templateUrl: base_url + 'templates/slider/convocatorias-de-posgrado.html',
			title: {
				name: "Convocatorias de posgrado"
			}
		});
		$stateProvider.state('3er_encuentro_de_tutoria', {
			url: "/3er-encuentro-de-tutoria",
			templateUrl: base_url + 'templates/slider/3er-encuentro-de-tutoria.html',
			title: {
				name: "3er Encuentro de tutoría inter facultades de estudios superiores"
			}
		});
		$stateProvider.state('convocatoria_politicas', {
			url: "/convocatoria-politicas",
			templateUrl: base_url + 'templates/slider/convocatoria-politicas.html',
			title: {
				name: "Convocatoria de Posgrado en Ciencias Políticas y Sociales"
			}
		});
		$stateProvider.state('administrativa', {
			url: "/administrativa",
			templateUrl: base_url + 'templates/adm/administrativa.html',
			title: {
				name: "administrativa"
			}
		});
		$stateProvider.state('tenochtitlan', {
			url: "/tenochtitlan",
			templateUrl: base_url + 'templates/slider/tenochtitlan.html',
			title: {
				name: "Tenochtitlan"
			}
		});
		$stateProvider.state('listados_de_profesores', {
			url: "/listados-de-profesores",
			templateUrl: base_url + 'templates/slider/listados-de-profesores.html',
			title: {
				name: "Listados de profesores y profesoras"
			}
		});
		$stateProvider.state('premio_rotoplas_funam', {
			url: "/premio-rotoplas-funam",
			templateUrl: base_url + 'templates/slider/premio-rotoplas-funam.html',
			title: {
				name: "Premio Rotoplas FUNAM"
			}
		});
		$stateProvider.state('convocatorias_art_51', {
			url: "/convocatorias-art-51",
			templateUrl: base_url + 'templates/slider/convocatorias-art-51.html',
			title: {
				name: "Convocatorias Art. 51"
			}
		});
		$stateProvider.state('transparencia_fes', {
			url: "/public_html/transparencia/docs.htm",
			templateUrl: base_url + 'templates/transparencia/docs_new.html',
			title:{
				name: "Transparencia FES Aragón"
			}
		});
		$stateProvider.state('convocatorias_fundacion_unam', {
			url: "/convocatorias-fundacion-unam",
			templateUrl: base_url + 'templates/slider/convocatorias-fundacion-unam.html',
			title: {
				name: "Convocatorias Fundacion UNAM"
			}
		});
		$stateProvider.state('curso_retorno', {
			url: "/curso_retorno",
			templateUrl: base_url + 'templates/slider/curso_retorno.html',
			title: {
				name: "Curso Retorno"
			}
		});
		$stateProvider.state('proc_elec', {
			url: "/proc-elec",
			templateUrl: base_url + 'templates/slider/proc-elec.html',
			title: {
				name: "Procelec"
			}
		});

		$stateProvider.state('cons_uni', {
			url: "/cons-uni",
			templateUrl: base_url + 'templates/slider/cons-uni.html',
			title: {
				name: "Consuni"
			}
		});

		$stateProvider.state('cons_tec', {
			url: "/cons-tec",
			templateUrl: base_url + 'templates/slider/cons-tec.html',
			title: {
				name: "Constec"
			}
		});
		$stateProvider.state('cons_uni_tec', {
			url: "/cons-uni-tec",
			templateUrl: base_url + 'templates/slider/cons-uni-tec.html',
			title: {
				name: "Consunitec"
			}
		});
		$stateProvider.state('proceso_de_elecciones', {
			url: "/proceso-de-elecciones",
			templateUrl: base_url + 'templates/votaciones/proceso-de-elecciones.html',
			title: {
				name: "Proceso de elecciones"
			}
		});
		$stateProvider.state('proceso_de_elecciones_conjunto_fes', {
			url: "/proceso-de-elecciones-conjunto-fes",
			templateUrl: base_url + 'templates/votaciones/proceso-de-elecciones-conjunto-fes.html',
			title: {
				name: "Proceso de Elecciones Conjunto FES"
			}
		});
		$stateProvider.state('proceso_de_elecciones_fesar', {
			url: "/proceso-de-elecciones-fesar",
			templateUrl: base_url + 'templates/votaciones/proceso-de-elecciones-fesar.html',
			title: {
				name: "Proceso de Elecciones FESAR"
			}
		});
		$stateProvider.state('convocatorias_de_proceso_de_elecciones', {
			url: "/convocatorias-de-proceso-de-elecciones",
			templateUrl: base_url + 'templates/votaciones/convocatorias-de-proceso-de-elecciones.html',
			title: {
				name: "Convocatorias de proceso de elecciones"
			}
		});
		$stateProvider.state('consejeros_universitarios', {
			url: "/consejeros-universitarios",
			templateUrl: base_url + 'templates/votaciones/consejeros-universitarios.html',
			title: {
				name: "Consejeros universitarios"
			}
		});
		$stateProvider.state('consejeros_tecnicos', {
			url: "/consejeros-tecnicos",
			templateUrl: base_url + 'templates/votaciones/consejeros-tecnicos.html',
			title: {
				name: "Consejeros técnicos"
			}
		});
		$stateProvider.state('orientaton_unam', {
			url: "/orientaton-unam",
			templateUrl: base_url + 'templates/orientaton/orientaton-unam.html',
			title: {
				name: "Orientatón UNAM"
			}
		});
		$stateProvider.state('covid_19', {
			url: "/covid-19",
			templateUrl: base_url + 'templates/slider/covid-19.html',
			title: {
				name: "Covid-19"
			},
			controller: 'Covid19Ctrl',
			resolve: {
				loadMyCtrl: [
					'$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							base_url + 'js/controllers/covid-19-controllers.js'
						]);
					}
				]
			}
		});
		$stateProvider.state('reporte_oct_2023', {
			url: "/reporte-oct-2023",
			templateUrl: base_url + 'templates/slider/reporte-oct-2023.html',
			title: {
				name: "Reporte octubre 2023"
			},
			controller: 'reporte-oct-2023Ctrl',
			resolve: {
				loadMyCtrl: [
					'$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							base_url + 'js/controllers/reporte-oct-2023-controllers.js'
						]);
					}
				]
			}
		});
		$stateProvider.state('plataforma', {
			url: "/plataforma",
			templateUrl: base_url + 'templates/slider/plataforma.html',
			title: {
				name: "Plataforma"
			}
		});
		$stateProvider.state('pappa', {
			url: "/pappa",
			templateUrl: base_url + 'templates/slider/pappa.html',
			title: {
				name: "pappa"
			}
		});
		$stateProvider.state('instrumento_de_percepcion_del_estudiante', {
			url: "/instrumento-de-percepcion-del-estudiante",
			templateUrl: base_url + 'templates/slider/instrumento-de-percepcion-del-estudiante.html',
			title: {
				name: "Aplicación del Instrumento de Percepción del Estudiante en la Práctica Docente Semestre 2021-2"
			}
		});
		$stateProvider.state('sistema_de_evaluacion', {
			url: "/sistema-de-evaluacion",
			templateUrl: base_url + 'templates/slider/sistema-de-evaluacion.html',
			title: {
				name: "Sistema de evaluación"
			}
		});
		$stateProvider.state('comunidad_cultura_unam', {
			url: "/comunidad-cultura-unam",
			templateUrl: base_url + 'templates/slider/comunidad-cultura-unam.html',
			title: {
				name: "Comunidad Cultura UNAM"
			}
		});
		$stateProvider.state('presea_20202', {
			url: "/presea-2020",
			templateUrl: base_url + 'templates/slider/presea-2020.html',
			title: {
				name: "Presea 2020"
			}
		});
		$stateProvider.state('designacion_fesar', {
			url: "/designacion-fesar",
			templateUrl: base_url + 'templates/slider/designacion-fesar.html',
			title: {
				name: "Designación de director o directora de la fes aragón"
			}
		});
		$stateProvider.state('comsoc', {
			url: "/comsoc",
			templateUrl: base_url + 'templates/slider/comsoc.html',
			title: {
				name: "COMSOC"
			},
			controller: 'comsocCtrl',
			resolve: {
				loadMyCtrl: [
					'$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							base_url + 'js/controllers/comsoc-controllers.js'
						]);
					}
				]
			}
		});
		$stateProvider.state('comision_local_de_seguridad', {
			url: "/comision-local-de-seguridad",
			templateUrl: base_url + 'templates/comision_local_de_seguridad/comision-local-de-seguridad.html',
			title: {
				name: "Comisión Local de Seguridad"
			}
		});

		$stateProvider.state('auditorias', {
			url: "/auditorias",
			templateUrl: base_url + 'templates/auditorias/auditorias.html',
			title: {
				name: "Auditorias"
			}
		});
		$stateProvider.state('pc_puma', {
			url: "/pc-puma",
			templateUrl: base_url + 'templates/menu_rapido/pc-puma.html',
			title: {
				name: "PC Puma"
			},
			controller: 'PCPumaCtrl',
			resolve: {
				loadMyCtrl: [
					'$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							base_url + 'js/controllers/menu-rapido-controllers.js'
						]);
					}
				]
			}
		});
		$stateProvider.state('boletines_de_centro_de_computo', {
			url: "/boletines-de-centro-de-computo",
			templateUrl: base_url + 'templates/menu_rapido/boletines-de-centro-de-computo.html',
			controller: "BoletinesdeCentrodeomputoCtrl",
			title: {
				name: "Boletines de Centro de Computo"
			},
			resolve: {
				loadMyCtrl: [
					'$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							base_url + 'js/controllers/boletines-de-centro-de-computo-controllers.js'
						]);
					}
				]
			}
		});
		$stateProvider.state('aviso_de_privacidad', {
			url: "/aviso-de-privacidad",
			templateUrl: base_url + 'templates/menu_rapido/aviso-de-privacidad.html',
			title: {
				name: "Aviso de privacidad"
			}
		});
		$stateProvider.state('tabla_de_concurso_de_oposicion', {
			url: "/tabla-de-concurso-de-oposicion",
			templateUrl: base_url + 'templates/menu_rapido/tabla-de-concurso-de-oposicion.html',
			title: {
				name: "Tabla de Concurso de Oposición"
			}
		});
		$stateProvider.state('tablas_de_equivalencia', {
			url: "/tablas-de-equivalencia",
			templateUrl: base_url + 'templates/menu_rapido/tablas-de-equivalencia.html',
			title: {
				name: "Tablas de equivalencia"
			}
		});
		$stateProvider.state('unidad_de_sistemas', {
			url: "/unidad-de-sistemas",
			templateUrl: base_url + 'templates/menu_rapido/unidad-de-sistemas.html',
			title: {
				name: "Unidad de sistemas"
			}
		});
		$stateProvider.state('seciones', {
			url: "/sec",
			templateUrl: base_url + 'templates/noticias/sec.html',
			title: {
				name: "Secciones"
			}
		});
		$stateProvider.state('noticias', {
			url: "/muro-aragon/noticias/{noticia}",
			templateUrl: base_url + 'templates/noticias/noticias.html',
			controller: 'NoticiasCtrl',
			title: {
				name: "Noticias"
			},
			params: {
				page: null
			},
			resolve: {
				page: [
					'$stateParams',
					function ($stateParams) {
						return $stateParams.page;
					}
				],
				loadMyCtrl: [
					'$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							base_url + 'js/controllers/noticias-controllers.js'
						]);
					}
				]
			}
		});
		$stateProvider.state('valores_unam', {
			url: "/vida-universitaria/valores-unam/{tag}",
			templateUrl: base_url + 'templates/vida_universitaria/valores-unam.html',
			controller: 'ValoresUnamCtrl',
			title: {
				name: "Valores UNAM"
			},
			resolve: {
				loadMyCtrl: [
					'$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							base_url + 'js/controllers/vida-universitaria-controllers.js'
						]);
					}
				]
			}
		});
		$stateProvider.state('genero', {
			url: "/primera_respuesta/genero",
			templateUrl: base_url + 'templates/primera_respuesta/genero.html',
			controller: 'GeneroCtrl',
			title: {
				name: "G\u00E9nero"
			},
			resolve: {
				loadMyCtrl: [
					'$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							base_url + 'js/controllers/genero-controllers.js'
						]);
					}
				]
			}
		});
		$stateProvider.state('directorio', {
			url: "/directorio",
			templateUrl: base_url + 'templates/menu_rapido/directorio.html',
			title: {
				name: "Directorios"
			}
		});
		$stateProvider.state('cioe', {
			url: "/congreso-internacional-de-orientacion-educativa",
			templateUrl: base_url + 'templates/nuestra_facultad/cioe.html',
			title: {
				name: "Congreso Internacional de Orientaci\u00F3n Educativa"
			}
		});
		$stateProvider.state('administracion', {
			url: "/administracion",
			templateUrl: base_url + 'templates/nuestra_facultad/administracion.html',
			title: {
				name: "Administraci\u00F3n"
			}
		});
		$stateProvider.state('todxs_somos_aragon', {
			url: "/todxs-somos-aragon",
			templateUrl: base_url + 'templates/vida_universitaria/todxs-somos-aragon.html',
			title: {
				name: "#TodxsSomosAragon"
			}
		});
		$stateProvider.state('egresados', {
			url: "/egresados",
			templateUrl: base_url + 'templates/vida_universitaria/egresados.html',
			title: {
				name: "Egresados"
			}
		});
		$stateProvider.state('acceso_estudiantes', {
			url: "/acceso-estudiantes",
			templateUrl: base_url + 'templates/menu_rapido/acceso-estudiantes.html',
			title: {
				name: "Acceso Estudiantes"
			}
		});
		$stateProvider.state('acceso_docentes', {
			url: "/acceso-docentes",
			templateUrl: base_url + 'templates/menu_rapido/acceso-docentes.html',
			title: {
				name: "Acceso Docentes"
			}
		});
		$stateProvider.state('acceso_jefes_carrera', {
			url: "/acceso-jefes-de-carrera",
			templateUrl: base_url + 'templates/menu_rapido/acceso-jefes-de-carrera.html',
			title: {
				name: "Acceso Jefes de Carrera"
			}
		});
		$stateProvider.state('licenciaturas', {
			url: "/oferta-academica/licenciaturas/{carrera}",
			templateUrl: base_url + 'templates/oferta_academica/licenciaturas/licenciatura.html',
			controller: 'LicenciaturasCtrl',
			title: {
				name: "Licenciaturas"
			},
			resolve: {
				loadMyCtrl: [
					'$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							base_url + 'js/controllers/oferta-academica-controllers.js'
						]);
					}
				]
			}
		});
		$stateProvider.state('transparencia', {
			url: "/nuestra-facultad/transparencia",
			templateUrl: base_url + 'templates/nuestra_facultad/transparencia.html',
			title: {
				name: 'Transparencia'
			},
			controller: 'NuestraFacultadCtrl',
			resolve: {
				loadMyCtrl: [
					'$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							base_url + 'js/controllers/nuestra-facultad-controllers.js'
						]);
					}
				]
			}
		});
		$stateProvider.state('posgrado', {
			url: "/oferta-academica/posgrado",
			templateUrl: base_url + 'templates/oferta_academica/posgrados.html',
			title: {
				name: 'Posgrado'
			}
		});
		$stateProvider.state('investigacion', {
			url: "/investigacion",
			templateUrl: base_url + 'templates/investigacion/investigacion.html',
			title: {
				name: "Investigaci\u00F3n"
			}
		});
		$stateProvider.state('institutos_de_investigacion', {
			url: "/investigacion/institutos",
			templateUrl: base_url + 'templates/investigacion/institutos-de-investigacion.html',
			title: {
				name: "Institutos de Investigaci\u00F3n"
			},
			controller: 'InstitutosInvestigacionCtrl',
			resolve: {
				loadMyCtrl: [
					'$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							base_url + 'js/controllers/investigacion-controllers.js'
						]);
					}
				]
			}
		});
		$stateProvider.state('investigadores', {
			url: "/investigacion/investigadores/:instituto",
			templateUrl: base_url + 'templates/investigacion/investigadores.html',
			title: {
				name: "Investigadores"
			},
			controller: 'InvestigadoresCtrl',
			resolve: {
				loadMyCtrl: [
					'$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							base_url + 'js/controllers/investigacion-controllers.js'
						]);
					}
				]
			}
		});
		$stateProvider.state('investigador', {
			url: "/investigacion/investigador/:investigador",
			templateUrl: base_url + 'templates/investigacion/investigador.html',
			title: {
				name: "Investigador"
			},
			controller: 'InvestigadorCtrl',
			resolve: {
				loadMyCtrl: [
					'$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							base_url + 'js/controllers/investigacion-controllers.js'
						]);
					}
				]
			}
		});
		$stateProvider.state('cise', {
			url: "/cise",
			templateUrl: base_url + 'templates/cise/cise.html',
			title: {
				name: "Centro Integral de Servicios Estudiantiles"
			}
		});
		$stateProvider.state('vida_universitaria', {
			url: "/vida-universitaria",
			templateUrl: base_url + 'templates/vida_universitaria/vida-universitaria.html',
			title: {
				name: "Vida Universitaria"
			}
		});
		$stateProvider.state('centro_lenguas', {
			url: "/oferta-academica/centro-de-lenguas/{lengua}",
			templateUrl: base_url + 'templates/oferta_academica/centro_lenguas/centro-de-lenguas.html',
			controller: 'CentroLenguasCtrl',
			title: {
				name: "Centro de Lenguas"
			},
			resolve: {
				loadMyCtrl: [
					'$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							base_url + 'js/controllers/oferta-academica-controllers.js'
						]);
					}
				]
			}
		});
		$stateProvider.state('educacion_continua', {
			url: "/oferta-academica/educacion-continua",
			templateUrl: base_url + 'templates/oferta_academica/educacion_continua/educacion-continua.html',
			title: {
				name: "Educaci\u00F3n Continua"
			}
		});
		$stateProvider.state('duacyd', {
			url: "/oferta-academica/duacyd",
			templateUrl: base_url + 'templates/oferta_academica/duacyd/duacyd.html',
			title: {
				name: "DUACyD"
			}
		});
		$stateProvider.state('suayed', {
			url: "/oferta-academica/suayed",
			templateUrl: base_url + 'templates/oferta_academica/duacyd/suayed.html',
			title: {
				name: "SUAyED"
			}
		});
		$stateProvider.state('cle', {
			url: "/oferta-academica/centro-de-lenguas",
			templateUrl: base_url + 'templates/oferta_academica/duacyd/cle.html',
			title: {
				name: "Centro de Lenguas"
			}
		});
		$stateProvider.state('ciencias_ingenierias', {
			url: "/oferta-academica/ciencias-fisico-matematicas-y-de-las-ingenierias",
			templateUrl: base_url + 'templates/oferta_academica/licenciaturas/ciencias-ingenierias.html',
			controller: 'LicenciaturasCarouselCtrl',
			title: {
				name: "Ciencias f\u00EDsico-matem\u00E1ticas y de las ingenier\u00EDas"
			},
			resolve: {
				loadMyCtrl: [
					'$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							base_url + 'js/controllers/oferta-academica-controllers.js'
						]);
					}
				]
			}
		});
		$stateProvider.state('ciencias_sociales', {
			url: "/oferta-academica/ciencias-sociales",
			templateUrl: base_url + 'templates/oferta_academica/licenciaturas/ciencias-sociales.html',
			controller: 'LicenciaturasCarouselCtrl',
			title: {
				name: "Ciencias sociales"
			},
			resolve: {
				loadMyCtrl: [
					'$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							base_url + 'js/controllers/oferta-academica-controllers.js'
						]);
					}
				]
			}
		});
		$stateProvider.state('humanidades_artes', {
			url: "/oferta-academica/humanidades-y-artes",
			templateUrl: base_url + 'templates/oferta_academica/licenciaturas/humanidades-y-artes.html',
			controller: 'LicenciaturasCarouselCtrl',
			title: {
				name: "Humanidades y artes"
			},
			resolve: {
				loadMyCtrl: [
					'$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							base_url + 'js/controllers/oferta-academica-controllers.js'
						]);
					}
				]
			}
		});
		$stateProvider.state('maestria_especializacion', {
			url: "/oferta-academica/maestrias-y-especializaciones/{carrera}",
			templateUrl: base_url + 'templates/oferta_academica/maestrias_especializaciones/maestrias-especializaciones.html',
			controller: 'MaestriasEspecializacionesCtrl',
			title: {
				name: "Especializaciones y Maestr\u00EDas"
			},
			resolve: {
				loadMyCtrl: [
					'$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							base_url + 'js/controllers/oferta-academica-controllers.js'
						]);
					}
				]
			}
		});
		$stateProvider.state('doctorados', {
			url: "/oferta-academica/doctorados/{carrera}",
			templateUrl: base_url + 'templates/oferta_academica/doctorados/doctorados.html',
			controller: 'DoctoradosCtrl',
			title: {
				name: "Doctorados"
			},
			resolve: {
				loadMyCtrl: [
					'$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							base_url + 'js/controllers/oferta-academica-controllers.js'
						]);
					}
				]
			}
		});
		$stateProvider.state('portal_docente', {
			url: "/portal-docente",
			templateUrl: base_url + 'templates/menu_rapido/portal-docente.html',
			title: {
				name: "Portal Docente"
			},
			controller: 'PortalDocenteCtrl',
			resolve: {
				loadMyCtrl: [
					'$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							base_url + 'js/controllers/menu-rapido-controllers.js'
						]);
					}
				]
			}
		});
		$stateProvider.state('tramites', {
			url: "/cise/tramites",
			templateUrl: base_url + 'templates/cise/tramites.html',
			title: {
				name: "Tr\u00E1mites"
			}
		});
		$stateProvider.state('servicios_escolares', {
			url: "/cise/servicios-escolares",
			templateUrl: base_url + 'templates/cise/servicios-escolares.html',
			title: {
				name: "Servicios Escolares"
			},
			params: {
				seccion: null
			},
			controller: 'ServiciosEscolaresCtrl',
			resolve: {
				loadMyCtrl: [
					'$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							base_url + 'js/controllers/menu-rapido-controllers.js'
						]);
					}
				]
			}
		});
		$stateProvider.state('becas', {
			url: "/cise/becas",
			templateUrl: base_url + 'templates/cise/becas.html',
			title: {
				name: "Becas"
			}
		});
		$stateProvider.state('tutorias', {
			url: "/cise/tutorias",
			templateUrl: base_url + 'templates/cise/tutorias.html',
			title: {
				name: "Tutor\u00EDas"
			}
		});
		$stateProvider.state('intercambio_academico', {
			url: "/cise/intercambio-academico",
			templateUrl: base_url + 'templates/cise/intercambio-academico.html',
			title: {
				name: "Intercambio Acad\u00E9mico"
			}
		});
		$stateProvider.state('servicio_social', {
			url: "/cise/servicio-social",
			templateUrl: base_url + 'templates/cise/servicio-social.html',
			title: {
				name: "Servicio Social"
			}
		});
		$stateProvider.state('revision_estudios', {
			url: "/cise/revision-de-estudios",
			templateUrl: base_url + 'templates/cise/revision-de-estudios.html',
			title: {
				name: "Revisi\u00F3n de Estudios"
			}
		});
		$stateProvider.state('extension_universitaria', {
			url: "/vida-universitaria/extension-universitaria",
			templateUrl: base_url + 'templates/vida_universitaria/extension-universitaria.html',
			title: {
				name: "Extensi\u00F3n Universitaria"
			}
		});
		$stateProvider.state('servicios_comunidad', {
			url: "/vida-universitaria/servicios-a-la-comunidad",
			templateUrl: base_url + 'templates/vida_universitaria/servicios-a-la-comunidad.html',
			title: {
				name: "Servicios a la Comunidad"
			}
		});
		$stateProvider.state('hecho_en_aragon', {
			url: "/vida-universitaria/hecho-en-aragon",
			templateUrl: base_url + 'templates/vida_universitaria/hecho-en-aragon.html',
			title: {
				name: "#HechoEnAragon"
			}
		});
		$stateProvider.state('actividades_culturales', {
			url: "/vida-universitaria/extension-universitaria/actividades-culturales",
			templateUrl: base_url + 'templates/vida_universitaria/extension_universitaria/actividades-culturales.html',
			title: {
				name: "Actividades Culturales"
			},
			controller: 'ActividadesCulturalesCtrl',
			resolve: {
				loadMyCtrl: [
					'$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							base_url + 'js/controllers/vida-universitaria-controllers.js'
						]);
					}
				]
			}
		});
		$stateProvider.state('actividades_deportivas', {
			url: "/vida-universitaria/extension-universitaria/actividades-deportivas-y-recreativas",
			templateUrl: base_url + 'templates/vida_universitaria/extension_universitaria/actividades-deportivas-y-recreativas.html',
			title: {
				name: "Actividades Deportivas y Recreativas"
			}
		});
		$stateProvider.state('primera_respuesta', {
			url: "/primera-respuesta",
			templateUrl: base_url + 'templates/primera_respuesta/primera-respuesta.html',
			title: {
				name: "Primera Respuesta"
			}
		});
		$stateProvider.state('servicios_medicos', {
			url: "/primera-respuesta/servicios-medicos",
			templateUrl: base_url + 'templates/primera_respuesta/servicios-medicos.html',
			title: {
				name: "Servicios M\u00E9dicos"
			}
		});
		$stateProvider.state('prevencion_y_seguridad_universitaria', {
			url: "/primera-respuesta/prevencion-y-seguridad-universitaria",
			templateUrl: base_url + 'templates/primera_respuesta/prevencion-y-seguridad-universitaria.html',
			title: {
				name: "Prevenci\u00F3n y Seguridad Universitaria"
			}
		});
		$stateProvider.state('oficina_juridica', {
			url: "/primera-respuesta/oficina-juridica",
			templateUrl: base_url + 'templates/primera_respuesta/oficina-juridica.html',
			controller: 'UnidadJuridicaCtrl',
			title: {
				name: "Oficina Jur\u00Eddica"
			},
			resolve: {
				loadMyCtrl: [
					'$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							base_url + 'js/controllers/primera-respuesta-controllers.js'
						]);
					}
				]
			}
		});
		$stateProvider.state('calendario_escolar', {
			url: "/calendario-escolar",
			templateUrl: base_url + 'templates/menu_rapido/calendario-escolar.html',
			title: {
				name: "Calendario Escolar"
			}
		});
		$stateProvider.state('cima', {
			url: "/investigacion/cima",
			templateUrl: base_url + 'templates/investigacion/centro_de_investigacion_multidisciplinaria_aragon.html',
			title: {
				name: "CIMA"
			}
		});
		$stateProvider.state('cta', {
			url: "/investigacion/cta",
			templateUrl: base_url + 'templates/investigacion/centro_tecnologico_aragon.html',
			title: {
				name: "CTA"
			}
		});
		$stateProvider.state('proyeccionaragon', {
			url: "/investigacion/proyeccionaragon",
			templateUrl: base_url + 'templates/investigacion/proyeccionaragon.html',
			title: {
				name: "#ProyecciónAragón"
			}
		});
		$stateProvider.state('nuestra_facultad', {
			url: "/nuestra-facultad",
			templateUrl: base_url + 'templates/nuestra_facultad/nuestra-facultad.html',
			title: {
				name: "Nuestra facultad"
			}
		});
		$stateProvider.state('fes_aragon', {
			url: "/nuestra-facultad/fes-aragon",
			templateUrl: base_url + 'templates/nuestra_facultad/fes_aragon.html',
			title: {
				name: "FES Arag\u00F3n"
			}
		});
		$stateProvider.state('llegar_fes_aragon', {
			url: "/nuestra-facultad/llegar-fes-aragon",
			templateUrl: base_url + 'templates/nuestra_facultad/como_llegar_a_la_fes.html',
			title: {
				name: "C\u00F3mo llegar a la FES"
			}
		});
		$stateProvider.state('mapa_fes_aragon3d', {
			url: "/nuestra-facultad/mapa-fes-aragon3d",
			templateUrl: base_url + 'templates/nuestra_facultad/mapa_fes_aragon3d.html',
			title: {
				name: "Mapa"
			}
		});
		$stateProvider.state('mapa_fes_aragon', {
			url: "/nuestra-facultad/mapa-fes-aragon",
			templateUrl: base_url + 'templates/nuestra_facultad/mapa_fes_aragon.html',
			title: {
				name: "Mapa"
			}
		});
		$stateProvider.state('cuerpos_colegiados', {
			url: "/nuestra-facultad/cuerpos-colegiados",
			templateUrl: base_url + 'templates/nuestra_facultad/cuerpos_colegiados.html',
			title: {
				name: "Cuerpos Colegiados"
			}
		});
		$stateProvider.state('comite_de_genero', {
			url: "/nuestra-facultad/comite-de-genero",
			templateUrl: base_url + 'templates/nuestra_facultad/comite-de-genero.html',
			title: {
				name: "Comite de género"
			}
		});
		$stateProvider.state('cuerpos_colegiados_list', {
			url: "/nuestra-facultad/cuerpos-colegiados/:area",
			templateUrl: base_url + 'templates/nuestra_facultad/cuerpos_colegiados_list.html',
			controller: 'CuerposColegiadosListCtrl',
			title: {
				name: "Cuerpos Colegiados"
			},
			resolve: {
				loadMyCtrl: [
					'$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							base_url + 'js/controllers/nuestra-facultad-controllers.js'
						]);
					}
				]
			}
		});
		$stateProvider.state('direccion', {
			url: "/nuestra-facultad/direccion",
			templateUrl: base_url + 'templates/nuestra_facultad/direccion.html',
			title: {
				name: "Direcci\u00F3n"
			}
		});
		$stateProvider.state('primera_gestion', {
			url: "/nuestra-facultad/direccion/primera-gestion",
			templateUrl: base_url + 'templates/nuestra_facultad/direccion/primera-gestion.html',
			title: {
				name: "Primera gestión"
			}
		});
		$stateProvider.state('segunda_gestion', {
			url: "/nuestra-facultad/direccion/segunda-gestion",
			templateUrl: base_url + 'templates/nuestra_facultad/direccion/segunda-gestion.html',
			title: {
				name: "Segunda gestión"
			}
		});
		$stateProvider.state('consejo_tecnico', {
			url: "/nuestra-facultad/consejo-tecnico",
			templateUrl: base_url + 'templates/nuestra_facultad/consejo_tecnico.html',
			title: {
				name: "Consejo T\u00E9cnico"
			}
		});
		$stateProvider.state('integrantes', {
			url: "/nuestra-facultad/consejo-tecnico/integrantes",
			templateUrl: base_url + 'templates/nuestra_facultad/integrantes.html',
			title: {
				name: "Integrantes"
			}
		});
		$stateProvider.state('acuerdos', {
			url: "/nuestra-facultad/consejo-tecnico/acuerdos/:anio",
			templateUrl: base_url + 'templates/nuestra_facultad/consejo-tecnico-lists.html',
			controller: "AcuerdosCtrl",
			title: {
				name: "Acuerdos"
			},
			resolve: {
				loadMyCtrl: [
					'$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							base_url + 'js/controllers/consejo-tecnico-controllers.js'
						]);
					}
				]
			}
		});
		$stateProvider.state('orden_del_dia', {
			url: "/nuestra-facultad/consejo-tecnico/orden-del-dia/:anio",
			templateUrl: base_url + 'templates/nuestra_facultad/consejo-tecnico-lists.html',
			controller: "OrdenDelDiaCtrl",
			title: {
				name: "Orden del d\u00EDa"
			},
			resolve: {
				loadMyCtrl: [
					'$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							base_url + 'js/controllers/consejo-tecnico-controllers.js'
						]);
					}
				]
			}
		});
		$stateProvider.state('bolsa_trabajo', {
			url: "/cise/bolsa-de-trabajo",
			templateUrl: base_url + 'templates/cise/bolsa-de-trabajo.html',
			title: {
				name: "Bolsa de Trabajo"
			}
		});
		$stateProvider.state('creditos', {
			url: "/creditos",
			templateUrl: base_url + 'templates/creditos/creditos.html',
			title: {
				name: "Cr\u00E9ditos"
			}
		});
		$stateProvider.state('acceso_intranet', {
			url: "/acceso-intranet",
			templateUrl: base_url + 'templates/menu_rapido/acceso-intranet.html',
			title: {
				name: "Acceso Intranet"
			}
		});
		$stateProvider.state('computo_fesar', {
			url: "/computo-fes-aragon",
			templateUrl: base_url + 'templates/menu_rapido/computo-fesar.html',
			title: {
				name: "C\u00F3mputo FESAR"
			}
		});
		$stateProvider.state('biblioteca', {
			url: "/biblioteca",
			templateUrl: base_url + 'templates/biblioteca/biblioteca.html',
			title: {
				name: "Biblioteca"
			},
			controller: 'BibliotecaCtrl',
			resolve: {
				loadMyCtrl: [
					'$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							base_url + 'js/controllers/biblioteca-controllers.js'
						]);
					}
				]
			}
		});
		$stateProvider.state('novedades_biblioteca', {
			url: "/novedades-biblioteca",
			templateUrl: base_url + 'templates/biblioteca/novedades.html',
			controller: 'NovedadesBiliotecaCtrl',
			title: {
				name: "Novedades en Biblioteca"
			},
			resolve: {
				loadMyCtrl: [
					'$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							base_url + 'js/controllers/biblioteca-controllers.js'
						]);
					}
				]
			}
		});
		$stateProvider.state('registro', {
			url: "/biblioteca/registro"
		});
		$stateProvider.state('titulacion_fesar', {
			url: "/titulacion-fes-aragon",
			templateUrl: base_url + 'templates/menu_rapido/titulacion-fesar.html',
			controller: 'CarrerasListCtrl',
			title: {
				name: "Titulaci\u00F3n"
			},
			resolve: {
				loadMyCtrl: [
					'$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							base_url + 'js/controllers/titulacion-controllers.js'
						]);
					}
				]
			}
		});
		$stateProvider.state('titulacionfesar', {
			url: "/cise/titulacionfesar",
			templateUrl: base_url + 'templates/cise/titulacionfesar.html',
			title: {
				name: "Titulaci\u00F3n FESAR"
			},
		});
		$stateProvider.state('secciones_noticias', {
			url: "/seccion/:seccion",
			templateUrl: base_url + 'templates/secciones-noticias/seccion-noticia.html',
			controller: 'SeccionesNoticiasCtrl',
			title: {
				name: "Secciones Noticias"
			},
			resolve: {
				loadMyCtrl: [
					'$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							base_url + 'js/controllers/secciones-noticias-controllers.js'
						]);
					}
				]
			}
		});
		$stateProvider.state('oferta_academica', {
			url: "/oferta-academica",
			templateUrl: base_url + 'templates/oferta_academica/oferta-academica.html',
			title: {
				name: "Oferta Acad\u00E9mica"
			}
		});
		/* Gaceta, en suspension, pero en procaso de migracion a aragon.unam.mx */
		$stateProvider.state('gaceta', {
			url: '/gaceta/:numero',
			templateUrl: base_url + 'templates/gacetas/gaceta.html',
			controller: 'GacetaCtrl',
			title: {
				name: 'Gaceta FES Arag\u00F3n'
			},
			resolve: {
				loadMyCtrl: [
					'$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							base_url + 'js/controllers/gaceta-controllers.js'
						]);
					}
				]
			}
		});
	}
]);
function showNoty(data) {
	if (data.status > 199 && data.status < 300) {
		new Noty({
			theme: 'metroui',
			text: data.data.message,
			type: 'success',
			timeout: 3000
		}).show();
	}
	if (data.status > 299 && data.status < 500) {
		new Noty({
			theme: 'metroui',
			text: data.data.message,
			type: 'error',
			timeout: 3000
		}).show();
	}
	if (data.status > 499) {
		new Noty({
			theme: 'metroui',
			text: data.data.message,
			type: 'warning',
			timeout: 3000
		}).show();
	}
}
