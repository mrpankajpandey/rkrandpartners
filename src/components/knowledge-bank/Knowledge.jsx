"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, User, ArrowRight, Search, Filter } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "New Indian Law Firms, Mergers and Collaborations in 2023",
    category: "Media Coverages",
    excerpt:
      "This past year witnessed the birth of new law firms, strategic collaborations, and significant mergers. Here's a roundup of the notable events that unfolded through the year.",
    content:
      "This past year witnessed the birth of new law firms, strategic collaborations, and significant mergers. Here's a roundup of the notable events that unfolded through the year. New Beginnings Legal Scriptures | Advocates & Solicitors In January, Abhijit Mittal and Anukalp Jain merged their legal practices to form Legal Scriptures, Advocates & Solicitors. Jain and Mittal bring together their combined expertise in corporate law, intellectual property, and litigation to create a comprehensive legal practice. The merger represents a strategic move to enhance service delivery and expand their client base across multiple jurisdictions.",
    author: "Editorial Team",
    date: "2023-12-15",
    year: "2023",
    image: "./Knowledge/New-Indian-Law-Firms-Mergers-and-Collaborations-in-2023-jpg.webp",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Rajendra Kumar Sets Out On A New IP Legal Venture: RKR & Partners",
    category: "Media Coverages",
    excerpt:
      "Chartering a Bold New Path, veteran IP lawyer, Rajendra Kumar, better known as RK in the legal profession, establishes RKR & Partners to continue his pioneering work as an IP lawyer.",
    content:
      "Introduction Chartering a Bold New Path, veteran IP lawyer, Rajendra Kumar, better known as RK in the legal profession, establishes RKR & Partners to continue his pioneering work as an IP lawyer. The new firm marks a significant milestone in Rajendra Kumar's extensive career in intellectual property law spanning nearly four decades of experience in handling complex IP matters. With a track record of landmark cases and innovative legal strategies, RKR & Partners is positioned to become a leading force in India's IP legal landscape.",
    author: "Rajendra Kumar",
    date: "2023-11-20",
    year: "2023",
    image: "./Knowledge/Rajendra-Kumar-Sets-Out-On-A-New-IP-Legal-Venture_-RKR-Partners-jpg.webp",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "India – Pakistan Basmati rice IP dispute: Delhi High Court closes Pakistani lawsuit",
    category: "Media Coverages",
    excerpt:
      "Three Pakistani entities had approached the High Court in 2008 stating that it already has 'Super Basmati' rice and India exporting under the same name will amount to passing off.",
    content:
      "Three Pakistani entities had approached the High Court in 2008 stating that it already has 'Super Basmati' rice and India exporting under the same name will amount to passing off. The Delhi High Court has now closed the Pakistani lawsuit for non-prosecution, marking a significant development in the long-standing intellectual property dispute between India and Pakistan over Basmati rice. This case highlights the complex nature of geographical indications and cross-border IP disputes in the agricultural sector.",
    author: "Legal Correspondent",
    date: "2023-10-10",
    year: "2023",
    image: "./Knowledge/India-Pakistan-Basmati-rice-IP-dispute_-Delhi-High-Court-closes-Pakistani-lawsuit-for-non-prosecution-jpg.webp",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "The Evolving Legal Landscape of Intermediary Liability in India: A Deep Dive",
    category: "Articles",
    excerpt:
      "India's tryst with internet intermediary liability can be traced back almost two decades to when the Information Technology Act (IT Act), 2000 saw the light of day.",
    content:
      "Abstract India's tryst with internet intermediary liability can be traced back almost two decades to when the Information Technology Act (IT Act), 2000 saw the light of day. With the rapid evolution of both the internet and its users in India, it would not be a stretch to say that the legislators in India have been playing catch-up with technology. The legal framework governing intermediary liability has undergone significant changes, particularly with the introduction of the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021.",
    author: "Dr. Priya Sharma",
    date: "2023-09-15",
    year: "2023",
    image: "./Knowledge/The-Evolving-Legal-Landscape-of-Intermediary-Liability-in-India-jpg.webp",
    readTime: "12 min read",
  },
  {
    id: 5,
    title: "Delhi High Court Rules in Armasuisse v. the Trade Mark Registry",
    category: "Judgement Analysis",
    excerpt: "How a Trade Mark Dispute can have implications for GI rights in India, by Rajendra Kumar, K&S Partners.",
    content:
      "By a common judgment passed on January 4, 2023, the High Court of Delhi allowed two appeals filed by Armasuisse, the military wing of the Swiss Federation engaged in procuring armaments for Switzerland's Federal Department of Defence, Civil Protection and Sport, setting aside two separate orders passed by the Deputy Registrar of Trademarks. This landmark judgment has significant implications for the intersection of trademark law and geographical indications in India, particularly in cases involving foreign entities and domestic registrations.",
    author: "Rajendra Kumar",
    date: "2023-08-22",
    year: "2023",
    image: "./Knowledge/Delhi-High-Court-Rules-in-Armasuisse-v.-the-Trade-Mark-Registry-and-another-jpg.webp",
    readTime: "10 min read",
  },
  {
    id: 6,
    title: "Copyright in Cinematograph Films and Sound Recordings",
    category: "Judgement Analysis",
    excerpt:
      "The Bombay High Court and the Delhi High Court recognize the separate copyright in the underlying works in cinematograph films/sound recordings.",
    content:
      "Introduction It is trite to say that copyright is a bundle of rights. This truism is best demonstrated when a song is played on the radio. Under the Copyright Act in India, copyright attaches to original literary, musical and dramatic works; sound recordings and cinematograph films. The creation of a song at the most basic level involves the composition of lyrics (literary work) and music (musical work). Both the Bombay High Court and Delhi High Court have provided clarity on the separate copyright subsisting in underlying works.",
    author: "Justice Analysis Team",
    date: "2023-07-18",
    year: "2023",
    image: "./Knowledge/Copyright-and-Design-Overlap-India-jpg.webp",
    readTime: "8 min read",
  },
  {
    id: 7,
    title: "Implications of the Prius Judgment for Trans-Border Reputation",
    category: "Articles",
    excerpt: "Implications of the Prius Judgment for Trans-Border Reputation and Passing-Off in India.",
    content:
      "Amit Sindhwani, Head of IPR, USHA International Ltd, Aishwarya Menon, Partner, K&S Partners, Rajendra Kumar, Founding Partner RKR & Partners. Abstract: The old Indian trademark statute, the Trade and Merchandise Marks Act, 1958 was repealed by the Trade Marks Act, 1999. The Indian Courts have rendered many trademark decisions under both these statutes, where rights based on trans-border reputation have been recognized and protected.",
    author: "Multiple Authors",
    date: "2023-06-25",
    year: "2023",
    image: "./Knowledge/Implications-of-the-Prius-Judgment-jpg.webp",
    readTime: "15 min read",
  },
  {
    id: 8,
    title: "The Overlap Between Copyright and Designs in India, EU and the UK",
    category: "Articles",
    excerpt: "A Case for Overhaul of the Indian Legal Framework by Rajendra Kumar & Amit Sindhwani.",
    content:
      "Why is there a cross-over between design and copyright? It is generally recognized that an industrial design constitutes the ornamental and aesthetic appearance of an article whether in two (2D) or three dimensional (3D) forms. A few examples: Novel Pattern on Pottery, Novel Shape of an Iron Box, Novel Shape of a Bottle. This comprehensive analysis examines the legal frameworks across jurisdictions and proposes reforms for India.",
    author: "Rajendra Kumar & Amit Sindhwani",
    date: "2023-05-30",
    year: "2023",
    image: "./Knowledge/Copyright-and-Design-Overlap-India-jpg.webp",
    readTime: "18 min read",
  },
  {
    id: 9,
    title: "GI Protection and Enforcement in India",
    category: "Articles",
    excerpt:
      "Introduction In Europe, in June 2018, the Scotch Whisky Association (SWA) took legal action before Hamburg's Regional Court.",
    content:
      "Introduction In Europe, in June 2018, the Scotch Whisky Association (SWA) took legal action before Hamburg's Regional Court, complaining of a German distiller's use of 'GLEN BUCHENBACH' on its label in respect of a German product. The Hamburg Court sought guidance from the European Court of Justice (ECJ) to interpret the GI law. The ECJ ruled that geographical indications for spirits are protected against any use that takes unfair advantage of their reputation.",
    author: "GI Legal Team",
    date: "2023-04-12",
    year: "2023",
    image: "./Knowledge/GI-protection-and-enforcement-in_India-jpg.webp",
    readTime: "14 min read",
  },
]

