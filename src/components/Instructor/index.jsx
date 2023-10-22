import './style.css';
import course1 from '../../assets/images/carouselimage/course1.png';
import mdp from '../../assets/images/carouselimage/mdp.jpg';
import Joy from '../../assets/images/carouselimage/Joy.png';

const Instructor = () => {
  return (
    <div>
      <div class="container">
        <div class="text-center">
          <h2 class="section-heading text-uppercase">Our Amazing Team</h2>
          <h3 class="section-subheading text-muted">
            Lorem ipsum dolor sit amet consectetur.
          </h3>
        </div>
        <div class="row">
          <div class="col-lg-3">
            <div class="team-member text-center">
              <img
                class="mx-auto rounded-circle img-fluid"
                src={mdp}
                alt="..."
              />
              <div className="teaminfo">

                <h4>Mark Dennis Pague</h4>
                <p class="text-muted">Lead Designer</p>
                <div className="social-media">
                  <a
                    class="btn btn-dark btn-social mx-2"
                    href="#!"
                    aria-label="Mark Twitter Profile"
                  >
                    <i class="bx bxl-twitter"></i>
                  </a>
                  <a
                    class="btn btn-dark btn-social mx-2"
                    href="#!"
                    aria-label="Mark Facebook Profile"
                  >
                    <i class="bx bxl-facebook-circle"></i>
                  </a>
                  <a
                    class="btn btn-dark btn-social mx-2"
                    href="#!"
                    aria-label="Mark Gmail Profile"
                  >
                    <i class="bx bxl-gmail"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="team-member text-center">
              <img
                class="mx-auto rounded-circle img-fluid"
                src={Joy}
                alt="..."
              />
              <div className="teaminfo">

                <h4>Mary Joy Avila</h4>
                <p class="text-muted">Lead Designer</p>
                <div className="social-media">
                  <a
                    class="btn btn-dark btn-social mx-2"
                    href="#!"
                    aria-label="Mary Joy Twitter Profile"
                  >
                    <i class="bx bxl-twitter"></i>
                  </a>
                  <a
                    class="btn btn-dark btn-social mx-2"
                    href="#!"
                    aria-label="Mary Joy Facebook Profile"
                  >
                    <i class="bx bxl-facebook-circle"></i>
                  </a>
                  <a
                    class="btn btn-dark btn-social mx-2"
                    href="#!"
                    aria-label="Mary Joy Gmail Profile"
                  >
                    <i class="bx bxl-gmail"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="team-member text-center">
              <img
                class="mx-auto rounded-circle img-fluid"
                src={course1}
                alt="..."
              />
              <div className="teaminfo">

                <h4>Shaira Almoceda</h4>
                <p class="text-muted">Lead Designer</p>
                <div className="social-media">
                  <a
                    class="btn btn-dark btn-social mx-2"
                    href="#!"
                    aria-label="Shaira Profile"
                  >
                    <i class="bx bxl-twitter"></i>
                  </a>
                  <a
                    class="btn btn-dark btn-social mx-2"
                    href="#!"
                    aria-label="Shaira Facebook Profile"
                  >
                    <i class="bx bxl-facebook-circle"></i>
                  </a>
                  <a
                    class="btn btn-dark btn-social mx-2"
                    href="#!"
                    aria-label="Shaira Gmail Profile"
                  >
                    <i class="bx bxl-gmail"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="team-member text-center">
              <img
                class="mx-auto rounded-circle img-fluid"
                src={course1}
                alt="..."
              />
              <div className="teaminfo">

                <h4>Josue Vullag Carandang</h4>
                <p class="text-muted">Lead Designer</p>
                <div className="social-media">
                  <a
                    class="btn btn-dark btn-social mx-2"
                    href="#!"
                    aria-label="Josue Twitter Profile"
                  >
                    <i class="bx bxl-twitter"></i>
                  </a>
                  <a
                    class="btn btn-dark btn-social mx-2"
                    href="#!"
                    aria-label="Josue Facebook Profile"
                  >
                    <i class="bx bxl-facebook-circle"></i>
                  </a>
                  <a
                    class="btn btn-dark btn-social mx-2"
                    href="#!"
                    aria-label="Josue Gmail Profile"
                  >
                    <i class="bx bxl-gmail"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-8 mx-auto text-center">
            <p class="large text-muted">
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
