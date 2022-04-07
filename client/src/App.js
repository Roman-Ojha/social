import React from "react";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import Index from "./pages/Index";
import { Switch, Route } from "react-router-dom";
import { useHistory } from "react-router";
import GetUserIDPage from "./pages/GetUserIDPage";
import Page404 from "./pages/Page404";

const MainRoot = () => {
  const history = useHistory();
  history.push("/u");
  return <></>;
};

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={MainRoot} />
        <Route path="/u" component={Index} />
        <Route exact path="/signin" component={SignInPage} />
        <Route exact path="/register" component={SignUpPage} />
        <Route path="/userid" component={GetUserIDPage} />
        <Route path="/404" component={Page404} />
      </Switch>
    </>
  );
};

export default App;
