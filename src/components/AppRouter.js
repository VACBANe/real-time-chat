import React, { useContext } from "react";
import { Route, Switch, Redirect } from "react-router";
import { Context } from "..";
import Login from "./Login";
import Chat from "./Chat";
import { CHAT_ROUTE, LOGIN_ROUTE } from "../utils/consts";
import { useAuthState } from "react-firebase-hooks/auth";

const AppRouter = () => {
    const { auth } = useContext(Context);
    const [user] = useAuthState(auth);
    return user ? (
        <Switch>
            <Route path={CHAT_ROUTE} component={Chat} exact={true} />
            <Redirect to={CHAT_ROUTE} />
        </Switch>
    ) : (
        <Switch>
            <Route path={LOGIN_ROUTE} component={Login} exact={true} />
            <Redirect to={LOGIN_ROUTE} />
        </Switch>
    );
};

export default AppRouter;
