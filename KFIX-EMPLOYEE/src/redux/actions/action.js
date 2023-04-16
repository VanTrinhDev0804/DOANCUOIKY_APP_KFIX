import axios from "axios";
import {
  loginFailure,
  loginRequest,
  loginSuccess,
  logoutUser,
  updateAvatarSuccess,
  updateFailure,
  updateRequest,
  updateUserNameSuccess,
  verifyOTPSuccess,
  verifyOTPFailure,
} from "../slice/authSlice";

const serverUrl = "http://192.168.1.5:5000";

// user
export const login = (phone, password) => async (dispatch) => {
  try {
    dispatch(loginRequest());
    const { data } = await axios.post(`${serverUrl}/api/loginkeyer`, {
      phone,
      password,
    });

    console.log('====================================');
    console.log(data);
    console.log('====================================');
    if (data.status === true) {
      dispatch(loginSuccess(data));
    }
  } catch (error) {
   console.log(error)
    dispatch(loginFailure(error.response.data.error));
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
export const verifyOTPhandel = (phone , otp) => async (dispatch) =>{
  try {
    dispatch(updateRequest())
    const { data } = await axios.post(`${serverUrl}/api/verifyOTP`, {phone , otp});
    if (data.status){
      dispatch(verifyOTPSuccess())
    }
  } catch (error) {
    dispatch(verifyOTPFailure(error.response.data.error))
  }
 
}
