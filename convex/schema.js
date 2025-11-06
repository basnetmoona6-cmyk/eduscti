import { defineSchema, defineTable } from "convex/server"
import { v } from "convex/values"

// Custom validator for ISO 8601 date string
const isoDateString = v.string()

export default defineSchema({

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

  news: defineTable({
    text: v.string(),
    createdAt: isoDateString,
  }),

  registrationStatus: defineTable({
    registrationOpen: v.boolean(),
  }),
})
