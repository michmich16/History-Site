import s from './Navigation.module.scss';

export const Navigation = () =>{

    return(
        <>
        <nav className={s.navStyle}>
        <ul>
            <li><a href="">BY DATE</a></li>
            <li><a href="">TODAY</a></li>
            <li><a href="">SINCE</a></li>
        </ul>
        </nav>
        </>
    )
}