import SelectTextInput from '../components/SelectTextInput/SelectTextInput';
import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() });


const mockHandler = jest.fn();
const mockSetSelectColor = jest.fn();
const wrapper = shallow(
    <SelectTextInput 
        setInputs={mockHandler}
        setSelectColor={mockSetSelectColor}
        {...{
        name: "firstName",
        label: "First Name",
        options: [
            { value:'-None', name:'-None', disabled:true, selected:true},
            { value: 'Mr', name: 'Mr' },
            { value: 'Mrs', name: 'Mrs' },
            { value: 'Miss', name: 'Miss' },
            { value: 'Dr', name: 'Dr' }
        ],
        placeholder: "John",
        alert: "",
        }
    }

/>)
const wrapper2 = shallow(
    <SelectTextInput 
        setInputs={mockHandler}
        setSelectColor={mockSetSelectColor}
        {...{
        name: "firstName",
        label: "First Name",
        options: [
            { value:'-None', name:'-None', disabled:true},
            { value: 'Mr', name: 'Mr' },
        ],
        placeholder: "John",
        alert: "error",
        }
    }

/>)

describe('Testing <SelectTextInput/>', ()=>{
    test('snapshot testing',()=>{
        const tree =renderer
            .create(    <SelectTextInput 
                setInputs={mockHandler}
                setSelectColor={mockSetSelectColor}
                {...{
                name: "firstName",
                label: "First Name",
                options: [
                    { value:'-None', name:'-None', disabled:true},
                    { value: 'Mr', name: 'Mr' },
                ],
                placeholder: "John",
                alert: "error",
                }
            }
        />)
            .toJSON();
            expect(tree).toMatchSnapshot();
    })
    
    test('label tag renders correct text',()=>{
        expect(wrapper.find('label').text()).toEqual('First Name');
    });
    test('select tag renders correct prop',()=>{
        expect(wrapper.find('select').prop('defaultValue')).toEqual('-None');
        expect(wrapper.find('select').prop('name')).toEqual('firstName');
    });
    test('option tag renders correct prop, value and disabled in the first one',()=>{
        expect(wrapper.find('option').at(0).text()).toEqual('-None');
        expect(wrapper.find('option').at(0).key()).toEqual('-None');
        expect(wrapper.find('option').at(0).prop('value')).toEqual('-None');
        expect(wrapper.find('option').at(0).prop('disabled')).toEqual(true);


    });
    test('input tag renders correct prop',()=>{
        expect(wrapper.find('input').prop('name')).toEqual('firstName');
        expect(wrapper.find('input').prop('id')).toEqual('firstName');
        expect(wrapper.find('input').prop('placeholder')).toEqual('John');
        expect(wrapper.find('input').prop('value')).toEqual(undefined);

    });
    test('should call mock changeHandler when input changes',()=>{
        const input = wrapper.find('input');
        input.simulate('change');
        expect(mockHandler.mock.calls.length).toBe(1);
    });
    test('should call mock changeHandler when select changes',()=>{
        const select = wrapper.find('select');
        select.simulate('change');
        expect(mockSetSelectColor).toHaveBeenCalled();
    });
    test('when alert is empty, no uk-form-danger class name',()=>{
        expect(wrapper.find('input').hasClass("uk-form-danger")).toBe(false);       
    });
    test('when alert exists, uk-form-danger class name exists',()=>{
        expect(wrapper2.find('input').hasClass("uk-form-danger")).toBe(true);       

    });
});
