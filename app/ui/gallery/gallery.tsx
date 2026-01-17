"use client";

import Image from "next/image";
import thumbs from "@/app/ui/gallery/modules.json";
import { CopyIcon, XCircleIcon } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

export function GalleryContainer() {
  const [category, setCategory] = useState("eventosDecoracoes");
  const [open, setOpen] = useState(false);
  const [type, setType] = useState(1);
  const current = thumbs.filter((thumb) => thumb?.group === category);
  return (
    <div className="flex-1 w-full p-4 rounded-lg bg-primaria max-w-4xl">
      <div className="flex flex-nowrap overflow-scroll">
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
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {current.map((thumb) => (
          <li key={thumb?.id}>
            <button
              className="cursor-pointer"
              onClick={() => {
                setOpen(true);
                setType(thumb?.id);
              }}
            >
              <GalleryPhoto
                src={thumb?.image}
                text={thumb?.name}
                count={thumb?.photo.length > 0 && thumb?.photo.length}
              />
            </button>
          </li>
        ))}
      </ul>
      <div
        className={clsx(
          "flex flex-col fixed opacity-0 p-8 top-0 left-0 size-full backdrop-blur-sm transition-all bg-white/30",
          {
            "pointer-events-auto opacity-100": open,
            "pointer-events-none opacity-0": !open,
          }
        )}
      >
        <div className="w-full max-w-[1280px] p-4 text-right">
          <Button
            className="cursor-pointer size-16 border bg-white hover:bg-white/70"
            size="lg"
            onClick={() => {
              setOpen(false);
            }}
          >
            <XCircleIcon className="size-6 text-black" />
          </Button>
        </div>
        <div className="mx-auto">
          <Carousel className="w-full max-w-2xs sm:max-w-md">
            <CarouselContent>
              {thumbs[type - 1]?.photo?.map((photo) => (
                <CarouselItem key={photo?.id}>
                  <div className="">
                    <Card>
                      <CardContent className="flex flex-1 flex-col gap-4 aspect-square items-center justify-center p-6">
                        <Image
                          src={photo?.image}
                          height={947}
                          width={710}
                          alt={photo?.name}
                          className="rounded-sm"
                        />
                        <p>
                          {photo?.name} #{photo?.id}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  {/* <div className="p-1">
                    
                  </div> */}
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </div>
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
    <div className="border border-black/70 p-4 bg-white rounded-lg transition-all hover:scale-[102%] hover:shadow-xl active:scale-100 active:shadow-xs">
      <Image className="w-35 mb-2" src={src} height={246} width={193} alt="" />
      <div className="flex items-center gap-1 justify-between">
        <p className="text-left max-w-30">{text}</p>
        <p className="flex text-xs gap-1 items-center">
          {count}
          {count && <CopyIcon size="14" />}
        </p>
      </div>
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
      className={clsx(
        "whitespace-nowrap cursor-pointer p-4 mb-4 font-medium transition-all hover:border-b border-black/70",
        {
          "border-b border-black/70": category === group,
        }
      )}
    >
      {text}
    </button>
  );
}
