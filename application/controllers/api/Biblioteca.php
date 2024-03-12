<?php

defined('BASEPATH') OR exit('No direct script access allowed');
require APPPATH . 'libraries/Format.php';
require(APPPATH . 'libraries/REST_Controller.php');

use Restserver\Libraries\REST_Controller;

class Biblioteca extends REST_Controller {

    function __construct() {
        parent::__construct();
        date_default_timezone_set('America/Mexico_City');
        $this->load->library('email');
    }
    // webmaster@aragon.unam.mx, biblioteca@aragon.unam.mx
    public function registro_pasante_post() {
        $this->load->library('email');
        $config['protocol'] = 'smtp';
        $config['smtp_host'] = 'ssl://smtp.gmail.com';
        $config['smtp_port'] = '465';
        $config['smtp_timeout'] = '3';
        $config['smtp_user'] = 'comsoc.fesaragon@gmail.com';
        $config['smtp_pass'] = 'c0mun1cac10ns0c1al';
        $config['charset'] = 'utf-8';
        $config['newline'] = "\r\n";
        $config['mailtype'] = 'text'; // or html
        $config['validation'] = TRUE; // bool whether to validate email or not      
        $this->email->initialize($config);
        $this->_pasante_validations();
        $array_carreras = ['Arquitectura',
            'Comunicación y Periodismo',
            'Derecho',
            'Diseño Industrial',
            'Economía',
            'Ing. Civil',
            'Ing. en Computación',
            'Ing. Eléctrica Electrónica',
            'Ing. Industrial',
            'Ing. Mecánica',
            'Posgrado ',
            'Pedagogía',
            'Planificación p/d Agropecuario',
            'Relaciones Internacionales',
            'Sociología'
        ];
        $message = 'Trámite: ' . (($this->post('tramite') === '1') ? 'Registro' : 'Resello') . '
                  Nombre: ' . $this->post('nombre') . '
                  Número de cuenta: ' . $this->post('numero_cuenta') . ' 
                  Área académica: ' . $array_carreras[(int) $this->post('carrera')] . ' 
                  Domicilio: ' . $this->post('domicilio') . ' 
                  Telefono particular: ' . $this->post('telefono_particular') . ' 
                  Telefono móvil: ' . $this->post('telefono_movil') . '
                  Correo electronico: ' . $this->post('correo_electronico') . '
                  Mensaje: ' . $this->post('mensaje') . '';
        $this->email->from('comsoc.fesaragon@gmail.com');
        $this->email->to('webmaster@aragon.unam.mx, biblioteca@aragon.unam.mx');
        $this->email->subject('Registro pasante');
        $this->email->message($message);
        if ($this->email->send()) {
            $this->response(['message' => 'El formulario se ha enviado con &eacute;xito'], REST_Controller::HTTP_OK);
        } else {
            $this->response(['message' => 'No se ha podido enviar el formulario, por favor intentalo mas tarde'], REST_Controller::HTTP_BAD_REQUEST);
        }
    }

    public function registro_administrativo_post() {
        $this->load->library('email');
        $config['protocol'] = 'smtp';
        $config['smtp_host'] = 'ssl://smtp.gmail.com';
        $config['smtp_port'] = '465';
        $config['smtp_timeout'] = '3';
        $config['smtp_user'] = 'comsoc.fesaragon@gmail.com';
        $config['smtp_pass'] = 'c0mun1cac10ns0c1al';
        $config['charset'] = 'utf-8';
        $config['newline'] = "\r\n";
        $config['mailtype'] = 'text';
        $config['validation'] = TRUE;
        $this->email->initialize($config);
        $this->_administrativo_validations();
        $message = 'Trámite: ' . (($this->post('tramite') === '1') ? 'Registro' : 'Resello') . '
                  Nombre: ' . $this->post('nombre') . '
                  Número de trabajador: ' . $this->post('numero_trabajador') . ' 
                  Categoría: ' . $this->post('categoria') . ' 
                  Domicilio: ' . $this->post('domicilio') . ' 
                  Telefono particular: ' . $this->post('telefono_particular') . ' 
                  Telefono móvil: ' . $this->post('telefono_movil') . '
                  Correo electronico: ' . $this->post('correo_electronico') . '
                  Mensaje: ' . $this->post('mensaje') . '';
        $this->email->from('comsoc.fesaragon@gmail.com');
        $this->email->to('webmaster@aragon.unam.mx, biblioteca@aragon.unam.mx');
        $this->email->subject('Registro administrativo');
        $this->email->message($message);
        if ($this->email->send()) {
            $this->response(['message' => 'El formulario se ha enviado con &eacute;xito'], REST_Controller::HTTP_OK);
        } else {
            $this->response(['message' => 'No se ha podido enviar el formulario, por favor intentalo mas tarde'], REST_Controller::HTTP_BAD_REQUEST);
        }
    }

