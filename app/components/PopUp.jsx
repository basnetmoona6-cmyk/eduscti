
"use client";

import { useState, useEffect, useMemo, useRef } from "react"
import { useQuery } from "convex/react"
import { api } from "@/convex/_generated/api"
import { X } from "lucide-react"
import Image from "next/image"

const Popup = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isImageLoading, setIsImageLoading] = useState(true)
  const [imageDimensions, setImageDimensions] = useState({ width: null, height: null })
  const [naturalDimensions, setNaturalDimensions] = useState({ width: null, height: null })
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)
  const popupRef = useRef(null)
  const previewRef = useRef(null)

  const popupData = useQuery(api.popup.getLatest, {}, { onError: (err) => {
    console.error("Convex query error:", err.message)
    setError(err.message)
  }})

  // Memoize popupData to prevent unnecessary re-renders
  const memoizedPopupData = useMemo(() => popupData, [popupData])

  useEffect(() => {
    console.log("Popup data:", memoizedPopupData)
    
    if (error) {
      setIsLoading(false)
      setIsVisible(false)
      return
    }

    if (memoizedPopupData === undefined) {
      setIsLoading(true)
      setIsVisible(true)
      return
    }

    setIsLoading(false)

    if (!memoizedPopupData || memoizedPopupData.isAllowed === false || !memoizedPopupData.imageUrl) {
      console.log("Popup not shown: invalid data or not allowed")
      setIsVisible(false)
      return
    }

    const popupDismissed = sessionStorage.getItem("popup-dismissed")
    if (!popupDismissed) {
      console.log("Showing popup: not dismissed")
      setIsVisible(true)
    } else {
      console.log("Popup dismissed in session")
      setIsVisible(false)
    }
  }, [memoizedPopupData, error])

  // Handle Esc key for closing modals
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        if (isPreviewOpen) {
          console.log("Closing preview modal via Esc")
          setIsPreviewOpen(false)
        } else if (isVisible) {
          console.log("Closing main popup via Esc")
          setIsVisible(false)
          sessionStorage.setItem("popup-dismissed", "true")
        }
      }
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [isPreviewOpen, isVisible])

  // Focus management for accessibility
  useEffect(() => {
    if (isVisible && popupRef.current) {
      popupRef.current.focus()
    }
    if (isPreviewOpen && previewRef.current) {
      previewRef.current.focus()
    }
  }, [isVisible, isPreviewOpen])

  const handleClose = () => {
    console.log("Closing popup, setting popup-dismissed")
    setIsVisible(false)
    sessionStorage.setItem("popup-dismissed", "true")
  }

  const handleImageClick = () => {
    console.log("Opening preview modal")
    setIsPreviewOpen(true)
  }

  const handlePreviewClose = () => {
    console.log("Closing preview modal")
    setIsPreviewOpen(false)
  }

  const handleImageLoad = (img) => {
    console.log("Image loaded, natural dimensions:", img.target.naturalWidth, img.target.naturalHeight)
    const naturalWidth = img.target.naturalWidth
    const naturalHeight = img.target.naturalHeight
    let scaledWidth = naturalWidth
    let scaledHeight = naturalHeight

    // Adjust scaling based on screen size
    const isPC = window.innerWidth >= 640 // Tailwind sm breakpoint
    const maxWidthPx = isPC ? window.innerWidth * 0.9 : window.innerWidth * 0.85 // Larger on PC
    const maxHeightPx = isPC ? window.innerHeight * 0.9 : window.innerHeight * 0.85 // Larger on PC
    if (scaledWidth > maxWidthPx) {
      const scaleFactor = maxWidthPx / scaledWidth
      scaledWidth = maxWidthPx
      scaledHeight = scaledHeight * scaleFactor
    }
    if (scaledHeight > maxHeightPx) {
      const scaleFactor = maxHeightPx / scaledHeight
      scaledHeight = maxHeightPx
      scaledWidth = scaledWidth * scaleFactor
    }
    // Boost size on PC screens
    if (isPC) {
      scaledWidth = scaledWidth * 1.5 // 50% larger on PC
      scaledHeight = scaledHeight * 1.5
      // Re-check max constraints after scaling
      if (scaledWidth > maxWidthPx) {
        const scaleFactor = maxWidthPx / scaledWidth
        scaledWidth = maxWidthPx
        scaledHeight = scaledHeight * scaleFactor
      }
      if (scaledHeight > maxHeightPx) {
        const scaleFactor = maxHeightPx / scaledHeight
        scaledHeight = maxHeightPx
        scaledWidth = scaledWidth * scaleFactor
      }
    }

    setImageDimensions({
      width: scaledWidth,
      height: scaledHeight,
    })
    setNaturalDimensions({
      width: naturalWidth,
      height: naturalHeight,
    })
    setIsImageLoading(false)
  }

  if (error) {
    console.error("Popup not rendered due to error:", error)
    return null
  }

  if (!isVisible) {
    console.log("Popup not visible")
    return null
  }

  // Fallback dimensions for placeholder image
  const fallbackDimensions = { width: 300, height: 200 }

  return (
    <>
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-4"
        role="dialog"
        aria-modal="true"
        aria-label="Popup announcement"
        tabIndex={-1}
        ref={popupRef}
      >
        <div
          className="relative"
          style={{
            width: imageDimensions.width
              ? `${imageDimensions.width}px`
              : memoizedPopupData?.imageUrl
              ? window.innerWidth >= 640
                ? "min(70vw, 800px)" // Larger default for PC
                : "min(80vw, 400px)" // Phone-friendly
              : `${fallbackDimensions.width}px`,
            height: imageDimensions.height
              ? `${imageDimensions.height}px`
              : memoizedPopupData?.imageUrl
              ? window.innerWidth >= 640
                ? "min(70vh, 600px)" // Larger default for PC
                : "min(80vh, 300px)" // Phone-friendly
              : `${fallbackDimensions.height}px`,
            maxWidth: window.innerWidth >= 640 ? "90vw" : "85vw", // Larger on PC
            maxHeight: window.innerWidth >= 640 ? "90vh" : "85vh",
            overflow: "hidden",
          }}
        >
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 w-8 h-8 sm:w-10 sm:h-10 bg-transparent hover:bg-white/20 text-white rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Close popup"
          >
            <X size={16} className="sm:w-20 sm:h-20" />
          </button>
          <div className="relative bg-white overflow-hidden">
            {(isLoading || isImageLoading) && (
              <div
                className="absolute inset-0 flex items-center justify-center bg-white/80"
                style={{
                  width: imageDimensions.width
                    ? `${imageDimensions.width}px`
                    : memoizedPopupData?.imageUrl
                    ? "100%"
                    : `${fallbackDimensions.width}px`,
                  height: imageDimensions.height
                    ? `${imageDimensions.height}px`
                    : memoizedPopupData?.imageUrl
                    ? "100%"
                    : `${fallbackDimensions.height}px`,
                }}
              >
                <div className="w-8 h-8 sm:w-12 sm:h-12 border-3 sm:border-4 border-gray-900 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
            {!isLoading && memoizedPopupData?.imageUrl && (
              <Image
                src={memoizedPopupData.imageUrl || "/placeholder.svg"}
                alt="Popup announcement"
                width={imageDimensions.width || fallbackDimensions.width}
                height={imageDimensions.height || fallbackDimensions.height}
                className="object-contain cursor-pointer w-full h-full"
                priority
                quality={70}
                onLoad={handleImageLoad}
                onError={() => {
                  console.error("Failed to load popup image, using fallback")
                  setImageDimensions({
                    width: Math.min(fallbackDimensions.width, (window.innerWidth >= 640 ? window.innerWidth * 0.9 : window.innerWidth * 0.85) * (fallbackDimensions.width / fallbackDimensions.height)),
                    height: Math.min(fallbackDimensions.height, window.innerWidth >= 640 ? window.innerHeight * 0.9 : window.innerHeight * 0.85),
                  })
                  setNaturalDimensions(fallbackDimensions)
                  setIsImageLoading(false)
                }}
                onClick={handleImageClick}
              />
            )}
          </div>
        </div>
      </div>

      {isPreviewOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-60 p-2 sm:p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          tabIndex={-1}
          ref={previewRef}
        >
          <div
            className="relative"
            style={{
              width: naturalDimensions.width
                ? `${Math.min(naturalDimensions.width * (window.innerWidth >= 640 ? 1.5 : 1), window.innerWidth * (window.innerWidth >= 640 ? 0.95 : 0.9))}px`
                : `${fallbackDimensions.width}px`,
              height: naturalDimensions.height
                ? `${Math.min(naturalDimensions.height * (window.innerWidth >= 640 ? 1.5 : 1), window.innerHeight * (window.innerWidth >= 640 ? 0.95 : 0.9))}px`
                : `${fallbackDimensions.height}px`,
              maxWidth: window.innerWidth >= 640 ? "95vw" : "90vw", // Larger on PC
              maxHeight: window.innerWidth >= 640 ? "95vh" : "90vh",
              overflow: "hidden",
            }}
          >
            <button
              onClick={handlePreviewClose}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 w-8 h-8 fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-4 sm:w-10 sm:h-10 bg-transparent hover:bg-white/20 text-white rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Close preview"
            >
              <X size={16} className="sm:w-20 sm:h-20" />
            </button>
            <div className="relative bg-white overflow-hidden">
              <Image
                src={memoizedPopupData?.imageUrl || "/placeholder.svg"}
                alt="Image preview"
                width={naturalDimensions.width || fallbackDimensions.width}
                height={naturalDimensions.height || fallbackDimensions.height}
                className="object-contain w-full h-full"
                quality={100}
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Popup
