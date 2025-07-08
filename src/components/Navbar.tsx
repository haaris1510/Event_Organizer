import { FaPhoneAlt, FaRegUser, FaAngleDown } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import "../css/navbar.scss";
import { RiCustomerService2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="nav-box">
        <div className="up-navbox">
          <div className="left-up">
            <div className="email">
              <MdEmail />
              123456@mail.com
            </div>
            <div className="number1">
              <FaPhoneAlt />
              987654321
            </div>
          </div>

          <div className="right-up">
            <div className="city1">City: Jaipur</div>
            <RiCustomerService2Line />

            <FaRegUser />
          </div>
        </div>

        <div className="down-navbox">
          <div className="left-down">
            <Link to="/"> <img src="/logo.jpg" alt="logo" className="logo" /></Link>
            <Link to="/"> <h3>QOUZY</h3> </Link>
            <input
              type="text"
              placeholder="What are you celebrating"
              className="search12"
            />{" "}
            <IoIosSearch />
          </div>
          <div className="lists">
            <div className="dropdown">
              <a href="">
                {" "}
                Anniversary <FaAngleDown />
              </a>
              <div className="dropdown-content">
                <a href="">item1 </a>
                <a href="">Item2</a>
                <a href="">Item3</a>
                <a href="">Item4</a>
              </div>
            </div>

            <div className="dropdown">
              <a href="">
                {" "}
                Birthday <FaAngleDown />
              </a>
              <div className="dropdown-content">
                <a href="">item1 </a>
                <a href="">Item2</a>
                <a href="">Item3</a>
                <a href="">Item4</a>
              </div>
            </div>
            <div className="dropdown">
              <a href="">
                {" "}
                Gifts <FaAngleDown />
              </a>
              <div className="dropdown-content">
                <a href="">item1 </a>
                <a href="">Item2</a>
                <a href="">Item3</a>
                <a href="">Item4</a>
              </div>
            </div>

            <div className="dropdown">
              <a href="">
                {" "}
                Candlelight Dinner <FaAngleDown />
              </a>
              <div className="dropdown-content">
                <a href="">item1 </a>
                <a href="">Item2</a>
                <a href="">Item3</a>
                <a href="">Item4</a>
              </div>
            </div>

            <div className="dropdown">
              <a href="">
                {" "}
                Decorations <FaAngleDown />
              </a>
              <div className="dropdown-content">
                <a href="">item1 </a>
                <a href="">Item2</a>
                <a href="">Item3</a>
                <a href="">Item4</a>
              </div>
            </div>

            <div className="dropdown">
              <a href="">
                {" "}
                Festivels <FaAngleDown />
              </a>
              <div className="dropdown-content">
                <a href="">item1 </a>
                <a href="">Item2</a>
                <a href="">Item3</a>
                <a href="">Item4</a>
              </div>
            </div>

            <div className="dropdown">
              <a href="">
                {" "}
                Kid's Celebration <FaAngleDown />
              </a>
              <div className="dropdown-content">
                <a href="">item1 </a>
                <a href="">Item2</a>
                <a href="">Item3</a>
                <a href="">Item4</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-slider">
        <div className="text-slider11">
          For Any Queries and Booking Related Inquiries WhatsApp us on
          8287370051 ! Calling Hours Mon-Sat: 10:00am to 6:00pm - 8287370051 |
          For Corporate Orders mail us on
        </div>
      </div>
    </>
  );
}

export default Navbar;
