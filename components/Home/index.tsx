import type { NextPage } from "next";
import bgrNha from "assets/bg_nha.jpeg";
import Image from "next/image";
import Product from "../ListProduct/Product";
import Button from "../ui/Button";
import { Row, Col, Container } from "reactstrap";
import { useCallback } from "react";
import { useRouter } from "next/router";

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
];

const HomePage: NextPage = () => {
  const router = useRouter();
  const hanleSeeAll = useCallback(() => {
    router.push("/realestate");
  }, []);
  return (
    <>
      <Row className="flex flex-row  bg-gray-100">
        <Col xs={12} md={6} className="basis-1/2">
          <div className="p-10 text-3xl font-bold">
            Find Real Estate that suits you
          </div>
          <div className="p-10 text-base w-2/3 menuPc">
            Lorem ipsazzzum dolar sit amet, consectertur asipiscing elitauris
            vel lacus tempus, dolor velus
          </div>
        </Col>
        <Col xs={12} md={6} className="basis-1/2">
          <Image src={bgrNha} alt="ss" height={250} className="w-full" />
        </Col>
      </Row>
      <div></div>

      <div className="w-full bg-green-900 text-white">
        <div className="text-center pt-20 text-4xl font-bold">
          Your best value proposition
        </div>
        <Row className="p-10 py-20">
          <Col xs={12} md={3} className="py-4">
            <div className="mb-3 text-2xl font-500">Lorem ipsum</div>
            <div>
              Lorem ipsazzzum dolar sit amet, consectertur asipiscing elitauris
              vel lacus tempus, dolor velus
            </div>
          </Col>
          <Col xs={12} md={3} className="py-4">
            <div className="mb-3 text-2xl font-500">Lorem ipsum</div>
            <div>
              Lorem ipsazzzum dolar sit amet, consectertur asipiscing elitauris
              vel lacus tempus, dolor velus
            </div>
          </Col>
          <Col xs={12} md={3} className="py-4">
            <div className="mb-3 text-2xl font-500">Lorem ipsum</div>
            <div>
              Lorem ipsazzzum dolar sit amet, consectertur asipiscing elitauris
              vel lacus tempus, dolor velus
            </div>
          </Col>
          <Col xs={12} md={3} className="py-4">
            <div className="mb-3 text-2xl font-500">Lorem ipsum</div>
            <div>
              Lorem ipsazzzum dolar sit amet, consectertur asipiscing elitauris
              vel lacus tempus, dolor velus
            </div>
          </Col>
        </Row>
      </div>

      <div className="text-center mt-10 my-10 text-4xl font-bold">
        Recently added
      </div>
      <Container>
        <Row>
          {products?.map((item) => (
            <Col xs={12} md={4} className="py-4">
              <Product product={item} href="a" as="a" />
            </Col>
          ))}
        </Row>
      </Container>
      <div className="flex my-10 content-center space-center">
        <Button onClick={hanleSeeAll} size="s" buttonType="outline">
          See All
        </Button>
      </div>
    </>
  );
};

export default HomePage;
