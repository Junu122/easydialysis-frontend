import axios from "axios";

// Flag to prevent multiple refresh requests
let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach(prom => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve();
    }
  });
  failedQueue = [];
};

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000/api/auth',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true
});
// axiosInstance.interceptors.request.use(
//   (config) => {
//     console.log("Request Interceptor:", config);
    
//     // You can modify request headers here (e.g., attach tokens)
//     const accessToken = document.cookie
//       .split("; ")
//       .find((row) => row.startsWith("accessToken="))
//       ?.split("=")[1];

//     if (accessToken) {
//       config.headers.Authorization = `Bearer ${accessToken}`;
//     }

//     return config;
//   },
//   (error) => {
//     console.log("Request Interceptor Error:", error);
//     return Promise.reject(error);
//   }
// );
axios.interceptors.request.use(function (config) {
  console.log("config : ",config)
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    console.log("error .response is : ",error)
    if (error.response?.status !== 401 || originalRequest._retry) {
      return Promise.reject(error);
    }

    if (isRefreshing) {
      return new Promise((resolve, reject) => {
        failedQueue.push({ resolve, reject });
      })
        .then(() => axiosInstance(originalRequest))
        .catch((err) => Promise.reject(err));
    }

    originalRequest._retry = true;
    isRefreshing = true;

    try {
   
      const response = await axiosInstance.get('/refreshaccesstoken');
      
      if (response.data.success) {
        processQueue(null);
        return axiosInstance(originalRequest);
      }
    } catch (refreshError) {
      processQueue(refreshError, null);
    
      document.cookie = 'accessToken=; Max-Age=0; path=/;';
      document.cookie = 'refreshToken=; Max-Age=0; path=/;';
      window.location.href = '/login';
      return Promise.reject(refreshError);
    } finally {
      isRefreshing = false;
    }
  }
);

export default axiosInstance;