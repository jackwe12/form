import TextAreaInput from '../components/TextAreaInput/TextAreaInput';
import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() });


const mockHandler = jest.fn();
const wrapper = shallow(
    <TextAreaInput 
        setInputs={mockHandler}
        {...{
        name: "description",
        label: "Description",
        alert: "",
        }
    }

/>)
const wrapper2 = shallow(
    <TextAreaInput 
        setInputs={mockHandler}
        {...{
        name: "description",
        label: "Description",
        alert: "error",
        }
    }

/>)

describe('Testing <TextAreaInput/>', ()=>{
    test('snapshot testing',()=>{
        const tree =renderer
        .create(      <TextAreaInput 
            setInputs={mockHandler}
            {...{
            name: "description",
            label: "Description",
            alert: "error",
            }
        }
    
    />).toJSON();
            expect(tree).toMatchSnapshot();
        })
    test('label tag renders correct text',()=>{
        expect(wrapper.find('label').text()).toEqual('Description');
    });

    test('textarea tag renders correct prop',()=>{
        expect(wrapper.find('textarea').prop('name')).toEqual('description');
        expect(wrapper.find('textarea').prop('id')).toEqual('description');
        expect(wrapper.find('textarea').prop('value')).toEqual(undefined);

    });
    test('should call mock changeHandler when textarea changes',()=>{
        const textarea = wrapper.find('textarea');
        textarea.simulate('change');
        expect(mockHandler.mock.calls.length).toBe(1);
    });
    test('when alert is empty, no uk-form-danger class name',()=>{
        expect(wrapper.find('textarea').hasClass("uk-form-danger")).toBe(false);       
    });
    test('when alert exists, uk-form-danger class name exists',()=>{
        expect(wrapper2.find('textarea').hasClass("uk-form-danger")).toBe(true);       

    });
});
