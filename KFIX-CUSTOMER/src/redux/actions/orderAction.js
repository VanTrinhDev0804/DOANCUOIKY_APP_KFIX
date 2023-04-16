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
  console.log(keyType);
  dispatch(loadKeyerRequest);
  const dbRef = ref(getDatabase());
  get(child(dbRef, `Keyers`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        let promises = [];
        console.log('add',addressCustomer);

        snapshot.forEach((childSnapshot) => {
          if (
            childSnapshot.val().status === "Online" &&
            childSnapshot.val().balanceAc > 0 &&
            childSnapshot.val().loaiSC.includes(keyType)
          ) {
            
            const coordinatesKeyer =
              childSnapshot.val().dinhVi.coordinate.latitude +
              "," +
              childSnapshot.val().dinhVi.coordinate.longitude;
<<<<<<< HEAD
=======

>>>>>>> 5c94747ad04f88c888934a7e1bd8ccdbecc25f35
            const promise = new Promise(async (resolve, reject) => {
              try {
                const rs = await calcDistance2Location(
                  addressCustomer,
                  coordinatesKeyer
                );
                console.log("Khoang canh",rs)
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
        dispatch(loadKeyerFailure("No data available"));
      }
    })
    .catch((error) => {
      dispatch(loadKeyerFailure("No data available"));
=======
     
        dispatch(loadKeyerFailure("No data available"))

      }
    }).catch((error) => {
        dispatch(loadKeyerFailure("No data available"))
  
>>>>>>> 5c94747ad04f88c888934a7e1bd8ccdbecc25f35
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
