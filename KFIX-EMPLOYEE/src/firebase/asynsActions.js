
import { database } from "./config";
import { ref, remove, set, update } from "firebase/database";

export const writeOrderRTDatabase = (Id, data) => {
    set(ref(database, "Orders/" + Id), {
      ...data,
    })
  };

  export const updateUserOnlineRTDatabase = (usserId, data) => {
    const postData = {
      ...data
    };
    const updates = {};
    updates["Orders/" + usserId] = postData;

  
    update(ref(database), updates);
  };
  export const removeOrderRTDatabase = (orderId, data) => {
   const deleteRef = ref(database , "Orders/" +orderId) 
    remove(deleteRef)

  };
  