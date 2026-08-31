import { Card } from '@/components/shared/Card'
import { formatDate } from '@/lib/formatDate'
import { type BlogType } from '@/lib/blogs'

export function BlogCard({ blog, titleAs, basePath = '' }: { blog: BlogType, titleAs?: keyof React.JSX.IntrinsicElements, basePath?: string }) {
  const as = titleAs ?? 'h2'
  return (
    <Card as="article">
      <Card.Title as={as} href={`${basePath}/blogs/${blog.slug}`} data-track="blog_card_click" data-track-data={blog.slug}>
        {blog.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={blog.date} decorate>
        {formatDate(blog.date)}
      </Card.Eyebrow>
      <Card.Description>{blog.description}</Card.Description>
      <Card.Cta>阅读全文</Card.Cta>
    </Card>
  )
}
