import { useState, useEffect } from 'react';
import s from './DateHeader.module.scss';
import picture from '../../assets/images/header.png';

export const DateHeader = ({ onDateChange }) => {
    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');

    // Handle month change
    const handleMonthChange = (e) => {
        setMonth(e.target.value);
        setDay(''); // Reset day when month changes
    };

    // Handle day change and notify parent component
    const handleDayChange = (e) => {
        setDay(e.target.value);
    };

    // Call onDateChange whenever both month and day are selected
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
                        <select name="day" value={day} onChange={handleDayChange} disabled={!month}>
                            <option value="">Day</option>
                            {getDaysInMonth(month).map((d) => (
                                <option key={d} value={d}>{d}</option>
                            ))}
                        </select>
                        <select name="month" value={month} onChange={handleMonthChange}>
                            <option value="">Month</option>
                            <option value="1">January</option>
                            <option value="2">February</option>
                            <option value="3">March</option>
                            <option value="4">April</option>
                            <option value="5">May</option>
                            <option value="6">June</option>
                            <option value="7">July</option>
                            <option value="8">August</option>
                            <option value="9">September</option>
                            <option value="10">October</option>
                            <option value="11">November</option>
                            <option value="12">December</option>
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
