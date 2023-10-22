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
      <img className='photo1' src={course3} alt="" />
      <div className="row gx-0 mb-4 mb-lg-5 align-items-center">
        <div className="col-xl-8 col-lg-7">
          <img className="img-fluid mb-3 mb-lg-0"src={featured1} alt="..." />
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
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Header;
