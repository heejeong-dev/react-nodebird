import { HYDRATE } from 'next-redux-wrapper';

const initialValue = {
  user: {
    isLoggedIn: false,
    user: null,
    signUpData: {},
    loginData: {}
  },
  post: {
    mainPosts: []
  }
};

export const LoginAction = (data) => {
  return {
    type: 'LOG_IN',
    data
  };
};

export const LogoutAction = () => {
  return {
    type: 'LOG_OUT'
  };
};

// 이전상태, 액션 받아서 다음 상태를 뱉어내는 함수
const rootReducer = (state = initialValue, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case 'LOG_IN':
      return { ...state, user: { ...state.user, user: action.data, isLoggedIn: true } };
    case 'LOG_OUT':
      return { ...state, user: { ...state.user, user: null, isLoggedIn: false } };
    default:
      return state;
  }
};
export default rootReducer;
