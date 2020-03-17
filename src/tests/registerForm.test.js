import SelectTextInput from '../components/RegisterForm';
import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
configure({ adapter: new Adapter() });


const wrapper = shallow(
    <SelectTextInput 
/>)

describe('Testing <RegisterForm/>', ()=>{
    test('div should render successfully',()=>{
        expect(wrapper.find('div').length).toBe(1);
    });

});