import FormPanel from '../components/FormPanel';
import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import formModel from '../models/Model';

configure({ adapter: new Adapter() });

const completedModel = [
    {
        name: 'firstName',
        type: 'Text',
        validators: {
            alert: '',
            regex:/^[a-zA-Z]+(([',.-][a-zA-Z])?[a-zA-Z]*)*$/,
        },
        alert:'',
    }, 
    {
        name: 'lastName',
        type: '',
        validators: {
            alert: '',
            regex:/^[a-zA-Z]+(([',.-][a-zA-Z])?[a-zA-Z]*)*$/,
        },
        alert:'',
    
    }, 
    {
        name: 'accountName',
        label: 'Account Name',
        type: 'Text',
        validators: {
            alert: '',
            regex:/^[a-zA-Z]+(([',.-][a-zA-Z])?[a-zA-Z]*)*$/,
        },
        alert:'',
        value:'',
    
    }, 
    {
        name: 'companyName',
        label: 'Company Name (optional)',
        type: 'Text',
        validators: {
            alert: '',
            regex:/\s\S/,
        },
        alert:''
    }, 
    {
        name: 'phone',
        label: 'Phone',
        type: 'Text',
        validators: {
            alert: 'Phone number is invalid',
            regex:/(^1300\d{6}$)|(^1800|1900|1902\d{6}$)|(^0[2|3|7|8]{1}[0-9]{8}$)|(^13\d{4}$)|(^04\d{2,3}\d{6}$)/,
        },
        alert:'',
        validate:true 
    }, 
    {
        name: 'fax',
        label: 'Fax (optional)',
        type: 'Text',
        validators: {
            alert: '',
            regex:/\s\S/,
        },
        alert:''
    }, 
    {
        name: 'title',
        label: 'Title(',
        type: '',
        validators: {
            alert: '',
            regex:/\s\S/,
        },
        alert:''
    }, 
    {
        name: 'email',
        label: 'Email',
        type: 'Text',
        validators: {
            alert: 'Email format is invalid',
            regex:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        },
        alert:'',
        validate:true 
    }, 
    {
        name: 'emailOpt',
        label: 'Email Opt Out',
        type: 'checkbox',
        validators: {
            alert: '',
            regex:/\s\S/,    }
    }, 
    {
        name: 'address',
        label: 'Street No. & Street',
        type: 'Text',
        validators: {
            alert: 'Address cannot be empty',
            regex:/^(?!\s*$).+/,
        },
        alert:''

    },  
    {
        name: 'city',
        label: 'City',
        type: 'Text',
        validators: {
            alert: 'City cannot be empty',
            regex:/^(?!\s*$).+/,  
          },
          alert:''
    },
    {
        name: 'state',
        label: 'State',
        type: 'Select',
        validators: {
            alert: '',
            regex:/^(?!\s*$).+/,
        },
        alert:''
    }, 
    {
        name: 'postcode',
        label: 'Postcode',
        type: 'Text',
        validators: {
            alert: 'Postcode should be 4 digit number',
            regex:/^[1-9][0-9]{3}$/,
        },
        alert:'',
        validate:true 

    }, 
    {
        name: 'description',
        label: 'Description',
        type: 'TextArea',
        validators: {
            alert: '',
            regex:/\s\S/,  
    
        },
        alert:''
    }, 
    
    ];

const wrapper = shallow(
    <FormPanel
        model={formModel}

/>)
const wrapper2 = shallow(
    <FormPanel
        model={completedModel}

/>)

describe('Testing <FormPanel/>', ()=>{
    test('head-log div should render successfully',()=>{
        expect(wrapper.find('.head-logo').length).toBe(1);
    });
    test('cancel btn should exist after rendered',()=>{
        expect(wrapper.find('.cancel-btn').length).toBe(1);
    });
    test('save btn should exist but disabled before verified',()=>{
        expect(wrapper.find('.save-btn').length).toBe(1);
        expect(wrapper.find('.save-btn').prop("disabled")).toEqual(true);
    });


});