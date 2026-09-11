import axios from "axios"

export const authApi=axios.create({
    baseURL:`${import.meta.env.VITE_BACKEND_AUTH_URL}`,
    headers:{
        "Content-Type":"application/json"
    }
})


export const nscApi=axios.create({
    baseURL:`${import.meta.env.VITE_BACKEND_NSC_URL}`,
    headers:{
        "Content-Type":"application/json"
    }
})
nscApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);