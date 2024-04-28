/* eslint-disable no-template-curly-in-string */
import { PAYMENT } from '../types';
import * as api from '../api';
import { toast } from 'react-toastify';

export const startPayment = (paymentData) => async (dispatch) => {
  try {
    const { data } = await api.startPayment(paymentData);

    dispatch({
      type: PAYMENT.START_PAYMENT,
      payload: data,
    });

    // console.log(data.data);

    const { authorization_url, reference } = data.data.data;

    localStorage.setItem('referenceCode', reference);
    if (authorization_url) {
      window.location.href = `${authorization_url}`;
    }

    // const timeout = setTimeout(() => {
    //   console.log('This is time with clearing');
    // }, 6000);

    // if (true) {
    //   clearTimeout(timeout);
    // }

    // if (reference)
    //   if (data.status === 'Success') {
    //     const { data } = await api.getPaymentReceipt(reference);

    //     dispatch({
    //       type: PAYMENT.GET_PAYMENT,
    //       payload: data,
    //     });

    //     console.log('createPayment', data);
    //     // localStorage.setItem('payment', JSON.stringify(data.data));

    //     JSON.stringify(localStorage.setItem('payment', data.data));
    //   }

    // localStorage.setItem('contestant', JSON.stringify(data.newContestant));
    // toast.success(data.msg);
  } catch (err) {
    if (err.response && err.response.data) {
      toast.error(err.response.data.msg);
    }
  }
};

export const verifyPayment = (reference) => async (dispatch) => {
  try {
    const { data } = await api.createPayment(reference);
    dispatch({
      type: PAYMENT.CREATE_PAYMENT,
      payload: data,
    });

    console.log('verify payment data >>>>>>', data);
  } catch (err) {
    if (err.response && err.response.data) {
      toast.error(err.response.data.msg);
    }
  }
};

export const getPayment = (paymentData) => async (dispatch) => {
  try {
    const { data } = await api.getPaymentReceipt(paymentData);

    dispatch({
      type: PAYMENT.GET_PAYMENT,
      payload: data,
    });

    // console.log(data.data);
    // if (data.data.status === true) {
    //   window.location.href = `https://checkout.paystack.com/h4ss3fej3wtf2z3`;
    // }
  } catch (err) {
    if (err.response && err.response.data) {
      toast.error(err.response.data.msg);
    }
  }
};

export const paymentsMethod = (paymentData) => async (dispatch) => {
  try {
    const { data } = await api.payment(paymentData);

    dispatch({
      type: PAYMENT.START_PAYMENT,
      payload: data,
    });

    // console.log('This is payment data>>>>>>> ', JSON.parse(data));
    console.log('This is payment data 2 >>>>>>> ', data);
    const myData = JSON.parse(data.data);

    console.log(myData.data);

    // const { authorization_url, reference } = JSON.parse(data.data);

    const { authorization_url } = myData.data;
    console.log('Authorization URI>>>>>>', authorization_url);

    // localStorage.setItem('referenceCode', reference);
    if (authorization_url) {
      window.location.href = `${authorization_url}`;
    }
  } catch (err) {
    if (err.response && err.response.data) {
      toast.error(err.response.data.msg);
    }
  }
};
