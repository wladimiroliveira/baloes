"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function MenuHamburguer() {
  const [open, setOpen] = useState(false);
  return (
    <div className="z-0">
      <button
        className="flex flex-col gap-1 w-4"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div
          className={clsx("h-0.5 w-full bg-secundaria transition-transform", {
            "rotate-45 translate-y-1.5": open,
          })}
        />
        <div
          className={clsx("h-0.5 w-full bg-secundaria transition-opacity", {
            "opacity-0": open,
          })}
        />
        <div
          className={clsx("h-0.5 w-full bg-secundaria transition-transform", {
            "-rotate-45 -translate-y-1.5": open,
          })}
        />
      </button>
      <div
        className={clsx(
          "absolute left-0 pointer-events-none opacity-0 transition-all translate-y-8 p-4 text-center bg-primaria w-full",
          {
            "opacity-100 pointer-events-auto translate-y-10": open,
          }
        )}
      >
        <h1 className="text-xl font-bold p-4">Balões Parauapebas</h1>
        <div className="pb-4">
          <Link
            href="https://maps.app.goo.gl/iy6Eb37H6TSuJAzW6"
            target="_blank"
            className="flex gap-2 items-center"
          >
            <Image src="./nav/maps.svg" height={14} width={14} alt="" />
            <p className="text-secundaria underline transition-colors hover:text-green-900">
              Avenida Rio Grande, 30 - Beira Rio
            </p>
          </Link>
          <Link href="" className="flex gap-2 items-center">
            <Image src="./nav/whatsapp.svg" height={14} width={14} alt="" />
            <p className="text-secundaria underline transition-colors hover:text-green-900">
              (94) 9 9158-6100
            </p>
          </Link>
          <Link
            href="https://www.instagram.com/baloesparauapebas/"
            target="_blank"
            className="flex gap-2"
          >
            <Image src="./nav/instagram.svg" height={14} width={14} alt="" />
            <p className="text-secundaria underline transition-colors hover:text-green-900">
              @baloesparauapebas
            </p>
          </Link>
          <Link
            href="https://www.facebook.com/people/Baloes-Bolos/pfbid0vk7q7CmnhnCSNEENMhpVcStUETtxtv3qeuRFughhUysnGaayn2d2bJwuqnFDyNjxl/?ref=_ig_profile_ac"
            target="_blank"
            className="flex gap-2"
          >
            <Image src="./nav/facebook.svg" height={14} width={14} alt="" />
            <p className="text-secundaria underline transition-colors hover:text-green-900">
              Balões Bolos
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
