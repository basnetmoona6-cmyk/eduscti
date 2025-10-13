import { mutation, query } from "./_generated/server"
import { v } from "convex/values"

export const save = mutation({
  args: {
    imageUrl: v.string(),
    isAllowed: v.boolean(),
  },
  handler: async (ctx, args) => {
    // Check if there's an existing popup
    const existing = await ctx.db.query("popup").order("desc").first()

    if (existing) {
      // Update the existing popup
      await ctx.db.patch(existing._id, {
        imageUrl: args.imageUrl,
        isAllowed: args.isAllowed,
      })
      return existing._id
    } else {
      // Create a new popup
      return await ctx.db.insert("popup", {
        imageUrl: args.imageUrl,
        isAllowed: args.isAllowed,
        createdAt: new Date().toISOString(),
      })
    }
  },
})

export const getLatest = query({
  handler: async (ctx) => {
    return await ctx.db.query("popup").order("desc").first()
  },
})

export const updateStatus = mutation({
  args: {
    id: v.id("popup"),
    isAllowed: v.boolean(),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, { isAllowed: args.isAllowed })
  },
})
