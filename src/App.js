import React, { useEffect } from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Spaces from "./pages/Spaces";
import MySpace from "./pages/MySpace";
import DetailPage from "./pages/DetailPage";

import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/user/actions";
import { selectToken } from "../src/store/user/selectors";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);
  const token = useSelector(selectToken);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation />
      <MessageBox />
      {isLoading ? <Loading /> : null}
      <Switch>
        <Route exact path="/" component={Spaces} />
        {token ? <Route path="/myspace" component={MySpace} /> : null}
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/spaces/:id" component={DetailPage} />
      </Switch>
    </div>
  );
}

export default App;
