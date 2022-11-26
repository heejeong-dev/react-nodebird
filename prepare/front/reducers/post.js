export const initialState = {
  //대소문자 구분의규칙은 다른DB에서 받아온것을 합칠때는 대문자로 유지한다 (사용자, 이미자, 코멘트는 postdb내부의 값이 아님)
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: 'aaa'
      },
      content: 'The first post #hashtag #express',
      Image: [
        { src: 'https://code.visualstudio.com/assets/images/home-intellisense.svg' },
        { src: 'https://code.visualstudio.com/assets/images/home-debug.svg' },
        { src: 'https://code.visualstudio.com/assets/images/home-git.svg' }
      ],
      Comments: [
        {
          User: {
            nickname: 'bbb'
          },
          content: 'wow new post!'
        },
        {
          User: {
            nickname: 'ccc'
          },
          content: 'nice to meet you'
        }
      ]
    }
  ],
  imagePaths: [],
  postAdded: false
};

const ADD_POST = 'ADD_POST';

export const addPost = (data) => {
  return {
    type: ADD_POST,
    data
  };
};

const dummyPost = {
  id: 2,
  content: 'new post 123',
  User: {
    id: 1,
    nickname: '제로초'
  },
  Images: [],
  Comments: []
};

// 이전상태, 액션 받아서 다음 상태를 뱉어내는 함수
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return { ...state, mainPosts: [dummyPost, ...state.mainPosts], postAdded: true };
    default:
      return state;
  }
};
