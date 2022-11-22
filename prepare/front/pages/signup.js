import React, { useCallback, useState } from 'react';
import { Form, Input, Checkbox, Button } from 'antd';
import Head from 'next/head'; //html 안에 head 수정
import styled from 'styled-components';

import AppLayout from '../components/AppLayout';
import useInput from '../hooks/useInput';

const ErrorMessage = styled.div`
  color: red;
`;

const Signup = () => {
  const [id, onChangeId] = useInput('');
  const [nickname, onChangeNickName] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [term, setTerm] = useState(false);
  const [termError, setTermError] = useState(false);

  const onChangePasswordCheck = (e) => {
    setPasswordCheck(e.target.value);
    setPasswordError(e.target.value !== password);
  };
  const onChangeTerm = (e) => {
    setTerm(e.target.checked);
  };

  const onSubmit = useCallback(() => {
    if (password !== passwordCheck) {
      return setPasswordCheck(false);
    }
    if (!term) {
      return setTermError(true);
    }
    console.log({ id, nickname, password });
  }, [password, passwordCheck, term]);

  return (
    <AppLayout>
      <Head>
        <title>Sign In | React Nodebird</title>
      </Head>
      <Form onFinish={onSubmit}>
        <div>
          <label htmlFor={`user-id`}>ID</label>
          <br />
          <Input name={`user-id`} value={id} onChange={onChangeId} required />
        </div>
        <div>
          <label htmlFor={`user-nickname`}>Nickname</label>
          <br />
          <Input name={`user-nickname`} value={nickname} onChange={onChangeNickName} required />
        </div>
        <div>
          <label htmlFor={`user-password`}>Password</label>
          <br />
          <Input
            name={`user-password`}
            type="password"
            value={password}
            onChange={onChangePassword}
            required
          />
        </div>
        <div>
          <label htmlFor={`user-password`}>Confirm Password</label>
          <br />
          <Input
            name={`user-password`}
            type="password"
            value={passwordCheck}
            required
            onChange={onChangePasswordCheck}
          />
          {passwordError && <ErrorMessage>Password is not matched</ErrorMessage>}
        </div>
        <div>
          <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>
            I agree with the terms.
          </Checkbox>
          {termError && <ErrorMessage>Term agree is required.</ErrorMessage>}
        </div>
        <div>
          <Button type="primary" htmlType="submit">
            Sign Up
          </Button>
        </div>
      </Form>
    </AppLayout>
  );
};

export default Signup;
