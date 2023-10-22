import './style.css';
import featured1 from '../../assets/images/carouselimage/featured1.png';
import featured2 from '../../assets/images/carouselimage/featured2.jpg';
import featured3 from '../../assets/images/carouselimage/featured3.jpg';
const Section = () => {
  return (
    <div class="container text-center">
      <h4>Featured Courses & Services</h4>

      <div class="row align-items-start">
        <div class="col-12 col-lg-4 p-4">
          <img src={featured1} alt="" />
          <h2>
            <a href="">Theoretical Driving Course (TDC)</a>
          </h2>
          <p>
            Aspiring drivers are now required to attend 15-hour Theoretical
            Driving Course before applying for student permits.
          </p>
          <p>Starts at Php 1,000</p>
        </div>
        <div class="col-12 col-lg-4 p-4">
          <img src={featured2} alt="" />
          <h2>
            <a href="">Practical Driving Course (PDC)</a>
          </h2>
          <p>
            Drive any of our 170+ latest training vehicles at scheduled time
            slots.
          </p>
          <p>Starts at Php 4,000</p>
        </div>
        <div class="col-12 col-lg-4 p-4">
          <img src={featured3} alt="" />
          <h2>
            <a href="">Motorcycle Riding Course (MRC)</a>
          </h2>
          <p>Future riders can now learn how to navigate the roads safely.</p>
          <p>Starts at Php 2,500</p>
        </div>
      </div>

      <button type="submit">Browse All Courses</button>
    </div>
  );
};

export default Section;
