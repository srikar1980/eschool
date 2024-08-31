import axios from 'axios';
import apiRoutes from './apiRoutes';
import { getLocalStorage, setLocalStorage } from '@/utils/localStorage';

const domain = process.env.INVOKE_URL;

const axiosInstance = axios.create({
  baseURL: domain,
  timeout: 15000,
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    if (config._retry) {
      const authorization = getLocalStorage('authorization');
      config.headers['Authorization'] = `${authorization?.accessToken?.token}`;
    }
    // Do something before request is sent
    // persist the access token, refresh token and refresh token time
    // on api request check the current time and refresh token time diff and if its is < than 3min then
    // get new refresh token and procced previous api call with new refresh token
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // handle response object to convert data like, timezone, token manuplation, terminology changes
    return response;
  },
  async (error) => {
    const { response, config } = error;
    const prevRequest = config;
    if (response) {
      const { status } = response;
      if (status === 401 && !prevRequest._retry) {
        prevRequest._retry = true;
        const authorization = getLocalStorage('authorization');
        if (!authorization) return;
        try {
          const response = await axios.get(
            `${domain}${apiRoutes.refreshToken.url}`,
            {
              params: {
                refreshToken: authorization?.refreshToken?.token,
                system: 'web',
              },
            },
          );
          const { data } = response.data;
          const newAuthorization = {
            accessToken: data.accessToken,
            refreshToken: authorization.refreshToken,
          };
          setLocalStorage('authorization', newAuthorization);
          return axiosInstance(prevRequest);
        } catch (_error) {
          location.replace('/login');
          return Promise.reject(_error);
        }
      }
      if (status === 500 || status === 404) {
        location.replace('/notfound');
      } else {
        return Promise.reject(error);
      }
    } else {
      return Promise.reject(
        error?.code === 'ECONNABORTED'
          ? 'Internal Server Error. Please try again later.'
          : error,
      );
    }
  },
);



const postAPIRequest = (route, data, customHeaders = undefined) => {
  let url = domain + route;
  let headers = customHeaders ?? undefined;
  return axiosInstance.post(url, data, headers);
};



export {
  apiRoutes,
  postAPIRequest,
};
