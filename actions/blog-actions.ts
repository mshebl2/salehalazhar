"use server"

import connectDB from "@/lib/db"
import Post from "@/models/Post"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function createPost(formData: FormData) {
    await connectDB()

    const title = formData.get("title")
    const slug = formData.get("slug")
    const content = formData.get("content")
    const excerpt = formData.get("excerpt")
    const featuredImage = formData.get("featuredImage")
    const isPublished = formData.get("isPublished") === "on"

    if (!title || !slug) {
        return { error: "Title and Slug are required" }
    }

    try {
        await Post.create({
            title,
            slug,
            content,
            excerpt,
            featuredImage,
            isPublished,
            publishedAt: isPublished ? new Date() : null
        })

        revalidatePath("/admin/blog")
        revalidatePath("/blog")
    } catch (error: any) {
        if (error.code === 11000) {
            return { error: "Slug already exists" }
        }
        return { error: "Failed to create post" }
    }

    redirect("/admin/blog")
}

export async function updatePost(id: string, formData: FormData) {
    await connectDB()

    const title = formData.get("title")
    const slug = formData.get("slug")
    const content = formData.get("content")
    const excerpt = formData.get("excerpt")
    const featuredImage = formData.get("featuredImage")
    const isPublished = formData.get("isPublished") === "on"

    try {
        await Post.findByIdAndUpdate(id, {
            title,
            slug,
            content,
            excerpt,
            featuredImage,
            isPublished,
            updatedAt: new Date(),
            ...(isPublished ? { publishedAt: new Date() } : {})
        })

        revalidatePath("/admin/blog")
        revalidatePath("/blog")
        revalidatePath(`/blog/${slug}`)
    } catch (error) {
        return { error: "Failed to update post" }
    }

    redirect("/admin/blog")
}

export async function deletePost(id: string) {
    await connectDB()
    await Post.findByIdAndDelete(id)
    revalidatePath("/admin/blog")
    revalidatePath("/blog")
}
