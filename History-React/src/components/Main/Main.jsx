import s from './Main.module.scss';
import { useState, useEffect } from 'react';

export const Main = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const url = 'https://history.muffinlabs.com/date';

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    console.log(data);

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
                                    <h4><strong>YEAR: {event.year}</strong></h4>
                                    <span className={s.timeLinePoint}></span>
                                    <p>{event.text}</p>
                                    <a href={event.links[0].link}>Read More</a>

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
