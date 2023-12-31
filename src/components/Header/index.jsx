import '../Header/style.css';
import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import course3 from '../../assets/images/carouselimage/course3.jpg';
import featured1 from '../../assets/images/carouselimage/featured1.png';

const Header = () => {
  return (
    <>
      <Navbar />
      <img className="photo1" src={course3} alt="" />
      <div className="row gx-0 mb-4 mb-lg-5 align-items-center">
        <p className="text">
          Choosing to take a driving course is a wise investment in your safety,
          legal compliance, and overall driving competence. It's a responsible
          step towards becoming a proficient and responsible driver.
        </p>

        <div className="col-xl-8 col-lg-7">
          <img className="img-fluid mb-3 mb-lg-0" src={featured1} alt="..." />
        </div>
        <div className="col-xl-4 col-lg-5">
          <div className="featured-text text-center text-lg-left">
            <h4>Theoretical Driving Course (TDC)</h4>
            <p className="text-black-50">
              We are currently working on our online slot reservation. For now,
              reservation of slots will be coordinated after the processing of
              enrollment is complete. We recommend you continue with the
              enrollment only if your time is flexible. For interested students
              with a preferred schedule, kindly coordinate directly to an A-1
              branch near you or our Customer Service Team first. The
              Theoretical Driving Course (TDC) is a 15-hr classroom module for 2
              days. This is a mandatory course for Student Permit applicants.
              Students are required to pass the Final Written Exam after course
              completion. If passed, A-1 electronically transmits to LTO-IT
              System and issues TDC Certification of Completion.
            </p>

            <div className='container4'>
              <label className="myDropdown1" for="myDropdown">
                <strong>Classroom Branch</strong>:
              </label>
              <div className="dropdown-container">
                <div className="dropdown">
                  <select id="myDropdown">
                    <option value="" disabled selected className="placeholder">
                      Select an option
                    </option>
                    <option value="option1">Batangas City</option>
                    <option value="option2">Laguna City</option>
                    <option value="option3">Alabang Town Center</option>
                  </select>
                </div>
              </div>
              <label className="myDropdown1" for="myDropdown">
                <strong>Time</strong>:
              </label>
              <div className="dropdown-container">
                <div className="dropdown">
                  <select id="myDropdown">
                    <option value="" disabled selected className="placeholder">
                      Select an option
                    </option>
                    <option value="option1">7:00am - 12:00pm </option>
                    <option value="option2">12:00pm - 5:00pm</option>
                  </select>
                </div>
              </div>
              <label className="myDropdown1" for="myDropdown">
                <strong>Date</strong>:
              </label>
              <div className="dropdown-container">
                <div className="dropdown">
                  <select id="myDropdown">
                    <option value="" disabled selected className="placeholder">
                      Select an option
                    </option>
                    <option value="option1">October 1, 2023 onwards</option>
                    <option value="option2">November 1, 2023 onwards</option>
                  </select>
                </div>
              </div>
              <button id="btn1" type="submit">
                ENROLL NOW
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Header;
