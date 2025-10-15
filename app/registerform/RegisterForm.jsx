"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import confetti from "canvas-confetti"
import { useMutation, useQuery } from "convex/react"
import { api } from "@/convex/_generated/api"
import { toast } from "react-toastify"
import {
  X,
  Eye,
  Upload,
  Check,
  AlertCircle,
  Home,
  FileImage,
  User,
  Phone,
  BadgeIcon as IdCard,
  Calendar,
} from "lucide-react"
import "react-toastify/dist/ReactToastify.css"

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    phone: "",
    citizenshipImage: null,
    citizenshipPreview: null,
    citizenshipFileName: "",
    admitCardImage: null,
    admitCardPreview: null,
    admitCardFileName: "",
    seeCertificateImage: null,
    seeCertificatePreview: null,
    seeCertificateFileName: "",
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [fullPreviewImage, setFullPreviewImage] = useState(null)

  // Get dynamic year (current year + 1)
  const currentYear = new Date().getFullYear()
  const admissionYear = currentYear 

  // Correct API calls
  const createStudent = useMutation(api.students.createStudent)
  const initializeRegistrationStatus = useMutation(api.registrationStatus.initializeRegistrationStatus)
  const isRegistrationOpen = useQuery(api.registrationStatus.getRegistrationStatus)

  useEffect(() => {
    const initStatus = async () => {
      try {
        await initializeRegistrationStatus()
      } catch (err) {
        console.error("Failed to initialize registration status:", err)
      }
    }
    initStatus()
  }, [initializeRegistrationStatus])

  useEffect(() => {
    if (isRegistrationOpen === undefined) {
      setLoading(true)
    } else if (isRegistrationOpen === null) {
      setLoading(false)
      setError("Failed to load registration status. Please try again later.")
    } else {
      setLoading(false)
      setError(null)
    }
  }, [isRegistrationOpen])

  const triggerConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 60,
      origin: { y: 0.6 },
      colors: ["#3B82F6", "#1D4ED8", "#2563EB", "#1E40AF", "#60A5FA"],
      disableForReducedMotion: true,
    })
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"
    if (!formData.phone.match(/^\+?[1-9]\d{1,14}$/)) newErrors.phone = "Enter a valid phone number (e.g., +1234567890)"
    if (!formData.citizenshipImage) newErrors.citizenshipImage = "Citizenship image is required"
    if (!formData.admitCardImage) newErrors.admitCardImage = "Admit card image is required"
    if (Object.keys(newErrors).length > 0) {
      newErrors.form = "Please fill out all required fields correctly"
    }
    return newErrors
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: "" }))
  }

  const handleImageChange = (e, imageType) => {
    const file = e.target.files[0]
    if (!file) return

    
    if (file.size > 5 * 1024 * 1024) {
      setErrors((prev) => ({ ...prev, [imageType]: "File size must be less than 5MB" }))
      return
    }
    if (!file.type.match(/image\/*/)) {
      setErrors((prev) => ({ ...prev, [imageType]: "Please upload a valid image file" }))
      return
    }

    const reader = new FileReader()
    reader.onloadend = () => {
      setFormData((prev) => ({
        ...prev,
        [imageType]: file,
        [`${imageType}Preview`]: reader.result,
        [`${imageType}FileName`]: file.name,
      }))
      setErrors((prev) => ({ ...prev, [imageType]: "" }))
    }
    reader.onerror = () => {
      setErrors((prev) => ({ ...prev, [imageType]: "Failed to load image preview. Try another file." }))
    }
    reader.readAsDataURL(file)
  }

  const removeImage = (imageType) => {
    setFormData((prev) => ({
      ...prev,
      [imageType]: null,
      [`${imageType}Preview`]: null,
      [`${imageType}FileName`]: "",
    }))
  }

  const uploadToImgBB = async (image) => {
    const formDataUpload = new FormData()
    formDataUpload.append("image", image)
    formDataUpload.append("key", "da0e60f3c5f9a9dfd0946f91204cca53")

    const response = await fetch("https://api.imgbb.com/1/upload", {
      method: "POST",
      body: formDataUpload,
    })
    const data = await response.json()

    if (!data.success) {
      throw new Error(data.error?.message || "Failed to upload image")
    }
    return data.data.url
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validateForm()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      toast.error(validationErrors.form)
      return
    }

    setIsSubmitting(true)
    try {
      toast.info("Uploading images...")

      const citizenshipUrl = await uploadToImgBB(formData.citizenshipImage)
      toast.success("Citizenship image uploaded successfully")

      const admitCardUrl = await uploadToImgBB(formData.admitCardImage)
      toast.success("Admit card image uploaded successfully")

      let seeCertificateUrl
      if (formData.seeCertificateImage) {
        seeCertificateUrl = await uploadToImgBB(formData.seeCertificateImage)
        toast.success("SEE certificate image uploaded successfully")
      }

      toast.info("Saving registration...")

      await createStudent({
        firstName: formData.firstName.trim(),
        middleName: formData.middleName.trim() || undefined,
        lastName: formData.lastName.trim(),
        phone: formData.phone,
        citizenshipImage: citizenshipUrl,
        admitCardImage: admitCardUrl,
        seeCertificateImage: seeCertificateUrl,
      })

      setSubmitStatus("success")
      triggerConfetti()
      setFormData({
        firstName: "",
        middleName: "",
        lastName: "",
        phone: "",
        citizenshipImage: null,
        citizenshipPreview: null,
        citizenshipFileName: "",
        admitCardImage: null,
        admitCardPreview: null,
        admitCardFileName: "",
        seeCertificateImage: null,
        seeCertificatePreview: null,
        seeCertificateFileName: "",
      })
      toast.success("Registration submitted successfully!")
    } catch (error) {
      console.error("Submission error:", error)
      setSubmitStatus("error")
      toast.error(`Failed to submit registration: ${error.message}`)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleReset = () => {
    setFormData({
      firstName: "",
      middleName: "",
      lastName: "",
      phone: "",
      citizenshipImage: null,
      citizenshipPreview: null,
      citizenshipFileName: "",
      admitCardImage: null,
      admitCardPreview: null,
      admitCardFileName: "",
      seeCertificateImage: null,
      seeCertificatePreview: null,
      seeCertificateFileName: "",
    })
    setErrors({})
    setSubmitStatus(null)
  }

  const goToHomePage = () => {
    window.location.href = "/"
  }

  // Enhanced Skeleton Loader
  const FormSkeleton = () => (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden animate-pulse">
      {/* Header Skeleton */}
      <div className="bg-gradient-to-r from-gray-200 to-gray-300 h-32"></div>

      {/* Form Content Skeleton */}
      <div className="p-6 space-y-6">
        {/* Personal Info Section */}
        <div className="space-y-4">
          <div className="h-6 bg-gray-200 rounded w-1/3"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              <div className="h-10 bg-gray-100 rounded-lg"></div>
            </div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              <div className="h-10 bg-gray-100 rounded-lg"></div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded w-1/3"></div>
            <div className="h-10 bg-gray-100 rounded-lg"></div>
          </div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            <div className="h-10 bg-gray-100 rounded-lg"></div>
          </div>
        </div>

        {/* Documents Section */}
        <div className="space-y-4">
          <div className="h-6 bg-gray-200 rounded w-1/2"></div>
          {[1, 2, 3].map((i) => (
            <div key={i} className="space-y-2">
              <div className="h-4 bg-gray-200 rounded w-1/3"></div>
              <div className="h-24 bg-gray-100 rounded-lg border-2 border-dashed border-gray-200"></div>
            </div>
          ))}
        </div>

        {/* Buttons Skeleton */}
        <div className="flex gap-3 pt-4">
          <div className="flex-1 h-10 bg-gray-200 rounded-lg"></div>
          <div className="w-20 h-10 bg-gray-100 rounded-lg"></div>
        </div>
      </div>
    </div>
  )

  // Image Upload Component
  const ImageUploadField = ({ label, imageType, required = false, icon: Icon = FileImage, description }) => {
    const preview = formData[`${imageType}Preview`]
    const fileName = formData[`${imageType}FileName`]
    const error = errors[imageType]

    return (
      <div className="space-y-2">
        <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
          <Icon size={14} className="text-purple-500" />
          {label}
          {required && <span className="text-red-500"></span>}
        </label>
        {description && <p className="text-xs text-gray-500">{description}</p>}

        {!preview ? (
          <div className="relative">
            <input
              type="file"
              id={imageType}
              onChange={(e) => handleImageChange(e, imageType)}
              accept="image/*"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              required={required}
            />
            <div
              className={`border-2 border-dashed rounded-lg p-4 text-center transition-all duration-200 hover:border-purple-400 hover:bg-purple-50 ${
                error ? "border-red-300 bg-red-50" : "border-gray-300 bg-gray-50"
              }`}
            >
              <Upload size={24} className={`mx-auto mb-2 ${error ? "text-red-400" : "text-gray-400"}`} />
              <p className="text-xs font-medium text-gray-600 mb-1">Click to upload</p>
              <p className="text-xs text-gray-500">PNG, JPG up to 5MB</p>
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm"
          >
            <div className="flex items-start gap-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Check size={14} className="text-green-500" />
                  <span className="text-xs font-medium text-gray-700 truncate">{fileName}</span>
                </div>
                <img
                  src={preview || "/placeholder.svg"}
                  alt={`${label} preview`}
                  className="w-full h-24 object-cover rounded border border-gray-200"
                />
              </div>
              <div className="flex flex-col gap-1">
                <button
                  type="button"
                  onClick={() => setFullPreviewImage(preview)}
                  className="p-1.5 bg-purple-100 hover:bg-purple-200 text-purple-600 rounded transition-colors"
                  title="Full preview"
                >
                  <Eye size={14} />
                </button>
                <button
                  type="button"
                  onClick={() => removeImage(imageType)}
                  className="p-1.5 bg-red-100 hover:bg-red-200 text-red-600 rounded transition-colors"
                  title="Remove image"
                >
                  <X size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {error && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-500 text-xs flex items-center gap-1"
          >
            <AlertCircle size={10} />
            {error}
          </motion.p>
        )}
      </div>
    )
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-purple-50 py-8 px-4">
        <div className="container mx-auto max-w-2xl">
          <FormSkeleton />
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-purple-50 flex items-center justify-center py-8 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md text-center border border-red-200"
        >
          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertCircle size={24} className="text-red-500" />
          </div>
          <h2 className="text-lg font-semibold text-red-600 mb-3">Connection Error</h2>
          <p className="text-gray-600 text-sm mb-4">{error}</p>
          <button
            onClick={goToHomePage}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 mx-auto text-sm"
          >
            <Home size={14} />
            Go to Homepage
          </button>
        </motion.div>
      </div>
    )
  }

  if (!isRegistrationOpen) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-purple-50 flex items-center justify-center py-8 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md text-center border border-orange-200"
        >
          <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertCircle size={24} className="text-orange-500" />
          </div>
          <h2 className="text-lg font-semibold text-orange-600 mb-3">Registration Closed</h2>
          <p className="text-gray-600 text-sm mb-4">
            Pre-registration for SCTI {admissionYear}  is currently closed. For more information contact us.
          </p>
          <div className="space-y-2">
            
            <button
              onClick={goToHomePage}
              className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 mx-auto text-sm"
            >
              <Home size={14} />
              Go to Homepage
            </button>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen mt-20 bg-gradient-to-br from-purple-50 via-indigo-50 to-purple-50 py-8 px-4">
      <div className="container mx-auto max-w-2xl">
        <AnimatePresence mode="wait">
          {submitStatus === "success" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-gradient-to-br from-purple-500 via-purple-600 to-indigo-700 rounded-xl shadow-2xl p-8 text-center text-white"
            >
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
                <Check size={32} className="text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Registration Successful!</h2>
              <p className="text-purple-100 mb-6 leading-relaxed">
                You're pre-registered for SCTI College {admissionYear} For More Information Inquiry Us 
                confirmation.
              </p>
              <button
                onClick={goToHomePage}
                className="bg-white text-purple-600 px-6 py-2.5 rounded-lg font-semibold hover:bg-purple-50 transition-colors shadow-lg flex items-center gap-2 mx-auto"
              >
                <Home size={16} />
                Go to Homepage
              </button>
            </motion.div>
          ) : submitStatus === "error" ? (
            <motion.div
              key="error"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-gradient-to-br from-red-500 via-red-600 to-pink-600 rounded-xl shadow-2xl p-8 text-center text-white"
            >
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertCircle size={32} className="text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Registration Failed</h2>
              <p className="text-red-100 mb-6 leading-relaxed">
                An error occurred during registration. Please try again or contact support.
              </p>
              <div className="space-y-3">
                <button
                  onClick={() => setSubmitStatus(null)}
                  className="bg-white text-red-600 px-6 py-2.5 rounded-lg font-semibold hover:bg-red-50 transition-colors shadow-lg block mx-auto"
                >
                  Try Again
                </button>
                <button
                  onClick={goToHomePage}
                  className="bg-white/20 backdrop-blur-sm text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-white/30 transition-colors flex items-center gap-2 mx-auto"
                >
                  <Home size={16} />
                  Go to Homepage
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 text-white text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Calendar size={20} />
                  <h1 className="text-2xl font-bold">Pre-Registration {admissionYear}</h1>
                </div>
                <p className="text-purple-100 text-sm">SCTI Admissions</p>
              </div>

              {/* Form */}
              <div className="p-6">
                {errors.form && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2"
                  >
                    <AlertCircle size={16} className="text-red-500 flex-shrink-0" />
                    <p className="text-red-700 text-sm">{errors.form}</p>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-base font-semibold text-gray-800 flex items-center gap-2">
                      <User size={16} className="text-purple-600" />
                      Personal Information
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          First Name <span className="text-red-500"></span>
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="Enter first name"
                          className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors text-sm ${
                            errors.firstName ? "border-red-300 bg-red-50" : "border-gray-300"
                          }`}
                          required
                        />
                        {errors.firstName && (
                          <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                            <AlertCircle size={10} />
                            {errors.firstName}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Last Name <span className="text-red-500"></span>
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Enter last name"
                          className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors text-sm ${
                            errors.lastName ? "border-red-300 bg-red-50" : "border-gray-300"
                          }`}
                          required
                        />
                        {errors.lastName && (
                          <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                            <AlertCircle size={10} />
                            {errors.lastName}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Middle Name (Optional)</label>
                      <input
                        type="text"
                        name="middleName"
                        value={formData.middleName}
                        onChange={handleInputChange}
                        placeholder="Enter middle name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors text-sm"
                      />
                    </div>

                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                        <Phone size={14} className="text-purple-600" />
                        Phone Number <span className="text-red-500"></span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="9876543210"
                        className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors text-sm ${
                          errors.phone ? "border-red-300 bg-red-50" : "border-gray-300"
                        }`}
                        required
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle size={10} />
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Document Uploads */}
                  <div className="space-y-4">
                    <h3 className="text-base font-semibold text-gray-800 flex items-center gap-2">
                      <IdCard size={16} className="text-purple-600" />
                      Required Documents
                    </h3>

                    <ImageUploadField
                      label="Citizenship/Birth Certificate"
                      imageType="citizenshipImage"
                      required={true}
                      description="Upload a clear photo of your citizenship or birth certificate"
                    />

                    <ImageUploadField
                      label="Admit Card"
                      imageType="admitCardImage"
                      required={true}
                      description="Upload your exam admit card"
                    />

                    {/* <ImageUploadField
                      label="SEE Pre-Certificate"
                      imageType="seeCertificateImage"
                      required={false}
                      description="Optional: Upload your SEE pre-certificate if available"
                    /> */}
                  </div>

                  {/* Submit Buttons */}
                  <div className="flex gap-3 pt-4">
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className={`flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2.5 rounded-lg font-medium hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-md text-sm ${
                        isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:shadow-lg"
                      }`}
                      whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.99 }}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center gap-2">
                          <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                          Submitting...
                        </div>
                      ) : (
                        "Submit Registration"
                      )}
                    </motion.button>

                    <motion.button
                      type="button"
                      onClick={handleReset}
                      className="px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors text-sm"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      Reset
                    </motion.button>
                  </div>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Full Preview Modal */}
        {fullPreviewImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            onClick={() => setFullPreviewImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <img
                src={fullPreviewImage || "/placeholder.svg"}
                alt="Full preview"
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
              />
              <button
                onClick={() => setFullPreviewImage(null)}
                className="absolute top-4 right-4 w-8 h-8 bg-black/60 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-colors"
              >
                <X size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default RegisterForm
