import type { NextPage } from "next";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import HomePage from "../components/Home";

const Home: NextPage = () => {
  return (
    <div className="min-w-fit">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
};

export default Home;
