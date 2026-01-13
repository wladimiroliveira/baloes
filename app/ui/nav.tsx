import Image from "next/image";
import Link from "next/link";
import { MenuHamburguer } from "./menu-hamburguer";

export function Nav() {
  return (
    <nav className="bg-primaria flex w-full h-fit z-10">
      <div className="flex justify-between items-center w-full max-w-7xl m-auto p-4">
        <div className="flex items-center gap-4">
          <Image
            src="./nav/logo-site.svg"
            height={106}
            width={106}
            className="size-20"
            alt=""
          />
          <div className="hidden sm:flex flex-col">
            <h1 className="text-2xl font-bold">Balões Parauapebas</h1>
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
          </div>
        </div>
        <div className="hidden sm:flex flex-col items-end">
          <Link
            href="https://www.instagram.com/baloesparauapebas/"
            target="_blank"
            className="flex gap-2"
          >
            <p className="text-secundaria underline transition-colors hover:text-green-900">
              @baloesparauapebas
            </p>
            <Image src="./nav/instagram.svg" height={14} width={14} alt="" />
          </Link>
          <Link
            href="https://www.facebook.com/people/Baloes-Bolos/pfbid0vk7q7CmnhnCSNEENMhpVcStUETtxtv3qeuRFughhUysnGaayn2d2bJwuqnFDyNjxl/?ref=_ig_profile_ac"
            target="_blank"
            className="flex gap-2"
          >
            <p className="text-secundaria underline transition-colors hover:text-green-900">
              Balões Bolos
            </p>
            <Image src="./nav/facebook.svg" height={14} width={14} alt="" />
          </Link>
        </div>
        <div className="flex sm:hidden">
          <MenuHamburguer />
        </div>
      </div>
    </nav>
  );
}
