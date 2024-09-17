import s from './Header.module.scss';

export const Header = () => {

    return (
        <>
            <hgroup className={s.headerStyle}>
                <header className={s.headerContainer}>
                    <div className={s.headerHero}>
                        <h1>ON THIS DAY</h1>
                        <h4>What happened on this day - historical events, deaths and births thoughout time</h4>
                    </div>
                </header>
            </hgroup>
        </>
    )
}