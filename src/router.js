import React from 'react';
import {Router, Route} from 'dva/router';
import Index from './routes/IndexPage';

export const routes = (
    <div>
        <Route path="/example.php" component={Index}/>
    </div>
);

export default function ({history}) {
    return (
        <Router history={history}>
            { routes }
        </Router>
    );
}
