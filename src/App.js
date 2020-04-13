import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import {Cartesian3} from "cesium";

import('./xxxx').then(module => {
    // const {xxxx} = { ...module } // <== if uses a normal export
    // This uses a default export
    const xxxx = module.default;
    console.log(xxxx("To be or not to be, that is the question"));
});

export default function App() {
    const position = Cartesian3.fromDegrees(-78.7714268, 35.6111252, 50);
    const pixelSize = 10;

    const earthRef = useRef(null);
    const [loaded, setLoaded] = useState(null);

    useEffect(() => {
        import('./Earth').then((module) => {
            earthRef.current = module.default;
            setLoaded(true);
        });
    }, [loaded]);

    const Earth = earthRef.current;
    return Earth ? <Earth position={position} pixelSize={pixelSize}/> : null;
}
