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

<<<<<<< HEAD
export const loadKeyerLocation = (addressCustomer) => async (dispatch) => {
  dispatch(loadKeyerRequest);
  const dbRef = ref(getDatabase());
  get(child(dbRef, `Keyers`))
    .then((snapshot) => {
=======
export const loadKeyerLocation = (dinhvi) => async (dispatch)=>{
    dispatch(loadKeyerRequest)
    const dbRef = ref(getDatabase());
    get(child(dbRef, `Keyers`)).then((snapshot) => {
>>>>>>> 03194dd5baab5d4f2f877a3a01e168a900ac28d7
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
        // console.log("No data available");
        dispatch(loadKeyerFailure("No data available"));
      }
    })
    .catch((error) => {
      dispatch(loadKeyerFailure("No data available"));
      //   console.error(error);
    });
};

export const loadOrder = (userID) => async (dispatch) => {
  dispatch(loadOrderRequest);
  const dbRef = ref(getDatabase());
<<<<<<< HEAD
  get(child(dbRef, `Orders/${userID}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        dispatch(loadOrderSuccess({ ...snapshot.val() }));
      } else {
        // console.log("No data available");
        dispatch(loadOrderFailure("No data available"));
      }
    })
    .catch((error) => {
      dispatch(loadOrderFailure("No data available"));
      //   console.error(error);
    });
};
=======
  get(child(dbRef, `Orders/${userID}`)).then((snapshot) => {
    if (snapshot.exists()) {
      dispatch(loadOrderSuccess({...snapshot.val()}))
    } else {
      console.log("No data available");
      dispatch(loadOrderFailure("No data available"))

    }
  }).catch((error) => {
      dispatch(loadOrderFailure("No data available"))
  //   console.error(error);
  });
  
}
>>>>>>> 03194dd5baab5d4f2f877a3a01e168a900ac28d7
