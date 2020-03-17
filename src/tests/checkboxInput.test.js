import CheckboxInput from '../components/CheckboxInput/CheckboxInput';
import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
configure({ adapter: new Adapter() });


const mockHandler = jest.fn();
const wrapper = shallow(
    <CheckboxInput 
        setInputs={mockHandler}
        {...{
        name: "emailOpt",
        label: "Email Opt Out",
        type: "checkbox",
        alert: "",
        }
    }

/>)
const wrapper2 = shallow(
    <CheckboxInput 
        setInputs={mockHandler}
        {...{
        name: "emailOpt",
        label: "Email Opt Out",
        type: "checkbox",
        alert: "error",
        }
    }

/>)

describe('Testing <CheckboxInput/>', ()=>{
    test('label tag renders correct text',()=>{
        expect(wrapper.find('label').text()).toEqual('Email Opt Out');
    });

    test('input tag renders correct prop',()=>{
        expect(wrapper.find('input').prop('name')).toEqual('emailOpt');
        expect(wrapper.find('input').prop('id')).toEqual('emailOpt');
        expect(wrapper.find('input').prop('value')).toEqual(false);

    });
    test('should call mock changeHandler when textarea changes',()=>{
        const input = wrapper.find('input');
        input.simulate('change');
        expect(mockHandler.mock.calls.length).toBe(1);
    });
});
