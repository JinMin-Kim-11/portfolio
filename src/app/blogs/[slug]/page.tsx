import { type Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getAllBlogs, getBlogBySlug } from '@/lib/blogs'
import { getMDXContent } from '@/lib/mdx'
import { BlogLayout } from '@/components/layout/BlogLayout'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const blogs = await getAllBlogs()
  return blogs.map((blog) => ({
    slug: blog.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const blog = await getBlogBySlug(slug)
  if (!blog) {
    return {
      title: '博客未找到',
    }
  }

  return {
    title: blog.title,
    description: blog.description,
  }
}

export default async function BlogPage({ params }: Props) {
  const { slug } = await params
  const blog = await getBlogBySlug(slug)

  if (!blog) {
    notFound()
  }

  const content = await getMDXContent(slug)

  return (
    <BlogLayout blog={blog}>
      <div className="mt-8 prose dark:prose-invert max-w-none">
        {content}
      </div>
    </BlogLayout>
  )
}