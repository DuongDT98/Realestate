import React, { FC, memo, useCallback, useMemo, useRef } from "react";
import bgrNha from "assets/bg_nha.jpeg";
import icRoon from "assets/icon/ic_room.png";
import icMail from "assets/icon/ic_mail.png";
import { useRouter } from "next/router";
import { ProductModel } from "../../../model/product.model";
import Image from "next/image";
import Card from "../../ui/Card";
import Button from "../../ui/Button";

interface Props {
  product: ProductModel;
  href: string;
  as: string;
  type?: string;
}

const Product: FC<Props> = (props) => {
  const { product, href, as, type } = props;
  const router = useRouter();

  const handleNextPage = useCallback(() => {
    router.push(`/realestate/${product?.id}`);
  }, []);

  const renderProduct = useMemo(() => {
    if (type === "grid") {
      return (
        <div className="flex flex-row w-full p-4">
          <div className="basis-1/3">
            <Image
              alt={product.title}
              src={bgrNha}
              height={200}
              className="w-full rounded-lg pointer"
              onClick={handleNextPage}
            />
          </div>
          <div className="basis-2/3 p-3">
            <div>
              <div className="text-2xl">
                <p>{product.amount}$</p>
              </div>
              <h3 className="text-2xl pointer" onClick={handleNextPage}>
                {product.title}
              </h3>
              <div>
                <p>{product.location}</p>
              </div>
              <div>
                <p>{product.description}</p>
              </div>
            </div>
            <div className="flex space-x-4 font-500">
              <div> {product?.info?.room?.bedroom} Bedrooms</div>
              <div> {product?.info?.room?.bedroom} Bedrooms</div>
              <div> {product?.info?.size} m2</div>
            </div>
            <div className="flex pt-3 content-center">
              <Button type="button" size="s">
                <Image
                  src={icMail}
                  alt="ic_room"
                  height={22}
                  width={22}
                  className="mr10"
                />
                Contact
              </Button>
              <div className="pl-3">
                Posted by <span className="text-blue-800">360</span>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <Card className={"productCard"}>
        <div>
          <Image
            alt={product.title}
            src={bgrNha}
            height={200}
            className="w-full rounded-lg pointer"
            onClick={handleNextPage}
          />
        </div>
        <div className="p-3">
          <div>
            <div className="text-2xl font-bold">
              <p>{product.amount}$</p>
            </div>
            <h3 className="text-2xl font-bold pointer" onClick={handleNextPage}>
              {product.title}
            </h3>
            <div>
              <p>{product.location}</p>
            </div>
            <div>
              <p>{product.description}</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="font-500 flex">
              <Image src={icRoon} alt="ic_room" height={22} width={22} />
              {product?.info?.room?.bedroom} Bedrooms
            </div>
            <div className="font-500 flex">
              <Image src={icRoon} alt="ic_room" height={22} width={22} />
              {product?.info?.room?.bedroom} Bedrooms
            </div>
            <div className="font-500 flex">
              {" "}
              <Image src={icRoon} alt="ic_room" height={22} width={22} />{" "}
              {product?.info?.size} m2
            </div>
          </div>
          <div className="flex pt-3 content-center">
            <Button type="button" size="s">
              <Image
                src={icMail}
                alt="ic_room"
                height={22}
                width={22}
                className="mr10"
              />
              Contact
            </Button>
            <div className="pl-3">
              Posted by <span className="text-blue-800">360</span>
            </div>
          </div>
        </div>
      </Card>
    );
  }, [type]);

  return <>{renderProduct}</>;
};

export default memo(Product);
