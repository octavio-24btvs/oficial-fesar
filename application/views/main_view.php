<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?>
<!DOCTYPE html>
<html ng-app="app" lang="es">

<head>
    <meta http-equiv="cache-control" content="max-age=0" />
    <meta http-equiv="cache-control" content="no-cache" />
    <meta http-equiv="expires" content="0" />
    <meta http-equiv="expires" content="Tue, 01 Jan 1980 1:00:00 GMT" />
    <meta http-equiv="pragma" content="no-cache" />
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale = 1.0, minimum-scale=1.0" />
    <meta name="description"
        content="Pertenecemos a la oferta de educación superior de la UNAM, ofreciendo catorce licenciaturas acreditadas y diversos posgrados en los sistemas escolarizado y abierto." />
    <meta name="abstract"
        content="Pertenecemos a la oferta de educación superior de la UNAM, ofreciendo catorce licenciaturas acreditadas y diversos posgrados en los sistemas escolarizado y abierto." />
    <meta name="keywords"
        content="UNAM,Universidad,Nacional,Autónoma,México,FES,fes,Aragón,docencia,investigación,cultura,estudiantes,académicos,egresados,vinculación,biblioteca,becas,alumnos,investigador,deportes,publicaciones,admisión,ciencia,humanidades,cursos,diplomados,talleres,licenciatura,posgrado,maestría,especialización,educación,servicios, ingeniería, civil, en, computación, eléctrica, electrónica, industrial, mecánica, comunicación, y, periodismo, derecho, economía, planificación, para, el, desarrollo, agropecuario, relaciones, internacionales, sociología, arquitectura, diseño, industrial, pedagogía, duacyd, suayed, centro, de, lenguas, alemán, francés, inglés, italiano, japonés, latín, portugués, ruso" />
    <link rel="canonical" href="https://aragon.unam.mx/fes-aragon/#!/inicio" />
    <link href="<?php echo base_url(); ?>css/all.css" rel="stylesheet" type="text/css" />
    <link href="<?php echo base_url(); ?>css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <link href="<?php echo base_url(); ?>css/gallery.css" rel="stylesheet" type="text/css" />
    <link href="<?php echo base_url(); ?>css/noty.css" rel="stylesheet" type="text/css" />
    <link href="<?php echo base_url(); ?>css/metroui.css" rel="stylesheet" type="text/css" />
    <link href="<?php echo base_url(); ?>css/animate.min.css" rel="stylesheet" type="text/css" />
    <link href="<?php echo base_url(); ?>css/owl.carousel.min.css" rel="stylesheet" type="text/css" />
    <link href="<?php echo base_url(); ?>css/owl.theme.default.min.css" rel="stylesheet" type="text/css" />
    <link href="<?php echo base_url(); ?>css/menu.css" rel="stylesheet" type="text/css" />
    <link href="<?php echo base_url(); ?>css/icono.css" rel="stylesheet" type="text/css" />
    <link href="<?php echo base_url(); ?>css/styles.css" rel="stylesheet" type="text/css" />
    <link href="<?php echo base_url(); ?>css/icons.css" rel="stylesheet" type="text/css" />
    <link href="<?php echo base_url(); ?>css/default.css" rel="stylesheet" type="text/css" />
    <link href="<?php echo base_url(); ?>css/ngDialog.min.css" rel="stylesheet" type="text/css" />
    <link href="<?php echo base_url(); ?>css/ngDialog-theme-default.min.css" rel="stylesheet" type="text/css" />
    <link href="https://file.myfontastic.com/jAx8FQ6BduMMYMC7YUYKcA/icons.css" rel="stylesheet">
    <link
        href="https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i"
        rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Josefin+Sans:100,100i,300,300i,400,400i,600,600i,700,700i"
        rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Carrois+Gothic" rel="stylesheet">
    <script type="text/javascript">
    var base_url = "<?php echo base_url(); ?>";
    var api_url = "<?php echo $api_url; ?>api/";
    var documents_url = "<?php echo base_url(); ?>documents/";
    var images_url = "<?php echo base_url(); ?>img/";
    </script>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-K2KW85NBWH"></script>
    <script>
    window.dataLayer = window.dataLayer || [];

    function gtag() {
        dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', 'G-K2KW85NBWH');
    </script>
</head>

<body>
    <div class="container cuerpo-principal">
        <div id="header" class="row sticky-top">
            <header class="col-12">
                <div class="row nav rounded-top align-items-stretch justify-content-between" style="padding: 5px;">
                    <div class="d-flex align-items-center justify-content-center justify-content-lg-start"
                        id="logo-custom">
                        <img src="<?php echo base_url(); ?>img/logos/logosunamfes.jpg" alt="UNAM, FES Arag&oacute;n"
                            height="89" />
                        <!--  <p class="orgullo">ORGULLO PUMA UNAM</p> -->
                    </div>
                    <div class="menu-container row">
                        <div class="google-modal">
                            <div class="google-modal-content text-center">
                                <span class="google-modal-close">&times;</span>
                                <form method=GET target="_blank" action="https://www.google.com/search"
                                    onsubmit="return googleSearch();">
                                    <a href=" https://www.google.com/" title="Google">
                                        <img SRC="https://www.google.com/logos/Logo_40wht.gif" border="0" ALT="Google"
                                            align="absmiddle" /></a>
                                    <input class="form-control" type=text name="q" size=31 />
                                    <button class="btn btn-default mt-3" type=submit>B&uacute;squeda de google</button>
                                </form>
                            </div>
                        </div>
                        <div class="menu" id="menu">
                            <ul class="d-none d-1200-block">
                                <li><a ui-sref="main" title="Inicio">INICIO</a></li>
                                <li class="oferta-academica-menu"><a title="Oferta acad&eacute;mica"
                                        class="cursor-default" ui-sref="oferta_academica"> OFERTA ACAD&Eacute;MICA</a>
                                    <ul>
                                        <li class="titulo-submenu"><a title="Licenciaturas"
                                                class="cursor-default"><strong>Licenciaturas</strong></a></li>
                                        <li><a class="cursor-default"
                                                title="Ciencias F&iacute;s.-Mat. y de las Ingenier&iacute;as"
                                                ui-sref="ciencias_ingenierias"><strong>Ciencias F&iacute;s.-Mat. <br />
                                                    y de las Ingenier&iacute;as &nbsp; </strong><i
                                                    class="icon-cfmi"></i></a>
                                            <ul>
                                                <li><a ui-sref="licenciaturas({carrera:'civil'})"
                                                        title="Civil">Civil</a></li>
                                                <li><a ui-sref="licenciaturas({carrera:'computacion'})"
                                                        title="Computaci&oacute;n">Computaci&oacute;n</a></li>
                                                <li><a ui-sref="licenciaturas({carrera:'electrica-electronica'})"
                                                        title="El&eacute;ctrica Electr&oacute;nica">El&eacute;ctrica
                                                        Electr&oacute;nica</a></li>
                                                <li><a ui-sref="licenciaturas({carrera:'industrial'})"
                                                        title="Industrial">Industrial</a></li>
                                                <li><a ui-sref="licenciaturas({carrera:'mecanica'})"
                                                        title="Mec&aacute;nica">Mec&aacute;nica</a></li>
                                            </ul>
                                        </li>
                                        <li><a title="Ciencias sociales" class="cursor-default"
                                                ui-sref="ciencias_sociales"><br /><strong>Ciencias Sociales
                                                    &nbsp;</strong><i class="icon-ciencias-sociales"></i></a>
                                            <ul>
                                                <li><a ui-sref="licenciaturas({carrera:'comunicacion-y-periodismo'})"
                                                        title="Comunicaci&oacute;n y Periodismo">Comunicaci&oacute;n y
                                                        Periodismo</a></li>
                                                <li><a ui-sref="licenciaturas({carrera:'derecho'})"
                                                        title="Derecho">Derecho</a></li>
                                                <li><a ui-sref="licenciaturas({carrera:'economia'})"
                                                        title="Econom&iacute;a">Econom&iacute;a</a></li>
                                                <li class="text-left"><a
                                                        ui-sref="licenciaturas({carrera:'planificacion-para-el-desarrollo-agropecuario'})"
                                                        title="Planificaci&oacute;n para el Desarrollo Agropecuario">Planificaci&oacute;n
                                                        para el Desarrollo Agropecuario</a></li>
                                                <li><a ui-sref="licenciaturas({carrera:'relaciones-internacionales'})"
                                                        title="Relaciones Internacionales">Relaciones
                                                        Internacionales</a></li>
                                                <li><a ui-sref="licenciaturas({carrera:'sociologia'})"
                                                        title="Sociolog&iacute;a">Sociolog&iacute;a</a></li>
                                            </ul>
                                        </li>
                                        <li><a title="Humanidades y Artes" class="cursor-default"
                                                ui-sref="humanidades_artes"><br /><strong>Humanidades y Artes
                                                    &nbsp;</strong><i class="icon-hya"></i></a>
                                            <ul>
                                                <li><a ui-sref="licenciaturas({carrera:'arquitectura'})"
                                                        title="Arquitectura">Arquitectura</a></li>
                                                <li><a ui-sref="licenciaturas({carrera:'diseno-industrial'})"
                                                        title="Dise&ntilde;o Industrial">Dise&ntilde;o Industrial</a>
                                                </li>
                                                <li><a ui-sref="licenciaturas({carrera:'pedagogia'})"
                                                        title="Pedagog&iacute;a">Pedagog&iacute;a</a></li>
                                            </ul>
                                        </li>
                                        <li><a title="DUACyD" class="cursor-default"
                                                ui-sref="duacyd"><br /><strong>DUACyD&nbsp;</strong><i
                                                    class="icon-duacyd"></i></a>
                                            <ul>
                                                <li><a class="borde-inferior cursor-default" title="SUAyED"
                                                        ui-sref="suayed">SUAyED &nbsp;<i class="icon-suayed"></i></a>
                                                    <ul>
                                                        <li><a ui-sref="licenciaturas({carrera:'suayed-derecho'})"
                                                                title="Derecho">Derecho</a></li>
                                                        <li><a ui-sref="licenciaturas({carrera:'suayed-economia'})"
                                                                title="Econom&iacute;a">Econom&iacute;a</a></li>
                                                        <li><a ui-sref="licenciaturas({carrera:'suayed-relaciones-internacionales'})"
                                                                title="Relaciones Internacionales">Relaciones
                                                                Internacionales</a></li>
                                                    </ul>
                                                </li>
                                                <li><a class="borde-inferior cursor-default"
                                                        title="Educaci&oacute;n Continua"
                                                        ui-sref="educacion_continua">Educaci&oacute;n Continua &nbsp;<i
                                                            class="icon-educacion-continua"></i></a>
                                                    <ul>
                                                        <li><a title="Diplomados"
                                                                href="public_html/documents/oferta_academica/catalogo-servicios.pdf#page=15"
                                                                target="_blank">Diplomados</a></li>
                                                        <li><a title="Cursos"
                                                                href="public_html/documents/oferta_academica/catalogo-servicios.pdf#page=20"
                                                                target="_blank">Cursos</a></li>
                                                        <!--<li><a ui-sref="educacion_continua" title="Talleres">Talleres</a></li>-->
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="titulo-submenu"><a class="cursor-default" title="Posgrado"
                                                ui-sref="posgrado"><strong>Posgrado</strong></a></li>
                                        <li>
                                        <li><a class="cursor-default" title="Especializaci&oacute;n"
                                                ui-sref="posgrado"><strong>Especializaci&oacute;n &nbsp;</strong><i
                                                    class="icon-posgrados"></i></a>
                                            <ul>
                                                <li><a ui-sref="maestria_especializacion({carrera:'especializacion-en-derecho'})"
                                                        title="Derecho">Derecho</a></li>
                                                <li><a ui-sref="maestria_especializacion({carrera:'especializacion-en-puentes'})"
                                                        title="Puentes">Puentes</a></li>
                                            </ul>
                                        </li>
                                        <li><a class="cursor-default" title="Maestr&iacute;a"
                                                ui-sref="posgrado"><strong>Maestr&iacute;a &nbsp;</strong><i
                                                    class="icon-posgrados"></i></a>
                                            <ul>
                                                <li><a ui-sref="maestria_especializacion({carrera:'maestria-en-arquitectura'})"
                                                        title="Arquitectura">Arquitectura</a></li>
                                                <li><a ui-sref="maestria_especializacion({carrera:'maestria-en-derecho'})"
                                                        title="Derecho">Derecho</a></li>
                                                <li><a ui-sref="maestria_especializacion({carrera:'maestria-en-economia'})"
                                                        title="Econom&iacute;a">Econom&iacute;a</a></li>
                                                <li><a ui-sref="maestria_especializacion({carrera:'maestria-en-estudios-politicos-y-sociales'})"
                                                        title="Estudios Políticos y Sociales">Estudios Políticos y
                                                        Sociales</a></li>
                                                <li><a ui-sref="maestria_especializacion({carrera:'maestria-en-ingenieria'})"
                                                        title="Ingenier&iacute;a">Ingenier&iacute;a</a></li>
                                                <li><a ui-sref="maestria_especializacion({carrera:'maestria-en-pedagogia'})"
                                                        title="Pedagog&iacute;a">Pedagog&iacute;a</a></li>
                                                <li><a ui-sref="maestria_especializacion({carrera:'maestria-en-politica-criminal'})"
                                                        title="Pol&iacute;tica Criminal">Pol&iacute;tica Criminal</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a class="cursor-default" title="Doctorado"
                                                ui-sref="posgrado"><strong>Doctorado &nbsp;</strong><i
                                                    class="icon-posgrados"></i></a>
                                            <ul>
                                                <li><a ui-sref="doctorados({carrera:'doctorado-en-arquitectura'})"
                                                        title="Arquitectura">Arquitectura</a></li>
                                                <li><a ui-sref="doctorados({carrera:'doctorado-en-derecho'})"
                                                        title="Derecho">Derecho</a></li>
                                                <li><a ui-sref="doctorados({carrera:'doctorado-en-economia'})"
                                                        title="Econom&iacute;a">Econom&iacute;a</a></li>
                                                <li><a ui-sref="doctorados({carrera:'doctorado-en-pedagogia'})"
                                                        title="Pedagog&iacute;a">Pedagog&iacute;a</a></li>
                                            </ul>
                                        </li>
                                        <li><a class="cursor-default" title="Centro de Lenguas" ui-sref="cle">Centro de
                                                Lenguas &nbsp; <i class="icon-centro-de-lenguas"></i></a>
                                            <ul class="lista-lenguas">
                                                <li><a ui-sref="centro_lenguas({lengua:'aleman'})"
                                                        title="Alem&aacute;n">Alem&aacute;n</a></li>
                                                <li><a ui-sref="centro_lenguas({lengua:'frances'})"
                                                        title="Franc&eacute;s">Franc&eacute;s</a></li>
                                                <li><a ui-sref="centro_lenguas({lengua:'ingles'})"
                                                        title="Ingl&eacute;s">Ingl&eacute;s</a></li>
                                                <li><a ui-sref="centro_lenguas({lengua:'italiano'})"
                                                        title="Italiano">Italiano</a></li>
                                                <li><a ui-sref="centro_lenguas({lengua:'japones'})"
                                                        title="Japon&eacute;s">Japon&eacute;s</a></li>
                                                <li><a ui-sref="centro_lenguas({lengua:'latin'})"
                                                        title="Lat&iacute;n">Lat&iacute;n</a></li>
                                                <li><a ui-sref="centro_lenguas({lengua:'portugues'})"
                                                        title="Portugu&eacute;s">Portugu&eacute;s</a></li>
                                                <li><a ui-sref="centro_lenguas({lengua:'ruso'})" title="Ruso">Ruso</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li class="oferta-academica-menu investigacion"><a class="cursor-default"
                                        ui-sref="investigacion" title="Investigaci&oacute;n">INVESTIGACI&Oacute;N</a>
                                    <ul>
                                        <li class="w-50"><a ui-sref="cima" title="CIMA">Centro de Investigaci&oacute;n
                                                Multidisciplinaria Arag&oacute;n &nbsp; <i
                                                    class="icon-centro-de-investigacion-aragon"></i></a>
                                        </li>
                                        <li class="w-50"><a ui-sref="cta" title="CTA">Centro Tecnol&oacute;gico
                                                Arag&oacute;n &nbsp;<i class="icon-centro-tecnologico"></i></a>
                                        </li>
                                        <li class="w-33"></li>
                                        <li class="w-33"><a ui-sref="proyeccionaragon"
                                                title="#Proyecci&oacute;nArag&oacute;n">#Proyecci&oacute;nArag&oacute;n
                                                &nbsp;<svg class="icon-menu">
                                                    <use
                                                        href="public_html/img/investigacion/proyeccionaragon/proyeccionaragon.svg#proyeccionaragon" />
                                                    </svg></a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="menu-cise oferta-academica-menu"><a class="cursor-default" ui-sref="cise"
                                        title="CISE">CISE</a>
                                    <ul>
                                        <li class="w-25"><a ui-sref="servicios_escolares"
                                                title="Servicios Escolares">Servicios Escolares &nbsp;<i
                                                    class="icon-servicios-escolares"></i></a>
                                        </li>
                                        <li class="w-20"><a ui-sref="becas" title="Becas">Becas &nbsp;<i
                                                    class="icon-becas-1"></i></a>
                                        </li>
                                        <li class="w-20"><a ui-sref="tutorias" title="Tutor&iacute;as">Tutor&iacute;as
                                                &nbsp;<i class="icon-tutorias"></i></a>
                                        </li>
                                        <li class="w-35"><a ui-sref="intercambio_academico"
                                                title="Intercambio Acad&eacute;mico">Intercambio Acad&eacute;mico
                                                &nbsp;<i class="icon-intercambio-academico"></i></a>
                                        </li>
                                        <li class="w-33"><a ui-sref="servicio_social" title="Servicio Social">Servicio
                                                Social &nbsp;<i class="icon-servicio-social"></i></a>
                                        </li>
                                        <li class="w-33"><a ui-sref="bolsa_trabajo" title="Bolsa de Trabajo">Bolsa de
                                                Trabajo &nbsp;<i class="icon-bolsa-de-trabajo"></i></a>
                                        </li>
                                        <li class="w-33"><a ui-sref="revision_estudios"
                                                title="Revisi&oacute;n de Estudios">Revisi&oacute;n de Estudios &nbsp;<i
                                                    class="icon-revision-de-estudios"></i></a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="vida-universitaria oferta-academica-menu"><a class="cursor-default"
                                        ui-sref="vida_universitaria" title="Vida universitaria">VIDA UNIVERSITARIA</a>
                                    <ul>
                                        <li style="width: 26%"><a ui-sref="egresados"
                                                title="Comunidad Egresada">Comunidad Egresada &nbsp;<i
                                                    class="icon-titulacion-05"></i></a>
                                        </li>
                                        <li style="width: 37%"><a ui-sref="extension_universitaria"
                                                title="Extensi&oacute;n Universitaria">Extensi&oacute;n Universitaria
                                                &nbsp;<i class="icon-extencion-universitaria"></i></a>
                                        </li>
                                        <li style="width: 37%"><a ui-sref="servicios_comunidad"
                                                title="Servicios a la Comunidad">Servicios a la Comunidad &nbsp;<i
                                                    class="icon-servicio-a-la-comunidad"></i></a>
                                        </li>
                                        <li style="width: 17%"></li>
                                        <li style="width: 33.3333%"><a ui-sref="valores_unam({tag:'esmiderecho'})"
                                                title="#ValoresUNAM"> #ValoresUNAM&nbsp;<i
                                                    class="icon-todxs-somos-unam"></i></a>
                                        </li>
                                        <li style="width: 33.3333%"><a ui-sref="hecho_en_aragon"
                                                title="#HechoEnAragon">#HechoEnAragon &nbsp;<i
                                                    class="icon-hecho-en-aragon-3"></i></a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="vida-universitaria oferta-academica-menu"><a class="cursor-default"
                                        title="Primera respuesta" ui-sref="primera_respuesta">PRIMERA RESPUESTA</a>
                                    <ul>
                                        <li style="width: 33.3333%"><a href="https://wa.me/c/5215580287264"
                                                title="Contacto de Emergencia">Contacto de Emergencia &nbsp; &nbsp;<i
                                                    class="icon-whatsapp"></i></a>
                                        </li>
                                        <li style="width: 33.3333%"><a ui-sref="servicios_medicos"
                                                title="Servicios M&eacute;dicos"> Servicios M&eacute;dicos &nbsp;
                                                &nbsp;<i class="icon-servicios-medicos"></i></a>
                                        </li>
                                        <li style="width: 33.3333%"><a ui-sref="genero" title="Género">Género &nbsp;
                                                &nbsp;<i class="icon-genero"></i></a>
                                        </li>
                                        <li style="width: 50%; padding-top: 2px !important;"><a
                                                ui-sref="prevencion_y_seguridad_universitaria"
                                                title="Prevenci&oacute;n y Seguridad Universitaria">Prevención y
                                                Seguridad Universitaria &nbsp;<svg class="icon-menu">
                                                    <use
                                                        href="public_html/img/logos/prevencion-y-seguridad-universitaria.svg#prevencion-y-seguridad-universitaria" />
                                                    </svg></a>
                                        </li>
                                        <li style="width: 50%"><a ui-sref="oficina_juridica"
                                                title="Unidad Jur&iacute;dica">Oficina Jur&iacute;dica &nbsp;<i
                                                    class="icon-unidad-juridica"></i></a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="vida-universitaria oferta-academica-menu"><a class="cursor-default"
                                        title="Nuestra Facultad" ui-sref="nuestra_facultad">NUESTRA FACULTAD</a>
                                    <ul>
                                        <li><a ui-sref="fes_aragon" title="FES Arag&oacute;n">FES Arag&oacute;n &nbsp;<i
                                                    class="icon-fes-aragon"></i></a>
                                        </li>
                                        <li><a ui-sref="consejo_tecnico" title="Consejo T&eacute;cnico">Consejo
                                                T&eacute;cnico &nbsp;<i class="icon-consejo-tecnico"></i></a>
                                        </li>
                                        <li><a ui-sref="direccion" title="Direcci&oacute;n">Direcci&oacute;n &nbsp;<i
                                                    class="icon-direccion-1"></i></a>
                                        </li>
                                        <li style="padding-top: 2px !important;"><a ui-sref="cuerpos_colegiados"
                                                title="Cuerpos Colegiados">Cuerpos Colegiados &nbsp;<svg
                                                    class="icon-menu">
                                                    <use
                                                        href="public_html/img/nuestra_facultad/cuerpos_colegiados/cuerpos-colegiados.svg#cuerpos-colegiados" />
                                                    </svg></a>
                                        </li>
                                        <li><a ui-sref="directorio" title="Directorios UNAM"> Directorios UNAM&nbsp;<i
                                                    class="icon-simbolo-de-la-sumision-del-directorio"
                                                    style="font-size:16px;"></i></a>
                                        </li>
                                        <li><a ui-sref="transparencia" title="Transparencia">Transparencia &nbsp;<i
                                                    class="icon-transprencia"></i></a>
                                        </li>
                                        <li><a ui-sref="administracion" title="Administraci&oacute;n">
                                                Administraci&oacute;n&nbsp;<i class="icon icon-administracion"></i></a>
                                        </li>
                                        <li><a ui-sref="llegar_fes_aragon"
                                                title="C&oacute;mo llegar a la FES">C&oacute;mo llegar a la FES&nbsp; <i
                                                    class="icon-como-llegar"></i></a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="d-block d-1200-none col-12 w-100" id="hamburguer-icon">
                        <label class="color-white toggle cursor-pointer btn bg-grey float-right" for="menu-toggle">
                            <span>Men&uacute; </span><i class=" color-white fa fa-bars"></i>
                        </label>
                        <input class="toggle" id="menu-toggle" type="checkbox" />
                        <div class="responsive-menu card">
                            <ul>
                                <li class="title-responsive"> <a ui-sref="main" title="Inicio">INICIO</a></li>
                                <li>
                                    <label class="title-responsive menu-hover" for="oferta-responsive"><a
                                            ui-sref="oferta_academica" title="Oferta acad&eacute;mica">OFERTA
                                            ACAD&Eacute;MICA</a> <i class="fas fa-angle-right"
                                            ng-show="checks.oferta_responsive === '0'"></i><i class="fas fa-angle-down"
                                            ng-show="checks.oferta_responsive === '1'"></i></label>
                                    <input class="parent-menu-toggle" id="oferta-responsive"
                                        ng-init="checks.oferta_responsive = '0'" ng-true-value="'1'"
                                        ng-false-value="'0'" ng-model="checks.oferta_responsive" type="checkbox" />
                                    <ul>
                                        <li>
                                            <label class="menu-hover" for="licenciaturas-responsive">Licenciaturas <i
                                                    class="fas fa-angle-right"
                                                    ng-show="checks.licenciaturas_responsive === '0'"></i><i
                                                    class="fas fa-angle-down"
                                                    ng-show="checks.licenciaturas_responsive === '1'"></i></label>
                                            <input class="parent-menu-toggle" id="licenciaturas-responsive"
                                                ng-init="checks.licenciaturas_responsive = '0'" ng-true-value="'1'"
                                                ng-false-value="'0'" ng-model="checks.licenciaturas_responsive"
                                                type="checkbox" />
                                            <ul>
                                                <li>
                                                    <label class="menu-hover" for="ciencias-responsive"><a
                                                            ui-sref="ciencias_ingenierias"><i
                                                                class="icon-cfmi"></i>Ciencias F&iacute;s.-Mat. y de las
                                                            Ingenier&iacute;as</a><i class="fas fa-angle-right"
                                                            ng-show="checks.ciencias_responsive === '0'"></i><i
                                                            class="fas fa-angle-down"
                                                            ng-show="checks.ciencias_responsive === '1'"></i></label>
                                                    <input class="parent-menu-toggle" id="ciencias-responsive"
                                                        ng-init="checks.ciencias_responsive = '0'" ng-true-value="'1'"
                                                        ng-false-value="'0'" ng-model="checks.ciencias_responsive"
                                                        type="checkbox" />
                                                    <ul>
                                                        <li class="menu-hover"><a
                                                                ui-sref="licenciaturas({carrera:'civil'})"
                                                                title="Civil">Civil</a></li>
                                                        <li class="menu-hover"><a
                                                                ui-sref="licenciaturas({carrera:'computacion'})"
                                                                title="Computaci&oacute;n">Computaci&oacute;n</a></li>
                                                        <li class="menu-hover"><a
                                                                ui-sref="licenciaturas({carrera:'electrica-electronica'})"
                                                                title="El&eacute;ctrica Electr&oacute;nica">El&eacute;ctrica
                                                                Electr&oacute;nica</a></li>
                                                        <li class="menu-hover"><a
                                                                ui-sref="licenciaturas({carrera:'industrial'})"
                                                                title="Industrial">Industrial</a></li>
                                                        <li class="menu-hover"><a
                                                                ui-sref="licenciaturas({carrera:'mecanica'})"
                                                                title="Mec&aacute;nica">Mec&aacute;nica</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <label class="menu-hover" for="sociales-responsive"><a
                                                            ui-sref="ciencias_sociales"><i
                                                                class="icon-ciencias-sociales"></i>Ciencias Sociales
                                                        </a><i class="fas fa-angle-right"
                                                            ng-show="checks.sociales_responsive === '0'"></i><i
                                                            class="fas fa-angle-down"
                                                            ng-show="checks.sociales_responsive === '1'"></i></label>
                                                    <input class="parent-menu-toggle" id="sociales-responsive"
                                                        ng-init="checks.sociales_responsive = '0'" ng-true-value="'1'"
                                                        ng-false-value="'0'" ng-model="checks.sociales_responsive"
                                                        type="checkbox" />
                                                    <ul>
                                                        <li class="menu-hover"><a
                                                                ui-sref="licenciaturas({carrera:'comunicacion-y-periodismo'})"
                                                                title="Comunicaci&oacute;n y Periodismo">Comunicaci&oacute;n
                                                                y Periodismo</a></li>
                                                        <li class="menu-hover"><a
                                                                ui-sref="licenciaturas({carrera:'derecho'})"
                                                                title="Derecho">Derecho</a></li>
                                                        <li class="menu-hover"><a
                                                                ui-sref="licenciaturas({carrera:'economia'})"
                                                                title="Econom&iacute;a">Econom&iacute;a</a></li>
                                                        <li class="menu-hover"><a
                                                                ui-sref="licenciaturas({carrera:'planificacion-para-el-desarrollo-agropecuario'})"
                                                                title="Planificaci&oacute;n para el Desarrollo Agropecuario">Planificaci&oacute;n
                                                                para el Desarrollo Agropecuario</a></li>
                                                        <li class="menu-hover"><a
                                                                ui-sref="licenciaturas({carrera:'sociologia'})"
                                                                title="Sociolog&iacute;a">Sociolog&iacute;a</a></li>
                                                        <li class="menu-hover"><a
                                                                ui-sref="licenciaturas({carrera:'relaciones-internacionales'})"
                                                                title="Relaciones Internacionales">Relaciones
                                                                Internacionales</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <label class="menu-hover" for="humanidades-responsive"><a
                                                            ui-sref="humanidades_artes"><i
                                                                class="icon-hya"></i>Humanidades y Artes </a><i
                                                            class="fas fa-angle-right"
                                                            ng-show="checks.humanidades_responsive === '0'"></i><i
                                                            class="fas fa-angle-down"
                                                            ng-show="checks.humanidades_responsive === '1'"></i></label>
                                                    <input class="parent-menu-toggle" id="humanidades-responsive"
                                                        ng-init="checks.humanidades_responsive = '0'"
                                                        ng-true-value="'1'" ng-false-value="'0'"
                                                        ng-model="checks.humanidades_responsive" type="checkbox" />
                                                    <ul>
                                                        <li class="menu-hover"><a
                                                                ui-sref="licenciaturas({carrera:'arquitectura'})"
                                                                title="Arquitectura">Arquitectura</a></li>
                                                        <li class="menu-hover"><a
                                                                ui-sref="licenciaturas({carrera:'diseno-industrial'})"
                                                                title="Dise&ntilde;o Industrial">Dise&ntilde;o
                                                                Industrial</a></li>
                                                        <li class="menu-hover"><a
                                                                ui-sref="licenciaturas({carrera:'pedagogia'})"
                                                                title="Pedagog&iacute;a">Pedagog&iacute;a</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <label class="menu-hover" for="duacyd-responsive"><a ui-sref="duacyd">DUACyD
                                                </a><i class="fas fa-angle-right"
                                                    ng-show="checks.duacyd_responsive === '0'"></i><i
                                                    class="fas fa-angle-down"
                                                    ng-show="checks.duacyd_responsive === '1'"></i></label>
                                            <input class="parent-menu-toggle" id="duacyd-responsive"
                                                ng-init="checks.duacyd_responsive = '0'" ng-true-value="'1'"
                                                ng-false-value="'0'" ng-model="checks.duacyd_responsive"
                                                type="checkbox" />
                                            <ul>
                                                <li>
                                                    <label class="menu-hover" for="suayed-responsive"><a
                                                            ui-sref="suayed"><i class=" icon-suayed"></i>SUAyED </a><i
                                                            class="fas fa-angle-right"
                                                            ng-show="checks.suayed_responsive === '0'"></i><i
                                                            class="fas fa-angle-down"
                                                            ng-show="checks.suayed_responsive === '1'"></i></label>
                                                    <input class="parent-menu-toggle" id="suayed-responsive"
                                                        ng-init="checks.suayed_responsive = '0'" ng-true-value="'1'"
                                                        ng-false-value="'0'" ng-model="checks.suayed_responsive"
                                                        type="checkbox" />
                                                    <ul>
                                                        <li class="menu-hover"><a
                                                                ui-sref="licenciaturas({carrera:'suayed-derecho'})"
                                                                title="Derecho">Derecho</a></li>
                                                        <li class="menu-hover"><a
                                                                ui-sref="licenciaturas({carrera:'suayed-economia'})"
                                                                title="Econom&iacute;a">Econom&iacute;a</a></li>
                                                        <li class="menu-hover"><a
                                                                ui-sref="licenciaturas({carrera:'suayed-relaciones-internacionales'})"
                                                                title="Relaciones Internacionales">Relaciones
                                                                Internacionales</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <label class="menu-hover" for="ec-responsive"><a
                                                            ui-sref="educacion_continua"><i
                                                                class=" icon-educacion-continua"></i>Educaci&oacute;n
                                                            Continua </a><i class="fas fa-angle-right"
                                                            ng-show="checks.ec_responsive === '0'"></i><i
                                                            class="fas fa-angle-down"
                                                            ng-show="checks.ec_responsive === '1'"></i></label>
                                                    <input class="parent-menu-toggle" id="ec-responsive"
                                                        ng-init="checks.ec_responsive = '0'" ng-true-value="'1'"
                                                        ng-false-value="'0'" ng-model="checks.ec_responsive"
                                                        type="checkbox" />
                                                    <ul>
                                                        <li class="menu-hover"><a ui-sref="educacion_continua"
                                                                title="Diplomados">Diplomados</a></li>
                                                        <li class="menu-hover"><a ui-sref="educacion_continua"
                                                                title="Cursos">Cursos</a></li>
                                                        <!--<li class="menu-hover"><a ui-sref="educacion_continua" title="Talleres">Talleres</a></li>-->
                                                    </ul>
                                                </li>
                                                <li>
                                                    <label class="menu-hover" for="cele-responsive"><a ui-sref="cle"><i
                                                                class="icon-centro-de-lenguas icon-mobile"></i>Centro de
                                                            Lenguas </a><i class="fas fa-angle-right"
                                                            ng-show="checks.cele_responsive === '0'"></i><i
                                                            class="fas fa-angle-down"
                                                            ng-show="checks.cele_responsive === '1'"></i></label>
                                                    <input class="parent-menu-toggle" id="cele-responsive"
                                                        ng-init="checks.cele_responsive = '0'" ng-true-value="'1'"
                                                        ng-false-value="'0'" ng-model="checks.cele_responsive"
                                                        type="checkbox" />
                                                    <ul>
                                                        <li class="menu-hover"><a
                                                                ui-sref="centro_lenguas({lengua:'aleman'})"
                                                                title="Alem&aacute;n">Alem&aacute;n</a></li>
                                                        <li class="menu-hover"><a
                                                                ui-sref="centro_lenguas({lengua:'frances'})"
                                                                title="Franc&eacute;s">Franc&eacute;s</a></li>
                                                        <li class="menu-hover"><a
                                                                ui-sref="centro_lenguas({lengua:'ingles'})"
                                                                title="Ingl&eacute;s">Ingl&eacute;s</a></li>
                                                        <li class="menu-hover"><a
                                                                ui-sref="centro_lenguas({lengua:'italiano'})"
                                                                title="Italiano">Italiano</a></li>
                                                        <li class="menu-hover"><a
                                                                ui-sref="centro_lenguas({lengua:'japones'})"
                                                                title="Japon&eacute;s">Japon&eacute;s</a></li>
                                                        <li class="menu-hover"><a
                                                                ui-sref="centro_lenguas({lengua:'latin'})"
                                                                title="Lat&iacute;n">Lat&iacute;n</a></li>
                                                        <li class="menu-hover"><a
                                                                ui-sref="centro_lenguas({lengua:'portugues'})"
                                                                title="Portugu&eacute;s">Portugu&eacute;s</a></li>
                                                        <li class="menu-hover"><a
                                                                ui-sref="centro_lenguas({lengua:'ruso'})"
                                                                title="Ruso">Ruso</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <label class="menu-hover" for="posgrado-responsive"><a
                                                    ui-sref="posgrado">Posgrado </a><i class="fas fa-angle-right"
                                                    ng-show="checks.posgrado_responsive === '0'"></i><i
                                                    class="fas fa-angle-down"
                                                    ng-show="checks.posgrado_responsive === '1'"></i></label>
                                            <input class="parent-menu-toggle" id="posgrado-responsive"
                                                ng-init="checks.posgrado_responsive = '0'" ng-true-value="'1'"
                                                ng-false-value="'0'" ng-model="checks.posgrado_responsive"
                                                type="checkbox" />
                                            <ul>
                                                <li>
                                                    <label class="menu-hover" for="especializacion-responsive"><i
                                                            class=" icon-posgrados"></i> Especializaci&oacute;n <i
                                                            class="fas fa-angle-right"
                                                            ng-show="checks.especializacion_responsive === '0'"></i><i
                                                            class="fas fa-angle-down"
                                                            ng-show="checks.especializacion_responsive === '1'"></i></label>
                                                    <input class="parent-menu-toggle" id="especializacion-responsive"
                                                        ng-init="checks.especializacion_responsive = '0'"
                                                        ng-true-value="'1'" ng-false-value="'0'"
                                                        ng-model="checks.especializacion_responsive" type="checkbox" />
                                                    <ul>
                                                        <li class="menu-hover"><a
                                                                ui-sref="maestria_especializacion({carrera:'especializacion-en-derecho'})"
                                                                title="Derecho">Derecho</a></li>
                                                        <li class="menu-hover"><a
                                                                ui-sref="maestria_especializacion({carrera:'especializacion-en-puentes'})"
                                                                title="Puentes">Puentes</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <label class="menu-hover" for="maestria-responsive"><i
                                                            class=" icon-posgrados"></i> Maestr&iacute;a <i
                                                            class="fas fa-angle-right"
                                                            ng-show="checks.maestria_responsive === '0'"></i><i
                                                            class="fas fa-angle-down"
                                                            ng-show="checks.maestria_responsive === '1'"></i></label>
                                                    <input class="parent-menu-toggle" id="maestria-responsive"
                                                        ng-init="checks.maestria_responsive = '0'" ng-true-value="'1'"
                                                        ng-false-value="'0'" ng-model="checks.maestria_responsive"
                                                        type="checkbox" />
                                                    <ul>
                                                        <li class="menu-hover"><a
                                                                ui-sref="maestria_especializacion({carrera:'maestria-en-arquitectura'})"
                                                                title="Arquitectura">Arquitectura</a></li>
                                                        <li class="menu-hover"><a
                                                                ui-sref="maestria_especializacion({carrera:'maestria-en-derecho'})"
                                                                title="Derecho">Derecho</a></li>
                                                        <li class="menu-hover"><a
                                                                ui-sref="maestria_especializacion({carrera:'maestria-en-economia'})"
                                                                title="Econom&iacute;a">Econom&iacute;a</a></li>
                                                        <li class="menu-hover"><a
                                                                ui-sref="maestria_especializacion({carrera:'maestria-en-estudios-politicos-y-sociales'})"
                                                                title="Estudios Políticos y Sociales">Estudios Políticos
                                                                y Sociales</a></li>
                                                        <li class="menu-hover"><a
                                                                ui-sref="maestria_especializacion({carrera:'maestria-en-ingenieria'})"
                                                                title="Ingenier&iacute;a">Ingenier&iacute;a</a></li>
                                                        <li class="menu-hover"><a
                                                                ui-sref="maestria_especializacion({carrera:'maestria-en-pedagogia'})"
                                                                title="Pedagog&iacute;a">Pedagog&iacute;a</a></li>
                                                        <li class="menu-hover"><a
                                                                ui-sref="maestria_especializacion({carrera:'maestria-en-politica-criminal'})"
                                                                title="">Pol&iacute;tica Criminal</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <label class="menu-hover" for="doctorado-responsive"><i
                                                            class=" icon-posgrados"></i> Doctorado <i
                                                            class="fas fa-angle-right"
                                                            ng-show="checks.doctorado_responsive === '0'"></i><i
                                                            class="fas fa-angle-down"
                                                            ng-show="checks.doctorado_responsive === '1'"></i></label>
                                                    <input class="parent-menu-toggle" id="doctorado-responsive"
                                                        ng-init="checks.doctorado_responsive = '0'" ng-true-value="'1'"
                                                        ng-false-value="'0'" ng-model="checks.doctorado_responsive"
                                                        type="checkbox" />
                                                    <ul>
                                                        <li class="menu-hover"><a
                                                                ui-sref="doctorados({carrera:'doctorado-en-arquitectura'})"
                                                                title="Arquitectura">Arquitectura</a></li>
                                                        <li class="menu-hover"><a
                                                                ui-sref="doctorados({carrera:'doctorado-en-derecho'})"
                                                                title="Derecho">Derecho</a></li>
                                                        <li class="menu-hover"><a
                                                                ui-sref="doctorados({carrera:'doctorado-en-economia'})"
                                                                title="Econom&iacute;a">Econom&iacute;a</a></li>
                                                        <li class="menu-hover"><a
                                                                ui-sref="doctorados({carrera:'doctorado-en-pedagogia'})"
                                                                title="Pedagog&iacute;a">Pedagog&iacute;a</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <label class="title-responsive" for="investigacion-responsive"><a
                                            ui-sref="investigacion"
                                            title="Investigaci&oacute;n">INVESTIGACI&Oacute;N</a> <i
                                            class="fas fa-angle-right"
                                            ng-show="checks.investigacion_responsive === '0'"></i><i
                                            class="fas fa-angle-down"
                                            ng-show="checks.investigacion_responsive === '1'"></i></label>
                                    <input class="parent-menu-toggle" id="investigacion-responsive"
                                        ng-init="checks.investigacion_responsive = '0'" ng-true-value="'1'"
                                        ng-false-value="'0'" ng-model="checks.investigacion_responsive"
                                        type="checkbox" />
                                    <ul>
                                        <li class="menu-hover"><a ui-sref="cima" title="CIMA"><i
                                                    class=" icon-centro-de-investigacion-aragon"></i>Centro de
                                                Investigaci&oacute;n Multidisciplinaria Arag&oacute;n</a></li>
                                        <li class="menu-hover"><a ui-sref="cta" title="CTA"><i
                                                    class=" icon-centro-tecnologico"></i>Centro Tecnol&oacute;gico
                                                Arag&oacute;n</a></li>
                                        <li class="menu-hover"><a ui-sref="proyeccionaragon"
                                                title="#Proyecci&oacute;nArag&oacute;n"><i
                                                    class="icon-proyeccionaragon"></i>#Proyecci&oacute;nArag&oacute;n
                                                &nbsp;</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <label class="title-responsive" for="cise-responsive"><a ui-sref="cise"
                                            title="CISE">CISE</a> <i class="fas fa-angle-right"
                                            ng-show="checks.cise_responsive === '0'"></i><i class="fas fa-angle-down"
                                            ng-show="checks.cise_responsive === '1'"></i></label>
                                    <input class="parent-menu-toggle" id="cise-responsive"
                                        ng-init="checks.cise_responsive = '0'" ng-true-value="'1'" ng-false-value="'0'"
                                        ng-model="checks.cise_responsive" type="checkbox" />
                                    <ul>
                                        <li class="menu-hover"><a ui-sref="servicios_escolares"
                                                title="Servicios Escolares"><i
                                                    class=" icon-servicios-escolares"></i>Servicios Escolares</a></li>
                                        <li class="menu-hover"><a ui-sref="becas" title="Becas"><i
                                                    class=" icon-becas-1"></i>Becas</a></li>
                                        <li class="menu-hover"><a ui-sref="tutorias" title="Tutor&iacute;as"><i
                                                    class=" icon-tutorias"></i>Tutor&iacute;as</a></li>
                                        <li class="menu-hover"><a ui-sref="intercambio_academico"
                                                title="Intercambio Acad&eacute;mico"><i
                                                    class=" icon-intercambio-academico"></i>Intercambio
                                                Acad&eacute;mico</a></li>
                                        <li class="menu-hover"><a ui-sref="servicio_social" title="Servicio Social"><i
                                                    class=" icon-servicio-social"></i>Servicio Social</a></li>
                                        <li class="menu-hover"><a ui-sref="bolsa_trabajo" title="Bolsa de Trabajo"><i
                                                    class="icon-bolsa-de-trabajo"></i>Bolsa de Trabajo </a></li>
                                        <li class="menu-hover"><a ui-sref="revision_estudios"
                                                title="Revisi&oacute;n de Estudios"><i
                                                    class=" icon-revision-de-estudios"></i>Revisi&oacute;n de
                                                Estudios</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <label class="title-responsive" for="vida-responsive"><a
                                            ui-sref="vida_universitaria" title="Vida universitaria">VIDA
                                            UNIVERSITARIA</a> <i class="fas fa-angle-right"
                                            ng-show="checks.vida_responsive === '0'"></i><i class="fas fa-angle-down"
                                            ng-show="checks.vida_responsive === '1'"></i></label>
                                    <input class="parent-menu-toggle" id="vida-responsive"
                                        ng-init="checks.vida_responsive = '0'" ng-true-value="'1'" ng-false-value="'0'"
                                        ng-model="checks.vida_responsive" type="checkbox" />
                                    <ul>
                                        <li class="menu-hover"><a ui-sref="egresados" title="Comunidad Egresada"><i
                                                    class="icon-titulacion-05"></i>Comunidad Egresada </a></li>
                                        <li class="menu-hover"><a ui-sref="extension_universitaria"
                                                title="Extensi&oacute;n Universitaria"><i
                                                    class="icon-extencion-universitaria"></i> Extensi&oacute;n
                                                Universitaria</a></li>
                                        <li class="menu-hover"><a ui-sref="servicios_comunidad"
                                                title="Servicios a la Comunidad"><i
                                                    class="icon-servicio-a-la-comunidad"></i> Servicios a la
                                                Comunidad</a></li>
                                        <li class="menu-hover"><a ui-sref="valores_unam({tag:'esmiderecho'})"
                                                title="#ValoresUNAM"><i class="icon-todxs-somos-unam"></i>
                                                #ValoresUNAM</a></li>
                                        <li class="menu-hover"><a ui-sref="hecho_en_aragon" title="#HechoEnAragon"><i
                                                    class="icon-hecho-en-aragon-3"></i>#HechoEnAragon </a></li>
                                    </ul>
                                </li>
                                <li>
                                    <label class="title-responsive" for="primera-respuesta-responsive"> <a
                                            ui-sref="primera_respuesta" title="Primera respuesta">PRIMERA RESPUESTA</a>
                                        <i class="fas fa-angle-right"
                                            ng-show="checks.primera_respuesta_responsive === '0'"></i><i
                                            class="fas fa-angle-down"
                                            ng-show="checks.primera_respuesta_responsive === '1'"></i></label>
                                    <input class="parent-menu-toggle" id="primera-respuesta-responsive"
                                        ng-init="checks.primera_respuesta_responsive = '0'" ng-true-value="'1'"
                                        ng-false-value="'0'" ng-model="checks.primera_respuesta_responsive"
                                        type="checkbox" />
                                    <ul>
                                        <li class="menu-hover"><a href="https://wa.me/c/5215580287264"
                                                title="Contacto de Emergencia"> <i class="icon-whatsapp"></i>Contacto de
                                                Emergencia</a></li>
                                        <li class="menu-hover"><a ui-sref="servicios_medicos"
                                                title="Servicios M&eacute;dicos"> <i
                                                    class=" icon-servicios-medicos"></i> Servicios M&eacute;dicos</a>
                                        </li>
                                        <li class="menu-hover"><a ui-sref="genero" title="Género"> <i
                                                    class=" icon-genero"></i> Género</a></li>
                                        <li class="menu-hover"><a ui-sref="prevencion_y_seguridad_universitaria"
                                                title="Prevenci&oacute;n y Seguridad Universitaria"><svg
                                                    class="icon-menu">
                                                    <use
                                                        href="public_html/img/logos/prevencion-y-seguridad-universitaria.svg#prevencion-y-seguridad-universitaria" />
                                                    </svg>Prevención y Seguridad Universitaria</a></li>
                                        <li class="menu-hover"><a ui-sref="oficina_juridica"
                                                title="Oficina Jur&iacute;dica"> <i class=" icon-unidad-juridica"></i>
                                                Oficina Jur&iacute;dica</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <label class="title-responsive" for="nuestra-facultad-responsive"> <a
                                            ui-sref="nuestra_facultad" title="Nuestra facultad">NUESTRA FACULTAD</a> <i
                                            class="fas fa-angle-right"
                                            ng-show="checks.nuestra_facultad_responsive === '0'"></i><i
                                            class="fas fa-angle-down"
                                            ng-show="checks.nuestra_facultad_responsive === '1'"></i></label>
                                    <input class="parent-menu-toggle" id="nuestra-facultad-responsive"
                                        ng-init="checks.nuestra_facultad_responsive = '0'" ng-true-value="'1'"
                                        ng-false-value="'0'" ng-model="checks.nuestra_facultad_responsive"
                                        type="checkbox" />
                                    <ul>
                                        <li class="menu-hover"><a ui-sref="fes_aragon" title="FES Arag&oacute;n"> <i
                                                    class=" icon-torres"></i> FES Arag&oacute;n</a></li>
                                        <li class="menu-hover"><a ui-sref="consejo_tecnico"
                                                title="Consejo T&eacute;cnico"> <i class=" icon-consejo-tecnico"></i>
                                                Consejo T&eacute;cnico</a></li>
                                        <li class="menu-hover"><a ui-sref="direccion" title="Direcci&oacute;n"> <i
                                                    class=" icon-direccion-1"></i> Direcci&oacute;n</a></li>
                                        <li class="menu-hover"><a ui-sref="cuerpos_colegiados"
                                                title="Cuerpos Colegiados"> <i class="iconos-cuerpos-colegiados"></i>
                                                Cuerpos Colegiados</a></li>
                                        <li class="menu-hover"><a ui-sref="directorio" title="Directorios UNAM"> <i
                                                    class=" icon-simbolo-de-la-sumision-del-directorio"></i> Directorios
                                                UNAM</a></li>
                                        <li class="menu-hover"><a ui-sref="transparencia" title="Transparencia"><i
                                                    class=" icon-transprencia"></i> Transparencia</a></li>
                                        <li class="menu-hover"><a ui-sref="administracion"
                                                title="Administraci&oacute;n"> <i class=" icon-administracion"></i>
                                                &nbsp;Administraci&oacute;n</a></li>
                                        <li class="menu-hover"><a ui-sref="llegar_fes_aragon"
                                                title="C&oacute;mo llegar a la FES"> <i class=" icon-como-llegar"></i>
                                                C&oacute;mo llegar a la FES</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </header>
        </div>
        <div ui-view="" class='clasedvt'></div>
        <div class="barra-redes">
            <a target="_blank" href="https://www.facebook.com/FESAragonUNAM/"
                class=" animated zoomIn icon-facebook-official barra-iconos facebook" title="Facebook"></a>
                <a target="_blank" href="https://twitter.com/fesaragonunam?lang=es" title="Twitter"
                    class="animated zoomIn barra-iconos twitter"> 
                        <svg class="icon-tik-tok">
                            <use href="public_html/img/logos/twitter.svg#twitter"></use>
                        </svg>
                    </a>
            <a target="_blank" href="https://www.instagram.com/fesaragonunam/?hl=es"
                class=" animated zoomIn icon-logo-de-instagram barra-iconos instagram" title="Instagram"></a>
            <a target="_blank" href="https://www.youtube.com/user/UNAMFESAragon"
                class=" animated zoomIn icon-youtube barra-iconos youtube" title="Youtube"></a>
            <a target="_blank" href="https://open.spotify.com/show/31r7xhdhjEKdhmZ8ZFjike"
                class="animated zoomIn fab fa-spotify barra-iconos spotify" title="Spotify"></a>
            <a target="_blank" href="https://www.tiktok.com/@fesaragonunam" class="animated zoomIn barra-iconos tik-tok"
                title="tik-tok"> <svg class="icon-tik-tok">
                    <use href="public_html/img/logos/tik-tok.svg#tik-tok" /></svg></a>
            <a target="_blank"
                href="https://www.pinterest.com.mx/fesaragnunam/?sender=374432293927802273&invite_code=e13cd562fdf54184ae4dc69d0e7f640d"
                class="animated zoomIn icon-pinterest barra-iconos pinterest" title="Pinterest"></a>
            <!--
                <a target="_blank" href="https://docs.google.com/forms/d/1flD2NlUg5E921-TiVQ7KeAW_29BM0ulRopuXNAdnNWM/viewform?edit_requested=true" class="animated zoomIn icon-sobre barra-iconos correo" title="Buz&oacute;n de sugerencias"></a>
                <a target="_blank" id="open-google-modal" class=" animated zoomIn icon-buscar-incidencias barra-iconos buscador" title="Buscador"></a>
                -->
            <a target="_blank" href="https://wa.me/c/5215580287264"
                class=" animated zoomIn icon-whatsapp barra-iconos whatsapp" title="whatsapp"></a>
        </div>
        <!-- Footer -->
        <footer class="row justify-content-center">
            <div class="col-12 col-lg-12">
                <p style="text-align: center;" class="pt-2 pb-2 footer-derechos">Hecho en México, Universidad Nacional
                    Autónoma de México (UNAM), todos los derechos reservados 2023. Esta página puede ser reproducida con
                    fines no lucrativos, siempre y cuando no se mutile, se cite la fuente completa y su dirección
                    electrónica. De otra forma, requiere permiso previo por escrito de la institución.
                </p>
                <p class="" style="text-align: center;">
                    <a ui-sref="creditos" target="_blank" href="#!/creditos">Créditos</a> |
                    <a ui-sref="llegar_fes_aragon" target="_blank" href="#!/nuestra-facultad/llegar-fes-aragon">Cómo
                        llegar a la FES</a></p>
            </div>
            <div class="col-12 col-lg-6 hide-container-xl">
                <p class="m-0" style="text-align: center;">¡Únete a nuestras redes sociales!</p>
                <div style="justify-content: center;display: flex;" class="mb-4">
                    <a target="_blank" href="https://www.facebook.com/FESAragonUNAM/"
                        class=" animated zoomIn icon-facebook-official barra-footer facebook" title="Facebook"></a>
                    <a target="_blank" href="https://twitter.com/fesaragonunam?lang=es" title="Twitter"
                    class="animated zoomIn barra-footer twitter"> 
                        <svg class="icon-tik-tok">
                            <use href="public_html/img/logos/twitter.svg#twitter"></use>
                        </svg>
                    </a>
                    <a target="_blank" href="https://www.instagram.com/fesaragonunam/?hl=es"
                        class=" animated zoomIn icon-logo-de-instagram barra-footer instagram" title="Instagram"></a>
                    <a target="_blank" href="https://www.youtube.com/user/UNAMFESAragon"
                        class=" animated zoomIn icon-youtube barra-footer youtube" title="Youtube"></a>
                    <a target="_blank" href="https://open.spotify.com/show/31r7xhdhjEKdhmZ8ZFjike"
                        class="animated zoomIn fab fa-spotify barra-footer spotify" title="Spotify"></a>
                    <a target="_blank" href="https://www.tiktok.com/@fesaragonunam"  title="tik-tok"
                        class="animated zoomIn barra-footer tik-tok"> 
                        <svg class="icon-tik-tok">
                            <use href="public_html/img/logos/tik-tok.svg#tik-tok"></use>
                        </svg>
                    </a>
                    <a target="_blank"
                        href="https://www.pinterest.com.mx/fesaragnunam/?sender=374432293927802273&amp;invite_code=e13cd562fdf54184ae4dc69d0e7f640d"
                        class="animated zoomIn icon-pinterest barra-footer pinterest" title="Pinterest"></a>
                    <a target="_blank" href="https://wa.me/c/5215580287264"
                        class=" animated zoomIn icon-whatsapp barra-footer whatsapp" title="whatsapp"></a>
                </div>
            </div>
            <div class="col-12 col-lg-6">
                <p style="text-align: center;"><span>Aviso de privacidad<br>
                        [ <a href="public_html/documents/aviso-de-privacidad/integral-de-la-fes-aragon.pdf"
                            target="_blank">Integral</a> |
                        <a href="public_html/documents/aviso-de-privacidad/simplificado-de-la-fes-aragon.pdf"
                            target="_blank">Simplificado</a> |
                        <a href="public_html/documents/aviso-de-privacidad/integral-del-circuito-cerrado-de-television-cctv-de-la-fes-aragon.pdf"
                            target="_blank">CCTV-Integral</a> |
                        <a href="public_html/documents/aviso-de-privacidad/simplificado-del-circuito-cerrado-de-television-cctv-de-la-fes-aragon.pdf"
                            target="_blank">CCTV-Simplificado</a> ]</span></p>
            </div>
            <div class="col-12">
                <p style="text-align: center;"><a href="https://creativecommons.org/licenses/by-nc/4.0/"
                        target="_blank"><img class="creativecommons" src="public_html/img/logos/creativecommons.png"
                            alt="creativecommons"></a> <span>Excepto donde se indique lo contrario, este sitio está
                        licenciado bajo una
                        <a href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank"> licencia Creative
                            Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)</a>.</span></p>
            </div>
        </footer>
        <!-- barra de noticias -->
        <div class="div-barra-noticias row marquee">
            <marquee class="barra-noticias col-12 d-flex" behavior="scroll" onmouseover="this.stop();"
                onmouseout="this.start();">
                <ul>
                    <li>
                        <a href="public_html/documents/protocolo-de-genero.pdf" target="_blank"
                            title="Protocolo de g&eacute;nero">Protocolo de g&eacute;nero</a>
                    </li>

                    <li>
                        <a href="https://goo.gl/forms/5k9tt91BldfCCNsI3"
                            title="&iquest;Tienes alguna denuncia?">&iquest;Tienes alguna denuncia?</a>
                    </li>
                    <!--  
                            <img src="<?php echo base_url(); ?>img/circulo.png" alt="icon"/> 
                            <li>
                            <a href="https://goo.gl/forms/MQOLha3cwIUwlFvh2" title="Buz&oacute;n de sugerencias" target="_blank">Buz&oacute;n de sugerencias</a>
                        </li> 
                        -->
                </ul>
            </marquee>
        </div>
    </div>
    <div class="fb-customerchat" page_id="333804516713205"
        logged_in_greeting="&iquest;Tienes alguna duda? Estamos aqu&iacute; para ayudarte"
        logged_out_greeting="&iquest;Tienes alguna duda? Estamos aqu&iacute; para ayudarte">
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous">
    </script>
    <script src="<?php echo base_url(); ?>js/vendors/jquery.min.js" type="text/javascript"></script>
    <script src="<?php echo base_url(); ?>js/vendors/angular.min.js" type="text/javascript"></script>
    <script src="<?php echo base_url(); ?>js/vendors/bootstrap.min.js" type="text/javascript"></script>
    <script src="<?php echo base_url(); ?>js/vendors/scroll.js" type="text/javascript"></script>
    <script src="<?php echo base_url(); ?>js/modules/angular-ui-router.min.js" type="text/javascript"></script>
    <script src="<?php echo base_url(); ?>js/modules/jcs-auto-validate.min.js" type="text/javascript"></script>
    <script src="<?php echo base_url(); ?>js/modules/ngDialog.min.js" type="text/javascript"></script>
    <script src="<?php echo base_url(); ?>js/modules/noty.min.js" type="text/javascript"></script>
    <script src="<?php echo base_url(); ?>js/modules/menu.js" type="text/javascript"></script>
    <script src="<?php echo base_url(); ?>js/modules/jssor.slider.min.js" type="text/javascript"></script>
    <script src="<?php echo base_url(); ?>js/modules/owl.carousel.min.js" type="text/javascript"></script>
    <script src="<?php echo base_url(); ?>js/modules/ocLazyLoad.min.js" type="text/javascript"></script>
    <script src="<?php echo base_url(); ?>js/app.js" type="text/javascript"></script>
    <script>
    window.fbAsyncInit = function() {
        FB.init({
            appId: '2259302364146993',
            autoLogAppEvents: true,
            xfbml: true,
            version: 'v2.7'
        });
    };
    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id))
            return;
        js = d.createElement(s);
        js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
        title="Chat with FES Aragón UNAM" 
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
    </script>
</body>

</html>