import React from 'react';
import { Router, Route } from 'react-router-dom';
import { Navigate, Routes } from "react-router";
import { ToastContainer } from "react-toastify";
import BaseComponent from './Components/baseComponent'
import Login from './Components/Login/Login';
import Dashboard from './Components/HeaderSideBar/HeaderSideNavBar'
import { history } from "./managers/history";



class RoutesComponent extends BaseComponent {

    componentDidMount() {

    }
    toast = () => {
        return (
            <ToastContainer
                position="top-center"
                autoClose={2500}
                hideProgressBar
                newestOnTop={true}
                closeOnClick={true}
                rtl={false}
                pauseOnVisibilityChange={false}
                draggable={false}
                pauseOnHover={false}
                closeButton={null}
            />
        );
    };


    getPublicRoutes = () => {
        return (
            <Routes>
                <Route exact path={"/"} element={<Login />} />
                {/* <Route exact path={'/forgot-password'} element={Forgot} /> */}
                {/* <Route exact path={'/signup'} element={Signup} /> */}
                <Route exact path="*" element={<Login />} />
            </Routes>
        );
    };
    getPrivateRoutes = () => {
            return (
                <Routes>
                    <Route exact path={"/"} element={<Login />} />
                    <Route exact path={'/dashboard'} element={<Dashboard/>} />
                    <Route exact path={'/dashboard/:menu'} element={<Dashboard/>} />
                    <Route exact path={'/dashboard/:menu/:submenu'} element={<Dashboard/>} />
                    <Route exact from="*" to="/" />
                </Routes>
            );
    };

    render() {        
        return (
                <Router location={history.location}>
                    {localStorage.getItem("loggedIn") ? this.getPrivateRoutes() : this.getPublicRoutes()}
                    {this.toast()}
                </Router>
        );
    }
}


export default RoutesComponent;
