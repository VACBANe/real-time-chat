import React, { useContext } from "react";
import { Context } from "..";
import firebase from "firebase";

const Login = () => {
    const { auth } = useContext(Context);

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        const user = await auth.signInWithPopup(provider);
        console.log(user);
    };

    return (
        <div className="container">
            <div className="d-flex align-items-center justify-content-center" style={{height: "80vh"}}>
                <div>
                    <button className="btn btn-primary" onClick={login}>
                        Войти с помощью Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
