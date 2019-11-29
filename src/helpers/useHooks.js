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