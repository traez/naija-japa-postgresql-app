"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/dispensation.jpg",
  "/escape.jpeg",
  "/e-go-be.jpg",
  "/xabi-alonso.jpeg",
];

export default function ImageGallery() {
  const [currentImages, setCurrentImages] = useState(images);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImages((prevImages) => {
        const [first, ...rest] = prevImages;
        return [...rest, first];
      });
    }, 3000);

    return () => clearInterval(interval);
    /*   the return () => clearInterval(interval) inside the useEffect is essential for ensuring that the interval is cleaned up when the component unmounts, preventing potential issues such as memory leaks or unnecessary background processing. 
  If the ImageGallery component is part of a page, and you navigate away from that page (for example, using React Router or Next.js routing), the component will unmount and the cleanup function will be triggered.
  */
  }, []);

  return (
    <article className="grid grid-cols-3 grid-rows-[77fr_23fr] gap-2 w-[350px] h-[570px] bg-gray-100 p-2 rounded-lg shadow-md">
      <div className="relative w-full h-full col-span-3 transition-all duration-500 ease-in-out">
        <Image
          src={currentImages[0]}
          alt="Main image"
          fill
          sizes="(min-width: 400px) 100vw"
          className="object-cover rounded-lg"
        />
      </div>
      {currentImages.slice(1).map((src, index) => (
        <div
          key={index}
          className="transition-all duration-500 ease-in-out relative w-full h-full"
        >
          <Image
            src={src}
            alt={`Thumbnail ${index + 1}`}
            fill
            sizes="(min-width: 400px) 100vw"
            className="object-cover rounded-lg"
          />
        </div>
      ))}
    </article>
  );
}
