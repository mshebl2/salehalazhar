import mongoose, { Schema, Model } from "mongoose"

export interface IInternalLinkMapping {
    keyword: string
    url: string
    priority: number
    isActive: boolean
    maxUsage?: number
    currentUsage?: number
    createdAt: Date
    updatedAt: Date
}

const InternalLinkMappingSchema = new Schema<IInternalLinkMapping>(
    {
        keyword: { type: String, required: true },
        url: { type: String, required: true },
        priority: { type: Number, default: 1 },
        isActive: { type: Boolean, default: true },
        maxUsage: { type: Number },
        currentUsage: { type: Number, default: 0 },
    },
    {
        timestamps: true,
    }
)

const InternalLinkMapping: Model<IInternalLinkMapping> = mongoose.models.InternalLinkMapping || mongoose.model<IInternalLinkMapping>("InternalLinkMapping", InternalLinkMappingSchema)

export default InternalLinkMapping
