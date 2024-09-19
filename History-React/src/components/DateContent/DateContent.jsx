import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import s from './DateContent.module.scss';
import Book from '../../assets/images/icons8-bookmark.svg';
import { DateHeader } from '../DateHeader/DateHeader';
import { Navigation } from '../Navigation/Navigation';

export const DateContent = () => {

    const [selectedMonth, setSelectedMonth] = useState('');
    const [selectedDay, setSelectedDay] = useState('');

    const handleDateChange = (month, day) => {
        setSelectedMonth(month);
        setSelectedDay(day);
    };

    const url = selectedMonth && selectedDay
        ? `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/all/${selectedMonth}/${selectedDay}`
        : '';

    const { isPending, error, data } = useQuery({
        queryKey: ['onthisday', selectedMonth, selectedDay],
        queryFn: () => fetch(url).then((response) => response.json()),
        enabled: !!selectedMonth && !!selectedDay, 
        staleTime: 10000 * 600, 
    });

    const sortedEvents = data?.events?.sort((a, b) => a.year - b.year);

    return (
        <>
            <DateHeader onDateChange={handleDateChange} />
            <Navigation />
            <main className={s.contentStyle}>
                <span className={s.timeLine}></span>
                <span className={s.circleTop}></span>

                {isPending ? (
                    <div>Loading...</div>
                ) : error ? (
                    <div>Error loading data...</div>
                ) : sortedEvents ? (
                    <div className={s.contentData}>
                        {sortedEvents.map((event, index) => (
                            <div key={index} className={s.event}>
                                <h4>YEAR: {event.year}</h4>
                                <span className={s.circleContent}></span>
                                <span className={s.timeLinePoint}></span>
                                <p>{event.text}</p>
                                <a href={event.pages[0]?.content_urls?.desktop?.page}>Read More <img src={Book} alt="Book icon" /></a>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No data available</p>
                )}
            </main>
        </>
    );
};
