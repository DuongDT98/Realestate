import bgrNha from "assets/bg_nha.jpeg";
import Image from "next/image";
import Button from "../ui/Button";
import { Row, Col, Container } from "reactstrap";
import Pagination from "../ui/Pagingation";
import LeftFilter from "./LeftFilter";
import Product from "./Product";
import icMenu from "assets/icon/ic_search.jpeg";
import icLocation from "assets/icon/ic_location.jpeg";
import { useCallback, useState } from "react";

const products = [
  {
    id: 1,
    amount: 1000000,
    title: "nhaf",
    location: "Lorem",
    description:
      "Lorem ipsazzzum dolar sit amet, consectertur asipiscing elitauris",
    image: bgrNha,
    info: {
      size: 2,
      room: {
        bathroom: 2,
        bedroom: 1,
      },
    },
  },
  {
    id: 2,
    amount: 2000000,
    title: "Lorem ipsazzzum",
    location: "Lorem",
    description:
      "Lorem ipsazzzum dolar sit amet, consectertur asipiscing elitauris",
    image: bgrNha,
    info: {
      size: 2,
      room: {
        bathroom: 2,
        bedroom: 1,
      },
    },
  },
  {
    id: 3,
    amount: 1070000,
    title: "Real Estate",
    location: "Lorem",
    description:
      "Lorem ipsazzzum dolar sit amet, consectertur asipiscing elitauris",
    image: bgrNha,
    info: {
      size: 2,
      room: {
        bathroom: 2,
        bedroom: 1,
      },
    },
  },
  {
    id: 4,
    amount: 1070000,
    title: "Real Estate",
    location: "Lorem",
    description:
      "Lorem ipsazzzum dolar sit amet, consectertur asipiscing elitauris",
    image: bgrNha,
    info: {
      size: 2,
      room: {
        bathroom: 2,
        bedroom: 1,
      },
    },
  },
  {
    id: 5,
    amount: 1070000,
    title: "Real Estate",
    location: "Lorem",
    description:
      "Lorem ipsazzzum dolar sit amet, consectertur asipiscing elitauris",
    image: bgrNha,
    info: {
      size: 2,
      room: {
        bathroom: 2,
        bedroom: 1,
      },
    },
  },
];

const ListProduct = () => {
  const [filter, setFilter] = useState(false);

  const filterMobile = useCallback(() => {
    setFilter(false);
  }, []);

  const hidefilterMobile = useCallback(() => {
    setFilter(true);
  }, []);

  return (
    <>
      {filter && (
        <div className="min-w-fit filter">
          <LeftFilter onClose={filterMobile} />
        </div>
      )}
      <Row className="h-20 content-center  bg-yellow-100 mapMobile">
        <Col className="flex text-2xl space-center border-right">
          <Image src={icMenu} alt="ic_filter" height={22} width={22} /> Filter
        </Col>
        <Col className="flex text-2xl space-center">
          <Image src={icLocation} alt="ic_filter" height={22} width={22} /> Map
        </Col>
      </Row>
      <div className="flex flex-row  mt-1 bg-gray-100">
        <div className="basis-1/4 bg-gray-300 filterPc">
          <LeftFilter />
        </div>
        <div className="basis-3/4 p-10">
          <Row className="flex flex-row content-center">
            <Col xs={11} md={6} className="basis-1/2 text-gray-500">
              1.289 resultados en{" "}
              <span className="text-black font-500">
                Lorem ipsum dolor sit amet
              </span>
            </Col>
            <Col xs={1} md={6} className="basis-1/2">
              <div className="flex content-center content-end menuPc">
                <div className="p-2 font-500">Ordenar: </div>
                <select className="w-200 p-2 rounded-lg border mr10">
                  <option>Relevacion</option>
                  <option>Relevacion</option>
                  <option>Relevacion</option>
                </select>
                <Button
                  size="s"
                  buttonType="outline"
                  className="mr10"
                  type="button"
                >
                  Menu
                </Button>
                <Button
                  size="s"
                  buttonType="danger"
                  className="p-2"
                  type="button"
                >
                  Location
                </Button>
              </div>
              <div className="menuMobile">
                <Image src={icMenu} alt="ic_menu" onClick={hidefilterMobile} />
              </div>
            </Col>
          </Row>
          <div className="menuPc">
            {products?.map((item) => (
              <Product product={item} href="a" as="a" type="grid" />
            ))}
          </div>
          <div className="locationMobile">
            {products?.map((item) => (
              <div className="py-4">
                <Product product={item} href="a" as="a" />
              </div>
            ))}
          </div>
          <div className="flex content-end">
            <Pagination />
          </div>
        </div>
      </div>
    </>
  );
};

export default ListProduct;
