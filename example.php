<?php

require 'DvaJs.php';

$dva = new DvaJs(file_get_contents(__DIR__ . '/build/render.js'));

print_r($dva->render([
    'url' => '/',
    'initialState' => ['user' => [
        ['name' => 'qbhy', 'age' => 18]
    ]]
]));


