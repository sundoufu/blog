import React from 'react';

import CenteringContainer from '../components/styled/CenteringContainer';
import LoginForm from '../components/forms/LoginForm';

function LoginPage() {
  return (
    <CenteringContainer>
      <h1>관리자 로그인</h1>
      <LoginForm />
    </CenteringContainer>
  );
}

export default LoginPage;
