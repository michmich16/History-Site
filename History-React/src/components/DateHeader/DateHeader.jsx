import { useState, useEffect } from 'react';
import s from './DateHeader.module.scss';
import picture from '../../assets/images/header.png';

export const DateHeader = ({ onDateChange }) => {
    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');

    const handleMonthChange = (e) => {
        setMonth(e.target.value);
        setDay(''); // Reset day when month changes
    };

    const handleDayChange = (e) => {
        setDay(e.target.value);
    };

    useEffect(() => {
        if (month && day) {
            onDateChange(month, day);
        }
    }, [month, day, onDateChange]);

    const getDaysInMonth = (month) => {
        if (!month) return [];
        const daysInMonth = new Date(2024, month, 0).getDate(); // Handle leap year for February
        return Array.from({ length: daysInMonth }, (_, i) => i + 1);
    };

    return (
        <>
            <header className={s.headerStyle}>
                <img src={picture} alt="Header" />
                <div className={s.headerHero}>
                    <span className={`${s.circle} ${s.circleTopLeft}`}></span>
                    <span className={`${s.circle} ${s.circleTopRight}`}></span>
                    <h1>
                        ON
                        <select className={s.daySelect} name="day" value={day} onChange={handleDayChange} disabled={!month}>
                            <option value="">Day</option>
                            {getDaysInMonth(month).map((d) => (
                                <option key={d} value={d}>{d}</option>
                            ))}
                        </select>
                        <select className={s.monthSelect} name="month" value={month} onChange={handleMonthChange}>
                            <option value="">Month</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                        </select>
                    </h1>
                    <h4>What happened on this day - historical events, deaths, and births throughout time</h4>
                    <span className={`${s.circle} ${s.circleBottomLeft}`}></span>
                    <span className={`${s.circle} ${s.circleBottomRight}`}></span>
                </div>
            </header>
        </>
    );
};
