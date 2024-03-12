<?php

defined('BASEPATH') OR exit('No direct script access allowed');
?>
<?php

$data = json_decode(file_get_contents('https://www.aragon.unam.mx/fes-aragon/public_html/content/noticias/' . $_GET['noticia'] . '.json'));
return the_joke_is_on_you($data);

function the_joke_is_on_you($data) {
    $pageUrl = "https://www.aragon.unam.mx/fes-aragon/#!/muro-aragon/noticias/" . $data->titulo_normalizado;
    $html = '<!doctype html>' . PHP_EOL;
    $html .= '<html>' . PHP_EOL;
    $html .= '<head>' . PHP_EOL;
    $html .= '<meta property="og:url" content="https://www.aragon.unam.mx/fes-aragon/index.php/share/?noticia=' . $data->titulo_normalizado . '"/>';
    $html .= '<meta property="og:type" content="website"/>';
    $html .= '<meta name="twitter:card" content="summary"></meta>' . PHP_EOL;
    $html .= '<meta name="author" content="' . $data->autor . '"/>' . PHP_EOL;
    $html .= '<meta property="og:title" content="' . $data->titulo . '"/>' . PHP_EOL;
    $html .= "<meta property='og:description' content='" . $data->contenido . "'/>" . PHP_EOL;
    $html .= '<meta property="og:image" content="https://www.aragon.unam.mx/fes-aragon/public_html/img/noticias/' . $data->titulo_normalizado . '/' . $data->imagenes[0]->imagen . '"/>' . PHP_EOL;
    $html .= '<meta property="og:image:secure_url" content="https://www.aragon.unam.mx/fes-aragon/public_html/img/noticias/' . $data->titulo_normalizado . '/' . $data->imagenes[0]->imagen . '"/>' . PHP_EOL;
    $html .= '</head>' . PHP_EOL;
    $html .= '<body>';
    $html .= '<script type="text/javascript">
           window.location = "'.$pageUrl.'"
      </script></body>';
    $html .= '</html>';
    echo $html;
}

?>
