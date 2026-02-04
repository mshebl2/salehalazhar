"use client"

import { useState } from "react"
import { createProject, updateProject } from "@/actions/project-actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useRouter } from "next/navigation"

interface ProjectFormProps {
    project?: any
    isEdit?: boolean
}

export default function ProjectForm({ project, isEdit }: ProjectFormProps) {
    const router = useRouter()
    const [isSubmitting, setIsSubmitting] = useState(false)

    async function handleSubmit(formData: FormData) {
        setIsSubmitting(true)

        if (isEdit && project) {
            await updateProject(project._id, formData)
        } else {
            await createProject(formData)
        }

        setIsSubmitting(false)
    }

    return (
        <form action={handleSubmit} className="space-y-8 max-w-2xl bg-white p-8 rounded-xl border shadow-sm">
            <div className="grid gap-6">
                <div className="grid gap-2">
                    <Label htmlFor="title" className="text-right">اسم المشروع</Label>
                    <Input id="title" name="title" defaultValue={project?.title} required className="text-right" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="category" className="text-right">التصنيف</Label>
                        <Input id="category" name="category" defaultValue={project?.category} required className="text-right" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="location" className="text-right">الموقع</Label>
                        <Input id="location" name="location" defaultValue={project?.location} required className="text-right" />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="area" className="text-right">المساحة</Label>
                        <Input id="area" name="area" defaultValue={project?.area} required className="text-right" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="year" className="text-right">سنة التنفيذ</Label>
                        <Input id="year" name="year" defaultValue={project?.year} required className="text-right" />
                    </div>
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="imageUpload" className="text-right">رفع صورة</Label>
                    <div className="flex gap-2">
                        <Input
                            id="imageUpload"
                            type="file"
                            className="text-right"
                            accept="image/*"
                            onChange={async (e) => {
                                const file = e.target.files?.[0]
                                if (!file) return

                                const formData = new FormData()
                                formData.append("file", file)

                                try {
                                    setIsSubmitting(true)
                                    const res = await fetch("/api/upload", {
                                        method: "POST",
                                        body: formData
                                    })

                                    if (!res.ok) throw new Error("Upload failed")

                                    const data = await res.json()
                                    // Set the value of the image input
                                    const imageInput = document.getElementById("image") as HTMLInputElement
                                    if (imageInput) {
                                        imageInput.value = data.url
                                    }
                                } catch (error) {
                                    console.error("Upload error:", error)
                                    alert("فشل رفع الصورة")
                                } finally {
                                    setIsSubmitting(false)
                                }
                            }}
                        />
                    </div>
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="image" className="text-right">رابط الصورة</Label>
                    <Input id="image" name="image" defaultValue={project?.image} placeholder="/api/images/..." required dir="ltr" readOnly className="bg-gray-50" />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="description" className="text-right">وصف المشروع</Label>
                    <Textarea id="description" name="description" defaultValue={project?.description} required className="text-right min-h-[150px]" />
                </div>
            </div>

            <div className="flex gap-4 justify-end pt-4">
                <Button type="button" variant="outline" onClick={() => router.back()}>
                    إلغاء
                </Button>
                <Button type="submit" disabled={isSubmitting} className="bg-[#0D2240] hover:bg-[#1a3a5c]">
                    {isSubmitting ? "جاري الحفظ..." : "حفظ المشروع"}
                </Button>
            </div>
        </form>
    )
}
