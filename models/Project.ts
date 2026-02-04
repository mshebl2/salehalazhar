import mongoose, { Schema, Document, Model } from "mongoose"

export interface IProject extends Document {
    title: string
    location: string
    category: string
    description: string
    area: string
    year: string
    image: string
    createdAt: Date
    updatedAt: Date
}

const ProjectSchema = new Schema<IProject>(
    {
        title: { type: String, required: true },
        location: { type: String, required: true },
        category: { type: String, required: true },
        description: { type: String, required: true },
        area: { type: String, required: true },
        year: { type: String, required: true },
        image: { type: String, required: true },
    },
    { timestamps: true }
)

const Project: Model<IProject> = mongoose.models.Project || mongoose.model<IProject>("Project", ProjectSchema)

export default Project
