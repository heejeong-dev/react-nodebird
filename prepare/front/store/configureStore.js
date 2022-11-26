import { createWrapper } from 'next-redux-wrapper';
import { applyMiddleware, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from '../reducers';

//action
const changeNickname = (data) => {
  return {
    type: 'CHANGE_NICKNAME',
    data
  };
};

const configureStore = () => {
  const middlewares = [];
  const enhancer =
    process.env.NODE_ENV === 'production'
      ? compose(applyMiddleware(...middlewares)) // 배포용일 때는 devtools 연결 X
      : composeWithDevTools(applyMiddleware(...middlewares)); // 개발용일 때는 devtools 연결 O

  const store = createStore(reducer, enhancer);
  return store;
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === 'development'
});

export default wrapper;
