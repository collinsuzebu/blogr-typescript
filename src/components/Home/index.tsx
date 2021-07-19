import React from "react";
import EditorBrand from "../Brand/EditorBrand";
import PhoneBrand from "../Brand/PhoneBrand";
import LaptopBrand from "../Brand/LaptopBrand";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

interface homeProps {}

const Home: React.FC<homeProps> = ({}) => {
  return (
    <div style={{ overflow: "hidden" }}>
      <Header />
      <EditorBrand />
      <PhoneBrand />
      <LaptopBrand />
      <Footer />
    </div>
  );
};

export default Home;
