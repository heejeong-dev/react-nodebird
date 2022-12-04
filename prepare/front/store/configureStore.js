import { createWrapper } from 'next-redux-wrapper';
import { applyMiddleware, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import reducer from '../reducers';

//action
const changeNickname = (data) => {
  return {
    type: 'CHANGE_NICKNAME',
    data
  };
};

const loggerMiddleware =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    //여기서 하고싶은일 추가
    console.log(action);
    //
    return next(action); //비동기로 하려던 액션 수행
  };

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware, loggerMiddleware];
  const enhancer =
    process.env.NODE_ENV === 'production'
      ? compose(applyMiddleware(...middlewares)) // 배포용일 때는 devtools 연결 X
      : composeWithDevTools(applyMiddleware(...middlewares)); // 개발용일 때는 devtools 연결 O

  const store = createStore(reducer, enhancer);
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === 'development'
});

export default wrapper;
