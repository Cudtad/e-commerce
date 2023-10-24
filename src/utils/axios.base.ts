import Axios from 'axios';

const isServer = typeof window === 'undefined';

const axios = Axios.create({
  baseURL: isServer
    ? process.env.NEXT_PUBLIC_VERCEL_ENV
    : process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 10000,
  withCredentials: true,
});

export default axios;
