import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

import "../../css/contactpage.scss";
import Wrapper from "../../wrapper/Wrapper";

function ContactPage() {
  return (
    <>
      <Wrapper>
        <div className="backg">
          {" "}
          <div className="main-cont container">
            <div className="contact-section">
              <div className="contact-info">
                <h1>Get In Touch!</h1>
                <p>
                  It is very important to us to keep in touch with you, so we are
                  always ready to answer any question that interests you. Shoot!
                </p>
                <div className="illustration flex">
                  <img src="/contactus.svg"></img>
                </div>
                <div className="socials">
                  <h3>Socials :</h3>
                  <div className="social-icons">
                    <a href="#" className="facebook11">
                      <div className="facebook22">
                        <FaFacebookF />
                      </div>
                    </a>
                    <a href="#" className="twitter11">
                      <div className="twitter22">
                        <FaXTwitter />
                      </div>
                    </a>
                    <a href="#" className="instagram11">
                      <div className="instagram22">
                        <FaInstagram />
                      </div>
                    </a>
                    <a href="#" className="linkedin11">
                      <div className="linkedin22">
                        <FaLinkedinIn />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-cont">
              <div className="arrow-img">
                {" "}
                <img src="arrow.svg" alt="" className="arrow" />
              </div>{" "}
              <div className="contact-form">
                <h2>Send us a message</h2>
                <div className="form-header-decor"></div>{" "}
                <form>
                  <div className="form-group">
                    <label htmlFor="name">
                      Name <span>*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter Name"
                      required
                    ></input>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">
                      Email <span></span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter email"
                      required
                    ></input>
                  </div>
                  <div className="form-group">
                    <label htmlFor="number">
                      Number <span></span>
                    </label>
                    <input
                      type="tel"
                      id="number"
                      placeholder="Enter number"
                      required
                    ></input>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">
                      Message <span></span>
                    </label>
                    <textarea
                      id="message"
                      placeholder="Enter your message"
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="send-message-btn">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="cont-number">
            <div className="email32">
              <h4>email:</h4>
              <div className="mail">
                <MdOutlineEmail /> info@ballondekor.com
              </div>
            </div>
            <div className="email32">
              <h4>Phone:</h4>
              <div className="mail">
                <FaPhoneAlt />
                987654321
              </div>
            </div>
            <div className="email32">
              <h4>Address:</h4>
              <div className="mail">
                <IoLocationOutline />
                EC 91 Saltlake Sector 1 Kolkata 700064
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default ContactPage;
