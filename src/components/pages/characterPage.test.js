import React from 'react';
import CharacterPage from './characterPage';
import {shallow} from 'enzyme';

describe('Testing <CharacterPage/>', () => {
    const сharacter = shallow(<CharacterPage/>);
    describe('Testing snap & state', () => {
        it('CharacterPage have rendered correctly', () => {        
            expect(сharacter).toMatchSnapshot();
        });
        it('CharacterPage state "error" is false', () => {
            expect(сharacter.state().error).toBeFalsy();
        });
    });
});