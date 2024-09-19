import {Outlet, useLocation, useNavigate} from "react-router-dom";
import s from './MainLayout.module.scss';
import { Header } from "../components/Header/Header";
import { useEffect } from "react";

export const MainLayout = () =>{

    const location = useLocation();

    useEffect(() => {

      document.title = location.pathname.slice(1);
    }, [location]);

    return(
        <>
        <Outlet />
        </>
    );
};