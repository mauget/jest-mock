import React from 'react';
import './App.css';
import Globe from "./Globe";
import {Cartesian3} from "cesium";

export default function App() {
    const position = Cartesian3.fromDegrees(-78.7714268, 35.6111252, 50);
    const pixelSize = 10;

    return <Globe position={position} pixelSize={pixelSize}/>
}
