import { AuthLoginPayload } from '@/types/auth';
import axios from '@/utils/axios.base';

export const login = async (payload: AuthLoginPayload) => {
  const res = await axios.post('/auth/login', payload);
  return res.data;
};
