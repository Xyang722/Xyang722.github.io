import { getCollection } from 'astro:content'

export interface EssayEntry {
  title: string
  date: string
  excerpt: string
  tags: string[]
  url: string
}

export async function getEssayList(): Promise<EssayEntry[]> {
  const allPosts = await getCollection('posts')
  return allPosts
    .filter((post) => {
      const tags = post.data.tags || []
      return tags.includes('essay') && !post.data.draft
    })
    .sort((a, b) => {
      const dateA = a.data.pubDate
      const dateB = b.data.pubDate
      return new Date(dateA).getTime() - new Date(dateB).getTime()
    })
    .map((post) => ({
      title: post.data.title,
      date: post.data.pubDate.toISOString().slice(0, 10),
      excerpt: post.data.description || '',
      tags: (post.data.tags || []).filter((t: string) => t !== 'essay'),
      url: `/posts/essay/${post.id.replace(/^essay\//, '')}`,
    }))
}
