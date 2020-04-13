import React from 'react';
import {render} from '@testing-library/react';
import Demo from './demo';

// 1. Carried out: yarn add --dev react-test-renderer

// 2. Ref: Render as a custom element. DOM "custom elements" aren't checked for anything and shouldn't fire warnings.
// They are lowercase and have a dash in the name.
//
// jest.mock('./Widget', () => () => <mock-widget />);

jest.mock('./demo', () => () => <mock-demo><p>prop1-text</p><p>prop2-text</p></mock-demo>);

function App() {
    return (
        <>
            <Demo prop1={"prop1-text"} prop2={"prop2-text"}/>
        </>
    );
}

test('FakeApp renders element', () => {

    console.log('Demo', Demo);
    const {getByText} = render(<App prop1={'prop1-text'} prop2={'prop2-text'}/>);

    const prop1Text = getByText('prop1-text');
    expect(prop1Text).toBeInTheDocument();

    const prop2Text = getByText(/prop2-text/gi);
    expect(prop2Text).toBeInTheDocument();
});
