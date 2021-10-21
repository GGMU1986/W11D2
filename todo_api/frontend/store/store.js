import { createStore } from 'redux';
import { rootReducer } from '../reducers/root_reducer';

export const configureStore = (preLoadedState = {}) => {
    const store = createStore(rootReducer, preLoadedState);
    return store;
};