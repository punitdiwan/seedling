import React from "react";

const Footer = () => {
  return (
    <>
      <div class="main-footer">
        <div className="footer-top">
          <div className="footerlogo-img">
            <img src="./images/New_Seedling_Logo-8.png" alt="" />
          </div>
          <div className="footer-content">
            <p>Have any questions?</p>
            <p>
              Call Us:  7879055123, 0755-4058809, Mail Us:
              schoolseedlings@gmail.com
            </p>
            <p>
            Address - MIG 19, Housing Board Colony, Kohefiza, Bhopal, Madhya Pradesh 462001 
              110010
            </p>
          </div>
          <div className="socialmedia-link">
            <div className="socialall">
            <a href=" https://www.facebook.com/Theseedlingsbhopal/" target="_blank"> <div className="alllink-soc">
            <i class="ri-facebook-fill"></i>
            </div></a>
            <a href="https://www.linkedin.com/in/seedlings-school-bhopal/?originalSubdomain=in" target="_blank"> <div className="alllink-soc">
            <i class="ri-linkedin-fill"></i>
            </div></a>       
            <a href="https://www.instagram.com/seedlings_school_bhopal/?hl=en" target="_blank"> <div className="alllink-soc">
            <i class="ri-instagram-line"></i>
            </div></a>               
            
          </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © All Rights Reserved by, Seedlings School Bhopal
          </p>
        <p className="footer-made">Made with <i class=" ri-heart-3-fill"></i> by <a href="https://maitretech.com/"> Maitretech Solution</a></p>
        </div>
      </div>
    </>
  );
};

export default Footer;
