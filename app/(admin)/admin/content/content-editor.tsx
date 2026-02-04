"use client"

import { useState } from "react"
import { updateSiteContent } from "@/actions/content-actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { Plus, Trash2, Image as ImageIcon } from "lucide-react"

// Define the page banners we want to manage
const pageBannerConfig = [
    { key: 'banner_projects', label: 'صفحة المشاريع (Projects Page)', defaultImage: '/bb.png' },
    { key: 'banner_services', label: 'صفحة الخدمات (Services Page)', defaultImage: '/aaa.png' },
    { key: 'banner_about', label: 'صفحة من نحن (About Page)', defaultImage: '/1%20(11).png' },
    { key: 'banner_contact', label: 'صفحة تواصل معنا (Contact Page)', defaultImage: '/mm.png' },
    { key: 'banner_blog', label: 'صفحة المدونة (Blog Page)', defaultImage: '/aaa.png' },
]

export default function ContentEditor({ initialContent }: { initialContent: any[] }) {
    const [isSubmitting, setIsSubmitting] = useState(false)

    // Find hero slides
    const initialSlides = initialContent.find(c => c.key === 'hero_slides')?.value || []
    const [slides, setSlides] = useState<any[]>(Array.isArray(initialSlides) ? initialSlides : [])

    // Initialize page banners state from initialContent
    const getInitialBanner = (key: string) => {
        const found = initialContent.find(c => c.key === key)
        if (found && typeof found.value === 'object') {
            return found.value
        }
        return { image: '', title: '', subtitle: '' }
    }

    const [banners, setBanners] = useState<Record<string, { image: string; title: string; subtitle: string }>>(() => {
        const initial: Record<string, { image: string; title: string; subtitle: string }> = {}
        pageBannerConfig.forEach(cfg => {
            initial[cfg.key] = getInitialBanner(cfg.key)
        })
        return initial
    })

    async function handleSubmit(formData: FormData) {
        setIsSubmitting(true)
        const result = await updateSiteContent(formData)

        if (result.error) {
            toast.error(result.error)
        } else {
            toast.success("Content updated successfully")
        }
        setIsSubmitting(false)
    }

    const addSlide = () => {
        setSlides([...slides, { id: Date.now(), image: '', title: '', subtitle: '' }])
    }

    const removeSlide = (index: number) => {
        const newSlides = [...slides]
        newSlides.splice(index, 1)
        setSlides(newSlides)
    }

    const updateSlide = (index: number, field: string, value: string) => {
        const newSlides = [...slides]
        newSlides[index] = { ...newSlides[index], [field]: value }
        setSlides(newSlides)
    }

    const updateBanner = (key: string, field: string, value: string) => {
        setBanners(prev => ({
            ...prev,
            [key]: { ...prev[key], [field]: value }
        }))
    }

    const handleBannerImageUpload = async (key: string, file: File) => {
        const formData = new FormData()
        formData.append("file", file)
        try {
            const res = await fetch("/api/upload", { method: "POST", body: formData })
            if (res.ok) {
                const data = await res.json()
                updateBanner(key, 'image', data.url)
                toast.success("Image uploaded")
            }
        } catch (err) {
            console.error(err)
            toast.error("Upload failed")
        }
    }

    return (
        <form action={handleSubmit} className="space-y-8 max-w-4xl bg-card p-6 rounded-lg border">

            {/* Hero Slides Editor */}
            <div className="space-y-4 border p-4 rounded-lg bg-gray-50/50">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Hero Slides (الصفحة الرئيسية)</h3>
                    <Button type="button" variant="outline" size="sm" onClick={addSlide}>
                        <Plus className="w-4 h-4 mr-2" /> Add Slide
                    </Button>
                </div>

                <input type="hidden" name="content_hero_slides" value={JSON.stringify(slides)} />

                <div className="space-y-4">
                    {slides.map((slide, index) => (
                        <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 bg-white border rounded shadow-sm relative group">
                            <div className="md:col-span-4">
                                <Label>Image URL / Upload</Label>
                                <div className="flex gap-2">
                                    <Input
                                        type="file"
                                        accept="image/*"
                                        className="mb-2"
                                        onChange={async (e) => {
                                            const file = e.target.files?.[0]
                                            if (!file) return

                                            const formData = new FormData()
                                            formData.append("file", file)
                                            try {
                                                const res = await fetch("/api/upload", { method: "POST", body: formData })
                                                if (res.ok) {
                                                    const data = await res.json()
                                                    updateSlide(index, 'image', data.url)
                                                }
                                            } catch (err) {
                                                console.error(err)
                                                toast.error("Upload failed")
                                            }
                                        }}
                                    />
                                </div>
                                <Input
                                    value={slide.image}
                                    onChange={(e) => updateSlide(index, 'image', e.target.value)}
                                    placeholder="/path/to/image.jpg"
                                />
                                {slide.image && (
                                    <img src={slide.image} alt="preview" className="mt-2 h-20 w-auto object-cover rounded border" />
                                )}
                            </div>
                            <div className="md:col-span-7 space-y-2">
                                <div>
                                    <Label>Title</Label>
                                    <Input
                                        value={slide.title}
                                        onChange={(e) => updateSlide(index, 'title', e.target.value)}
                                        className="font-bold"
                                    />
                                </div>
                                <div>
                                    <Label>Subtitle</Label>
                                    <Input
                                        value={slide.subtitle}
                                        onChange={(e) => updateSlide(index, 'subtitle', e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="md:col-span-1 flex items-center justify-center">
                                <Button type="button" variant="ghost" size="icon" className="text-red-500 hover:text-red-700" onClick={() => removeSlide(index)}>
                                    <Trash2 className="w-5 h-5" />
                                </Button>
                            </div>
                        </div>
                    ))}
                    {slides.length === 0 && (
                        <p className="text-center text-muted-foreground py-4">No slides added yet. Click "Add Slide" to create one.</p>
                    )}
                </div>
            </div>

            {/* Page Banners Editor */}
            <div className="space-y-4 border p-4 rounded-lg bg-blue-50/50">
                <div className="flex items-center gap-2">
                    <ImageIcon className="w-5 h-5 text-blue-600" />
                    <h3 className="text-lg font-semibold">Page Banners (بانرات الصفحات)</h3>
                </div>
                <p className="text-sm text-muted-foreground">Customize the banner image, title, and subtitle for each page.</p>

                <div className="space-y-6">
                    {pageBannerConfig.map((cfg) => {
                        const banner = banners[cfg.key]
                        return (
                            <div key={cfg.key} className="p-4 bg-white border rounded shadow-sm">
                                <h4 className="font-medium text-[#0D2240] mb-3">{cfg.label}</h4>

                                {/* Hidden input to serialize the banner object */}
                                <input type="hidden" name={`content_${cfg.key}`} value={JSON.stringify(banner)} />

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div>
                                        <Label>Banner Image</Label>
                                        <Input
                                            type="file"
                                            accept="image/*"
                                            className="mb-2"
                                            onChange={(e) => {
                                                const file = e.target.files?.[0]
                                                if (file) handleBannerImageUpload(cfg.key, file)
                                            }}
                                        />
                                        <Input
                                            value={banner.image}
                                            onChange={(e) => updateBanner(cfg.key, 'image', e.target.value)}
                                            placeholder={cfg.defaultImage}
                                        />
                                        {banner.image && (
                                            <img src={banner.image} alt="preview" className="mt-2 h-16 w-full object-cover rounded border" />
                                        )}
                                    </div>
                                    <div>
                                        <Label>Title (العنوان)</Label>
                                        <Input
                                            value={banner.title}
                                            onChange={(e) => updateBanner(cfg.key, 'title', e.target.value)}
                                            placeholder="Page Title"
                                            className="font-bold"
                                        />
                                    </div>
                                    <div>
                                        <Label>Subtitle (الوصف)</Label>
                                        <Textarea
                                            value={banner.subtitle}
                                            onChange={(e) => updateBanner(cfg.key, 'subtitle', e.target.value)}
                                            placeholder="Page subtitle or description"
                                            rows={2}
                                        />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Other Content Items */}
            {initialContent.filter(item =>
                item.key !== 'hero_slides' &&
                item.type !== 'slides' &&
                !item.key.startsWith('banner_')
            ).map((item) => (
                <div key={item._id} className="grid gap-2">
                    <Label htmlFor={`content_${item.key}`}>{item.key.replace(/_/g, ' ').toUpperCase()}</Label>
                    {item.type === 'textarea' || (typeof item.value === 'string' && item.value.length > 50) ? (
                        <Textarea
                            id={`content_${item.key}`}
                            name={`content_${item.key}`}
                            defaultValue={item.value as string}
                            rows={4}
                        />
                    ) : item.type === 'image' || item.key.includes('image') ? (
                        <div className="flex gap-2 items-center">
                            <Input
                                id={`content_${item.key}`}
                                name={`content_${item.key}`}
                                defaultValue={item.value as string}
                            />
                            <Input
                                type="file"
                                accept="image/*"
                                className="w-24"
                                onChange={async (e) => {
                                    const file = e.target.files?.[0]
                                    if (!file) return
                                    const formData = new FormData()
                                    formData.append("file", file)
                                    try {
                                        const res = await fetch("/api/upload", { method: "POST", body: formData })
                                        if (res.ok) {
                                            const data = await res.json()
                                            const input = document.getElementById(`content_${item.key}`) as HTMLInputElement
                                            if (input) input.value = data.url
                                        }
                                    } catch (err) {
                                        toast.error("Upload failed")
                                    }
                                }}
                            />
                        </div>
                    ) : (
                        <Input
                            id={`content_${item.key}`}
                            name={`content_${item.key}`}
                            defaultValue={item.value as string}
                        />
                    )}
                </div>
            ))}

            <div className="pt-4 sticky bottom-4">
                <Button type="submit" disabled={isSubmitting} size="lg" className="w-full shadow-lg bg-[#0D2240]">
                    {isSubmitting ? "Saving..." : "Save All Changes"}
                </Button>
            </div>
        </form>
    )
}
