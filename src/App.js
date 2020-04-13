import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import {Cartesian3} from "cesium";

export default function App(props) {
    const { mock } = { ...props }
    const position = Cartesian3.fromDegrees(-78.7714268, 35.6111252, 50);
    const pixelSize = 8;

    const earthRef = useRef(mock);
    const [loaded, setLoaded] = useState(null);

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

    const Earth = earthRef.current;
    return loaded ? <Earth position={position} pixelSize={pixelSize}/> : null;
}
