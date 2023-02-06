import type { NextPage } from "next";
import ListProduct from "../../components/ListProduct";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";

const RealestateDetail: NextPage = () => {
  return (
    <div className="min-w-fit">
      <Header />
      <ListProduct />
      <Footer />
    </div>
  );
};

export default RealestateDetail;
