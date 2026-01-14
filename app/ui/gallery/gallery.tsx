import Image from "next/image";
import Thumbs from "@/app/ui/gallery/modules.json";

export function GalleryContainer() {
  return (
    <section>
      <ul>
        {Thumbs.map((thumb) => (
          <li key={thumb?.id}>
            <GalleryPhoto src={thumb?.image} text={thumb?.name} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export function GalleryPhoto({ src, text }: { src: string; text: string }) {
  return (
    <div>
      <Image src={src} height={246} width={193} alt="" />
      <p>{text}</p>
    </div>
  );
}
