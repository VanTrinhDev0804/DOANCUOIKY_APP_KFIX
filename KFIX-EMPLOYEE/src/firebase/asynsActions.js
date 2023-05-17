
import { database, firestore } from "./config";
import { ref, remove, set, update } from "firebase/database";
import { doc, updateDoc } from "firebase/firestore";
// Realtime
export const writeOrderRTDatabase = (Id, data) => {
    set(ref(database, "Orders/" + Id), {
      ...data,
    })
  };
// update status + dinh vi 
  export const updateUserOnlineRTDatabase = (usserId, data) => {
    const postData = {
      ...data
    };
    const updates = {};
    updates["Keyers/" + usserId] = postData;
    update(ref(database), updates);
  };
  export const updateKeyerByKeyvalue = (keyUpdate, value) => {
    const updates = {};
    updates["Keyers/" + "/" + keyUpdate] = value;

  
    update(ref(database), updates);
  };
  // update status => offline
  export const updateUserOnlineStatus = (usserId, status) => {
    const updates = {};
    updates["Keyers/" + usserId +"/status"] = status;
    update(ref(database), updates);
  };
  export const removeOrderRTDatabase = (orderId, data) => {
   const deleteRef = ref(database , "Orders/" +orderId) 
    remove(deleteRef)

  };
  
  export const  updateKeyOrder = (keyUpdate , value) =>{
    const updates = {};
    updates["Orders/" +keyUpdate] = value;
    update(ref(database), updates);
  }

  // FireStore
export const updateBalanceKeyer =(userId , balance)=>{
  const keyerRef = doc(firestore, "Keyer", userId);
  updateDoc(keyerRef, {
    balanceAc: balance
  });

} 

