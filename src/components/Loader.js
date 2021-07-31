import React from "react";
import "../App.css";
const Loader = () => {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{height: "80vh"}}>
            <div className="lds-hourglass"></div>
        </div>
    );
};

export default Loader;
