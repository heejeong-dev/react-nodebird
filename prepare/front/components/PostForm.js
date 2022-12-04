import React, { useState, useCallback, useRef } from 'react';
import { Form, Input, Button } from 'antd';

import { useSelector, useDispatch } from 'react-redux';
import { addPost } from '../reducers/post';

const PostForm = () => {
  const dispatch = useDispatch();
  const imageInput = useRef();
  const { imagePaths } = useSelector((state) => state.post);
  const [text, setText] = useState('');

  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  const onSubmit = useCallback(() => {
    dispatch(addPost());
    setText('');
  });
  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  });

  return (
    <Form style={{ margin: '10px 0 20px' }} encType="multipart/from-data" onFinish={onSubmit}>
      <Input.TextArea
        value={text}
        onChange={onChangeText}
        maxLength={140}
        placeholder={'Share your today'}
      />
      <div style={{ marginTop: '10px' }}>
        <input type="file" multiple hidden ref={imageInput} />
        <Button onClick={onClickImageUpload} type="primary" htmlType="submit" loading={false}>
          Upload Image
        </Button>
        <Button type="primary" style={{ float: 'right' }} htmlType="submit">
          twittwit
        </Button>
      </div>
      <div>
        {imagePaths.map((v) => {
          <div key={v} style={{ display: 'inline-block' }}>
            <img src={v} style={{ width: 200 }} alt={v} />
            <div>
              <Button>Delete</Button>
            </div>
          </div>;
        })}
      </div>
    </Form>
  );
};

export default PostForm;

// 컴포넌트의 props로 넘겨주는 함수는 반드시 useCallback을 써야 최적화가 된다
