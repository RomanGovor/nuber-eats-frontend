import React from "react";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import {useMe} from "../hooks/useMe";
import nuberLogo from "../images/logo.svg";
import {LOCALSTORAGE_TOKEN} from "../constants";

export const Header: React.FC = () => {
    const {data} = useMe();

    const logoutHandler = () => {
        localStorage.removeItem(LOCALSTORAGE_TOKEN);
        window.location.replace('/');
    }

    return (
        <>
            {!data?.me.verified && (
                <div className="bg-red-500 p-3 text-center text-base text-white">
                    <span>Please verify your email.</span>
                </div>
            )}
            <header className="py-4">
                <div className="w-full px-5 xl:px-0 max-w-screen-2xl mx-auto flex justify-between items-center">
                    <Link to="/">
                        <img src={nuberLogo} className="w-44" alt="Nuber Eats" />
                    </Link>
                    <span className="text-xs flex items-center justify-center">
                        <button className="btn bg-red-600 mr-2 w-20 hover:bg-red-700" onClick={logoutHandler}>Logout</button>
                        <Link to="/edit-profile">
                            <FontAwesomeIcon icon={faUser} className="text-3xl" />
                        </Link>
                    </span>
                </div>
            </header>
        </>
    );
};