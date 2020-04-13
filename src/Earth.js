import React from "react";
import {Viewer} from "resium";

export default function Earth(props) {

    // const {position, pixelSize} = {...props};
    console.log('Viewer', Viewer);

    return (
        <Viewer />
    );
}
