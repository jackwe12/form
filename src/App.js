import React from 'react';
import './App.css';
import RegisterForm from './components/RegisterForm';

function App(){
  return(
    <div className="app">
      <RegisterForm/>
    </div>
    );
}
// function App() {
//   return (
//     <div>
//     <div></div>
//     <form>
//       <div>
//         <div>Create Contact</div>
//         <button>Cancel</button>
//         <button>Save</button>
//       </div>
//       <div>
//         <div>Contact Information</div>
//         <label>First Name</label>
//         <select placeholder="None" >
//           <option value="Mr"> Mr</option>
//           <option value="Mrs"> Mrs</option>
//           <option value="Miss"> Miss</option>
//           <option value="Dr"> Dr</option>
//         </select>
//         <input type="text"  placeholder="John" name="firstName required"/>
//         <label>Last Name</label>
//         <input type="text" placeholder="Smith" name="firstName required"/>
//         <label>Account Name</label>
//         <input type="text" placeholder="John's Joinery" name="firstName required"/>
//         <label>Company Name (optional)</label>
//         <input type="text" name="firstName required"/>
//         <label>Phone</label>
//         <input type="text" placeholder="02 123 456 78" name="firstName required"/>
//         <label>Fax (optional)</label>
//         <input type="text" placeholder="John's Joinery" name="firstName required"/>
//         <label>Title (optional)</label>
//         <input type="text" placeholder="Owner" name="firstName required"/>
//         <label>Email</label>
//         <input type="text" placeholder="sample@email.com" name="firstName required"/>
//         <label>Email Opt Out</label>
//         <input type="checkbox" name="firstName required"/>
//       </div>
//       <div>
//       <div>Address Information</div>
//         <label>Street No. & Street</label>
//         <input type="text" placeholder="1, Elizabeth Street" name="firstName required"/>
//         <label>City</label>
//         <input type="text" placeholder="Sydney" name="firstName required"/>
//         <label>State</label>
//         <select placeholder="New South Wales">
//         <option> New South Wales</option>
//         <option> Victoria</option>
//         <option> Queensland</option>
//         <option> Western Australia</option>
//         <option> South Australia</option>
//         <option> Tasmania</option>        
//         </select>
//         <label>Postcode</label>
//         <input type="text" name="firstName required"/>
//       </div>
//       <div>
//         <div>Description Information</div>
//         <label>Description </label>
//         <textarea type="" name="description required"></textarea>
//       </div>
//     </form>
//     <footer>
//       <div> 2020 Crunch Accounting. All right reserved.</div>
//       <div> Privacy Policy</div>
//       <div> Terms of Service</div>
//     </footer>
//     </div>

//   )
// }

export default App;
