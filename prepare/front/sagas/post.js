import { all, call, delay, fork, take, takeEvery, takeLatest, throttle } from 'redux-saga/effects';

function addPostAPI() {
  return axios.post('/api/addpost');
}
function* addPost() {
  try {
    yield delay(1000); //server가 없으므로 우선 서버에 다녀오는 효과만 줌
    // const result = yield call(addPostAPI);
    yield put({
      type: 'ADD_POST_SUCCESS',
      data: result.data
    });
  } catch (err) {
    yield put({
      type: 'ADD_POST_FAILURE'
    });
  }
}

function* watchAddPost() {
  yield takeLatest('ADD_POST_REQUEST', addPost); // back에는 n개의 데이터가 저장되어있음 (서버에서 같은데이터 두번오면 막는식으로 보강))
  //    yield throttle('ADD_POST_REQUEST', addPost, [2000]);
}

export default function* postSage() {
  yield all([fork(watchAddPost)]);
}
