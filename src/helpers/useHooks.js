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

export const useDataFromAPI = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState([]);

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => setError(error));

    }, [])

    return data ? data : error;
};

export const useChangeLanguage = () => {

    const [lng, setLng] = useState('bg');

    useEffect(() => {
        const urlArray = window.location.href.split('/');

        if(urlArray[3] === 'bg' || urlArray[3] === 'en') {
            setLng(urlArray[3]);
        }
    }, []);

    const handlerOnClickBg = (lngData) => {
        const lngEndPoint = '/bg';
        setLng('bg');
        lngData.push(lngEndPoint);
    };

    const handlerOnClickEn = (lngData) => {
        const lngEndPoint = '/en';
        setLng('en');
        lngData.push(lngEndPoint);
    };

    return [lng, handlerOnClickBg, handlerOnClickEn];
};