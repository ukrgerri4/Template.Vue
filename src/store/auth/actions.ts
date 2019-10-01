import { ActionTree } from 'vuex';
import axios from 'axios';
import { AuthState, User } from './types';
import { RootState } from '../types';


export const actions: ActionTree<AuthState, RootState> = {
  login(context, user) {
    return new Promise((resolve, reject) => {
      const authority = {
        url: `${process.env.VUE_APP_IDS_URL}/connect/token`,
        params: {
          client_id: process.env.VUE_APP_IDS_CLIENT_ID,
          client_secret: process.env.VUE_APP_IDS_CLIENT_SECRET,
          username: user.username,
          password: user.password,
          grant_type: process.env.VUE_APP_IDS_GRANT_TYPE,
          scope: process.env.VUE_APP_IDS_SCOPE,
        },
      };

      const newParams = new URLSearchParams();
      // tslint:disable-next-line:forin
      for (const st in authority.params) {
        newParams.append(st, (authority.params as any)[st]);
      }

      context.commit('AUTH_REQUEST');
      axios({
        url: authority.url,
        data: newParams,
        method: 'POST',
        headers: {
          'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
      })
      .then((resp) => {
        const token = resp.data.access_token;
        localStorage.setItem('token', token);
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
        context.commit('AUTH_SUCCESS', { token, user });
        resolve(resp);
      })
      .catch((err) => {
        context.commit('AUTH_ERROR');
        localStorage.removeItem('token');
        context.state.token = '';
        reject(err);
      });
    });
  },

  register(context, user) {
    return new Promise((resolve, reject) => {
      context.commit('AUTH_REQUEST');
      axios({ url: `${process.env.VUE_APP_IDS_URL}/register`, data: user, method: 'POST' })
        .then((resp) => {
          const token = resp.data.token;
          const userData = resp.data.user;
          localStorage.setItem('token', token);
          axios.defaults.headers.common.Authorization = token;
          context.commit('AUTH_SUCCESS', token, userData);
          resolve(resp);
        })
        .catch((err) => {
          context.commit('AUTH_ERROR', err);
          localStorage.removeItem('token');
          reject(err);
        });
    });
  },

  logout(context) {
    return new Promise((resolve, reject) => {
      context.commit('LOGOUT');
      localStorage.removeItem('token');
      delete axios.defaults.headers.common.Authorization;
      resolve();
    });
  },
};
