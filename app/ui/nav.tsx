import Image from "next/image";
import Link from "next/link";

export function Nav() {
  return (
    // <nav className="bg-primaria flex w-full h-fit z-10">
    //   <div className="w-full max-w-7xl m-auto p-4">
    //     <div className="flex w-full h-fit justify-between items-center gap-4">
    //       <Image
    //         src="./nav/logo-site.svg"
    //         height={106}
    //         width={106}
    //         className="size-20"
    //         alt=""
    //       />
    //       <div className="grid grid-rows-2 w-full h-fit">
    //         <div className="flex flex-col">
    //           <h1 className="text-lg sm:text-2xl font-bold">
    //             Balões Parauapebas
    //           </h1>
    //           <Link
    //             href="https://maps.app.goo.gl/iy6Eb37H6TSuJAzW6"
    //             target="_blank"
    //             className="flex gap-2 items-center"
    //           >
    //             <Image src="./nav/maps.svg" height={14} width={14} alt="" />
    //             <p className="text-secundaria underline transition-colors hover:text-green-900">
    //               Avenida Rio Grande, 30 - Beira Rio
    //             </p>
    //           </Link>
    //           <Link href="" className="flex gap-2 items-center">
    //             <Image src="./nav/whatsapp.svg" height={14} width={14} alt="" />
    //             <p className="text-secundaria underline transition-colors hover:text-green-900">
    //               (94) 9 9158-6100
    //             </p>
    //           </Link>
    //         </div>
    //         <div className="flex flex-col h-fit items-start">
    //           <Link
    //             href="https://www.instagram.com/baloesparauapebas/"
    //             target="_blank"
    //             className="flex flex-row-reverse gap-2"
    //           >
    //             <p className="text-secundaria underline transition-colors hover:text-green-900">
    //               @baloesparauapebas
    //             </p>
    //             <Image
    //               src="./nav/instagram.svg"
    //               height={14}
    //               width={14}
    //               alt=""
    //             />
    //           </Link>
    //           <Link
    //             href="https://www.facebook.com/people/Baloes-Bolos/pfbid0vk7q7CmnhnCSNEENMhpVcStUETtxtv3qeuRFughhUysnGaayn2d2bJwuqnFDyNjxl/?ref=_ig_profile_ac"
    //             target="_blank"
    //             className="flex flex-row-reverse gap-2"
    //           >
    //             <p className="text-secundaria underline transition-colors hover:text-green-900">
    //               Balões Bolos
    //             </p>
    //             <Image src="./nav/facebook.svg" height={14} width={14} alt="" />
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="flex sm:hidden"></div>
    //   </div>
    // </nav>
    <nav className="flex gap-2 items-center p-4">
      <div>
        <Image
          src="/nav/logo-site.svg"
          height={106}
          width={106}
          className="size-20"
          alt=""
        />
      </div>
      <div className="flex flex-col sm:flex-row justify-between w-full">
        <div>
          <h1 className="text-xl font-bold sm:text-2xl">Balões Parauapebas</h1>
          <Link
            href="https://maps.app.goo.gl/iy6Eb37H6TSuJAzW6"
            target="_blank"
            className="flex text-sm gap-2 underline text-secundaria"
          >
            Avenida Rio Grande, 30 - Beira Rio, Parauapebas 68.515-000
          </Link>
          <Link
            href="https://wa.link/899ggt"
            target="_blank"
            className="flex text-sm gap-2 underline text-secundaria"
          >
            (94) 9 9158-6100{" "}
            <Image src="/nav/whatsapp.svg" height={14} width={14} alt="" />
          </Link>
        </div>
        <div className="block sm:flex sm:flex-col sm:justify-center items-end">
          <Link
            href="https://www.facebook.com/people/Baloes-Bolos/pfbid0vk7q7CmnhnCSNEENMhpVcStUETtxtv3qeuRFughhUysnGaayn2d2bJwuqnFDyNjxl/?ref=_ig_profile_ac"
            target="_blank"
            className="flex text-sm gap-2 underline text-secundaria"
          >
            Balões Bolos{" "}
            <Image src="/nav/facebook.svg" height={14} width={14} alt="" />
          </Link>
          <Link
            href="https://www.instagram.com/baloesparauapebas/"
            target="_blank"
            className="flex text-sm gap-2 underline text-secundaria"
          >
            @baloesparauapebas{" "}
            <Image src="/nav/instagram.svg" height={14} width={14} alt="" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
