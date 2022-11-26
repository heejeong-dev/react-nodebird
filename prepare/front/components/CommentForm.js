import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button } from 'antd';
import { useSelector } from 'react-redux';
import useInput from '../hooks/useInput';

const CommentForm = ({ post }) => {
  const id = useSelector((state) => {
    state.user.me?.id;
  });
  const [commentText, onChangeCommentText] = useInput('');

  const onSubmitComment = useCallback(() => {
    console.log(post.id, commentText);
  }, [commentText]);
  // 댓글 달면 새로고침 되는거부터 다시
  return (
    <Form onFinish={onSubmitComment}>
      <Form item>
        <Input.TextArea value={commentText} onChange={onChangeCommentText} rows={4} />
        <Button type="primary" htmlType="submit">
          twittwit
        </Button>
      </Form>
    </Form>
  );
};

CommentForm.prototype = {
  post: PropTypes.object.isRequired
};

export default CommentForm;
