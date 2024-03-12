<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Share extends CI_Controller {

    public function index() {
        $this->load->helper('url');
         $data['home_url'] = $this->config->item('home_url');
        $data['api_url'] = $this->config->item('api_url');
        $data['public_files_url'] = $this->config->item('public_files_url');
        $this->load->view('share_view');
    }

}