    public function registro_academico_post() {
        $this->load->library('email');
        $config['protocol'] = 'smtp';
        $config['smtp_host'] = 'ssl://smtp.gmail.com';
        $config['smtp_port'] = '465';
        $config['smtp_timeout'] = '3';
        $config['smtp_user'] = 'comsoc.fesaragon@gmail.com';
        $config['smtp_pass'] = 'c0mun1cac10ns0c1al';
        $config['charset'] = 'utf-8';
        $config['newline'] = "\r\n";
        $config['mailtype'] = 'text';
        $config['validation'] = TRUE;
        $this->email->initialize($config);
        $this->_academico_validations();
        $array_carreras = ['Arquitectura',
            'Comunicación y Periodismo',
            'Derecho',
            'Diseño Industrial',
            'Economía',
            'Ing. Civil',
            'Ing. en Computación',
            'Ing. Elíctrica Electr&oacute;nica',
            'Ing. Industrial',
            'Ing. Mec&aacute;nica',
            'Posgrado ',
            'Pedagogía',
            'Planificación p/d Agropecuario',
            'Relaciones Internacionales',
            'Sociología'
        ];
        $message = 'Trámite: ' . (($this->post('tramite') === '1') ? 'Registro' : 'Resello') . '
                  Nombre: ' . $this->post('nombre') . '
                  Número de trabajador: ' . $this->post('numero_trabajador') . ' 
                  Área académica: ' . $array_carreras[(int) $this->post('carrera')] . ' 
                  Domicilio: ' . $this->post('domicilio') . ' 
                  Telefono particular: ' . $this->post('telefono_particular') . ' 
                  Telefono móvil: ' . $this->post('telefono_movil') . '
                  Correo electronico: ' . $this->post('correo_electronico') . '
                  Mensaje: ' . $this->post('mensaje') . '';
        $this->email->from('comsoc.fesaragon@gmail.com');
        $this->email->to('webmaster@aragon.unam.mx, biblioteca@aragon.unam.mx');
        $this->email->subject('Registro academico');
        $this->email->message($message);
        if ($this->email->send()) {
            $this->response(['message' => 'El formulario se ha enviado con &eacute;xito'], REST_Controller::HTTP_OK);
        } else {
            $this->response(['message' => 'No se ha podido enviar el formulario, por favor intentalo mas tarde'], REST_Controller::HTTP_BAD_REQUEST);
        }
    }

    private function _pasante_validations() {
        $this->load->library('form_validation');
        $this->form_validation->set_data($this->post());
        $this->form_validation->set_rules('tramite', 'Tr&aacute;mite', 'trim|required');
        $this->form_validation->set_rules('nombre', 'Nombre', 'trim|required');
        $this->form_validation->set_rules('numero_cuenta', 'N&uacute;mero de cuenta', 'trim|required|numeric');
        $this->form_validation->set_rules('carrera', '&Aacute;rea academica', 'trim|required');
        $this->form_validation->set_rules('domicilio', 'domicilio', 'trim|required');
        $this->form_validation->set_rules('telefono_particular', 'Tel&eacute;fono particular', 'trim|required|numeric');
        $this->form_validation->set_rules('telefono_movil', 'Tel&eacute;fono m&oacute;vil', 'trim|required|numeric');
        $this->form_validation->set_rules('correo_electronico', 'Correo Electronico', 'trim|required');
        if (!$this->form_validation->run()) {
            $this->response(['message' => validation_errors()], REST_Controller::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    private function _administrativo_validations() {
        $this->load->library('form_validation');
        $this->form_validation->set_data($this->post());
        $this->form_validation->set_rules('tramite', 'Tr&aacute;mite', 'trim|required');
        $this->form_validation->set_rules('nombre', 'Nombre', 'trim|required');
        $this->form_validation->set_rules('numero_trabajador', 'N&uacute;mero de trabajador', 'trim|required|numeric');
        $this->form_validation->set_rules('categoria', 'Categor&iacute;a', 'trim|required');
        $this->form_validation->set_rules('domicilio', 'domicilio', 'trim|required');
        $this->form_validation->set_rules('telefono_particular', 'Tel&eacute;fono particular', 'trim|required|numeric');
        $this->form_validation->set_rules('telefono_movil', 'Tel&eacute;fono m&oacute;vil', 'trim|required|numeric');
        $this->form_validation->set_rules('correo_electronico', 'Correo Electronico', 'trim|required');
        if (!$this->form_validation->run()) {
            $this->response(['message' => validation_errors()], REST_Controller::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    private function _academico_validations() {
        $this->load->library('form_validation');
        $this->form_validation->set_data($this->post());
        $this->form_validation->set_rules('tramite', 'Tr&aacute;mite', 'trim|required');
        $this->form_validation->set_rules('nombre', 'Nombre', 'trim|required');
        $this->form_validation->set_rules('numero_trabajador', 'N&uacute;mero de trabajador', 'trim|required|numeric');
        $this->form_validation->set_rules('carrera', '&Aacute;rea academica', 'trim|required');
        $this->form_validation->set_rules('domicilio', 'domicilio', 'trim|required');
        $this->form_validation->set_rules('telefono_particular', 'Tel&eacute;fono particular', 'trim|required|numeric');
        $this->form_validation->set_rules('telefono_movil', 'Tel&eacute;fono m&oacute;vil', 'trim|required|numeric');
        $this->form_validation->set_rules('correo_electronico', 'Correo Electronico', 'trim|required');
        if (!$this->form_validation->run()) {
            $this->response(['message' => validation_errors()], REST_Controller::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

}
