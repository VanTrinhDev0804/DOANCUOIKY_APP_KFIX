import { getDatabase, ref, child, get } from "firebase/database";
import { loadKeyerFailure, loadKeyerRequest, loadKeyerSuccess } from "../slice/keyerSlice";
import { loadOrderFailure, loadOrderRequest, loadOrderSuccess } from "../slice/orderSlice"

export const loadKeyerLocation = (dinhvi) => async (dispatch)=>{
    dispatch(loadKeyerRequest)
    const dbRef = ref(getDatabase());
    get(child(dbRef, `Keyers`)).then((snapshot) => {
      if (snapshot.exists()) {
        let data  = []
        snapshot.forEach((childSnapshot) => {
            data.push({keyerId : childSnapshot.key ,...childSnapshot.val() ,distance : 4.5 })
          
          });
        
        dispatch(loadKeyerSuccess(data))
        
      } else {
     
        dispatch(loadKeyerFailure("No data available"))

      }
    }).catch((error) => {
        dispatch(loadKeyerFailure("No data available"))
  
    });
    
}

export const loadOrder = (userID) => async (dispatch)=>{
  dispatch(loadOrderRequest)
  const dbRef = ref(getDatabase());
  get(child(dbRef, `Orders/${userID}`)).then((snapshot) => {
    if (snapshot.exists()) {
      dispatch(loadOrderSuccess({...snapshot.val()}))
    } else {
   
      dispatch(loadOrderFailure("No data available"))

    }
  }).catch((error) => {
      dispatch(loadOrderFailure("No data available"))
 
  });
  
}
