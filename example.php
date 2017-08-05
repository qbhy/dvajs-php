<?php


require 'DvaJs.php';

$dva = new DvaJs(file_get_contents(__DIR__ . '/src/server.js'));

echo $dva->render([
    'url' => '/',
    'initialState' => [
        'user' => [
            [
                'name' => 'qbhy'
            ]
        ]
    ]
]);