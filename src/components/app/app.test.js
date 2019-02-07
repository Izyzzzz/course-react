import React from 'react';
import App from './app';
import {shallow} from 'enzyme';

describe('Testing <App/>', () => {
    const app = shallow(<App/>);
    describe('Testing snap & state', () => {
        it('App have rendered correctly', () => {        
            expect(app).toMatchSnapshot();
        });
        it('App state "error" is false', () => {
            expect(app.state().error).toBeFalsy();
        });
        it('App state "isEdit" is false', () => {
            expect(app.state().isEdit).toBeFalsy();
        });
    });
    describe('Handlers tests', () => {
        it('testing componentDidCatch', () => {
            app.instance().componentDidCatch();
            expect(app.state().error).toBeTruthy();
        });
    });
});