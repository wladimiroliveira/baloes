import { GalleryContainer } from "@/app/ui/gallery/gallery";
import { Banner } from "@/app/ui/banner";

export default function Page() {
  return (
    <section className="flex flex-col justify-center">
      <div className="flex flex-col items-center gap-4 m-4">
        <Banner />
        <GalleryContainer />
      </div>
    </section>
  );
}
