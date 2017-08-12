export default {
    namespace: 'user',
    state: [],
    reducers: {
        save(state, {payload}) {
            return payload;
        },
    },
    effects: {
        *fetchList(action, {call, put}) {
            yield put({
                type: 'save',
                payload: [],
            });
        },
    },
}
