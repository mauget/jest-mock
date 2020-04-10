import React from "react";
import {Entity, PointGraphics, Viewer} from "resium";

export default function Globe(props) {

    const {position, pixelSize} = {...props};

    return (
        <Viewer full>
            <Entity position={position} name="Fuquay-Varina" description="Nice">
                <PointGraphics pixelSize={pixelSize}/>
            </Entity>
        </Viewer>
    );
}
