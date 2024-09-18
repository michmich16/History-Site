import { useQueryClient, useQuery } from '@tanstack/react-query';
import s from './TodayContent.module.scss';
import { useState, useEffect } from 'react';
import Book from '../../assets/images/icons8-bookmark.svg'

export const TodayContent = () => {

    const url = 'https://history.muffinlabs.com/date';

    // const queryClient = useQueryClient()
    const { isPending, error, data } = useQuery({
        queryKey: ['history'],
        queryFn: () => fetch(url)
            .then((response) => response.json()),
        staleTime: 1000 * 600,
    });
    console.log(data);

    if (isPending) {
        return (<div>Loading...</div>)
    }

    if (error) {
        return (<div>Error...</div>)
    }

    return (
        <>
            <main className={s.contentStyle}>
                <span className={s.timeLine}></span>
                <span className={s.circleTop}></span>

                {data ? (
                    <div className={s.contentData}>
                        {data.data?.Events?.map((event, index) => (
                            <div key={index} className={s.event}>
                                <span className={s.circleContent}></span>
                                <span className={s.timeLinePoint}></span>
                                <h4>YEAR: {event.year}</h4>
                                <p>{event.text}</p>
                                <a href={event.links[0].link}>Read More <img src={Book}/></a>

                            </div>
                        ))}
                    </div>

                ) : (
                    <p>Loading...</p>
                )}

            </main>
        </>
    );
}
