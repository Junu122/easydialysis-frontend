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

const useraxiosInstance = axios.create({
  baseURL: 'https://www.api.easydialysis.shop/auth',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true
});

useraxiosInstance.interceptors.request.use(function (config) {
  console.log("config : ",config)
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
  useraxiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    console.log("error .response is : ",error)
    if (error.response?.status !== 401 || originalRequest._retry) {
      return Promise.reject({  status: error?.response?.status,
        success: error?.response?.data?.success,
        message: error?.response?.data?.message || "Authentication error"});
    }

    if (isRefreshing) {
      return new Promise((resolve, reject) => {
        failedQueue.push({ resolve, reject });
      })
        .then(() => useraxiosInstance(originalRequest))
        .catch((err) => Promise.reject(err));
    }

    originalRequest._retry = true;
    isRefreshing = true;

    try {
   
      const response = await useraxiosInstance.get('/refreshaccesstoken');
      
      if (response.data.success) {
        processQueue(null);
        return useraxiosInstance(originalRequest);
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

const adminaxiosInstance = axios.create({
  baseURL: 'https://www.api.easydialysis.shop/admin', 
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true
});

adminaxiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

adminaxiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      return Promise.reject(error);
   
    }
    return error
  }
);

export  {useraxiosInstance,adminaxiosInstance};