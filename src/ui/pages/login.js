import React  from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import '../../styles/login.css'
function Login() {
  return (
    <div className="content">
      <div style={{marginTop:'5rem' }}>
          <Form  className='form-content'>
            <h5>Ingresar</h5>
              
            <div className="label">
                <label>Username</label>
            </div>
            <Form.Item  name="username" rules={[{ required: true, message: 'Please input your username!' }]}  >
              <Input className="input-login" />
            </Form.Item>
            <div className="label">
              <label>Password</label>
            </div>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password className="input-login" />
            </Form.Item>

            <Form.Item>
              <Button className="btn-login" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
      </div>
        
    </div>
  );
}

export default Login;
