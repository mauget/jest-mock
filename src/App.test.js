import React from 'react';
import {render} from '@testing-library/react';
import App from './App';

const mockEarth = (p) => <div data-testid={"testid"}/>;

describe('App using derived Resium-Cesium component', () => {

    test('loads', () => {
        const {getByTestId} = render(<App mock={mockEarth}/>);
        const element = getByTestId('testid');
        expect(element).toBeInTheDocument();
    });

});
