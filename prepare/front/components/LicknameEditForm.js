import React, { useMemo } from 'react';
import Proptypes from 'prop-types';
import { Form, Input } from 'antd';

const NicknameEditForm = () => {
  const style = useMemo(() => {
    marginBottom: '28px';
    border: '1px solid black';
    padding: '5px';
  }, []);

  return (
    <Form style={style}>
      <Input.Search addonBefore="Nickname" enterButton="Edit" />
    </Form>
  );
};

export default NicknameEditForm;
