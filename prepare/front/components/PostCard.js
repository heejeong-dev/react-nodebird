import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import PostImages from './PostImage';
import { Card, Form, Comment, Button, Popover, ButtonGroup, Avatar, List } from 'antd';
import {
  RetweetOutlined,
  HeartOutlined,
  MessageOutlined,
  EllipsisOutlined,
  HeartTwoTone
} from '@ant-design/icons';
import { useSelector } from 'react-redux';
import CommentForm from './CommentForm';
import PostCardContent from './PostContent';

const PostCard = ({ post }) => {
  const { me } = useSelector((state) => state.user);
  const [liked, setLiked] = useState(false);
  const [commentFormOpened, setCommentFormOpened] = useState(false);
  const id = me?.id;

  const onToggleLike = useCallback(() => {
    setLiked((prev) => !prev);
  }, [liked]);

  const onToggleComment = useCallback(() => {
    setCommentFormOpened((prev) => !prev);
  });

  return (
    <div style={{ marginBottom: 20 }}>
      <Card
        cover={post.Images && <PostImages images={post.Images} />}
        actions={[
          <RetweetOutlined key="retweet" />,
          liked ? (
            <HeartTwoTone twoToneColor="red" key="heart" onClick={onToggleLike} />
          ) : (
            <HeartOutlined key="heart" onClick={onToggleLike} />
          ),
          <MessageOutlined key="comment" onClick={onToggleComment} />,
          <Popover
            key="more"
            content={
              <ButtonGroup>
                {id && post.User.id === id ? (
                  <>
                    <Button>Edit</Button>
                    <Button>Delete</Button>
                  </>
                ) : (
                  <Button type="submit">Report</Button>
                )}
              </ButtonGroup>
            }>
            <EllipsisOutlined />
          </Popover>
        ]}>
        <Card.Meta
          avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
          title={post.User.nickname}
          description=<PostCardContent postData={post.content} />
        />
      </Card>
      {commentFormOpened && (
        <>
          <CommentForm post={post} />
          <List
            header={`${post.Comments.length} 댓글`}
            itemLayout="horizontal"
            dataSource={post.Comments}
            renderItem={(item) => (
              <li>
                <Comment
                  author={item.User.nickname}
                  avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                  content={item.content}
                />
              </li>
            )}
          />
        </>
      )}
      {/* <CommentForm /> */}
      {/* <Comments /> */}
    </div>
  );
};

PostCard.prototype = {
  post: PropTypes.object.isRequired
};

export default PostCard;
