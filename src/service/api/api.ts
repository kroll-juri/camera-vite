import axios, { AxiosInstance } from 'axios';

import { BASE_URL, REQUEST_TIMEOUT } from './const';

const createAPI = (): AxiosInstance =>
  axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
  });

export { createAPI };
