import React, { useState, useCallback, useMemo } from 'react';
import Link from 'next/link';
import { Form, Input, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { LoginAction } from '../reducers';
import styled from 'styled-components'; //FIXME: 이거안됨 -> 컴포넌트안에 넣어야함~

// compn안에 들어가는 속성은 유즈 메모로 무조건 할것
// const style = useMemo(() => ({ marginTop: 10 }), []);
//r계속 마진 10이기때문에 다시그릴 이유가 없음)

const LoginForm = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  //아래 처럼 선언하면 디브 테그가 됨 + 스타일 먹은

  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, []);

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const onSubmitForm = useCallback(() => {
    console.log(id, password);
    dispatch(LoginAction({ id, password }));
  }, [id, password]);

  return (
    <Form onFinish={onSubmitForm} style={{ padding: '10px' }}>
      <div>
        <label htmlFor="user-id">ID</label>
        <br />
        <Input name="user-id" value={id} onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor="user-password">Password</label>
        <br />
        <Input
          name="user-password"
          type="password"
          value={password}
          onChange={onChangePassword}
          required
        />
      </div>
      <div style={{ marginTop: '10px' }}>
        <Button type="primary" htmlType="submit" loading={false}>
          Login
        </Button>
        <Link href="/signup">
          <Button>Sign up</Button>
        </Link>
      </div>
    </Form>
  );
};

export default LoginForm;

// 컴포넌트의 props로 넘겨주는 함수는 반드시 useCallback을 써야 최적화가 된다
