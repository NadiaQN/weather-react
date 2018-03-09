import { createStore } from 'redux';

export const store = createStore(() => { },
        // Vinculando plugin de REDUX de chrome
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    );
