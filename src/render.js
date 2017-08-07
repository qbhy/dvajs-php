import {match, createMemoryHistory} from 'dva/router';
import {renderToString} from 'react-dom/server';
import {routes} from './router';
import createApp from './createApp';

export default function render(req) {
    match({
        routes,
        location: req.url,
    }, (err, redirectLocation, renderProps) => {
        const initialState = req.initialState;
        const app = createApp({
            history: createMemoryHistory(),
            initialState,
        }, /* isServer */true);
        const html = renderToString(app.start()({renderProps}));
        return renderFullPage(html, initialState);
    });
}

function renderFullPage(html, initialState) {
    return `
          <div id="root">
            <div>
              ${html}
            </div>
          </div>
          <script>
            window.__INITIAL_STATE__ = ${initialState};
          </script>
          `;
}
