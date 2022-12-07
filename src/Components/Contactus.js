import React from "react";

const Contactus = () => {
  return (
    <>
      <div className="container-fluid p-4">
        <div className="container-fluid d-flex latest_card_box_ad p-0">
          <div className="contactleft map text-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14661.305010421494!2d77.3764649!3d23.2675922!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c67e230af915f%3A0x90698f7b2192717e!2sSeedlings%20School%20Bhopal!5e0!3m2!1sen!2sin!4v1669710204449!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: "0" }}
              allowfullscreen=""
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="contactright text-left">
            <div className="titlecontact">
              <h4 className="ssss">School</h4>
              <hr />
              <p className="linkwrap">
                <b className="bbb">Phone:</b>{" "}
                <a className="linkwrap mnc" href="tel:+91 7879055123">
                 +91 7879055123
                </a>{" "}
                
              </p>
              <p className="linkwrap">
                <b className="bbb">Phone:</b>{" "}
                <a className="linkwrap mnc" href="tel: 0755-4058809">
                   0755-4058809
                </a>{" "}
              </p>
              <p className="linkwrap">
                <b className="bbb">Email:</b>{" "}
                <a
                  className="linkwrap mnc"
                  href="mailto: schoolseedlings@gmail.com "
                >
                  schoolseedlings@gmail.com 
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactus;
