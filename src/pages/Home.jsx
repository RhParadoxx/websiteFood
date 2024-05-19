import React from "react";
import { Header } from "../components/Headers";
import RecommendedFood from "../components/RecommendedFood";
import Services from "../components/Services";
import NewFood from "../components/NewFood";
import NewService from "../components/NewService";
import Special from "../components/Special";
import Footer from "../shared/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <RecommendedFood />
      <Services />
      <NewFood />
      <NewService />
      <Special />

    </div>
  );
};

export default Home;
