import React from 'react';
import { shallow, mount } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Control from './Control'
configure({ adapter: new Adapter() });

describe('Renders Control component', () => {
    let container = mount(<Control />);

    it('should render a div in control', () => {
        expect(container.find('div').length).toEqual(1)
    });
    it('should render a section in control', () => {
        expect(container.find('section').length).toEqual(1)
    });

    it("should render instances of the TimerButton component", () => {
        expect(container.find("button").length).toEqual(3)
    })
    //For Start , Stop and Restart functions test
    it('Should Start timer ', () => {
        expect(container.find(".start-timer").simulate('click'));
    })
    it('Should Stop timer ', () => {
        expect(container.find(".stop-timer").simulate('click'));
    })
    // it('Should reset timer ', () => {
    //     expect(container.find(".reset-timer").simulate('click'));
    // })
})
