import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Row, Col } from 'antd';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import UserProfile from '../components/UserProfile';
import LoginForm from '../components/LoginForm';

// 스타일안에 컴포넌트 넣으면 속성 추가임
const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

const AppLayout = ({ children }) => {
  // const isLoggedIn = useSelector((state) => {
  //   state.user.isLoggedIn;
  // }, []);

  const { isLoggedIn } = useSelector((state) => state.user);

  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/">Home</Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile">profile</Link>
        </Menu.Item>
        <Menu.Item>
          <SearchInput enterButton />
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup">sign up</Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLoggedIn ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a href="https://google.com" target="_blank" rel="noreferrer noopener">
            google
          </a>
        </Col>
      </Row>
    </div>
  );
};

//stylw ㄴ안에 객체넣으면 리렌더링할때 최적화 덜됨

AppLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default AppLayout;
