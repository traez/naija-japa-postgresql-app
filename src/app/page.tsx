//import Image from "next/image";
//import data from "@/lib/data500.json";
import ImageGallery from "@/components/ImageGallery";

export default function Home() {

  return (
    <div className="flex flex-col gap-3 items-center p-4">
      <div className="text-xl font-semibold my-4 px-4">
        &quot;Japa may be a solution for some, but it is also a silent cry for
        change at home&quot;
      </div>
      <ImageGallery />
    </div>
  );
}
