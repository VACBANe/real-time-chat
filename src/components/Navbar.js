import React, {useContext} from "react";
import { NavLink } from "react-router-dom";
import { LOGIN_ROUTE } from "../utils/consts";
import { Context } from '..';
import { useAuthState } from "react-firebase-hooks/auth";

const Navbar = () => {
    const {auth} = useContext(Context);
    const [user] = useAuthState(auth);

    return (
        <nav className="navbar position-relative navbar-dark bg-primary">
                <div className="container justify-content-end">
                    {user ? (
                        <button className="btn btn-primary" onClick={() => auth.signOut()}>Выйти</button>
                    ) : (
                        <NavLink to={LOGIN_ROUTE}>
                            <button className="btn btn-outline-light">Логин</button>
                        </NavLink>
                    )}
                </div>
        </nav>
    );
};

export default Navbar;
