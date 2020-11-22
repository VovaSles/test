import React, {useState} from 'react';
import {Meteor} from 'meteor/meteor';
import 'antd/dist/antd.css';
import {Form, Input,  Button , Row, Col} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';



export  const LoginView  = () => {

   const {email, setEmail} = useState('');
   const {password, setPassword} = useState('');

  const  submitBtn = (email, password) => {
        Meteor.loginWithPassword(email, password, ((err) => {
            if (err) {
                console.error(err);
                return;
            }
            //console.log(res) ;
        }))
    }
  
        return (
            <Row Row type="flex" align="middle">
            <Col>
               <Form>
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                        ]}
                    >
                        <Input 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                        ]}
                    >
                        <Input
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <a className="login-form-forgot" href="">
                            Forgot password
                        </a>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                        Or <a href="">register now!</a>
                    </Form.Item>
                </Form>
            </Col>
            </Row>
        );
    }


