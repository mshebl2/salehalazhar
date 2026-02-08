import mongoose, { Schema, Model } from "mongoose"

export interface ISEOConfig {
    globalAutoSEO: boolean
    globalAutoInternalLinks: boolean
    maxInternalLinksPerPost: number
    defaultMetaTitle?: string
    defaultMetaDescription?: string
    defaultMetaKeywords?: string[]
    createdAt: Date
    updatedAt: Date
}

const SEOConfigSchema = new Schema<ISEOConfig>(
    {
        globalAutoSEO: { type: Boolean, default: true },
        globalAutoInternalLinks: { type: Boolean, default: true },
        maxInternalLinksPerPost: { type: Number, default: 5 },
        defaultMetaTitle: String,
        defaultMetaDescription: String,
        defaultMetaKeywords: [String],
    },
    {
        timestamps: true,
    }
)

const SEOConfig: Model<ISEOConfig> = mongoose.models.SEOConfig || mongoose.model<ISEOConfig>("SEOConfig", SEOConfigSchema)

export default SEOConfig
