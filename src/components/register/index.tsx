'use client';

import { register } from '@/services/auth.api';
import { AuthRegisterPayload } from '@/types/auth';
import { Form, Input, Button, message } from 'antd';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';

export default function RegisterPage() {
  const { lang } = useParams();
  const [form] = Form.useForm();
  const router = useRouter();

  const onSubmit = async (data: AuthRegisterPayload) => {
    console.log(data);
    try {
      const res = await register(data);
      message.success('Register successfully');
      await router.push('/en/sign-in');
    } catch (error) {
      message.error(`Error: ${error}`);
    }
  };

  return (
    <div className="flex justify-center mt-20 pt-10 pb-20">
      <Form
        name="sign in"
        labelCol={{ span: 0 }}
        wrapperCol={{ span: 0 }}
        style={{ minWidth: 600 }}
        layout="vertical"
        form={form}
        onFinish={onSubmit}
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
        >
          <Input />
        </Form.Item>
        {/* <Form.Item
          label="Email address"
          name="emailAddress"
          rules={[
            {
              required: true,
              message: 'Please input your email address!',
            },
            {
              type: 'email',
              message: 'Please input email invalid',
            },
          ]}
        >
          <Input />
        </Form.Item> */}
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
        <Form.Item className="mb-10" label="Address" name="address">
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
