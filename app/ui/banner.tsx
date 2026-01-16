import Image from "next/image";

export function Banner() {
  return (
    <div className="flex flex-1 w-full max-w-4xl rounded-lg bg-primaria">
      <div className="hidden sm:flex items-center h-fit gap-4 px-4">
        <div>
          <Image
            src="/banner/banner-baloes-large.png"
            width={549}
            height={271}
            alt="Banner Balões"
          />
        </div>
        <p className="text-lg font-bold text-[#B27D1A]">
          “Sonhos são como os balões, é preciso coragem para deixá-los alcançar
          o céu”
        </p>
      </div>
      <div className="flex flex-1 w-full sm:hidden justify-center p-4 items-end h-36.75 bg-[url(/banner/banner-baloes-small.png)] bg-no-repeat bg-center rounded-lg px-4">
        <p className="text-xs text-center font-bold w-34 text-primaria">
          “Sonhos são como os balões, é preciso coragem para deixá-los alcançar
          o céu”
        </p>
      </div>
    </div>
  );
}
