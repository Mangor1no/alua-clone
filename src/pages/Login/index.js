import React from 'react';
// import Badge from 'components/Badge';
import bgImage from 'assets/images/login-background.jpeg';

const Login = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-screen">
      <img className="w-full h-screen object-cover" src={bgImage} alt="login-background" />
    </div>
  );
};

export default Login;
