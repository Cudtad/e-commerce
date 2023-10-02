'use client';

import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function SignInPage() {
  const { lang } = useParams();

  return (
    <div className="flex justify-center pt-10">
      <Form
        name="sign in"
        labelCol={{ span: 0 }}
        wrapperCol={{ span: 0 }}
        style={{ minWidth: 600 }}
        layout="vertical"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
          extra={`We'll never share your email with anyone else.`}
        >
          <Input />
        </Form.Item>
        <Form.Item
          className="mb-10"
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item className="w-full">
          <Button className="bg-[#343940] w-full text-white" htmlType="submit">
            Login
          </Button>
          <span>
            You don't have an account?
            <Link className=" text-red-500" href={`/${lang}/register`}>
              {' '}
              Register Now
            </Link>
          </span>
        </Form.Item>
      </Form>
    </div>
  );
}
