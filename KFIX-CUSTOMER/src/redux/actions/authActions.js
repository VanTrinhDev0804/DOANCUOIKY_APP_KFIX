import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  getDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { app } from "../../firebase/config";
import { firestore, auth } from "../../firebase/config";
import {
  RecaptchaVerifier,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPhoneNumber,
  signOut,
} from "firebase/auth";
import {
  loginFailure,
  loginRequest,
  loginSuccess,
  logoutUser,
  registerFailure,
  registerSuccess,
  updateRequest,
  updateUserNameSuccess,
} from "../slice/authSlice";
import axios from "axios";

export const loginAuth = (phone, password) => async (dispatch) => {
  const q = query(collection(firestore, "users"), where("phone", "==", phone));
  dispatch(loginRequest());
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    if (doc.exists()) {
      let userInfor = { ...doc.data() };
      if (userInfor.email !== "") {
        signInWithEmailAndPassword(auth, userInfor.email, password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            let data = {
              user: userInfor,
            };
            console.log;
            dispatch(loginSuccess(data));
          })
          .catch((error) => {
            console.error(error);
            dispatch(loginFailure("Đã có lỗi!!"));
          });
      } else {
        dispatch(loginFailure("Đã có lỗi!!"));
      }
    } else {
      dispatch(loginFailure("Đã có lỗi!!"));
    }
  });
};

export const logoutAuth = () => async (dispatch) => {
  signOut(auth)
    .then(() => {
      dispatch(logoutUser());
    })
    .catch((error) => {
      s;
      console.log(error);
    });
};

export const registerAuth = (dataParam) => async (dispatch) => {
  const generateEmail = "user"
    .concat(Date.now().toString())
    .concat("@gmail.com");
  const newUser = {
    phoneNumber: dataParam.phoneNumber,
    password: dataParam.password,
    confirmPassword: dataParam.confirmPassword,
    username: dataParam.username,
    email: generateEmail,
  };
  const docRef = doc(firestore, "users", newUser.phoneNumber);
  const docSnap = await getDoc(docRef);
  let userId;
  if (docSnap.exists()) {
    dispatch(registerFailure("Số điện thoại đã có tài khoản trên hệ thống"));
  } else {
    return createUserWithEmailAndPassword(auth, newUser.email, newUser.password)
      .then((data) => {
        userId = data.user.uid;
        console.log(data.user);
        // return data.user.getIdToken();
      })
      .then(async (idtoken) => {
        let token = idtoken;
        const userCredentials = {
          username: newUser.username,
          phone: newUser.phoneNumber,
          createdAt: new Date().toISOString(),
          email: newUser.email,
          avatar:
            "https://firebasestorage.googleapis.com/v0/b/key-fix.appspot.com/o/users%2Favatardf.png?alt=media&token=8b2b7895-5cf4-4d38-aec2-7e6a795cbd2f",
          userId,
          isVerify: false,
          otp: "",
        };
        await setDoc(
          doc(firestore, "users", newUser.phoneNumber),
          userCredentials
        );

        const value = {
          user: userCredentials,
        };
        dispatch(registerSuccess(value));
      })
      .catch((err) => {
        console.error(err);
        dispatch(registerFailure("Đã có lỗi xảy ra!!"));
      });
  }
};

// export const sendSMSOTPAuth = (phone) => async (dispatch) => {
//   const otp = Math.floor(Math.random() * (999999 - 111111 + 1)) + 111111;

//   await axios.post();
//   // const phoneProvider = new firebase.auth.PhoneAuthProvider();

//   // phoneProvider.verifyPhoneNumber(phone , RecaptchaVerifier.current).then(data => console.log(data))
// };
export const updateAvatarUserAuth = (avatar, phone) => async (dispatch) => {
  try {
    dispatch(updateRequest());
    await updateDoc(doc(firestore, "users", phone), {
      avatar: avatar,
    })
      .then(() => {
        dispatch(updateAvatarSuccess(avatar));
      })
      .catch((err) => {
        console.log(err);
        dispatch(updateFailure("Lỗi không xác định"));
      });
  } catch (error) {
    dispatch(updateFailure("Lỗi không xác định"));
  }
};
export const updateUserNameAuth = (name, phone) => async (dispatch) => {
  try {
    dispatch(updateRequest());
    await updateDoc(doc(firestore, "users", phone), {
      username: name,
    })
      .then(() => {
        dispatch(updateUserNameSuccess(name));
      })
      .catch((err) => {
        console.log(err);
        dispatch(updateFailure("Lỗi không xác định"));
      });
  } catch (error) {
    dispatch(updateFailure("Lỗi không xác định"));
  }
};
