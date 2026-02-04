"use server"

import connectDB from "@/lib/db"
import Project from "@/models/Project"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function createProject(formData: FormData) {
    await connectDB()

    const title = formData.get("title")
    const location = formData.get("location")
    const category = formData.get("category")
    const description = formData.get("description")
    const area = formData.get("area")
    const year = formData.get("year")
    const image = formData.get("image")

    if (!title || !category) {
        return { error: "Title and Category are required" }
    }

    try {
        await Project.create({
            title,
            location,
            category,
            description,
            area,
            year,
            image
        })

        revalidatePath("/admin/projects")
        revalidatePath("/projects")
        revalidatePath("/")
    } catch (error) {
        console.error("Create project error:", error)
        return { error: "Failed to create project" }
    }

    redirect("/admin/projects")
}

export async function updateProject(id: string, formData: FormData) {
    await connectDB()

    const title = formData.get("title")
    const location = formData.get("location")
    const category = formData.get("category")
    const description = formData.get("description")
    const area = formData.get("area")
    const year = formData.get("year")
    const image = formData.get("image")

    try {
        await Project.findByIdAndUpdate(id, {
            title,
            location,
            category,
            description,
            area,
            year,
            image,
            updatedAt: new Date()
        })

        revalidatePath("/admin/projects")
        revalidatePath("/projects")
        revalidatePath("/")
    } catch (error) {
        console.error("Update project error:", error)
        return { error: "Failed to update project" }
    }

    redirect("/admin/projects")
}

export async function deleteProject(id: string) {
    await connectDB()
    await Project.findByIdAndDelete(id)
    revalidatePath("/admin/projects")
    revalidatePath("/projects")
    revalidatePath("/")
}

export async function getProjects() {
    await connectDB()
    const projects = await Project.find({}).sort({ createdAt: -1 })
    return projects
}
