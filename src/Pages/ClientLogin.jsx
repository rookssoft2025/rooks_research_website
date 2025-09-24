import React, { useState } from 'react';
import { Form, Input, Button, message, Typography } from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
import { useNavigate } from 'react-router-dom';
import '../Design/ClientLogin.css';

const { Title, Text } = Typography;

const ClientLogin = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    const { email, password } = values;
    setLoading(true);

    try {
     
      await signInWithEmailAndPassword(auth, email, password);
      message.success('Login successful!');
      console.log('Navigating to ClientReview page'); 
      navigate('/client-review'); 
    } catch (error) {
      console.error("Login error:", error);
      let errorMessage = 'Login failed';
      
     
      if (error.code === 'auth/invalid-email') {
        errorMessage = 'Invalid email format';
      } else if (error.code === 'auth/user-not-found') {
        errorMessage = 'User not found';
      } else if (error.code === 'auth/wrong-password') {
        errorMessage = 'Incorrect password';
      }
      
      message.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      
      <div className="login-card">
        
        <div className="welcome-section">
          <Title level={2} className="welcome-title">
            Welcome Back!
          </Title>
          <Text className="welcome-text">
            Access your client dashboard to manage your projects, track progress, 
            and communicate with our team.
          </Text>
          <div className="welcome-image">
            <img 
              src="https://illustrations.popsy.co/amber/digital-nomad.svg" 
              alt="Client Dashboard Illustration"
              width="250"
            />
          </div>
        </div>

       
        <div className="form-section">
          <div className="form-header">
            <Title level={3} className="form-title">
              Client Login
            </Title>
          </div>

          <Form layout="vertical" onFinish={onFinish} className="login-form">
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: 'Please input your email!' },
                { type: 'email', message: 'Please enter a valid email!' },
              ]}
            >
              <Input 
                prefix={<MailOutlined />} 
                placeholder="client@example.com" 
                size="large"
              />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password 
                prefix={<LockOutlined />} 
                placeholder="Enter your password" 
                size="large"
              />
            </Form.Item>

            <Form.Item>
              <Button 
                type="secondary" 
                htmlType="submit" 
                block 
                loading={loading}
                size="large"
              >
                Log In
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ClientLogin;