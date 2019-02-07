import React from 'react';
import HousePage from './housePage';
import {shallow} from 'enzyme';

describe('Testing <HousePage/>', () => {
    const house = shallow(<HousePage/>);
    describe('Testing snap & state', () => {
        it('HousePage have rendered correctly', () => {        
            expect(house).toMatchSnapshot();
        });
        it('HousePage state "error" is false', () => {
            expect(house.state().error).toBeFalsy();
        });
    });
});