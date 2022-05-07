import axios from 'axios';
export interface Dog {
  message: string;
  status: string;
}

/**
 * 返回共用返回体里面的data，因为axios自带data包裹返回data，所以做一步处理
 */
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
export async function fetchDogFace() {
  return axios.get<Dog, Dog>('https://dog.ceo/api/breeds/image/random');
}
