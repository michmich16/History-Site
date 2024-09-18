import {Outlet, useLocation, useNavigate} from "react-router-dom";
import s from './MainLayout.module.scss';
import { Header } from "../components/Header/Header";
import { useEffect } from "react";

export const MainLayout = () =>{

    const location = useLocation();

    // Effekt der opdaterer vores page title når location skifter
    useEffect(() => {
      // Vi "slicer" det første tegn væk som er en skråstreg ("/").
      document.title = location.pathname.slice(1);
    }, [location]);

    return(
        <>
        <Header/>
        <Outlet />
        </>
    );
};