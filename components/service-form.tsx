"use client"

import { useState } from "react"
import { createService, updateService } from "@/actions/service-actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useRouter } from "next/navigation"
import * as LucideIcons from "lucide-react"

interface ServiceFormProps {
    service?: any
    isEdit?: boolean
}

// Common icons for construction/architectural services
const COMMON_ICONS = [
    "Building", "Home", "Hammer", "Ruler", "PenTool", "HardHat",
    "Truck", "Wrench", "DraftingCompass", "PaintBucket", "Layers",
    "Maximize", "Minimize", "Grid", "Box", "Layout"
]

export default function ServiceForm({ service, isEdit }: ServiceFormProps) {
    const router = useRouter()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [selectedIcon, setSelectedIcon] = useState(service?.icon || "HelpCircle")

    async function handleSubmit(formData: FormData) {
        setIsSubmitting(true)

        // Ensure icon is set
        formData.set("icon", selectedIcon)

        if (isEdit && service) {
            await updateService(service._id, formData)
        } else {
            await createService(formData)
        }

        setIsSubmitting(false)
    }

    const IconPreview = (LucideIcons as any)[selectedIcon] || LucideIcons.HelpCircle

    return (
        <form action={handleSubmit} className="space-y-8 max-w-2xl bg-white p-8 rounded-xl border shadow-sm">
            <div className="grid gap-6">
                <div className="grid gap-2">
                    <Label htmlFor="title" className="text-right">عنوان الخدمة</Label>
                    <Input id="title" name="title" defaultValue={service?.title} required className="text-right" />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="description" className="text-right">وصف مختصر</Label>
                    <Textarea id="description" name="description" defaultValue={service?.description} required className="text-right h-24" />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="details" className="text-right">تفاصيل كاملة</Label>
                    <Textarea id="details" name="details" defaultValue={service?.details} required className="text-right min-h-[150px]" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="order" className="text-right">الترتيب</Label>
                        <Input id="order" name="order" type="number" defaultValue={service?.order || 0} className="text-right" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="href" className="text-right">رابط</Label>
                        <Input id="href" name="href" defaultValue={service?.href} required className="text-right" dir="ltr" />
                    </div>
                </div>

                <div className="grid gap-4">
                    <Label className="text-right">الأيقونة</Label>
                    <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg border">
                        <div className="p-3 bg-white border rounded-lg shadow-sm">
                            <IconPreview className="w-8 h-8 text-[#0D2240]" />
                        </div>
                        <div className="flex-1">
                            <Input
                                value={selectedIcon}
                                onChange={(e) => setSelectedIcon(e.target.value)}
                                placeholder="Icon name (e.g. Building)"
                                className="mb-2"
                            />
                            <p className="text-xs text-muted-foreground">Type a Lucide icon name or select below</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-8 gap-2">
                        {COMMON_ICONS.map((iconName) => {
                            const Icon = (LucideIcons as any)[iconName]
                            if (!Icon) return null
                            return (
                                <button
                                    key={iconName}
                                    type="button"
                                    onClick={() => setSelectedIcon(iconName)}
                                    className={`p-2 rounded border hover:bg-gray-100 flex items-center justify-center transition-colors ${selectedIcon === iconName ? 'bg-blue-50 border-blue-500 text-blue-600' : 'bg-white'}`}
                                    title={iconName}
                                >
                                    <Icon className="w-5 h-5" />
                                </button>
                            )
                        })}
                    </div>
                </div>
            </div>

            <div className="flex gap-4 justify-end pt-4">
                <Button type="button" variant="outline" onClick={() => router.back()}>
                    إلغاء
                </Button>
                <Button type="submit" disabled={isSubmitting} className="bg-[#0D2240] hover:bg-[#1a3a5c]">
                    {isSubmitting ? "جاري الحفظ..." : "حفظ الخدمة"}
                </Button>
            </div>
        </form>
    )
}
