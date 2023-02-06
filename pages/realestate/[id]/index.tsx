import type { NextPage } from "next";
import Header from "../../../layout/Header";
import Footer from "../../../layout/Footer";
import ProductDetail from "../../../components/ProductDetail";

const RealestateDetail: NextPage = () => {
  return (
    <div className="min-w-fit">
      <Header />
      <ProductDetail />
      <Footer />
    </div>
  );
};

export default RealestateDetail;
