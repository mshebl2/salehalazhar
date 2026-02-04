"use client"

import { useState } from "react"
import { createPost, updatePost } from "@/actions/blog-actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import TiptapEditor from "@/components/tiptap-editor"
import { useRouter } from "next/navigation"

interface PostFormProps {
    post?: any
    isEdit?: boolean
}

export default function PostForm({ post, isEdit }: PostFormProps) {
    const router = useRouter()
    const [content, setContent] = useState(post?.content || "")
    const [isSubmitting, setIsSubmitting] = useState(false)

    async function handleSubmit(formData: FormData) {
        setIsSubmitting(true)
        formData.append("content", content)

        if (isEdit && post) {
            await updatePost(post._id, formData)
        } else {
            await createPost(formData)
        }

        setIsSubmitting(false)
    }

    return (
        <form action={handleSubmit} className="space-y-8 max-w-4xl">
            <div className="grid gap-4">
                <div className="grid gap-2">
                    <Label htmlFor="title">Title</Label>
                    <Input id="title" name="title" defaultValue={post?.title} required />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="slug">Slug (URL)</Label>
                    <Input id="slug" name="slug" defaultValue={post?.slug} required />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="excerpt">Excerpt</Label>
                    <Textarea id="excerpt" name="excerpt" defaultValue={post?.excerpt} />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="featuredImage">Featured Image URL</Label>
                    <Input id="featuredImage" name="featuredImage" defaultValue={post?.featuredImage} placeholder="/api/images/..." />
                    <p className="text-xs text-muted-foreground">Copy URL from Media Library</p>
                </div>

                <div className="flex items-center gap-2">
                    <Switch id="isPublished" name="isPublished" defaultChecked={post?.isPublished} />
                    <Label htmlFor="isPublished">Publish immediately</Label>
                </div>

                <div className="grid gap-2">
                    <Label>Content</Label>
                    <TiptapEditor content={content} onChange={setContent} />
                </div>
            </div>

            <div className="flex gap-4">
                <Button type="button" variant="outline" onClick={() => router.back()}>
                    Cancel
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Saving..." : "Save Post"}
                </Button>
            </div>
        </form>
    )
}
