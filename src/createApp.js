import React from 'react';
import dva from 'dva';
import {RouterContext} from 'dva/router';
import router from './router';
const user = require('./models/user');

export default function createApp(opts, isServer) {
    const app = dva(opts);
    // console.log(user);
    app.model({
        namespace: 'user',
        state: [
            {
                name: 'qbhy'
            }
        ],
    });
    if (isServer) {
        app.router(({history, renderProps}) => {
            return <RouterContext {...renderProps} />;
        });
    } else {
        app.router(router);
    }
    return app;
}
