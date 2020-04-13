import React from 'react';
import {render} from '@testing-library/react';
import App from './App';

const mockEarth = () => <div data-testid={"testid"}/>;

test('renders learn react link', () => {
    const { getByTestId }  = render(<App mock={mockEarth}/>);
    const element = getByTestId('testid');
    expect(element).toBeInTheDocument();
});
