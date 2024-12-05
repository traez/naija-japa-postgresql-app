import ImageGallery from "@/components/ImageGallery";

export default function Home() {
  return (
    <div className="flex flex-col gap-2 items-center p-2 bg-[#b2d3c2]">
      <div className="text-xl font-semibold">
        &quot;Japa may be a solution for some, but it is also a silent cry for
        change at home&quot;
      </div>
      <ImageGallery />
      <div className="text-xl font-semibold">
        A Supabase funded SQL Love Story, written in PostgreSQL
      </div>
    </div>
  );
}
