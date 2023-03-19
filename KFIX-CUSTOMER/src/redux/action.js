import axios from "axios";
import {
  registerSuccess,
  loginFailure,
  loginRequest,
  loginSuccess,
  logoutUser,
  registerRequest,
  registerFailure,
  updateAvatarSuccess,
  updateFailure,
  updateRequest,
  updateUserNameSuccess,
} from "./slice/authSlice";

const serverUrl = "http://10.0.2.2:5000";

// user
export const login = (phone, password) => async (dispatch) => {
  try {
    dispatch(loginRequest());
    const { data } = await axios.post(`${serverUrl}/api/login`, {
      phone,
      password,
    });

    if (data.status === true) {
      dispatch(loginSuccess(data));
    } else {
      dispatch(loginFailure());
    }
  } catch (error) {
    console.log(error);
    dispatch({ type: "loginFailure", payload: error.response.data.message });
  }
};

export const register = (dataParam) => async (dispatch) => {
  try {
    dispatch(registerRequest());

    const { data } = await axios.post(`${serverUrl}/api/signup`, dataParam, {});
    if (data.status) {
      dispatch(registerSuccess(data));
    } else {
      dispatch(registerFailure("Lỗi!"));
    }
  } catch (error) {
    dispatch(registerFailure(error.response.data.error));
  }
};

export const logout = () => async (dispatch) => {
  const { data } = await axios.post(`${serverUrl}/api/logout`);

  if (data.status === true) {
    dispatch(logoutUser());
  }
};

export const updateAvatarUser = (avatar, phone) => async (dispatch) => {
  try {
    dispatch(updateRequest());
    const { data } = await axios.post(`${serverUrl}/api/updateavatar`, {
      avatar,
      phone,
    });
    if(data.status){
      dispatch(updateAvatarSuccess(data.avatar));
      console.log(data)
    }
 
  } catch (error) {
    dispatch(updateFailure(error.response.data.error));
  }
};
export const updateUserName = (name, phone) => async (dispatch) => {
  try {
    dispatch(updateRequest());
    const { data } = await axios.post(`${serverUrl}/api/updatename`, {
      name,
      phone,
    });
    if (data.status) {
      dispatch(updateUserNameSuccess(data.value));
      console.log(data)
    }
  } catch (error) {
    dispatch(updateFailure("Đã có lỗi!"));
  }
};

export const sendSMSOTP = (phone) => async (dispatch) =>{
  const { data } = await axios.post(`${serverUrl}/api/sendOTP`, {phone});
}
