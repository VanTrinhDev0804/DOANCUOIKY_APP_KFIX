
import { database } from "./config";
import { ref, set, update } from "firebase/database";

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
  