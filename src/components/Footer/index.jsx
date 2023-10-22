import './style.css';

const Footer = () => {
  return (
    <>
        <footer>
      <div class="footer-content">
          <div class="contact-info">
              <h3>Contact Information</h3>
                <p>Email: info@luxeloomliving.com</p>
                <p>Phone: +1 (123) 456-7890</p>
          </div>
          <div class="social-media">
              <h3>Social Media</h3>
                <ul>
                    <li><a href="#"><i class='bx bxl-facebook-circle'></i></a></li>
                    <li><a href="#"><i class='bx bxl-twitter' ></i></a></li>
                    <li><a href="#"><i class='bx bxl-gmail' ></i></a></li>
                </ul>
          </div>
          <div class="links">
              <h3>Quick Links</h3>
                <ul>
                    <li><a href="">Privacy Policy</a></li>
                    <li><a href="">Terms and Conditions</a></li>
                    <li><a href="">Return Policy</a></li>
                </ul>
          </div>
          <div class="newsletter">
              <h3>Newsletter Signup</h3>
                <form id="newsletter-form">
                    <input type="email" placeholder="Enter your email" />
                    <button type="submit">Subscribe</button>
              </form>
          </div>
        </div>
    </footer>
    </>
  );
};

export default Footer;
