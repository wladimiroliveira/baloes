"use client";

import Image from "next/image";
import thumbs from "@/app/ui/gallery/modules.json";
import { CopyIcon } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";

export function GalleryContainer() {
  const [category, setCategory] = useState("eventoDecoracao");
  const current = thumbs.filter((thumb) => thumb?.group === category);
  return (
    <div className="m-4 p-4 rounded-lg bg-primaria">
      <div className="flex flex-nowrap gap-4 overflow-scroll">
        <CategoryButton
          group="eventosDecoracoes"
          category={category}
          action={() => {
            setCategory("eventosDecoracoes");
          }}
          text="Eventos e Decorações"
        />
        <CategoryButton
          group="baloesTematicos"
          category={category}
          action={() => {
            setCategory("baloesTematicos");
          }}
          text="Balões Temáticos"
        />
        <CategoryButton
          group="presentesPersonalizados"
          category={category}
          action={() => {
            setCategory("presentesPersonalizados");
          }}
          text="Presentes Personalizados"
        />
        <CategoryButton
          group="produtos"
          category={category}
          action={() => {
            setCategory("produtos");
          }}
          text="Produtos"
        />
      </div>
      <ul className="flex flex-wrap justify-between gap-4">
        {current.map((thumb) => (
          <li key={thumb?.id}>
            <GalleryPhoto
              src={thumb?.image}
              text={thumb?.name}
              count={thumb?.photo.length > 0 && thumb?.photo.length}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export function GalleryPhoto({
  src,
  text,
  count,
}: {
  src: string;
  text: string;
  count?: number | false;
}) {
  return (
    <div className="border p-4 bg-white rounded-lg">
      <Image className="w-35 mb-2" src={src} height={246} width={193} alt="" />
      <p className="max-w-30">{text}</p>
      <p>
        {count}
        {count && <CopyIcon />}
      </p>
    </div>
  );
}

export function CategoryButton({
  action,
  text,
  category,
  group,
}: {
  action: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
  category: string;
  group: string;
}) {
  return (
    <button
      onClick={action}
      className={clsx("whitespace-nowrap p-4 mb-4 font-medium", {
        "border-b": category === group,
      })}
    >
      {text}
    </button>
  );
}