const categories = ["All", "Media Coverages", "Articles", "Judgement Analysis"]
const years = ["All", "2023", "2022", "2021", "2020"]

export default function Knowledge() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedYear, setSelectedYear] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    const matchesYear = selectedYear === "All" || post.year === selectedYear
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())

    return matchesCategory && matchesYear && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header Section */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Knowledge Bank</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Stay informed with the latest insights, legal developments, and expert analysis in intellectual property
              and technology law.
            </p>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-slate-600" />
                <span className="font-medium text-slate-700">Filter by:</span>
              </div>

              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select Year" />
                </SelectTrigger>
                <SelectContent>
                  {years.map((year) => (
                    <SelectItem key={year} value={year}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search articles..."
                className="pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="container mx-auto px-4 py-6">
        <p className="text-slate-600">
          Showing {filteredPosts.length} {filteredPosts.length === 1 ? "article" : "articles"}
          {selectedCategory !== "All" && ` in ${selectedCategory}`}
          {selectedYear !== "All" && ` from ${selectedYear}`}
        </p>
      </div>

      {/* Blog Posts Grid */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Card
              key={post.id}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border-0 shadow-md"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge
                    variant="secondary"
                    className={`${
                      post.category === "Media Coverages"
                        ? "bg-blue-100 text-blue-800"
                        : post.category === "Articles"
                          ? "bg-green-100 text-green-800"
                          : "bg-purple-100 text-purple-800"
                    }`}
                  >
                    {post.category}
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-sm text-slate-600 line-clamp-3">{post.excerpt}</CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.author}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                    <span className="text-xs text-slate-500">{post.readTime}</span>
                    <Link href={`/knowledge/${post.id}`}>
                      <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 p-0">
                        Read More <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-slate-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-slate-600 mb-2">No articles found</h3>
            <p className="text-slate-500">Try adjusting your filters or search terms</p>
          </div>
        )}
      </div>

      {/* Newsletter Section */}
      <div className="bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-slate-300 mb-8">
              Subscribe to our newsletter to receive the latest legal insights and updates directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-3">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
