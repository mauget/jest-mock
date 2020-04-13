import React from 'react';
import {Entity, Viewer} from 'resium';
import {Color} from 'cesium';

export default function Earth(props) {

    const {position, pixelSize} = {...props};
    const point = {pixelSize, color: Color.RED};

    return (
        <Viewer full>
            <Entity
                description={"Balentine"}
                name={"Fuquay-Varina, NC"}
                position={position}
                point={point}/>
        </Viewer>
    );
}
