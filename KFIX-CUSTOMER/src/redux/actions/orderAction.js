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

export const loadKeyerLocation = (addressCustomer,keyType) => async (dispatch) => {
<<<<<<< HEAD
  
  console.log(keyType);
=======
  console.log(keyType , "key");
>>>>>>> b3963a5019a451a56a37cb4fde63469c35149b5e
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
            // childSnapshot.val().loaiSC.includes(keyType)
          ) {
            console.log(typeof(keyType))
            console.log(keyType)
            const coordinatesKeyer =
              childSnapshot.val().dinhVi.coordinate.latitude +
              "," +
              childSnapshot.val().dinhVi.coordinate.longitude;
<<<<<<< HEAD

=======
>>>>>>> b3963a5019a451a56a37cb4fde63469c35149b5e
            const promise = new Promise(async (resolve, reject) => {
              try {
                const rs = await calcDistance2Location(
                  addressCustomer,
                  coordinatesKeyer
                );
          
                const distance =
                  rs.result.routeRows[0].elements[0]?.distance?.value;
                  const timeMove =
                  rs.result.routeRows[0].elements[0]?.duration?.value;
                const distanceFormat =
                  rs.result.routeRows[0].elements[0]?.distance?.text;
                if (distance < 10000) {
                  const keyersucess = {
                    keyerId: childSnapshot.key,
                    ...childSnapshot.val(),
                    distance: distanceFormat,
                    timeMove,
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
        dispatch(loadKeyerFailure("No data available"));
      }
    })
    .catch((error) => {
      dispatch(loadKeyerFailure("No data available"));
>>>>>>> b3963a5019a451a56a37cb4fde63469c35149b5e
    });
};

export const loadOrder = (userID) => async (dispatch) => {
  dispatch(loadOrderRequest);
  const dbRef = ref(getDatabase());

  get(child(dbRef, `Orders/${userID}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        dispatch(loadOrderSuccess({ ...snapshot.val() }));
      } else {
        dispatch(loadOrderFailure("No data available"));
      }
    })
    .catch((error) => {
      dispatch(loadOrderFailure("No data available"));
    });
};
