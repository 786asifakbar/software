import HeroSection from "./HeroSection"
import PagesBus from "./PagesBus"
import ThreeCards from './ThreeCards';
import Overview from './Overview';
import Testimonials from './Testimonials';
import ContactUs from "./ContactUs";


function Home() {
  return (
    <>
      <HeroSection />
      <ThreeCards/>
      <PagesBus />
      <Overview />
      <Testimonials />
      <ContactUs/>
    </>
  )
}

export default Home