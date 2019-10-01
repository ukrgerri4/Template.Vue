import axios from 'axios';
import store from '../store';
import router from '../router';

const axiosInterceptorsSetup = () => {
    const token = store.getters['auth/getToken'];
    if (token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    }

    axios.interceptors.response.use(undefined, (error) => {
        return new Promise((resolve, reject) => {
          if (error.response.status === 401) {
            router.push({ name: 'login' });
          }
          throw error;
        });
    });
};

export { axiosInterceptorsSetup };
