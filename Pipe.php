<?php


class Pipe
{
    private $path;

    private $handle;

    public $descriptorspec = [
        ['pipe', 'r'],
        ['pipe', 'w']
    ];

    /**
     * @var self $instance
     */
    static $instance;


    /**
     * 数据之间的分隔符
     */
    protected $delimiter = "\n";


    function __construct($path, $n)
    {
//        if (!is_file($path)) {
//            throw new Exception('This path is not a file!');
//        }
        $this->handle = proc_open($path, $this->descriptorspec, $pipes);
        $this->path = $path;
        $this->pipes = $pipes;
        static::$instance = $this;
        for ($i = 0; $i < $n; $i++) {
            $this->getStdout();
        }
    }

    public static function exec(array $params)
    {
        if (!(static::$instance instanceof self)) {
            throw new Exception('The pipe is not instantiated !');
        }
        return static::$instance->execute($params);
    }

    public function execute($params)
    {
        $params = is_array($params) ? json_encode($params) : $params;
        fwrite(static::$instance->pipes['0'], $params . static::$instance->delimiter);
        return $this->getStdout();
    }

    public function getStdout()
    {
        while (1) {
            $out = fgets(static::$instance->pipes[1]);
            if ($out !== '' or !is_null($out)) {
                return json_decode($out, true);
            }
        }
    }

    public function close()
    {
        pclose($this->handle);
    }
}



