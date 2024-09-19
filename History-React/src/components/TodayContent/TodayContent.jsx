import { useQuery } from '@tanstack/react-query';
import s from './TodayContent.module.scss';
import Book from '../../assets/images/icons8-bookmark.svg';
import { Header } from '../Header/Header';
import { Navigation } from '../Navigation/Navigation';

export const TodayContent = () => {
    const today = new Date();
    const month = today.getMonth() + 1; //getMonth() er zero-based så skal +1
    const day = today.getDate();
    
    const url = `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/all/${month}/${day}`;

    const { isPending, error, data } = useQuery({
        queryKey: ['onthisday', month, day], 
        queryFn: () => fetch(url).then((response) => response.json()),
        staleTime: 10000 * 600, 
    });

    if (isPending) {
        return (<div className={s.LoadingPage}>Loading...</div>);
    }

    if (error) {
        return (<div>Error...</div>);
    }

    const sortedEvents = data.events?.sort((a, b) => a.year - b.year);

    return (
        <>
        <Header/>
        <Navigation/>
            <main className={s.contentStyle}>
                <span className={s.timeLine}></span>
                <span className={s.circleTop}></span>

                {sortedEvents ? (
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
