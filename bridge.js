import readline from 'readline';
import dvaRender from './src/render';
require('babel-core/register')({
    presets: ['es2015', 'react']
});
// require('node-jsx').install({extension: '.js', harmony: true});


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function render(data, error = null) {
    const result = {
        data,
        error
    };
    return JSON.stringify(result);
}

rl.on('line', function (line) {
    try {
        const data = JSON.parse(line.trim());
        switch (data.method) {
            case 'render':
                dvaRender(...data.params);
                break;
            case 'hello':
                console.log(render("啦啦啦"));
                break;
            case 'close':
                rl.close();
                break;
            default:
                console.log(render(null, {msg: `没有找到 ${data.method} 方法！`}));
                break;
        }
    } catch (e) {
        console.log(render(null, {msg: "参数格式错误！", err: e.toString()}));
    }
});

rl.on('close', function () {
    console.log(render("bye bye"));
    process.exit(0);
});
