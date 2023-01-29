import { put, takeEvery } from 'redux-saga/effects';

function* addTodoSaga(action) {
  yield put({ type: 'ADD_TODO', payload: action.payload });
}

function* updateTodoSaga(action) {
  yield put({ type: 'UPDATE_TODO', payload: action.payload });
}

function* deleteTodoSaga(action) {
  yield put({ type: 'DELETE_TODO', payload: action.payload });
}

export default function* rootSaga() {
  yield takeEvery('ADD_TODO_SAGA', addTodoSaga);
  yield takeEvery('UPDATE_TODO_SAGA', updateTodoSaga);
  yield takeEvery('DELETE_TODO_SAGA', deleteTodoSaga);
}
