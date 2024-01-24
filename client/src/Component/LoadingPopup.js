import React from "react";
import "./Loading.css"

function LoadingPopup() {

    return (
        <>
        <div className="fixed top-0 w-screen h-screen bg-gray-300 opacity-55">
        <div className="spinner-container">
                <div className="loading-spinner"></div>
            </div>
        </div>
           
        </>
    )
}
export default LoadingPopup;