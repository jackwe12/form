import React from 'react';
import ReactDOM from 'react-dom';
import './SaveModal.css';

const Modal = ({ isShowing, hide, inputs }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal-header">
          <button type="modal-button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-save">
            <span className="modal-save-title">Saved</span>
            <span className="modal-save-check">&#10003;</span>
            <p>The contact details have been saved</p>
        </div>
        <div className="modal-contact-info modal-flex-box">
            <div className="modal-title"> Contact Information</div>
            <div className="modal-box-sm">
                <span className="modal-label">First Name</span>
                <span className="modal-content">{inputs[0].value}</span>
            </div>
            <div className="modal-box-sm">
                <span className="modal-label"> Last Name</span>
                <span className="modal-content"> {inputs[1].value}</span>
            </div>
            <div className="modal-box-sm">
                <span className="modal-label"> Account Name</span>
                <span className="modal-content"> {inputs[2].value}</span>
            </div>
            <div className="modal-box-sm">
                <span className="modal-label"> Company Name</span>
                <span className="modal-content"> {inputs[3].value}</span>
            </div>
            <div className="modal-box-sm">
                <span className="modal-label"> Phone</span>
                <span className="modal-content"> {inputs[4].value}</span>
            </div>
            <div className="modal-box-sm">
                <span className="modal-label"> Fax</span>
                <span className="modal-content"> {inputs[5].value}</span>
            </div>
            <div className="modal-box-sm">
                <span className="modal-label"> Title</span>
                <span className="modal-content"> {inputs[6].value}</span>
            </div>
            <div className="modal-box-sm">
                <span className="modal-label"> Email</span>
                <span className="modal-content"> {inputs[7].value}</span>
            </div>
            <div className="modal-box-sm">
                <span className="modal-label"> Email Opt Out</span>
                <span className="modal-content"> {inputs[8].value?"Yes":"No"} </span>
            </div>

        </div>
        <div className="modal-address-info modal-flex-box">
            <div className="modal-title"> Address Information</div>
           <div className="modal-box-sm">
                <span className="modal-label"> Street No. & Street</span>
                <span className="modal-content"> {inputs[9].value}</span>
            </div>
            <div className="modal-box-sm">
                <span className="modal-label"> City</span>
                <span className="modal-content"> {inputs[10].value}</span>
            </div>
            <div className="modal-box-sm">
                <span className="modal-label"> State</span>
                <span className="modal-content"> {inputs[11].value}</span>
            </div>
            <div className="modal-box-sm">
                <span className="modal-label"> Postcode</span>
                <span className="modal-content"> {inputs[12].value}</span>
            </div>
        </div>
        <div className="modal-description-info modeal-flex-box">
             <div className="modal-title"> Description Information</div>
             <div className="modal-box-sm">
                <span className="modal-label"> Description</span>
                <span className="modal-content"> {inputs[13].value}</span>
            </div>
        </div>


      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default Modal;