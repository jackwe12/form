import TextInput from '../components/TextInput/TextInput';
import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
configure({ adapter: new Adapter() });


const mockHandler = jest.fn();
const wrapper = shallow(
    <TextInput 
        setInputs={mockHandler}
        {...{
        name: "lastName",
        label: "Last Name",
        type: "Text",
        placeholder: "Smith",
        alert: "",
        }
    }

/>)
const wrapper2 = shallow(
    <TextInput 
        setInputs={mockHandler}
        {...{
        name: "lastName",
        label: "Last Name",
        placeholder: "Smith",
        alert: "Error",
        }
    }

/>)
// const findByTestAttr = (wrapper, val) =>{
//     return wrapper.find(`[data-test="${val}]`);
// }

describe('Testing <TextInput/>', ()=>{
    test('label tag renders correct text',()=>{
        // expect(wrapper).find('label').hasClass('lastName').toBe(true);
        expect(wrapper.find('label').text()).toEqual('Last Name');
    });
    test('input tag render correctly prop',()=>{
        expect(wrapper.find('input').prop('name')).toEqual('lastName');
        expect(wrapper.find('input').prop('id')).toEqual('lastName');
        expect(wrapper.find('input').prop('placeholder')).toEqual('Smith');

    });
    test('should call mock changeHandler when input changes',()=>{
        const input = wrapper.find('input');
        input.simulate('change');
        expect(mockHandler.mock.calls.length).toBe(1);
    });
    test('when alert is empty, no uk-form-danger class name',()=>{
        expect(wrapper.find('input').hasClass("uk-form-danger")).toBe(false);       
    });
    test('when alert exists, uk-form-danger class name exists',()=>{
        expect(wrapper2.find('input').hasClass("uk-form-danger")).toBe(true);       

    });
});
