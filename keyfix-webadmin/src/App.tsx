import React, { useEffect } from "react";
import "antd/dist/reset.css";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PageRender from "./PageRender";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { collection, getDocs, query, where } from "firebase/firestore";
import { auth, db } from "./firebase/cofig";
import { onAuthStateChanged } from "firebase/auth";
import { addcurrentAdmin } from "./redux/slice/authSlice";

function App() {
  const dispatch = useAppDispatch();

  const getInfoAdmin = async (email: any) => {
    const q = query(collection(db, "manager"), where("email", "==", email));
    const ad: any = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      ad.push({ id: `${doc.id}`, ...doc.data() });
    });
    dispatch(addcurrentAdmin(ad));
  };
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
       getInfoAdmin(user.email)
    } else {
    
    }
  });

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={PageRender} exact />
          <Route path="/:page" component={PageRender} exact />
          <Route path="/:page/:control" component={PageRender} exact />
          <Route path="/:page/:control/:tag" component={PageRender} exact />
          <Route path="/:page/:control/:tag/:id" component={PageRender} exact />
          <Route
            path="/:page/:control/:tag/:id/:action"
            component={PageRender}
            exact
          />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;


