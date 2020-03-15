
const formModel = [
{
    name: 'firstName',
    type: 'Text',
    parseFun: '',
    validators: {
        id: 'name-length',
        alert: 'First name is invalid',
        regex:/^[a-zA-Z]+(([',.-][a-zA-Z])?[a-zA-Z]*)*$/,
    }
}, 
{
    name: 'lastName',
    label: 'Last Name',
    type: '',
    parseFun: '',
    validators: {
        id: 'name-length',
        alert: 'Last name is invalid',
        regex:/^[a-zA-Z]+(([',.-][a-zA-Z])?[a-zA-Z]*)*$/,
    }
}, 
{
    name: 'accountName',
    label: 'Account Name',
    type: 'Text',
    parseFun: '',
    validators: {
        id: 'account-name',
        alert: 'At least first name and last name',
        regex:/^[a-zA-Z]+(([',.-][a-zA-Z])?[a-zA-Z]*)*$/,
    }
}, 
{
    name: 'companyName',
    label: 'Company Name (optional)',
    type: 'Text',
    parseFun: '',
    validators: {
        id: 'name-length',
        alert: '',
        regex:/\s\S/,
    }
}, 
{
    name: 'phone',
    label: 'Phone',
    type: 'Text',
    validators: {
        id: 'mail-pattern',
        alert: 'Phone number is in valid in Australia',
        regex:/(^1300\d{6}$)|(^1800|1900|1902\d{6}$)|(^0[2|3|7|8]{1}[0-9]{8}$)|(^13\d{4}$)|(^04\d{2,3}\d{6}$)/,
    }, 
}, 
{
    name: 'fax',
    label: 'Fax (optional)',
    type: 'Text',
    parseFun: '',
    validators: {
        alert: '',
        regex:/\s\S/,
    }
}, 
{
    name: 'title',
    label: 'Title(',
    type: '',
    parseFun: '',
    validators: {
        alert: '',
        regex:/\s\S/,
    }
}, 
{
    name: 'email',
    label: 'Email',
    type: 'Text',
    parseFun: '',
    validators: {
        id: 'email-format',
        alert: 'Email format is invalid',
        regex:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    }
}, 
{
    name: 'emailOpt',
    label: 'Email Opt Out',
    type: 'checkbox',
    parseFun: '',
    validators: {
        id: 'name-length',
        alert: '',
        regex:/\s\S/,    }
}, 
{
    name: 'address',
    label: 'Street No. & Street',
    type: 'Text',
    parseFun: '',
    validators: {
        id: 'name-length',
        alert: 'Address cannot be empty',
        regex:/^(?!\s*$).+/,
    }
},  
{
    name: 'city',
    label: 'City',
    type: 'Text',
    validators: {
        id: 'education-required',
        alert: 'City cannot be empty',
        regex:/^(?!\s*$).+/,  
      }
},
{
    name: 'state',
    label: 'State',
    type: 'Select',
    validators: {
        id: 'sex-required',
        alert: 'State cannot be empty',
        regex:/^(?!\s*$).+/,      }
}, 
{
    name: 'postcode',
    label: 'Postcode',
    type: 'Text',
    validators: {
        id: 'sex-required',
        alert: 'Postcode should be digit number',
        regex:/^[1-9][0-9]{3}$/,
    }
}, 
{
    name: 'description',
    label: 'Description',
    type: 'TextArea',
    parseFun: '',
    validators: {
        id: 'description-required',
        alert: 'Description cannot be empty',
        regex:/^(?!\s*$).+/,  

    }
}, 

];

export default formModel;