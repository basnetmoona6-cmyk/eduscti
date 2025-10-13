"use client"

import { useState, useEffect } from "react"
import { useQuery } from "convex/react"
import { api } from "@/convex/_generated/api"
import Image from "next/image"
import {
  X,
  Folder,
  ArrowLeft,
  ImageIcon,
  Home,
  ChevronRight,
  Grid3X3,
  List,
  Eye,
} from "lucide-react"

export default function ViewGallery() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedFolderId, setSelectedFolderId] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [viewMode, setViewMode] = useState("grid")

  const foldersQuery = useQuery(api.images.getAllFolders)
  const imagesQuery = useQuery(api.images.getImagesByFolder, selectedFolderId ? { folderId: selectedFolderId } : "skip")

  const folders = foldersQuery || []
  const images = selectedFolderId ? imagesQuery || [] : []

  useEffect(() => {
    if (foldersQuery !== undefined) {
      setIsLoading(false)
    }
  }, [foldersQuery])

  const openPreview = (imageUrl) => {
    setSelectedImage(imageUrl)
    document.body.style.overflow = "hidden"
  }

  const closePreview = () => {
    setSelectedImage(null)
    document.body.style.overflow = "unset"
  }

  const openFolder = (folderId) => {
    setSelectedFolderId(folderId)
  }

  const goBackToFolders = () => {
    setSelectedFolderId(null)
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        if (selectedImage) {
          closePreview()
        } else if (selectedFolderId) {
          goBackToFolders()
        }
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedImage, selectedFolderId])

  useEffect(() => {
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [])

  const SkeletonLoader = () => (
    <div className="relative rounded-2xl shadow-lg bg-white overflow-hidden animate-pulse border border-gray-100">
      <div className="w-full h-56 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:200%_100%] animate-shimmer"></div>
      <div className="p-6 space-y-4">
        <div className="h-5 bg-gray-200 rounded-lg"></div>
        <div className="h-4 bg-gray-200 rounded-lg w-3/4"></div>
        <div className="h-3 bg-gray-200 rounded-lg w-1/2"></div>
      </div>
    </div>
  )

  const FolderCard = ({ folder }) => {
    const folderImagesQuery = useQuery(api.images.getImagesByFolder, { folderId: folder._id })
    const folderImages = folderImagesQuery || []
    const previewImage = folderImages.length > 0 ? folderImages[0].url : null

    return (
      <div
        className="group relative rounded-2xl overflow-hidden shadow hover:shadow-lg transition-all duration-700 hover:scale-[1.02] cursor-pointer border border-gray-100"
        onClick={() => openFolder(folder._id)}
      >
        <div className="relative w-full h-56 bg-gradient-to-br from-indigo-50 to-purple-50 overflow-hidden">
          {previewImage ? (
            <Image
              src={previewImage}
              alt={`Preview of ${folder.name}`}
              width={400}
              height={300}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-gray-400 h-full">
              <div className="p-6 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 mb-4">
                <ImageIcon size={40} />
              </div>
              <p className="text-sm font-medium">Empty folder</p>
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
            <div className="absolute bottom-4 right-4">
              <ChevronRight size={20} strokeWidth={3} className="text-white transform group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
          <div className="absolute bottom-4 left-4">
            <span className="text-sm font-semibold text-white flex items-center gap-2" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)' }}>
              {folder.name}
            </span>
          </div>
        </div>
      </div>
    )
  }

  const Breadcrumb = () => (
    <nav className="flex items-center space-x-3 text-sm mb-8 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm border border-gray-100 w-fit">
      <button onClick={goBackToFolders} className="flex items-center text-indigo-600 hover:underline">
        <Home size={16} className="mr-2" />
        Gallery
      </button>
      {selectedFolderId && (
        <>
          <ChevronRight size={16} className="text-gray-400" />
          <span className="text-gray-900 font-semibold">
            {folders.find((f) => f._id === selectedFolderId)?.name || "Folder"}
          </span>
        </>
      )}
    </nav>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 pt-24">
      <div className="w-full py-4">
        {!selectedFolderId && (
          <div className="relative w-full h-[60vh] max-sm:h-[30vh] mb-16 overflow-hidden shadow-2xl">
            <Image
              src="https://i.ibb.co/nMd8Cz2S/f.jpg"
              alt="Gallery Background"
              fill
              className="object-cover"
              quality={90}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/60 via-purple-900/40 to-pink-900/60 flex items-center justify-center">
              <div className="text-center text-white space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold">Photo Gallery</h1>
                <p className="text-xl md:text-2xl">Discover and explore beautiful collection of memories</p>
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-12 gap-8">
          <div>
            <h2 className="text-4xl font-bold text-gray-900">
              {selectedFolderId
                ? folders.find((f) => f._id === selectedFolderId)?.name
                : "Image Collections"}
            </h2>
            <p className="text-gray-600 text-lg">
              {selectedFolderId
                ? `${images.length} ${images.length === 1 ? "photo" : "photos"}`
                : `${folders.length} ${folders.length === 1 ? "collection" : "collections"}`}
            </p>
          </div>

          {selectedFolderId ? (
            <button
              onClick={goBackToFolders}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full hover:scale-105 transition"
            >
              <ArrowLeft size={20} />
              Back to Collections
            </button>
          ) : (
            <div className="flex gap-2 bg-white rounded-full p-1 border shadow">
              <button
                onClick={() => setViewMode("grid")}
                className={`px-4 py-2 rounded-full ${
                  viewMode === "grid" ? "bg-indigo-600 text-white" : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <Grid3X3 size={16} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`px-4 py-2 rounded-full ${
                  viewMode === "list" ? "bg-indigo-600 text-white" : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <List size={16} />
              </button>
            </div>
          )}
        </div>

        {selectedFolderId && <Breadcrumb />}

        {!selectedFolderId ? (
          <div className={`grid gap-8 ${viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : ""}`}>
            {isLoading
              ? Array(8)
                  .fill()
                  .map((_, index) => <SkeletonLoader key={index} />)
              : folders.map((folder) => <FolderCard key={folder._id} folder={folder} />)}
          </div>
        ) : (
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-0">
            {images.length === 0 ? (
              <div className="col-span-full text-center py-20">
                <ImageIcon size={64} className="text-indigo-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">No photos yet</h3>
                <p className="text-gray-500">Upload some beautiful memories here</p>
              </div>
            ) : (
              images.map((image, index) => (
                <div
                  key={image._id || index}
                  className="relative aspect-square"
                  onClick={() => openPreview(image.url)}
                >
                  <Image
                    src={image.url}
                    alt={`Image ${index + 1}`}
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))
            )}
          </div>
        )}
      </div>

      {/* Fullscreen Preview */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6" onClick={closePreview}>
          <div className="relative max-w-6xl w-full">
            <button
              onClick={closePreview}
              className="absolute top-4 right-4 bg-white text-gray-700 p-2 rounded-full shadow"
            >
              <X size={20} />
            </button>
            <Image
              src={selectedImage}
              alt="Preview"
              width={1200}
              height={800}
              className="w-full h-auto object-contain max-h-[90vh] mx-auto"
            />
          </div>
        </div>
      )}
    </div>
  )
}