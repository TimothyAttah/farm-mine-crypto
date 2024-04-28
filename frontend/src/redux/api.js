import axios from 'axios';

// export const baseURL = 'http://localhost:8080/api';
export const baseURL = 'https://enoch-louis-bootcamp-2skl.vercel.app/api';

const API = axios.create({ baseURL: baseURL });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('jwt')) {
    req.headers['Authorization'] = `Bearer ${localStorage.getItem('jwt')}`;
  }

  return req;
});

export const registerUser = (userData) => API.post('/auth/register', userData);
export const loginUser = (userData) => API.post('/auth/login', userData);

export const startPayment = (paymentData) => API.post('/pay', paymentData);
export const createPayment = (reference) =>
  API.get(`/pay/createPayment?reference=${reference}`);

export const getPaymentReceipt = (reference) =>
  API.get('/pay/paymentDetails', reference);

export const payment = (paymentData) => API.get('/paystack', paymentData);
