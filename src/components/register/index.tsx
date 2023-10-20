'use client';

import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function RegisterPage() {
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
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email address"
          name="emailAddress"
          rules={[
            {
              required: true,
              message: 'Please input your email address!',
            },
          ]}
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
        <Form.Item
          className="mb-10"
          label="Confirm password"
          name="confirmPassword"
          rules={[
            {
              required: true,
              message: 'Please input your confirm password!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item className="w-full">
          <Button className="bg-[#343940] w-full text-white" htmlType="submit">
            Register
          </Button>
          <span>
            You have an account?
            <Link className=" text-red-500" href={`/${lang}/sign-in`}>
              {' '}
              Login now
            </Link>
          </span>
        </Form.Item>
      </Form>
    </div>
  );
}
