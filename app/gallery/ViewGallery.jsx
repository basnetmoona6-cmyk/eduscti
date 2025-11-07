"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, Eye } from "lucide-react"

export default function ViewGallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  const staticImages = [
    { url: "https://i.ibb.co/JRqtgtGm/Whats-App-Image-2025-10-29-at-10-35-22-6b61e34f.jpg" },
    { url: "https://i.ibb.co/Mxzf5K4C/Whats-App-Image-2025-10-29-at-10-35-27-7b2aed29.jpg" },
    { url: "https://i.ibb.co/ksMKwT5j/Whats-App-Image-2025-10-29-at-11-35-00-ded6374a.jpg" },
    { url: "https://i.ibb.co/Gvppt8WC/Whats-App-Image-2025-10-29-at-11-35-02-954ae206.jpg" },
    { url: "https://i.ibb.co/Z1ML3Fs3/Whats-App-Image-2025-10-29-at-10-35-27-70e675f2.jpg" },
    { url: "https://i.ibb.co/b5195F5w/Whats-App-Image-2025-10-30-at-13-25-57-48c93dbe.jpg" },
    { url: "https://i.ibb.co/WpV13vjn/Whats-App-Image-2025-10-30-at-13-25-59-d8543bc0.jpg" },
    { url: "https://i.ibb.co/gLbjNbLz/Whats-App-Image-2025-10-30-at-13-26-00-b7aac002.jpg" },
    { url: "https://i.ibb.co/QFnqs7DR/Whats-App-Image-2025-10-29-at-10-35-24-ef4f824d.jpg" },
    { url: "https://i.ibb.co/MxnDSnLj/Whats-App-Image-2025-10-29-at-10-35-24-4878aeb7.jpg" },
    { url: "https://i.ibb.co/8LjSrMHf/ooo.jpg" },
    { url: "https://i.ibb.co/chkzFyv9/Whats-App-Image-2025-10-29-at-10-35-28-414eb7a8.jpg" },
     { url: "https://i.ibb.co/tMzSZd8R/Whats-App-Image-2025-10-30-at-13-25-59-d8543bc0.jpg" },
     { url: "https://i.ibb.co/svpBDCG3/Whats-App-Image-2025-10-29-at-11-35-01-fa5455c6.jpg"}
  ]

  const openPreview = (imageUrl) => {
    setSelectedImage(imageUrl)
    document.body.style.overflow = "hidden"
  }

  const closePreview = () => {
    setSelectedImage(null)
    document.body.style.overflow = "unset"
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closePreview()
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedImage])

  useEffect(() => {
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [])

  const renderImageItem = (image, index) => (
    <div
      key={index}
      className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white aspect-square"
      onClick={() => openPreview(image.url)}
      role="button"
      tabIndex={0}
      aria-label={`View image ${index + 1}`}
    >
      <div className="relative w-full h-full">
        <Image
          src={image.url}
          alt={`Gallery Image ${index + 1}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
        <Eye className="text-white size-8 sm:size-10" />
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12">Photo Gallery</h1>
        
        <div className="grid gap-4 sm:gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {staticImages.map((image, index) => renderImageItem(image, index))}
        </div>
      </div>

      {/* Fullscreen Preview */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/98 z-50 flex items-center justify-center p-2 sm:p-4" onClick={closePreview}>
          <div className="relative w-full h-full max-w-[95vw] sm:max-w-6xl max-h-[95vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closePreview}
              className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 bg-white text-gray-900 p-2 sm:p-3 rounded-full shadow-2xl hover:bg-gray-100 transition-all z-10"
              aria-label="Close preview"
            >
              <X size={20} className="sm:size-28" />
            </button>
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={selectedImage}
                alt="Full Preview"
                fill
                className="object-contain max-h-[90vh] max-w-[90vw]"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}