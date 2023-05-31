import { api } from "../../heplers/request";

export const authSlice = {
  state: {},
  reducers: {
    checkIsAuthenticated: (state) => {
      const token = localStorage.getItem("@token");
      const isTokenExist = !!token;
      if (isTokenExist) {
        setAuthHeader("@token");
      }
      return {
        ...state,
        isAuthenticated: isTokenExist,
        isAuthLoading: false,
      };
    },
  },
  effects: {
    async loadData(payload) {
      try {
        api.defaults.headers.common["Authorization"] = null;
        const response = await api.post("/user/sign-up", payload);
        localStorage.setItem("@otp_token", response.data.data.token);
        this.registerFunction(response.data.data);
      } catch (e) {
        throw Error(e);
      }
    },
  },
};

const setAuthHeader = (key) => {
  const token = localStorage.getItem(key);
  if (!token) {
    throw Error("Token not exist");
  }
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};
