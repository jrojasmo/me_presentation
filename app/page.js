import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';

const Page = () => (
  <div className="bg-[#191A19] overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-04 z-0" />
      <Explore />
    </div>
    <div className="relative">
      <GetStarted />
      <div className="gradient-05 z-0" />
      <WhatsNew />
      <div className="gradient-04 z-0" />
    </div>
    <World />
    <div className="relative">
      <div className="gradient-05 z-0" />
      <Feedback />
      <div className="gradient-05 z-0" />
    </div>
    <Footer />
  </div>
);

export default Page;