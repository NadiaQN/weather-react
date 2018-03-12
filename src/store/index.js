import { createStore } from 'redux';
import { city } from './../reducers/city';
 
const initialState = {
    city: 'Buenos Aires'
};


export const store = createStore(city, initialState, window. 
    // Vinculando plugin de REDUX de chrome
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

/*export const store = createStore(() => { },
        // Vinculando plugin de REDUX de chrome
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    );*/
