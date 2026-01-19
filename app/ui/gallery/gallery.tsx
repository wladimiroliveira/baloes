"use client";

import Image from "next/image";
import thumbs from "@/app/ui/gallery/modules.json";
import { CopyIcon, XCircleIcon } from "lucide-react";
import { useState, useEffect } from "react";
import clsx from "clsx";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

export function GalleryContainer() {
  const [category, setCategory] = useState("eventosDecoracoes");
  const [open, setOpen] = useState(false);
  const [type, setType] = useState(1);
  const [api, setApi] = useState<CarouselApi>();
  const current = thumbs.filter((thumb) => thumb?.group === category);

  // Reseta o carousel para a primeira posição quando o tipo muda
  useEffect(() => {
    if (api) {
      api.scrollTo(0);
    }
  }, [type, api]);

  return (
    <div className="flex-1 w-full p-4 rounded-lg bg-primaria max-w-4xl">
      <div className="flex flex-nowrap overflow-x-auto overflow-y-hidden -webkit-overflow-scrolling-touch">
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
              className="cursor-pointer w-full"
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
          "flex flex-col fixed opacity-0 p-4 sm:p-8 top-0 left-0 w-full h-full backdrop-blur-sm transition-all bg-white/30 z-50",
          {
            "pointer-events-auto opacity-100": open,
            "pointer-events-none opacity-0": !open,
          },
        )}
      >
        <div className="w-full max-w-7xl p-4 text-right mx-auto">
          <Button
            className="cursor-pointer size-12 sm:size-16 border bg-white hover:bg-white/70"
            size="lg"
            onClick={() => {
              setOpen(false);
            }}
          >
            <XCircleIcon className="size-6 text-black" />
          </Button>
        </div>
        <div className="flex items-center justify-center flex-1 w-full">
          <Carousel className="w-full max-w-xs sm:max-w-md" setApi={setApi}>
            <CarouselContent className="-ml-4">
              {thumbs[type - 1]?.photo?.map((photo) => (
                <CarouselItem key={photo?.id} className="pl-4">
                  <div className="p-1">
                    <Card className="border-0 shadow-lg">
                      <CardContent className="flex flex-col gap-4 p-4 sm:p-6">
                        <div
                          className="relative w-full"
                          style={{ aspectRatio: "710/947" }}
                        >
                          <Image
                            src={photo?.image}
                            fill
                            sizes="(max-width: 640px) 100vw, 448px"
                            alt={photo?.name}
                            className="rounded-sm object-contain"
                            priority={false}
                          />
                        </div>
                        <p className="text-center text-sm sm:text-base">
                          {photo?.name} #{photo?.id}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex -left-12" />
            <CarouselNext className="hidden sm:flex -right-12" />
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
    <div className="border min-w-full border-black/70 p-4 bg-white rounded-lg transition-all hover:scale-[102%] hover:shadow-xl active:scale-100 active:shadow-xs">
      <div className="relative w-full mb-2" style={{ aspectRatio: "193/246" }}>
        <Image
          src={src}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
          alt={text}
          className="object-cover rounded"
        />
      </div>
      <div className="flex items-center gap-1 justify-between">
        <p className="text-left text-sm max-w-30 truncate">{text}</p>
        <p className="flex text-xs gap-1 items-center whitespace-nowrap">
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
        },
      )}
    >
      {text}
    </button>
  );
}
