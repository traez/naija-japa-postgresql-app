'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const images = [
  '/dispensation.jpeg',
  '/escape.jpeg',
  '/e-go-be.jpeg',
  '/xabi-alonso.jpeg',
]

export default function ImageGallery() {
  const [currentImages, setCurrentImages] = useState(images)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImages(prevImages => {
        const [first, ...rest] = prevImages
        return [...rest, first]
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-[400px] h-[350px] bg-gray-100 p-4 rounded-lg shadow-md">
      <div className="grid grid-cols-3 grid-rows-2 gap-4 h-full">
        <div className="col-span-3 row-span-1 transition-all duration-500 ease-in-out">
          <Image
            src={currentImages[0]}
            alt="Main image"
            width={198}
            height={264}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        {currentImages.slice(1).map((src, index) => (
          <div key={index} className="transition-all duration-500 ease-in-out">
            <Image
              src={src}
              alt={`Thumbnail ${index + 1}`}
              width={50}
              height={67}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

