import mongoose, { Schema, Document, Model } from "mongoose"

export interface IPost extends Document {
    slug: string
    title: string
    excerpt?: string
    content?: string
    featuredImage?: string
    isPublished: boolean
    publishedAt?: Date
    author?: string
    tags: string[]
    createdAt: Date
    updatedAt: Date
}

const PostSchema = new Schema<IPost>(
    {
        slug: { type: String, required: true, unique: true },
        title: { type: String, required: true },
        excerpt: String,
        content: String,
        featuredImage: String,
        isPublished: { type: Boolean, default: false },
        publishedAt: Date,
        author: String,
        tags: [String],
    },
    {
        timestamps: true,
    }
)

// Prevent overwriting model if already compiled
const Post: Model<IPost> = mongoose.models.Post || mongoose.model<IPost>("Post", PostSchema)

export default Post
