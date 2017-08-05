import React from 'react';
import {Router, Route} from 'dva/router';
import Index from 'routes/IndexPage';

export const routes = (
    <div>
        <Route path="/" component={Index}/>
    </div>
);

export default function ({history}) {
    return (
        <Router history={history}>
            { routes }
        </Router>
    );
}
