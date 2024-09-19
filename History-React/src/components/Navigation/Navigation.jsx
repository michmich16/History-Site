import s from './Navigation.module.scss';
import { NavLink } from "react-router-dom";
import { useEffect } from 'react';
import Light from '../../assets/images/icons8-light-50.png';


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
                    <li><NavLink to={'/date'}>BY DATE</NavLink></li>
                    <li><NavLink to={'/'}>TODAY</NavLink></li>
                    <li><NavLink to={'/about'}>ABOUT</NavLink></li>
                </ul>
            </nav>
        </>
    )
}