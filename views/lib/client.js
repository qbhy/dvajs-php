import {browserHistory} from 'dva/router';
import createApp from './createApp';

const app = createApp({
    history: browserHistory,
    initialState: window.__INITIAL_STATE__
});

app.start('#root');
