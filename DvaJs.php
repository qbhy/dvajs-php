<?php

class DvaJs
{
    public $errorHandler = null;

    public function __construct($serverSrc)
    {
        $react = [];
        // stubs, react
        $react[] = "var console = {warn: function(){}, error: print};";
        $react[] = "var global = global || this, self = self || this, window = window || this;";
        $react[] = $serverSrc;
        $react[] = "var React = global.React, ReactDOM = global.ReactDOM, ReactDOMServer = global.ReactDOMServer;";
        // app's components
        $concatenated = implode(";\n", $react);

        $this->v8 = new V8Js();
        $this->executeJS($concatenated);
    }


    /**
     * Executes Javascript using V8JS, with primitive exception handling
     *
     * @param string $js JS code to be executed
     * @throws V8JsException $e
     * @return string The execution response
     */
    private function executeJS($js)
    {
        try {
            ob_start();
            $this->v8->executeString($js);
            return ob_get_clean();
        } catch (V8JsException $e) {
            if ($this->errorHandler) {
                call_user_func($this->errorHandler, $e);
            } else {
                // default error handler blows up bad
                echo "<pre>";
                echo $e->getMessage();
                echo "</pre>";
                die();
            }
        }
    }

    /**
     * @param array $request
     */
    public function render(array $request)
    {
        $data = json_encode($request['initialState']);
        $str = "print(renderFullPage('a','$data'))";
        return $this->executeJS($str);
    }


}