import React from 'react';
import dva from 'dva';
import {RouterContext} from 'dva/router';
import router from '../router';
import registerModel from '../models/index';

export default function createApp(opts, isServer) {
    const app = dva(opts);
    // 为 APP 注册模型
    registerModel(app);
    if (isServer) {
        app.router(({history, renderProps}) => {
            return <RouterContext {...renderProps} />
        });
    } else {
        app.router(router);
    }
    return app;
}
