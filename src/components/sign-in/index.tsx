'use client';

import { login } from '@/services/auth.api';
import { AuthLoginPayload } from '@/types/auth';
import { Form, Input, Button, message } from 'antd';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';

export default function SignInPage() {
  const { lang } = useParams();
  const [form] = Form.useForm();
  const router = useRouter();

  const onSubmit = async (data: AuthLoginPayload) => {
    console.log(data);

    try {
      const res = await login(data);
      console.log(res);
      await router.push('/en');
      message.success('Login successfully');
    } catch (error) {
      console.log(error);

      message.error(`Error: ${error}`);
    }
  };

  return (
    <div className="flex justify-center mt-20 pt-10 pb-20">
      <Form
        name="sign in"
        labelCol={{ span: 0 }}
        wrapperCol={{ span: 0 }}
        style={{ minWidth: 500 }}
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
