import React from 'react';
import AppLayout from '../components/AppLayout';
import NicknameEditForm from '../components/LicknameEditForm';
import FollowList from '../components/FollowList';
import Head from 'next/head'; //html 안에 head 수정

const Profile = () => {
  const followingList = [{ nickname: 'hi' }, { nickname: 'abcd' }, { nickname: 'aaaa' }];
  const followerList = [{ nickname: 'hi' }, { nickname: 'abcd' }, { nickname: 'aaaa' }];

  return (
    <>
      <Head>
        <title>Profile | Node bird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="list of following" data={followingList} />
        <FollowList header="list of follwer" data={followerList} />
      </AppLayout>
    </>
  );
};

export default Profile;
