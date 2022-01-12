import axios from 'axios';
import { consumerKey, consumerSecret, baseURL } from '../config/woocommerce';

const axiosInstance = axios.create({
  baseURL,
  auth: {
    username: consumerKey,
    password: consumerSecret,
  },
});

export default axiosInstance;
