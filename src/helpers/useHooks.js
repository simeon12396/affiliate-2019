import {useState, useEffect} from 'react';

export const useCurrentTime = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        let timerID = setInterval( () => tick(), 1000);

        return () => {
            clearInterval(timerID);
        };
    });

    function tick() {
        setDate(new Date());
    };

    return date.toLocaleTimeString();
};

export const usePartnersLogo = () => {
    const [logos, setLogos] = useState([]);
    const APIUrl = 'https://dev.winbet-bg.com/api/partners-logo';

    useEffect(() => {
        fetch(APIUrl)
        .then(response => response.json())
        .then(data => setLogos(data))

    }, [])

    return logos;
};