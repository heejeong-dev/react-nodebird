export const initialState = {
  isLoggedIn: false,
  user: null,
  signUpData: {},
  loginData: {}
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
export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return { ...state, user: action.data, isLoggedIn: true };
    case 'LOG_OUT':
      return { ...state, user: null, isLoggedIn: false };
    default:
      return state;
  }
};
