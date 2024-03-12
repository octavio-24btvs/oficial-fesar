<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?>
<!DOCTYPE html>
<html lang="es">
    <head>
        <title>Compartir por Facebook</title>
        <link rel="canonical" href="<?php echo $path; ?>"/>
        <meta property="og:url" content="https://www.aragon.unam.mx/fes-aragon/index.php/api/<?php echo $url; ?>" />
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="<?php echo $title; ?>"/>
        <meta property="og:description" content="<?php echo str_replace('"', '\'', $description); ?>"/>
        <meta property="og:image" content="https://www.aragon.unam.mx/fes-aragon/public_html/img/<?php echo $image; ?>"/>
        <meta property="og:image:secure_url" content="https://www.aragon.unam.mx/fes-aragon/public_html/img/<?php echo $image; ?>"/>
        <meta name="twitter:card" content="summary "/>
        <meta name="twitter:widgets:new-embed-design" content="on"/>
        <meta name="twitter:widgets:csp" content="on"/>
    </head>
    <body>
        <script type="text/javascript">
            window.location = '<?php echo $path; ?>';
        </script>
    </body>
</html>