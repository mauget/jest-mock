import React from 'react';
import {Entity, Viewer} from 'resium';
import {Color, Cartesian3} from 'cesium';

export default function Earth(props) {

    return (
        <Viewer full>
            <Entity
                description={"Balentine"}
                name={"Fuquay-Varina, NC"}
                position={Cartesian3.fromDegrees(-78.7714268, 35.6111252, 50)}
                point={{pixelSize: 8, color: Color.RED}}/>
        </Viewer>
    );
}
