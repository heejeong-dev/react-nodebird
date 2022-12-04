import { all, call, delay, fork, take, takeEvery, takeLatest, throttle } from 'redux-saga/effects';
//saga generator 함수는 * 이 붙음 +  선언할때 생성자로 + 호출할떄 .next()

function loginAPI() {
  return axios.post('/api/login');
}

//test code로 유용
//yield call(loginAPI, action.data, loginoutAPI, a,c,b,d);
// a.next();
// a.next();
function* login(action) {
  try {
    yield delay(1000);
    // const result = yield call(loginAPI, action.data); // = loginAPI(action.data) call 함수 사용법
    yield put({
      type: 'LOGIN_IN_SUCCESS',
      data: result.data
    });
  } catch (err) {
    yield put({
      type: 'LOGIN_IN_FAILURE'
    });
  }
}
function logoutAPI() {
  return axios.post('/api/logout');
}
function* logout() {
  try {
    yield delay(1000);
    // const result = yield call(logoutAPI);
    yield put({
      type: 'LOGIN_OUT_SUCCESS',
      data: result.data
    });
  } catch (err) {
    yield put({
      type: 'LOGIN_OUT_FAILURE'
    });
  }
}

function* watchLogin() {
  //   yield take('LOGIN_IN_REQUEST', login); //한번만 실행됨 (일회용 함수)
  //   yield takeEvery('LOGIN_IN_REQUEST', login); //마우스 이벤트 n번에 대해 모든 이벤트를 취급
  //   yield takeLeading('LOGIN_IN_REQUEST', login); //마우스 이벤트 n번에 대해 첫번째것 취급
  yield takeLatest('LOGIN_IN_REQUEST', login); //마우스 이벤트 n번에 대해 마지막것만 취급
}

function* watchLogout() {
  yield takeLatest('LOG_OUT_REQUEST', logout);
}

export default function* userSaga() {
  yield all([fork(watchLogIn), fork(watchLogOut)]);
}
