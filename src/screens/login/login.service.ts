import AsyncStorage from '@react-native-async-storage/async-storage';

import {api} from '@src/api';

//Mark - login
const login = async (data: {email: string; password: string}) => {
  const response = await api.post('auth/login', undefined, data);

  if (response.data.success) {
    try {
      await AsyncStorage.setItem('@token', response.data.data.data.token);
    } catch (e) {
      console.error('Error', e);
    }
  }

  return response.data;
};

const loginService = {
  login,
};

export {loginService};
