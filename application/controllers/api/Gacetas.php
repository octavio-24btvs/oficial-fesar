<?php

defined('BASEPATH') OR exit('No direct script access allowed');
require APPPATH . 'libraries/Format.php';
require(APPPATH . 'libraries/REST_Controller.php');

use Restserver\Libraries\REST_Controller;

class Gacetas extends REST_Controller {

    function __construct() {
        parent::__construct();
        date_default_timezone_set('America/Mexico_City');
        $this->load->helper('params');
        $this->load->model('gacetas_model');
    }

    public function get_by_indice_get() {
        check_params($this->get());
        $indice = $this->get('ind');
        if ($indice === 'last') {
            $data['gacetas'] = $this->gacetas_model->get_by_indice($this->gacetas_model->get_last_id());
        } else {
            $data['gacetas'] = $this->gacetas_model->get_by_indice($indice);
        }
        $this->response($data, REST_Controller::HTTP_OK);
    }

    public function get_by_numero_get() {
        check_params($this->get());
        $numero = $this->get('num');
        if ($numero === 'last') {
            $data['gaceta'] = $this->gacetas_model->get_by_numero($this->gacetas_model->get_last_id());
        } else {
            $data['gaceta'] = $this->gacetas_model->get_by_numero($numero);
        }
        if ($data['gaceta']) {
            $this->response($data, REST_Controller::HTTP_OK);
        } else {
            $this->response(['message' => 'No se encontr&oacute; el N&uacute;mero de Gaceta'], REST_Controller::HTTP_NOT_FOUND);
        }
    }

    public function share_get() {
        check_params($this->get());
        $gaceta = $this->gacetas_model->get_by_numero($this->get('num'));
        if ($gaceta) {
            $data = array();
            $data['url'] = 'gacetas/share?num=' . $gaceta['numero'];
            $data['title'] = $gaceta['titulo'];
            $data['description'] = $gaceta['descripcion'];
            $data['image'] = 'gacetas/' . $gaceta['numero'] . '/' . $gaceta['imagen'];
            $data['path'] = $this->config->item('public_url') . 'gaceta/' . $gaceta['numero'];
            $this->load->view('gacetas_view', $data);
        } else {
            $this->response(['message' => 'No se encontr&oacute; el N&uacute;mero de Gaceta'], REST_Controller::HTTP_BAD_REQUEST);
        }
    }

    public function search_post() {
        check_params($this->post());
        switch ($this->post('type')) {
            case 'numero':
                $data['gacetas'] = $this->gacetas_model->get_by_numero_as_array($this->post('value'));
                $this->response($data, REST_Controller::HTTP_OK);
                break;
            case 'editor':
                $data['gacetas'] = $this->gacetas_model->get_by_editor($this->post('value'));
                $this->response($data, REST_Controller::HTTP_OK);
                break;
            case 'anho':
                $data['gacetas'] = $this->gacetas_model->get_by_anho($this->post('value'));
                $this->response($data, REST_Controller::HTTP_OK);
                break;
            case 'especiales':
                if ($this->post('value')) {
                    $data['gacetas'] = $this->gacetas_model->get_by_especiales();
                    $this->response($data, REST_Controller::HTTP_OK);
                } else {
                    $data['gacetas'] = $this->gacetas_model->get_by_indice($this->gacetas_model->get_last_id());
                    $this->response($data, REST_Controller::HTTP_OK);
                }
                break;
            default:
                $this->response(['message' => 'No existe ese filtro de bu&uacute;squeda.'], REST_Controller::HTTP_BAD_REQUEST);
                break;
        }
    }

}
