import bgrNha from "assets/bg_nha.jpeg";
import Image from "next/image";
import icBack from "assets/icon/ic_backblack.svg";
import icRoom from "assets/icon/ic_room.png";
import icLocation from "assets/icon/ic_location.jpeg";
import icFavorite from "assets/icon/ic_favorite.png";
import icWhatApp from "assets/icon/ic_phone.png";
import icMail from "assets/icon/ic_mail.png";
import icShare from "assets/icon/ic_share.svg";
import { Row, Col, Container } from "reactstrap";
import Button from "../ui/Button";
import { useRouter } from "next/router";

const product = {
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
};

const ProductDetail = () => {
  const { push } = useRouter();
  return (
    <>
      <div
        className="p-3 flex content-center border-top pointer w-full"
        onClick={() => push("/realestate")}
      >
        <Image src={icBack} alt="ic_back" className="mr10" />
        Lorm ipsum dolor sit amet, consectetur adiposcing elit
      </div>
      <Row className="flex flex-row  mt-1 bg-gray-100 w-full">
        <Col md={6} xs={12} className="basis-1/2">
          <Image src={bgrNha} alt="ss" height={250} className="w-full" />
        </Col>
        <Col md={6} xs={12} className="basis-1/2 menuPc">
          <Image src={bgrNha} alt="ss" height={250} className="w-full" />
        </Col>
      </Row>
      <Container className="containerMobile">
        <Row className="flex flex-row w-full">
          <Col md={8} xs={12} className="basis-2/3 p-14">
            <div className="flex content-center space-between">
              <div className="text-2xl"> {product?.amount}$</div>
              <div className="flex">
                <div className="border-right">
                  <Button size="s" className="mr10" buttonType="danger">
                    <Image
                      src={icFavorite}
                      alt="ic_favorite"
                      height={22}
                      width={22}
                      className="mr10"
                    />
                    <span className="menuPc">Favorito</span>
                  </Button>
                </div>
                <div>
                  <Button size="s" buttonType="danger">
                    <Image
                      src={icShare}
                      alt="ic_favorite"
                      height={22}
                      width={22}
                      className="mr10"
                    />
                    <span className="menuPc">Compairtit</span>
                  </Button>
                </div>
              </div>
            </div>
            <div className="locationMobile">
              <div className="flex">
                <Image
                  src={icLocation}
                  alt="ic_location"
                  height={22}
                  width={22}
                />
                {product?.location}
              </div>
            </div>
            <div className="flex space-x-5 pt-2">
              <div className="flex menuPc">
                <Image
                  src={icLocation}
                  alt="ic_location"
                  height={22}
                  width={22}
                />
                {product?.location},
              </div>
              <div className="flex space-x-4 font-500">
                <div className="flex">
                  <Image
                    src={icRoom}
                    alt="ic_back"
                    className="mr10"
                    height={22}
                    width={22}
                  />
                  {product?.info?.room?.bedroom} Bedrooms
                </div>
                <div className="flex">
                  <Image
                    src={icRoom}
                    alt="ic_back"
                    className="mr10"
                    height={22}
                    width={22}
                  />{" "}
                  {product?.info?.room?.bedroom} Bedrooms
                </div>
                <div className="flex">
                  <Image
                    src={icRoom}
                    alt="ic_back"
                    className="mr10"
                    height={22}
                    width={22}
                  />{" "}
                  {product?.info?.size} m2
                </div>
              </div>
            </div>
            <div className="pt-2">{product?.description}</div>
            <div className="pt-2">
              Appromixmate address upon request.{" "}
              <span className="text-blue-900">Ver mapa</span>
            </div>
          </Col>
          <Col md={4} xs={12} className="basis-1/3 p-14">
            <div className="border">
              <div className="border-360 flex content-center space-center text-4xl text-yellow-500">
                360
              </div>
              <div className="p-4 font-500 bg-green-200">
                Posted by: <span className="text-blue-900">www.360.ad</span>
              </div>
            </div>
            <div className="pt-6">
              Realestate last checked:{" "}
              <span className="text-gray-500">4 hours ago</span>
            </div>
            <div className="pt-2">
              Listing updated:{" "}
              <span className="text-gray-500">
                September 26, 2022 at 02:37pm
              </span>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="w-full p-16 bg-green-900 menuPc">
        <div className="pt-4 text-4xl text-white">
          Contacta con el anunciante
        </div>
        <div className="pt-4 flex flex-row">
          <div className="basis-1/4">
            <div>
              <Button size="s" buttonType="outline" className="w200">
                <Image
                  src={icMail}
                  alt="ic_favorite"
                  height={22}
                  width={22}
                  className="mr10"
                />
                Mensaje
              </Button>
            </div>
            <div className="pt-4">
              <Button size="s" className="w200">
                <Image
                  src={icWhatApp}
                  alt="ic_favorite"
                  height={22}
                  width={22}
                  className="mr10"
                />
                WhatsApp
              </Button>
            </div>
          </div>
          <div className="basis-3/4">
            <form className="p-14 bg-gray-200 rounded-lg">
              <div className="flex flex-row">
                <div className="basis-1/2 p-3">
                  <div>
                    <input
                      className="w-full bg-white p-3 rounded-lg"
                      placeholder="Name"
                    />
                  </div>
                  <div className="pt-2">
                    <input
                      className="w-full bg-white p-3 rounded-lg"
                      placeholder="Email"
                    />
                  </div>
                  <div className="pt-2">
                    <input
                      className="w-full bg-white p-3 rounded-lg"
                      placeholder="Phone"
                    />
                  </div>
                </div>
                <div className="basis-1/2 pt-3">
                  <div>
                    <textarea
                      className="w-full rounded-lg p-3"
                      rows={6}
                      placeholder="Mensaje"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-row p-3">
                <div className="basis-3/4">
                  <div>
                    <input type={"checkbox"} checked className="mr-2" />
                    He leido y accept recibir nuevors anuncios para esta
                    busqueda
                  </div>
                  <div className="pt-2">
                    <input type={"checkbox"} className="mr-2" />
                    He leido y accept los{" "}
                    <span className="text-blue-900">
                      {" "}
                      terminios y condiciones
                    </span>{" "}
                    y la{" "}
                    <span className="text-blue-900">
                      politica de pricacidad
                    </span>
                  </div>
                </div>
                <div className="basis-1/4 pt-2">
                  <Button size="s" className="w200 content-end">
                    Enviar
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="locationMobile text-center py-4">
        <Button size="s" className="w200">
          Contactar
        </Button>
      </div>
    </>
  );
};

export default ProductDetail;
