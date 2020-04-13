import React, {useEffect, useRef, useState} from 'react';
import './App.css';

export default function App(props) {
    const { mock } = { ...props }

    const earthRef = useRef(mock);
    const [loaded, setLoaded] = useState(null);
    const Earth = earthRef.current;

    useEffect(() => {
        if (earthRef.current) {
            setLoaded(true);
        } else {
            import('./Earth').then((module) => {
                earthRef.current = module.default;
                setLoaded(true);
            });
        }
    }, []);

    return loaded ? <Earth /> : null;
}
