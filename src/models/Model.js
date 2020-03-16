
const formModel = [
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
    alert:'' 
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
    alert:''
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
    alert:''
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

export default formModel;