import Image from "next/image";
import icFacebook from "assets/icon/ic_facebook.png";
import icWhatApp from "assets/icon/ic_phone.png";
import icTwitter from "assets/icon/ic_twitter.png";
import icInsta from "assets/icon/ic_insta.png";
import { Row, Col } from "reactstrap";
import React, { FC } from "react";

interface Props {}

const Footer: FC<Props> = (props) => {
  return (
    <div className="w-full fooetr-container">
      <Row>
        <Col xs={12} md={2}>
          <div>Nosotros</div>
          <div>Preguntas frecuentes</div>
          <div>Ayuda</div>
        </Col>
        <Col xs={12} md={2}>
          <div className="font-bold">Servicios</div>
          <div>Alquilar</div>
          <div>Comparar</div>
          <div>Vender</div>
        </Col>
      </Row>
      <Row className="flex flex-row h-10 w-full pt-4">
        <Col xs={12} md={2} className="basis-1/4">
          <div>Terminos y condiciones</div>
        </Col>
        <Col xs={12} md={2} className="basis-1/4">
          <div>Politica de pricacidad</div>
        </Col>
        <Col xs={12} md={8} className="basis-1/2 flex content-end">
          <Image
            src={icFacebook}
            alt="Vercel Logo"
            width={42}
            height={16}
            className="p10"
          />
          <Image
            src={icWhatApp}
            alt="Vercel Logo"
            width={42}
            height={16}
            className="p10"
          />
          <Image
            src={icTwitter}
            alt="Vercel Logo"
            width={42}
            height={16}
            className="p10"
          />
          <Image
            src={icInsta}
            alt="Vercel Logo"
            width={42}
            height={16}
            className="p10"
          />
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
