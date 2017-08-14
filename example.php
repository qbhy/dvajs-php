<?php

require 'vendor/autoload.php';

$serverSrc = file_get_contents(__DIR__ . '/views/build/server.js');
$dva = new \Qbhy\DvaJs\DvaJs($serverSrc);
$html = $dva->render([
    'url' => $_SERVER['REQUEST_URI'],
    'initialState' => [
        'user' => [ // user model
            'list' => [
                ['name' => 'qbhy', 'age' => 18]
            ]
        ]
    ]
]);


function renderPage($html)
{
    return "
    <html>
    <head>
        <link rel='stylesheet' href='/views/build/app.css'>
        <title> dvaJs for php</title>
    </head>
    $html
    <script src='/views/build/app.js'></script>
    </html>
    ";
}

//echo renderPage($html);
echo renderPage($html);


