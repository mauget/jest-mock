import React from 'react';
import {render} from '@testing-library/react';
import {act} from "react-dom/test-utils";
import {Cartesian3} from "cesium";
import {expect} from "chai";
import jsdom from "mocha-jsdom";
import Earth from "./Earth";

// Used in absence of a browser-based test runner such as karma:
global.document = jsdom({
    url: "http://localhost:3000/"
});

let rootContainer;

beforeEach(() => {
    rootContainer = document.createElement("div");
    document.body.appendChild(rootContainer);
});

afterEach(() => {
    document.body.removeChild(rootContainer);
    rootContainer = null;
});

describe('A component using Cesium/Resium', () => {

    it('renders element', () => {

        const position = Cartesian3.fromDegrees(-78.7714268, 35.6111252, 50);
        const pixelSize = 10;

        act(() => {
            render(<Earth />, rootContainer);
            // render(<Earth position={position} pixelSize={pixelSize}/>, rootContainer);
            // render(<div aaaa={"aaaa"}/>, rootContainer);
        });
        const element = rootContainer.toString();
        console.log('element is',element);
        expect(element).to.contain('HTMLDivElement');
    });
});
