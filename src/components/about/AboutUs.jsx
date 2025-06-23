import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Scale, Globe, Target, Heart, Shield, Lightbulb, CheckCircle, Calendar } from "lucide-react"

// const teamMembers = [
//   {
//     id: 1,
//     name: "Rajendra Kumar",
//     position: "Founding Partner",
//     specialization: "Intellectual Property Law",
//     experience: "35+ Years",
//     image: "./Partners/RajendraKumar.webp",
//     description:
//       "Veteran IP lawyer with extensive experience in trademark, patent, and copyright law. Known for pioneering work in trans-border reputation cases.",
//     qualifications: ["LLB, Delhi University", "LLM, Harvard Law School", "Registered Patent Attorney"],
//   },
//   {
//     id: 2,
//     name: "Dr. Priya Sharma",
//     position: "Senior Partner",
//     specialization: "Technology & Data Protection Law",
//     experience: "20+ Years",
//     image: "/placeholder.svg?height=400&width=400",
//     description:
//       "Expert in technology law, data protection, and cyber security regulations. Leading authority on India's Digital Personal Data Protection Act.",
//     qualifications: ["LLB, National Law School", "PhD in Technology Law", "Certified Data Protection Officer"],
//   },
//   {
//     id: 3,
//     name: "Amit Sindhwani",
//     position: "Partner",
//     specialization: "Corporate IP & Litigation",
//     experience: "15+ Years",
//     image: "/placeholder.svg?height=400&width=400",
//     description:
//       "Specializes in corporate intellectual property strategy and complex IP litigation. Extensive experience in design and copyright law.",
//     qualifications: ["LLB, Gujarat National Law University", "LLM in IP Law", "Company Secretary"],
//   },
//   {
//     id: 4,
//     name: "Aishwarya Menon",
//     position: "Associate Partner",
//     specialization: "Trademark & GI Law",
//     experience: "12+ Years",
//     image: "/placeholder.svg?height=400&width=400",
//     description:
//       "Expert in trademark prosecution, geographical indications, and brand protection strategies across multiple jurisdictions.",
//     qualifications: ["LLB, Symbiosis Law School", "LLM, Oxford University", "Trademark Agent"],
//   },
// ]

// const milestones = [
//   {
//     year: "1985",
//     title: "Foundation",
//     description: "Rajendra Kumar began his legal practice specializing in intellectual property law.",
//   },
//   {
//     year: "1995",
//     title: "TRIPs Implementation",
//     description: "Played a key role in helping clients navigate India's TRIPs compliance framework.",
//   },
//   {
//     year: "2003",
//     title: "Trademark Act Expertise",
//     description: "Became leading practitioners under the new Trade Marks Act, 1999.",
//   },
//   {
//     year: "2015",
//     title: "Digital Transformation",
//     description: "Expanded practice to include technology law and digital rights protection.",
//   },
//   {
//     year: "2023",
//     title: "RKR & Partners",
//     description: "Established RKR & Partners to continue pioneering work in IP law.",
//   },
// ]

const values = [
  {
    icon: Scale,
    title: "Excellence in Legal Practice",
    description:
      "Committed to delivering the highest quality legal services with meticulous attention to detail and comprehensive understanding of the law.",
  },
  {
    icon: Shield,
    title: "Client-Centric Approach",
    description:
      "Placing our clients' interests at the forefront of everything we do, ensuring personalized solutions and dedicated support.",
  },
  {
    icon: Lightbulb,
    title: "Innovation & Expertise",
    description:
      "Staying ahead of legal developments and leveraging cutting-edge knowledge to provide innovative solutions.",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description:
      "Understanding international legal frameworks while maintaining deep expertise in Indian law and practice.",
  },
]

const achievements = [
  "Successfully handled 500+ trademark registrations",
  "Represented clients in landmark IP cases",
  "Expert panel member for government IP policy consultations",
  "Published extensively on IP law developments",
  "Recognized by leading legal directories",
  "Training and mentoring the next generation of IP lawyers",
]

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <div className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800" />
        <div className="relative container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About RKR & Partners</h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Pioneering intellectual property law practice with nearly four decades of excellence in protecting and
              enforcing IP rights across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Our Expertise
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-900"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Our Mission & Vision</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Mission</h3>
                  <p className="text-slate-600 leading-relaxed">
                    To provide comprehensive, innovative, and client-focused intellectual property legal services that
                    protect and enhance our clients' valuable IP assets while contributing to India's knowledge economy.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Heart className="w-8 h-8 text-red-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Vision</h3>
                  <p className="text-slate-600 leading-relaxed">
                    To be India's most trusted and respected intellectual property law firm, recognized for our
                    expertise, integrity, and commitment to advancing the field of IP law through thought leadership and
                    exceptional client service.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/placeholder.svg?height=500&width=600"
              alt="Legal consultation"
              width={600}
              height={500}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The principles that guide our practice and define our commitment to excellence in legal service.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600">{value.description}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>

      {/* Team Section */}
      {/* <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Expert Team</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Meet our experienced legal professionals who bring decades of expertise in intellectual property law.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.id} className="group hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-xl">{member.name}</CardTitle>
                <CardDescription className="text-blue-600 font-medium">{member.position}</CardDescription>
                <Badge variant="outline" className="mx-auto w-fit">
                  {member.experience}
                </Badge>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-slate-600 mb-3">{member.specialization}</p>
                <p className="text-xs text-slate-500 line-clamp-3">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div> */}

      {/* Timeline Section */}
      {/* <div className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Journey</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Key milestones in our journey of excellence in intellectual property law.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center mb-8 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-5 h-5 text-blue-600" />
                          <Badge variant="secondary">{milestone.year}</Badge>
                        </div>
                        <CardTitle className="text-lg">{milestone.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>{milestone.description}</CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> */}

      {/* Achievements Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Our Achievements</h2>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-700">{achievement}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <Card className="text-center p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-sm text-slate-600">Trademark Registrations</div>
            </Card>
            <Card className="text-center p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">35+</div>
              <div className="text-sm text-slate-600">Years of Experience</div>
            </Card>
            <Card className="text-center p-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">100+</div>
              <div className="text-sm text-slate-600">Landmark Cases</div>
            </Card>
            <Card className="text-center p-6">
              <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
              <div className="text-sm text-slate-600">Publications</div>
            </Card>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Protect Your IP Rights?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Let our experienced team help you navigate the complex world of intellectual property law.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
              Contact Us Today
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
