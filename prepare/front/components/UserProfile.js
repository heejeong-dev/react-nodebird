import React, { useCallback } from 'react';
import { Card, Avatar, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { LoginAction, LogoutAction } from '../reducers';

const UserProfile = () => {
  const dispatch = useDispatch();
  const onLogOut = useCallback(() => {
    dispatch(LogoutAction());
  }, []);
  return (
    <Card
      actions={[
        <div key="twit">
          Twit
          <br />0
        </div>,
        <div key="followings">
          Followings
          <br />0
        </div>,
        <div key="follower">
          Follower
          <br />0
        </div>
      ]}>
      <Card.Meta avatar={<Avatar>ZC</Avatar>} title="abcd" />
      <Button onClick={onLogOut}>Log Out</Button>
    </Card>
  );
};

export default UserProfile;
