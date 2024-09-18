import s from './Navigation.module.scss';
import { NavLink } from "react-router-dom";
import { useEffect } from 'react';


export const Navigation = () => {
    useEffect(() => {
        console.log("Navigation Component has Mounted");
        return () => {
            console.log("Navigation Component has Un-Mounted");
        };
    }, []);

    return (
        <>
            <nav className={s.navStyle}>
                <ul>
                    <li><NavLink to={'/Date'}>BY DATE</NavLink></li>
                    <li><NavLink to={'/'}>TODAY</NavLink></li>
                    <li><NavLink to={'/Since'}>SINCE</NavLink></li>
                </ul>
            </nav>
        </>
    )
}