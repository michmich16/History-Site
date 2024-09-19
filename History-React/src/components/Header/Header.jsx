import s from './Header.module.scss';
import picture from '../../assets/images/header.png'

export const Header = () => {

    return (
        <>
            <header className={s.headerStyle}>
                <img src={picture} alt="" />
                <div className={s.headerHero}>
                    <span className={`${s.circle} ${s.circleTopLeft}`}></span>
                    <span className={`${s.circle} ${s.circleTopRight}`}></span>
                    <h1>ON THIS DAY</h1>
                    <h4>What happened on this day - historical events, deaths and births thoughout time</h4>
                    <span className={`${s.circle} ${s.circleBottomLeft}`}></span>
                    <span className={`${s.circle} ${s.circleBottomRight}`}></span>
                </div>
            </header>
            
        </>
    )
}