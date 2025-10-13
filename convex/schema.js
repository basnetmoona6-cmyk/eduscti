import { defineSchema, defineTable } from "convex/server"
import { v } from "convex/values"

// Custom validator for ISO 8601 date string
const isoDateString = v.string()

export default defineSchema({
  images: defineTable({
    url: v.string(),
    folderId: v.id("folders"),
  }).index("by_folderId", ["folderId"]),
  folders: defineTable({
    name: v.string(),
    createdAt: isoDateString,
  }).index("by_createdAt", ["createdAt"]),
  students: defineTable({
    firstName: v.string(),
    middleName: v.optional(v.string()),
    lastName: v.string(),
    phone: v.string(),
    citizenshipImage: v.string(),
    admitCardImage: v.string(),
    seeCertificateImage: v.optional(v.string()),
    createdAt: isoDateString,
  }),
  announcements: defineTable({
    text: v.string(),
    imageUrls: v.optional(v.array(v.string())),
    createdAt: isoDateString,
  }),
  news: defineTable({
    text: v.string(),
    createdAt: isoDateString,
  }),
  popup: defineTable({
    imageUrl: v.string(),
    isAllowed: v.boolean(),
    createdAt: isoDateString,
  }).index("by_createdAt", ["createdAt"]),
  registrationStatus: defineTable({
    registrationOpen: v.boolean(),
  }),
})
