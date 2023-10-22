import './style.css';
import course1 from '../../assets/images/carouselimage/course1.png';
import mdp from '../../assets/images/carouselimage/mdp.jpg';
import Joy from '../../assets/images/carouselimage/Joy.png';

const Instructor = () => {
  return (
    <div>
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
          <h3 className="section-subheading text-muted">
            Lorem ipsum dolor sit amet consectetur.
          </h3>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <div className="team-member text-center">
              <img
                className="mx-auto rounded-circle img-fluid"
                src={mdp}
                alt="..."
              />
              <div className="teaminfo">

                <h4>Mark Dennis Pague</h4>
                <p className="text-muted">Lead Designer</p>
                <div className="social-media">
                  <a
                    className="btn btn-dark btn-social mx-2"
                    href="#!"
                    aria-label="Mark Twitter Profile"
                  >
                    <i className="bx bxl-twitter"></i>
                  </a>
                  <a
                    className="btn btn-dark btn-social mx-2"
                    href="#!"
                    aria-label="Mark Facebook Profile"
                  >
                    <i className="bx bxl-facebook-circle"></i>
                  </a>
                  <a
                    className="btn btn-dark btn-social mx-2"
                    href="#!"
                    aria-label="Mark Gmail Profile"
                  >
                    <i className="bx bxl-gmail"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="team-member text-center">
              <img
                className="mx-auto rounded-circle img-fluid"
                src={Joy}
                alt="..."
              />
              <div className="teaminfo">

                <h4>Mary Joy Avila</h4>
                <p className="text-muted">Lead Designer</p>
                <div className="social-media">
                  <a
                    className="btn btn-dark btn-social mx-2"
                    href="#!"
                    aria-label="Mary Joy Twitter Profile"
                  >
                    <i className="bx bxl-twitter"></i>
                  </a>
                  <a
                    className="btn btn-dark btn-social mx-2"
                    href="#!"
                    aria-label="Mary Joy Facebook Profile"
                  >
                    <i className="bx bxl-facebook-circle"></i>
                  </a>
                  <a
                    className="btn btn-dark btn-social mx-2"
                    href="#!"
                    aria-label="Mary Joy Gmail Profile"
                  >
                    <i className="bx bxl-gmail"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="team-member text-center">
              <img
                className="mx-auto rounded-circle img-fluid"
                src={course1}
                alt="..."
              />
              <div className="teaminfo">

                <h4>Shaira Almoceda</h4>
                <p className="text-muted">Lead Designer</p>
                <div className="social-media">
                  <a
                    className="btn btn-dark btn-social mx-2"
                    href="#!"
                    aria-label="Shaira Profile"
                  >
                    <i className="bx bxl-twitter"></i>
                  </a>
                  <a
                    className="btn btn-dark btn-social mx-2"
                    href="#!"
                    aria-label="Shaira Facebook Profile"
                  >
                    <i className="bx bxl-facebook-circle"></i>
                  </a>
                  <a
                    className="btn btn-dark btn-social mx-2"
                    href="#!"
                    aria-label="Shaira Gmail Profile"
                  >
                    <i className="bx bxl-gmail"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="team-member text-center">
              <img
                className="mx-auto rounded-circle img-fluid"
                src={course1}
                alt="..."
              />
              <div className="teaminfo">

                <h4>Josue Vullag Carandang</h4>
                <p className="text-muted">Lead Designer</p>
                <div className="social-media">
                  <a
                    className="btn btn-dark btn-social mx-2"
                    href="#!"
                    aria-label="Josue Twitter Profile"
                  >
                    <i className="bx bxl-twitter"></i>
                  </a>
                  <a
                    className="btn btn-dark btn-social mx-2"
                    href="#!"
                    aria-label="Josue Facebook Profile"
                  >
                    <i className="bx bxl-facebook-circle"></i>
                  </a>
                  <a
                    className="btn btn-dark btn-social mx-2"
                    href="#!"
                    aria-label="Josue Gmail Profile"
                  >
                    <i className="bx bxl-gmail"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <p className="large text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
              eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam
              corporis ea, alias ut unde.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
