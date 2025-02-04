// import styles from "./landing.module.css";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Hero from "../../components/Hero/Hero.jsx";
import ServiceFeatures from "../../components/ServiceFeatures/ServiceFeatures.jsx";
import Collection from "../../components/Collection/Collection.jsx";
import Dedication from "../../components/Dedication/Dedication.jsx";
import OurClients from "../../components/OurClients/OurClients.jsx";

const Landing = () => {
  return (
    <>
      <Header />
      <Hero />
      <ServiceFeatures />
      <Collection />
      <Dedication />
      <OurClients />
      <Footer />
    </>
  );
};

export default Landing;
