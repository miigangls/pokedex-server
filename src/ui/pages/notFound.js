import React from 'react';
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    <Result
      status="warning"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Button type="primary"><Link to="/">
      Go Home
    </Link>
    </Button>}
    />
    <h1>404 - Not Found!</h1>
    
  </div>
);

export default NotFound;