<?php

require 'DvaJs.php';

$dva = new DvaJs(file_get_contents(__DIR__ . '/build/server.js'));
$html = $dva->render([
    'url' => $_SERVER['REQUEST_URI'],
    'initialState' => ['user' => [
        ['name' => 'qbhy', 'age' => 18]
    ]]
]);


function renderPage($html)
{
    return "
    <html>
    $html
    <script src='/build/app.js'></script>
    </html>
    ";
}

//echo renderPage($html);
echo renderPage("<div id='root'></div>");


