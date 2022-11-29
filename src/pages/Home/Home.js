import React from "react";
import Banner from "./Banner";
import Info from "./Info";
import Services from "./Services";
import Intro from "./Intro";
import MakeAppointment from "./MakeAppointment";
import Testimonials from "./Testimonials";
import ContactUs from "./ContactUs";
import Footer from "../shared/Footer";

const Home = () => {
  return (
    <div>
      <Banner> </Banner>
      <Info></Info>
      <Services></Services>
      <Intro> </Intro>
      <MakeAppointment></MakeAppointment>
      <Testimonials></Testimonials>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
};

export default Home;
