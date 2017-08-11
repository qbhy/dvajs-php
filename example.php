<?php

require 'vendor/autoload.php';

$dva = new \Qbhy\DvaJs\DvaJs(file_get_contents(__DIR__ . '/views/build/server.js'));
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
    <link rel='stylesheet' href='/views/build/app.css'>
    $html
    <script src='/views/build/app.js'></script>
    </html>
    ";
}

//echo renderPage($html);
echo renderPage($html);


