import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

// const MyStore = createStore(rootReducer, applyMiddleware(sagaMiddleware));

const MyStore  = configureStore({
    reducer:rootReducer,
    middleware: () => [sagaMiddleware]
});


sagaMiddleware.run(rootSaga);


export default MyStore;