'use client'

import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Calendar, User, Clock, Share2, Facebook, Twitter, Linkedin } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "New Indian Law Firms, Mergers and Collaborations in 2023",
    category: "Media Coverages",
    excerpt:
      "This past year witnessed the birth of new law firms, strategic collaborations, and significant mergers. Here's a roundup of the notable events that unfolded through the year.",
    content: `
      <h2>New Beginnings in the Legal Landscape</h2>
      <p>This past year witnessed the birth of new law firms, strategic collaborations, and significant mergers. Here's a roundup of the notable events that unfolded through the year.</p>
      
      <h3>Legal Scriptures | Advocates & Solicitors</h3>
      <p>In January, Abhijit Mittal and Anukalp Jain merged their legal practices to form Legal Scriptures, Advocates & Solicitors. Jain and Mittal bring together their combined expertise in corporate law, intellectual property, and litigation to create a comprehensive legal practice.</p>
      
      <p>The merger represents a strategic move to enhance service delivery and expand their client base across multiple jurisdictions. Both partners have extensive experience in handling complex legal matters, with Mittal specializing in corporate restructuring and Jain focusing on intellectual property rights.</p>
      
      <h3>Strategic Collaborations</h3>
      <p>The year also saw several strategic collaborations between established firms, aimed at leveraging complementary strengths and expanding service offerings. These partnerships have enabled firms to better serve clients with diverse legal needs while maintaining their core competencies.</p>
      
      <h3>Market Impact</h3>
      <p>These developments reflect the dynamic nature of India's legal market, where firms are constantly evolving to meet changing client demands and market conditions. The trend towards consolidation and collaboration is expected to continue as firms seek to enhance their competitive positioning.</p>
    `,
    author: "Editorial Team",
    date: "2023-12-15",
    year: "2023",
    image: "./Knowledge/New-Indian-Law-Firms-Mergers-and-Collaborations-in-2023-jpg.webp",
    readTime: "5 min read",
  },
]

export default function BlogPostPage({ params }) {
  const post = blogPosts.find((p) => p.id === Number.parseInt(params.id))

  if (!post) {
    notFound()
  }

  const relatedPosts = blogPosts.filter((p) => p.id !== post.id && p.category === post.category).slice(0, 3)

  return (
    <div className="min-h-screen bg-white">
      {/* Header Image */}
      <div className="relative h-96 overflow-hidden">
        <img src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <Badge
              variant="secondary"
              className={`mb-4 ${
                post.category === "Media Coverages"
                  ? "bg-blue-100 text-blue-800"
                  : post.category === "Articles"
                  ? "bg-green-100 text-green-800"
                  : "bg-purple-100 text-purple-800"
              }`}
            >
              {post.category}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {post.author}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="container mx-auto px-4 py-6">
        <Link href="/knowledge-bank">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Knowledge Bank
          </Button>
        </Link>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>

              {/* Share Section */}
              <div className="mt-12 pt-8 border-t border-slate-200">
                <div className="flex items-center gap-4">
                  <span className="font-medium text-slate-700">Share this article:</span>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="text-blue-600">
                      <Facebook className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="text-blue-400">
                      <Twitter className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="text-blue-700">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                {/* Author Info */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">About the Author</h3>
                    <p className="text-sm text-slate-600 mb-4">{post.author}</p>
                    <p className="text-xs text-slate-500">
                      Expert in intellectual property law with extensive experience in legal practice and analysis.
                    </p>
                  </CardContent>
                </Card>

                {/* Related Articles */}
                {relatedPosts.length > 0 && (
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-4">Related Articles</h3>
                      <div className="space-y-4">
                        {relatedPosts.map((relatedPost) => (
                          <Link key={relatedPost.id} href={`/knowledge-bank/${relatedPost.id}`}>
                            <div className="group cursor-pointer">
                              <h4 className="text-sm font-medium text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-1">
                                {relatedPost.title}
                              </h4>
                              <p className="text-xs text-slate-500">{relatedPost.readTime}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
