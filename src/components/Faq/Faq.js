import React from 'react';
import { NavLink } from 'react-router-dom';
import './Faq.css';

const Faq = () => {
    return (
        <div>
        {/* FAQ Section  */}
        <div className="page-title mt-5">
                <h1>FAQ</h1>
            </div>
            <div className="bread-crumps">
                <NavLink to="/home" className="bc">Home/About-Us</NavLink>
            </div>

    <div className="container p-5">
  <div className="accordion" id="accordionExample">
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          Can I freeze my membership?
        </button>
      </h2>
      <div
        id="collapseOne"
        className="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
         <p>You can freeze your membership in the Member Area for just £5 per month. Please note, if you freeze within 4 working days before your monthly payments is due, we may not be able to stop the direct debit.</p>
        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingTwo">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
         Are you still open 24/7?
        </button>
      </h2>
      <div
        id="collapseTwo"
        className="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
         <p>The majority of our gyms are now 24/7 once more! That means any time noon or night, you can find your fit. </p>
        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingThree">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree"
        >
         What do I do if I feel unwell?
        </button>
      </h2>
      <div
        id="collapseThree"
        className="accordion-collapse collapse"
        aria-labelledby="headingThree"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
        <p>If you are unwell, symptomatic or have tested positive for coronavirus, do not attend the gym and follow government regulation on isolating for the minimum period of time, and only return after this minimum period if you are feeling well again.</p>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
    );
};

export default Faq;