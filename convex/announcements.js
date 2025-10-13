import { mutation, query } from './_generated/server';
import { v } from 'convex/values';

export const create = mutation({
  args: {
    text: v.string(),
    imageUrls: v.optional(v.array(v.string())),
  },
  handler: async (ctx, args) => {
    const createdAt = new Date().toISOString();
    await ctx.db.insert('announcements', {
      text: args.text,
      imageUrls: args.imageUrls,
      createdAt,
    });
  },
});

export const getAll = query({
  handler: async (ctx) => {
    return await ctx.db
      .query('announcements')
      .order('desc', 'createdAt')
      .collect();
  },
});

export const deleteAnnouncement = mutation({
  args: { id: v.id('announcements') },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});