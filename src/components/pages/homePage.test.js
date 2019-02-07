import React from 'react';
import HomePage from './homePage';
import {shallow} from 'enzyme';

describe('Testing <HomePage/>', () => {
    const home = shallow(<HomePage/>);
    describe('Testing snap & state', () => {
        it('HomePage have rendered correctly', () => {        
            expect(home).toMatchSnapshot();
        });
        it('HomePage state "isEdit" is false', () => {
            expect(home.state().isEdit).toBeFalsy();
        });
    });
});