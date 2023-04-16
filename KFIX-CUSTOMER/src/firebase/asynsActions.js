
import { database } from "./config";
import { ref, remove, set, update } from "firebase/database";

export const writeOrderRTDatabase = (Id, data) => {
    set(ref(database, "Orders/" + Id), {
      ...data,
    })
  };

  export const updateOrderRTDatabase = (orderId, data) => {
    const postData = {
      status : true
    };
    const updates = {};
    // updates["Orders/" + orderId + "/status"] = "Đợi báo giá";

  
    update(ref(database), updates);
  };
// Update status va order ,tách để dễ xử lý
  export const updateKeyerByKeyvalue = (keyUpdate, value) => {
    const updates = {};
    updates["Keyers/" + "/" + keyUpdate] = value;

  
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