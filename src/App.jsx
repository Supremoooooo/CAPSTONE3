import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Instructor from './components/Instructor';
import Navbar from './components/Navbar';
import Secondsec from './components/Secondsec';
import Section from './components/Section';



function App() {
  console.log(<Navbar />);
  return (
    <>
      <Navbar />
      <Hero />
      <Section />
      <Secondsec />
      <Instructor />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
