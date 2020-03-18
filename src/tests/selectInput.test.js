import SelectInput from '../components/SelectInput/SelectInput';
import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() });


const mockHandler = jest.fn();
const wrapper = shallow(
    <SelectInput 
        setInputs={mockHandler}
        {...{
        name: "state",
        label: "State",
        options: [
            { value: 'New South Wales', name: 'New South Wales' },
            { value: 'Victoria', name: 'Victoria' },
            { value: 'Queensland', name: 'Queensland' },
            { value: 'Western Australia', name: 'Western Australia' },
            { value: 'South Australia', name: 'South Australia' },
            { value: 'Tasmania', name: 'Tasmania' },
        ],
        placeholder: "New South Wales",
        alert: "",
        }
    }

/>)


describe('Testing <SelectInput/>', ()=>{
    test('snapshot testing',()=>{
    const tree =renderer
    .create(      <SelectInput 
        setInputs={mockHandler}
        {...{
        name: "state",
        label: "State",
        options: [
            { value: 'New South Wales', name: 'New South Wales' },
        ],
        placeholder: "New South Wales",
        alert: "error",
        }
    }
    />).toJSON();
        expect(tree).toMatchSnapshot();
    })

    test('label tag renders correct text',()=>{
        expect(wrapper.find('label').text()).toEqual('State');
    });
    test('select(input) tag renders correct prop',()=>{
        expect(wrapper.find('input').prop('placeholder')).toEqual('New South Wales');
        expect(wrapper.find('input').prop('name')).toEqual('state');
        expect(wrapper.find('input').prop('id')).toEqual('state');
        expect(wrapper.find('input').prop('value')).toEqual(undefined);
        });

    test('option(li) tag renders correct prop in the first one',()=>{
        expect(wrapper.find('li').at(0).text()).toEqual('New South Wales');
        expect(wrapper.find('li').at(0).key()).toEqual('New South Wales');
        expect(wrapper.find('li').at(0).prop('value')).toEqual('New South Wales');

    });

    test('should call mock changeHandler when select(input) changes',()=>{
        const select= wrapper.find('input');
        select.simulate('change');
        expect(mockHandler.mock.calls.length).toBe(1);
    });

});
