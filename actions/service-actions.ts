"use server"

import connectDB from "@/lib/db"
import Service from "@/models/Service"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function createService(formData: FormData) {
    await connectDB()

    const title = formData.get("title")
    const description = formData.get("description")
    const details = formData.get("details")
    const href = formData.get("href")
    const icon = formData.get("icon")
    const order = formData.get("order")

    if (!title) {
        return { error: "Title is required" }
    }

    try {
        await Service.create({
            title,
            description,
            details,
            href,
            icon,
            order: order ? parseInt(order.toString()) : 0
        })

        revalidatePath("/admin/services")
        revalidatePath("/services")
        revalidatePath("/")
    } catch (error) {
        console.error("Create service error:", error)
        return { error: "Failed to create service" }
    }

    redirect("/admin/services")
}

export async function updateService(id: string, formData: FormData) {
    await connectDB()

    const title = formData.get("title")
    const description = formData.get("description")
    const details = formData.get("details")
    const href = formData.get("href")
    const icon = formData.get("icon")
    const order = formData.get("order")

    try {
        await Service.findByIdAndUpdate(id, {
            title,
            description,
            details,
            href,
            icon,
            order: order ? parseInt(order.toString()) : 0,
            updatedAt: new Date()
        })

        revalidatePath("/admin/services")
        revalidatePath("/services")
        revalidatePath("/")
    } catch (error) {
        console.error("Update service error:", error)
        return { error: "Failed to update service" }
    }

    redirect("/admin/services")
}

export async function deleteService(id: string) {
    await connectDB()
    await Service.findByIdAndDelete(id)
    revalidatePath("/admin/services")
    revalidatePath("/services")
    revalidatePath("/")
}

export async function getServices() {
    await connectDB()
    const services = await Service.find({}).sort({ order: 1 })
    return services
}
