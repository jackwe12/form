import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import ValidationError from '../components/ValidationError/ValidationError';
import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() });

const wrapper = shallow(
    <ValidationError
        content="error"
/>)
const wrapper2 = shallow(
    <ValidationError
        content=""
/>)

describe('Testing <ValidationError/>', ()=>{
    test('snapshot testing',()=>{
        const tree =renderer
        .create(       <ValidationError
            content=""
    />).toJSON();
            expect(tree).toMatchSnapshot();
        })
    test('image tag should exist when alert',()=>{
        expect(wrapper.find('img').length).toBe(1);
        
    });
    test('image tag should not exist when no alert',()=>{
        expect(wrapper2.find('img').length).toBe(0);
    });
    test('warning should not exists when image is not clicked',()=>{
        const image = wrapper.find('img');
        expect(image.length).toBe(1);
        const div = wrapper.find('div');
        expect(div.text()).toEqual("");
    });
    test('warning should exists when image is clicked',()=>{
        const image = wrapper.find('img');
        expect(image.length).toBe(1);
        image.simulate('click');
        const div = wrapper.find('div');
        expect(div.text()).toEqual("error");
    });


});
