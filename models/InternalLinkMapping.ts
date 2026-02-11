import mongoose, { Schema, Model } from "mongoose"

export interface IInternalLinkMapping {
    keyword: string
    url: string
    priority: number
    caseSensitive: boolean
    maxOccurrences: number
    isActive: boolean
    flexibleMatch?: boolean
    createdAt: Date
    updatedAt: Date
}

const InternalLinkMappingSchema = new Schema<IInternalLinkMapping>(
    {
        keyword: { type: String, required: true },
        url: { type: String, required: true },
        priority: { type: Number, default: 1 },
        caseSensitive: { type: Boolean, default: false },
        maxOccurrences: { type: Number, default: 3 },
        isActive: { type: Boolean, default: true },
        flexibleMatch: { type: Boolean, default: true },
    },
    {
        timestamps: true,
    }
)

const InternalLinkMapping: Model<IInternalLinkMapping> = mongoose.models.InternalLinkMapping || mongoose.model<IInternalLinkMapping>("InternalLinkMapping", InternalLinkMappingSchema)

export default InternalLinkMapping
