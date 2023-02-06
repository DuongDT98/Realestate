import React, { FC } from "react";
import icMail from "assets/icon/ic_mail.png";
import icSearch from "assets/icon/ic_search.jpeg";
import icFavorite from "assets/icon/ic_favorite.png";
import Button from "../../components/ui/Button";
import Image from "next/image";

const Header: FC = () => {
  return (
    <div className={"flex flex-row w-full header-container"}>
      <div className="basis-1/2">
        <div className="p-10 text-2xl font-bold pointer">Realestate</div>
      </div>
      <div className="basis-1/2 menuPc">
        <div className="flex flex-row content-end content-center mr30">
          <div className="basis-1/5 pointer mr10 flex">
            <Image
              src={icMail}
              alt="ic_mail"
              height={20}
              width={20}
              className="mr-1"
            />
            Mis mensajecs
          </div>
          <div className="basis-1/5 pointer mr10 flex">
            <Image
              src={icSearch}
              alt="ic_mail"
              height={20}
              width={20}
              className="mr-1"
            />
            Mis busquedas
          </div>
          <div className="basis-1/5 pointer mr10 flex">
            <Image
              src={icFavorite}
              alt="ic_mail"
              height={20}
              width={20}
              className="mr-1"
            />
            Mis favaritos
          </div>
          <div className="basis-1/5 pointer mr10">
            <Button size="s" buttonType="outline">
              Publicar onuncio
            </Button>
          </div>
          <div className="basis-1/5 p10 pointer">
            <Button size="s">Inicair sesion</Button>
          </div>
        </div>
      </div>
      <div className=" basis-1/2 menuMobile">
        <Image
          src={icSearch}
          alt="ic_mail"
          height={20}
          width={20}
          className="mr-1"
        />
      </div>
    </div>
  );
};

export default Header;
