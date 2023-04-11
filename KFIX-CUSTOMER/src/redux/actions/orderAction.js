import { getDatabase, ref, child, get } from "firebase/database";
import {
  loadKeyerFailure,
  loadKeyerRequest,
  loadKeyerSuccess,
} from "../slice/keyerSlice";
import {
  loadOrderFailure,
  loadOrderRequest,
  loadOrderSuccess,
} from "../slice/orderSlice";
import { calcDistance2Location } from "../../utils/map";

export const loadKeyerLocation = (addressCustomer) => async (dispatch) => {
  dispatch(loadKeyerRequest);
  const dbRef = ref(getDatabase());
  get(child(dbRef, `Keyers`))
    .then((snapshot) => {

      if (snapshot.exists()) {
        let promises = [];

        snapshot.forEach((childSnapshot) => {
          if (
            childSnapshot.val().status === "Online" &&
            childSnapshot.val().balanceAc > 0
          ) {
            const coordinatesKeyer =
              childSnapshot.val().dinhVi.latitude +
              "," +
              childSnapshot.val().dinhVi.longitude;

            const promise = new Promise(async (resolve, reject) => {
              try {
                const rs = await calcDistance2Location(
                  addressCustomer,
                  coordinatesKeyer
                );
                const distance =
                  rs.result.routeRows[0].elements[0]?.distance?.value;
                const distanceFormat =
                  rs.result.routeRows[0].elements[0]?.distance?.text;
                if (distance < 10000) {
                  const keyersucess = {
                    keyerId: childSnapshot.key,
                    ...childSnapshot.val(),
                    distance: distanceFormat,
                  };
                  resolve(keyersucess);
                } else {
                  resolve(null);
                }
              } catch (error) {
                reject(error);
              }
            });
            promises.push(promise);
          }
        });
        Promise.all(promises).then((results) => {
          const data = results.filter((result) => result !== null);
          dispatch(loadKeyerSuccess(data));
        });
      } else {
<<<<<<< HEAD
     
        dispatch(loadKeyerFailure("No data available"))

      }
    }).catch((error) => {
        dispatch(loadKeyerFailure("No data available"))
  
=======
        // console.log("No data available");
        dispatch(loadKeyerFailure("No data available"));
      }
    })
    .catch((error) => {
      dispatch(loadKeyerFailure("No data available"));
      //   console.error(error);
>>>>>>> 7220188dc3414abe85fd7442bef2200c8cf20759
    });
};

export const loadOrder = (userID) => async (dispatch) => {
  dispatch(loadOrderRequest);
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

