<?php

class Gacetas_model extends CI_Model {

    public function __construct() {
        parent::__construct();
        $this->load->database();
    }

    public function get_by_indice($indice) {
        $this->db->select('numero, imagen');
        $this->db->from('gaceta');
        $this->db->where('numero <=', $indice);
        $this->db->order_by('numero', 'DESC');
        $this->db->limit(21);
        $result = $this->db->get();
        return $result->result_array();
    }

    public function get_by_numero($numero) {
        $this->db->select('numero, imagen, pdf, titulo, descripcion');
        $this->db->from('gaceta');
        $this->db->where('numero', $numero);
        $this->db->limit(1);
        $result = $this->db->get();
        if ($result->num_rows() > 0) {
            return $result->row_array();
        } else {
            return FALSE;
        }
    }

    public function get_by_numero_as_array($numero) {
        $this->db->select('numero, imagen');
        $this->db->from('gaceta');
        $this->db->like('numero', $numero);
        $result = $this->db->get();
        return $result->result_array();
    }

    public function get_by_editor($editor) {
        $this->db->select('numero, imagen');
        $this->db->from('gaceta');
        $this->db->where('idGaceta IN (SELECT idGaceta FROM unionautores WHERE idAutor IN (SELECT idAutor FROM autor WHERE nombre LIKE "%' . $editor . '%"))', NULL, FALSE);
        $this->db->order_by('numero', 'DESC');
        $this->db->limit(21);
        $result = $this->db->get();
        return $result->result_array();
    }

    public function get_by_anho($anho) {
        $this->db->select('numero, imagen');
        $this->db->from('gaceta');
        $this->db->like('anho', $anho);
        $this->db->order_by('numero', 'DESC');
        $this->db->limit(21);
        $result = $this->db->get();
        return $result->result_array();
    }

    public function get_by_especiales() {
        $this->db->select('numero, imagen');
        $this->db->from('gaceta');
        $this->db->where('especial != \'\'', NULL);
        $this->db->order_by('numero', 'DESC');
        $this->db->limit(21);
        $result = $this->db->get();
        return $result->result_array();
    }

    public function get_last_id() {
        $this->db->select('numero');
        $this->db->from('gaceta');
        $this->db->order_by('numero', 'DESC');
        $this->db->limit(1);
        $result = $this->db->get();
        return $result->row_array()['numero'];
    }

}
