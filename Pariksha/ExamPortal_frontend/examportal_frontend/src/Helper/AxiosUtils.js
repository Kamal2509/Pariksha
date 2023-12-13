import axios from "axios";


  const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
});

//Request intercepter
axiosInstance.interceptors.request.use(
    config => {
      const  token = localStorage.getItem('token');
      console.log(token);
        if (token) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
            // config.headers['Authorization'] = 'Bearer ' + token
            config.headers['Content-Type'] = 'application/json';
        }
        console.log(config);
        return config;
    },
    error => {
        Promise.reject(error)
    }

);

//response intercepters
axiosInstance.interceptors.response.use(
    response => {
      return response
    },
    // async function (error) {
    //   const originalRequest = error.config
  
    //   if (
    //     error.response.status === 401 &&
    //     originalRequest.url === 'http://localhost:3000/'
    //   ) {
    //     //router.push('/login')
    //     return Promise.reject(error)
    //   }
  
    //   if (error.response.status === 401 && !originalRequest._retry) {
    //     originalRequest._retry = true
    //     const refreshToken = localStorage.getItem('token')
    //     const res = await axios
    //           .post('/auth/token', {
    //               refresh_token: refreshToken
    //           });
    //       if (res.status === 201) {
    //          // localStorage.setItem(res.data);
    //           axios.defaults.headers.common['Authorization'] =
    //               'Bearer ' + localStorage.getItem('token');
    //           return axios(originalRequest);
    //       }
    //   }
    //   return Promise.reject(error)
    // }
  )








export default axiosInstance;