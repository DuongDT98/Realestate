import Image from "next/image";
import React, { FC } from "react";
import icClose from "assets/icon/ic_close.svg";
import Button from "../../ui/Button";

interface Props {
  onClose?: () => void;
}

const LeftFilter: FC<Props> = (props) => {
  const { onClose } = props;
  return (
    <>
      <div className="flex filter-mobile">
        <div className="text-2xl">Filter</div>
        <Image
          src={icClose}
          alt="ic_close"
          className="pointer"
          onClick={onClose}
        />
      </div>
      <div className="w-full bg-green-900 p-10 menuPc">
        <div className="text-white">To avismos is hay nuevos ?</div>
        <div className="pt-2">
          <Button size="s" buttonType="danger">
            Guardar busquesda
          </Button>
        </div>
      </div>
      <div className="p-10">
        <div className="font-500">Tipo de operacion</div>
        <div className="flex pt-2">
          <div className="button-selected bg-white">Alquiler</div>
          <div className="button-select bg-white">Compra</div>
        </div>
        {/* Filter 1 */}
        <div className="pt-4 font-500">Localozacilon</div>
        <div className="pt-2">
          <select className="w-full p-2 rounded-lg border">
            <option>A</option>
            <option>A</option>
            <option>A</option>
          </select>
        </div>
        <div className="pt-4 font-500">Tipo de inmueble</div>
        <div className="pt-2">
          <select className="w-full p-2 rounded-lg border">
            <option>A</option>
            <option>A</option>
            <option>A</option>
          </select>
        </div>
        {/* Filter 2 */}
        <div className="pt-4 font-500">Precio</div>
        <div className="flex flex-row">
          <div className="basis-1/2 pr-2">
            <select className="w-full p-2 rounded-lg border">
              <option>Min</option>
              <option>Max</option>
            </select>
          </div>
          <div className="basis-1/2">
            <select className="w-full p-2 rounded-lg border">
              <option>A</option>
              <option>A</option>
              <option>A</option>
            </select>
          </div>
        </div>
        {/* Filter 3 */}
        <div className="pt-4 font-500">Superficer (m2)</div>
        <div className="flex flex-row">
          <div className="basis-1/2 pr-2">
            <select className="w-full p-2 rounded-lg border">
              <option>Min</option>
              <option>Max</option>
            </select>
          </div>
          <div className="basis-1/2">
            <select className="w-full p-2 rounded-lg border">
              <option>Max</option>
              <option>A</option>
              <option>A</option>
            </select>
          </div>
        </div>
        {/* Filter 4 */}
        <div className="pt-4 font-500">Habitcacions</div>
        <div className="pt-2 flex">
          <div className="p-2 border-one border-black">+1</div>
          <div className="p-2 border-select">+2</div>
          <div className="p-2 border-select">+3</div>
          <div className="p-2 border-select">+4</div>
          <div className="p-2 border-last">+5</div>
        </div>
        {/* Filter 5 */}
        <div className="pt-4 font-500">Banos</div>
        <div className="pt-2 flex">
          <div className="p-2 border-one">+1</div>
          <div className="p-2 border-select">+2</div>
          <div className="p-2 border-last">+3</div>
        </div>
        {/* Filter 6 */}
        <div className="pt-4 font-500">Extract</div>
        <div className="pt-2">
          <div className="pt-1">
            <input type={"checkbox"} className="mr-1" /> Aire acondicionada
          </div>
          <div className="pt-1">
            <input type={"checkbox"} checked className="mr-1" />
            Piscina
          </div>
          <div className="pt-1">
            <input type={"checkbox"} className="mr-1" /> Trastero
          </div>
          <div className="pt-1">
            <input type={"checkbox"} checked className="mr-1" /> Ascensor
          </div>
          <div className="pt-1">
            <input type={"checkbox"} className="mr-1" /> Cafefaccion
          </div>
          <div className="pt-1">
            <input type={"checkbox"} className="mr-1" /> Amieblado
          </div>
          <div className="pt-1">
            <input type={"checkbox"} className="mr-1" /> Terraza
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftFilter;
