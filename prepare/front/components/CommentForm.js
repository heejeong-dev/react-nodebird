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

  const onSubmitComment = useCallback(
    (event) => {
      event.preventDefault();
      console.log(commentText);
    },
    [commentText]
  );

  return (
    <Form>
      <Form item>
        <Input.TextArea rows={4} value={commentText} onChange={onChangeCommentText} />
        <Button type="primary" htmlType="submit" onClick={onSubmitComment}>
          twit
        </Button>
      </Form>
    </Form>
  );
};

CommentForm.prototype = {
  post: PropTypes.object.isRequired
};

export default CommentForm;
