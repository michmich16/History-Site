import s from './Main.module.scss';
import { useState, useEffect } from 'react';

export const Main = () => {

    const [data, setData] = useState("");

    useEffect(() => {
      const url = 'https://history.muffinlabs.com/date';
  
      fetch(url)
        .then((response) => response.json())
        .then((data) => console.log(data));
    }, [data]);
    console.log(data);

    return (
        <>
            <main>

            </main>
        </>
    )
}