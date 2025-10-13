"use client"
import { useState, useEffect } from "react"
import { useQuery } from "convex/react"
import { api } from "@/convex/_generated/api"
import { X, Eye, Download } from "lucide-react"

export default function AnnouncementPage() {
  const announcements = useQuery(api.announcements.getAll)
  const [showPopup, setShowPopup] = useState(true)

  useEffect(() => {
    document.body.style.overflow = showPopup ? "hidden" : "unset"
  }, [showPopup])

  if (!announcements || announcements.length === 0) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-50 pt-32">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-700">No Announcements</h1>
      </main>
    )
  }

  const latestAnnouncement = announcements[0]

  return (
    <>
      {/* Modal for Latest Announcement */}
      {showPopup && latestAnnouncement && (latestAnnouncement.imageUrls?.length > 0 || latestAnnouncement.text) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 overflow-y-auto">
          <div className="relative w-full max-w-3xl sm:max-w-4xl rounded-xl overflow-auto shadow-2xl bg-white/90 backdrop-blur-md max-h-[90vh]">
            <div className="sticky top-0 bg-white bg-opacity-90 rounded-t-lg p-4 sm:p-6 shadow-md z-20 flex justify-between items-center">
              <h2 className="text-xl sm:text-2xl font-bold text-indigo-700">Announcement</h2>
              <button
                onClick={() => setShowPopup(false)}
                aria-label="Close announcement"
                className="text-gray-500 hover:text-indigo-700 transition focus:outline-none"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col gap-4 p-4 sm:p-6">
              {latestAnnouncement.imageUrls?.length > 0 &&
                latestAnnouncement.imageUrls.map((url, i) => (
                  <div key={i} className="relative">
                    <img
                      src={url || "/placeholder.svg"}
                      alt={`Announcement Image ${i + 1}`}
                      className="w-full max-h-[60vh] object-contain rounded-lg"
                    />
                    <div className="absolute inset-0 flex justify-end items-start p-2 bg-black/10 rounded-lg space-x-2">
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-yellow-300 p-1"
                        title="Preview Image"
                      >
                        <Eye size={20} />
                      </a>
                      <a href={url} download className="text-white hover:text-green-400 p-1" title="Download Image">
                        <Download size={20} />
                      </a>
                    </div>
                  </div>
                ))}
              {latestAnnouncement.text && (
                <p className="text-gray-700 whitespace-pre-line text-base sm:text-lg">{latestAnnouncement.text}</p>
              )}
              <p className="text-sm text-gray-500">
                Uploaded: {new Date(latestAnnouncement._creationTime).toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* FULL WIDTH + HEIGHT BANNER FLUSH WITH NAVBAR */}
      <div
        className="w-full text-indigo-800 text-center mt-20 sm:mt-28 shadow-2xl min-h-[300px] sm:min-h-[400px] flex items-center justify-center px-4 sm:px-6 relative"
        style={{
          backgroundImage: `url('https://i.ibb.co/fzZ34k3V/Whats-App-Image-2025-06-05-at-17-25-27-70173187.jpg')`,
          backgroundSize: "100% 100%", // Adjusts image to match card's width and height
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide leading-tight text-white relative z-10"></h1>
      </div>

      {/* Announcements List */}
      <main className="min-h-screen bg-gray-50 px-4 sm:px-6 md:px-8 py-12 max-w-5xl mx-auto space-y-10">
        {announcements.map((announcement) => (
          <div key={announcement._id} className="bg-white p-4 sm:p-6 rounded-xl shadow-md space-y-4">
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed whitespace-pre-line">
              {announcement.text}
            </p>

            <p className="text-sm text-gray-500">Uploaded: {new Date(announcement._creationTime).toLocaleString()}</p>

            {announcement.imageUrls?.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {announcement.imageUrls.map((url, i) => (
                  <div key={i} className="relative">
                    <img
                      src={url || "/placeholder.svg"}
                      alt={`Announcement ${i + 1}`}
                      className="w-full max-h-[300px] sm:max-h-[400px] object-contain rounded-lg"
                    />
                    <div className="absolute inset-0 flex justify-end items-start p-2 bg-black/10 rounded-lg space-x-2">
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-yellow-300 p-1"
                        title="Preview Image"
                      >
                        <Eye size={20} />
                      </a>
                      <a href={url} download className="text-white hover:text-green-400 p-1" title="Download Image">
                        <Download size={20} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </main>
    </>
  )
}
