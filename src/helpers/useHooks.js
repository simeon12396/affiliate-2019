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