import { getDatabase, ref, child, get } from "firebase/database";
import {
  loadOrderFailure,
  loadOrderRequest,
  loadOrderSuccess,
} from "../slice/orderSlice";

export const loadOrder = (userID) => async (dispatch) => {
  
  
    dispatch(loadOrderRequest);
    const dbRef = ref(getDatabase());
    get(child(dbRef, `Orders/${userID}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          dispatch(loadOrderSuccess({ userID : userID,...snapshot.val() }));
        } else {
          dispatch(loadOrderFailure("No data available"));
        }
      })
      .catch((error) => {
        dispatch(loadOrderFailure("No data available"));
      });
  
};
