<?php

require 'Pipe.php';

$path = __DIR__;

$cmd = "cd $path && npm start";

//shell_exec($cmd);
//
$pipe = new Pipe($cmd, 4);

$data = $pipe->execute([
    'method' => 'render',
    'params' => [
        ['url' => '/', 'initialState' => ['user' =>
            ['name' => 'qbhy']
        ]]
    ]
]);
print_r($data);


//$data = $pipe->execute([
//    "method" => "hello"
//]);
//print_r($data);
//$data = $pipe->execute([
//    "method" => "hello"
//]);
//print_r($data);