import { mutation, query } from './_generated/server';
import { v } from 'convex/values';

// Create a new folder
export const createFolder = mutation({
  args: { name: v.string() },
  handler: async (ctx, args) => {
    if (!args.name.trim()) {
      console.error('Folder creation failed: Empty name provided');
      throw new Error('Folder name cannot be empty.');
    }
    console.log(`Creating folder with name: ${args.name}`);
    const folderId = await ctx.db.insert('folders', {
      name: args.name.trim(),
      createdAt: new Date().toISOString(),
    });
    console.log(`Folder created with ID: ${folderId}`);
    return folderId;
  },
});

// Rename a folder
export const renameFolder = mutation({
  args: { id: v.id('folders'), newName: v.string() },
  handler: async (ctx, args) => {
    if (!args.newName.trim()) {
      throw new Error('New folder name cannot be empty.');
    }
    await ctx.db.patch(args.id, { name: args.newName.trim() });
  },
});

// Delete a folder and its images
export const deleteFolder = mutation({
  args: { id: v.id('folders') },
  handler: async (ctx, args) => {
    const images = await ctx.db
      .query('images')
      .withIndex('by_folderId', (q) => q.eq('folderId', args.id))
      .collect();
    for (const image of images) {
      await ctx.db.delete(image._id);
    }
    await ctx.db.delete(args.id);
  },
});

// Upload an image to a specific folder
export const upload = mutation({
  args: { url: v.string(), folderId: v.id('folders') },
  handler: async (ctx, args) => {
    await ctx.db.insert('images', { url: args.url, folderId: args.folderId });
  },
});

// Delete an individual image
export const deleteImage = mutation({
  args: { id: v.id('images') },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});

// Get all folders
export const getAllFolders = query({
  handler: async (ctx) => {
    try {
      const folders = await ctx.db
        .query('folders')
        .withIndex('by_createdAt')
        .order('desc')
        .collect();
      console.log(`Fetched ${folders.length} folders`);
      return folders;
    } catch (error) {
      console.error('Failed to fetch folders:', error);
      throw error;
    }
  },
});

// Get images for a specific folder
export const getImagesByFolder = query({
  args: { folderId: v.id('folders') },
  handler: async (ctx, args) => {
    return await ctx.db
      .query('images')
      .withIndex('by_folderId', (q) => q.eq('folderId', args.folderId))
      .collect();
  },
});

// Get all images (for backward compatibility)
export const getAll = query({
  handler: async (ctx) => {
    return await ctx.db.query('images').collect();
  },
});