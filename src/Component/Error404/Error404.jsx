import React from 'react';

import { useNavigate } from 'react-router-dom';

function Error404() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };
  return (
    <div>
         <h2>You have redirected to an unknown page</h2>
         
      <button onClick={goToHome}>Go to Home</button>
    </div>
  );
}

export default Error404;