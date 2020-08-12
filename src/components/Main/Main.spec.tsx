import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import Main from './Main';
import Control from '../Control/Control';
configure({ adapter: new Adapter() });

describe('Render Main component', () => {
    let container = mount(<Main />);

    //Test for Main component
    it('should render a div of Main', () => {
        expect(container.find('div').length).toBeGreaterThanOrEqual(1);
    });
    //Test section component
    it('should render a section of Main', () => {
        expect(container.find('section').length).toBeGreaterThanOrEqual(1);
    });
    it('should render a paragraph of Main', () => {
        expect(container.find('p').length).toBeGreaterThanOrEqual(1);
    });
    it('render a control component', () => {
        expect(container.containsMatchingElement(<Control />)).toEqual(true);
    })
});  