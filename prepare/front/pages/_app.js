import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head'; //html 안에 head 수정
import 'antd/dist/antd.css';

//모든 하위 컴포넌트들이 이 하위로 들어가서 출력됨으로 import 문을 여기서만 하면됨 (_app.js)
// 이름이 components 이면 에러남
const Nodebird = ({ Component }) => {
  return (
    <>
      <Head>
        <title>Node Bird</title>
      </Head>
      <div>Common Menu</div>
      <Component />
    </>
  );
};

Nodebird.propTypes = {
  Component: PropTypes.elementType.isRequired
};

export default Nodebird;
