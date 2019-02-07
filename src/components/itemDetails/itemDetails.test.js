import React from 'react';
import ItemDetails from './itemDetails';
import {shallow} from 'enzyme';

describe('Testing <ItemDetails/>', () => {
    const details = shallow(<ItemDetails/>);
    describe('Testing snap & state', () => {
        it('ItemDetails have rendered correctly', () => {        
            expect(details).toMatchSnapshot();
        });
        it('ItemDetails state "item" is emty object', () => {
            expect(details.state().item).toBeNull();
        });
        it('ItemDetails state "loading" is true', () => {
            expect(details.state().loading).toBeTruthy();
        });
        it('ItemDetails state "error" is false', () => {
            expect(details.state().error).toBeFalsy();
        });
    });
    describe('Handlers tests', () => {
        it('testing updateItem', () => {
            details.instance().updateItem();
            expect(details.state().loading).toBeTruthy();
        });
        // it('testing onError', () => {
        //     details.instance().onError();
        //     expect(details.state().loading).toBeFalsy();
        //     expect(details.state().error).toBeTruthy();
        // });
    });
});