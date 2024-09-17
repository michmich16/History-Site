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
                {data ? (
                    <div className={s.contentData}>
                        {data.data?.Events?.map((event, index) => (
                            <div key={index} className={s.event}>
                                <p><strong>{event.year}</strong></p>
                                <p>{event.text}</p>
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
