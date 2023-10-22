import './style.css'
import pic1 from '../../assets/images/carouselimage/pic1.jpg'
import pic2 from '../../assets/images/carouselimage/pic2.jpg'
import course3 from '../../assets/images/carouselimage/course3.jpg'
const Hero = () => {
  return (
    <>
<div id="hero-carousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

<div class="carousel-item active c-item">
    <img src= {pic1} class="d-block w-100 c-img" alt="..." />
    <div class="carousel-caption top-0 mt-4">
            <p class="mt-5 fs-3 text-uppercase"></p>
            <h1 class="display-1">"<span>Unwind</span> in Elegance, Embrace <span>Comfort</span>."</h1>
        <button class="#F94C10 px-4 py-2 fs-5 mt-5"> Shop Now!</button>
    </div>
</div>
<div class="carousel-item c-item">
    <img src= {pic2} class="d-block w-100 c-img" alt="..." />
        <div class="carousel-caption top-0 mt-4">
            <p class="mt-5 fs-3 text-uppercase"></p>
            <h1 class="display-1">"The Art of Living, Embodied in Every Set."</h1>
            <button class="#F94C10 px-4 py-2 fs-5 mt-5">Get 10% Off</button>
        </div>
</div>
<div class="carousel-item c-item">
    <img src= {course3} class="d-block w-100 c-img" alt="..." />
        <div class="carousel-caption top-0 mt-4">
            <p class="mt-5 fs-3 text-uppercase"></p>
            <h1 class="display-1">"Crafting Your Perfect Living Room Retreat."</h1>
            <button class="#F94C10 px-4 py-2 fs-5 mt-5">View Deals</button>
        </div>
</div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#hero-carousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#hero-carousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
    </div>
    </>
  );
};

export default Hero;
