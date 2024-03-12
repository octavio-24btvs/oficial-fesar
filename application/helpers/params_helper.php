<?php

/**
 * Params helper
 *
 * @package Helpers
 * @subpackage
 * @category Validation
 * @author Villegas Gonzalez Juan Carlos
 */
defined('BASEPATH') OR exit('No direct script access allowed');

//funcion que verifica si se reciben los parametros necesrios desde el get
if (!function_exists('check_params')) {

    function check_params($params) {
        $CI = & get_instance();
        $fields_missing = [];
        if (!empty($params)) {
            foreach ($params as $key => $value) {
                if ($key !== '' && $value === '') {
                    $fields_missing[] = $key;
                }
            }
        } else {
            $fields_missing[] = 'Ning&uacute;n par&aacute;metro';
        }
        if (count($fields_missing) > 0) {
            $missing_text = implode(', ', $fields_missing);
            $CI->response(['No se proporciono: ' . $missing_text], 500);
        }
    }

}