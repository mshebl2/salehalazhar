interface LinkMapping {
    keyword: string
    url: string
    priority: number
    isActive: boolean
    maxUsage?: number
    currentUsage?: number
}

interface ManualLink {
    keyword: string
    url: string
    title?: string
}

interface InternalLinkOptions {
    content: string
    autoLinks: LinkMapping[]
    manualLinks: ManualLink[]
    useAutoLinks: boolean
    maxLinksPerPost: number
}

interface InternalLinkResult {
    processedContent: string
    linksApplied: string[]
}

export function generateInternalLinks(options: InternalLinkOptions): InternalLinkResult {
    const { content, autoLinks, manualLinks, useAutoLinks, maxLinksPerPost } = options
    let processedContent = content
    const linksApplied: string[] = []
    
    // Process manual links first (higher priority)
    for (const manualLink of manualLinks) {
        const regex = new RegExp(`\\b${manualLink.keyword}\\b`, 'gi')
        if (regex.test(processedContent)) {
            processedContent = processedContent.replace(
                regex,
                `<a href="${manualLink.url}" title="${manualLink.title || manualLink.keyword}" class="internal-link">${manualLink.keyword}</a>`
            )
            linksApplied.push(manualLink.keyword)
        }
    }
    
    // Process auto links if enabled
    if (useAutoLinks && autoLinks.length > 0) {
        // Sort by priority (descending)
        const sortedAutoLinks = autoLinks.sort((a, b) => b.priority - a.priority)
        
        for (const autoLink of sortedAutoLinks) {
            if (linksApplied.length >= maxLinksPerPost) break
            if (!autoLink.isActive) continue
            if (autoLink.maxUsage && (autoLink.currentUsage || 0) >= autoLink.maxUsage) continue
            if (linksApplied.includes(autoLink.keyword)) continue
            
            const regex = new RegExp(`\\b${autoLink.keyword}\\b`, 'gi')
            if (regex.test(processedContent)) {
                processedContent = processedContent.replace(
                    regex,
                    `<a href="${autoLink.url}" class="internal-link">${autoLink.keyword}</a>`
                )
                linksApplied.push(autoLink.keyword)
            }
        }
    }
    
    return {
        processedContent,
        linksApplied
    }
}

export function generateSEOFromContent(content: string, title: string): {
    metaTitle: string
    metaDescription: string
    metaKeywords: string[]
} {
    // Extract keywords from content (simple implementation)
    const words = content.toLowerCase().split(/\s+/)
    const wordFrequency: { [key: string]: number } = {}
    
    // Count word frequency (excluding common words)
    const stopWords = ['و', 'في', 'من', 'إلى', 'على', 'هذا', 'هذه', 'ذلك', 'تلك', 'التي', 'الذي', 'الذين', 'التي', 'كان', 'كانت', 'يكون', 'تكون']
    
    words.forEach(word => {
        if (word.length > 3 && !stopWords.includes(word)) {
            wordFrequency[word] = (wordFrequency[word] || 0) + 1
        }
    })
    
    // Get top keywords
    const keywords = Object.entries(wordFrequency)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 10)
        .map(([word]) => word)
    
    // Generate meta description (first 150 characters)
    const metaDescription = content.length > 150 
        ? content.substring(0, 150) + '...'
        : content
    
    return {
        metaTitle: title,
        metaDescription,
        metaKeywords: keywords
    }
}
