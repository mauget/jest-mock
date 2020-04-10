import color from 'color';

jest.mock('color');

describe('Show mock vs no-mock', () => {

    test('mocked color.rgb returns undefined', () => {
        expect(color.rgb(255, 128, 80)).toBeFalsy();
    });

    test('real color.rgb returns something', () => {
        const realColor = jest.requireActual('color');
        expect(realColor.rgb(255, 128, 80)).toBeTruthy();
    });

});
