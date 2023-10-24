import { AuthLoginPayload, AuthRegisterPayload } from '@/types/auth';
import axios from '@/utils/axios.base';

export const login = async (payload: AuthLoginPayload) => {
  const res = await axios.post('/auth/login', payload);
  return res.data;
};

export const register = async (payload: AuthRegisterPayload) => {
  const res = await axios.post('/auth/register', payload);
  return res;
};
