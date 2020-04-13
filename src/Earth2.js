import React, {useEffect} from "react";
import * as Cesium from "cesium";

const Viewer = Cesium.Viewer;

export default function Earth2() {
    const cesiumContainer = 'cesiumContainer';
    useEffect(() => {
        new Viewer(cesiumContainer);
    }, []);

    return <div id={cesiumContainer}/>;
}
