import React from 'react';
import AppLayout from '../components/AppLayout';
import NicknameEditForm from '../components/LicknameEditForm';
import FollowList from '../components/followList';
import Head from 'next/head'; //html 안에 head 수정

const follower = [{ nickname: 'hi' }];
const Profile = () => {
  return (
    <>
      <Head>
        <title>Profile | Node bird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="list of following" data={follower} />
        <FollowList heaader="list of follwer" data={[]} />
      </AppLayout>
    </>
  );
};

export default Profile;
