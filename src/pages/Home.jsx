
import Carousel from "./Carousel"
import HeroSection from "./HeroSection"
import PagesBus from "./PagesBus"
import ThreeCards from './ThreeCards';

function Home() {
  return (
    <>
      <HeroSection />
      <ThreeCards/>
      <PagesBus />
      <Carousel/>
    </>
  )
}

export default Home