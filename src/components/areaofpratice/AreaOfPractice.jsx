import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Scale, Shield, Palette, Database, BookOpen, Lightbulb, Globe, Leaf } from "lucide-react"

const practiceAreas = [
  {
    id: 1,
    title: "Trademarks",
    description:
      "Comprehensive protection and enforcement of trademarks including service marks and non-conventional trademarks such as sound marks and 3D marks.",
    details:
      "Governed by the Trade Marks Act, 1999, offering both civil and criminal remedies for enforcement. Protects well-known trade marks through rigorous examination process.",
    icon: Scale,
    image: "./AreaOfPractice/trademarks.png",
    year: "1999",
    enforcement: "Civil & Criminal",
  },
  {
    id: 2,
    title: "Geographical Indications",
    description:
      "Protection of geographical and traditional names of products whose reputation, quality or characteristics are attributable to regional origin.",
    details:
      "Governed by The Geographical Indications of Goods Act, 1999. Fully TRIPs-compliant, protecting agricultural, natural, manufactured goods, handicrafts and food stuff.",
    icon: Globe,
    image: "./AreaOfPractice/geographical-indications-r.png",
    year: "1999",
    enforcement: "TRIPs-Compliant",
  },
  {
    id: 3,
    title: "Industrial Designs",
    description:
      "Protection of aesthetic and eye-appealing features of industrial articles in 2D, 3D or both forms that are novel and original.",
    details:
      "Governed by the Designs Act, 2000. Statutory protection for 15 years from application date, subject to renewal. Prior publication anywhere bars novelty.",
    icon: Palette,
    image: "./AreaOfPractice/industrial-designs.png",
    year: "2000",
    enforcement: "15 Years Protection",
  },
  {
    id: 4,
    title: "Data Protection",
    description:
      "Processing of digital personal data recognizing individual rights to protect personal data while enabling lawful processing purposes.",
    details:
      "Digital Personal Data Protection Act, 2023 enacted following Supreme Court's recognition of privacy as fundamental right. Grants exemptions for State instrumentalities.",
    icon: Database,
    image: "./AreaOfPractice/data-protection.png",
    year: "2023",
    enforcement: "Fundamental Right",
  },
  {
    id: 5,
    title: "Copyrights",
    description:
      "Protection of original literary, dramatic, musical, artistic works and derivative creations like sound recordings and cinematograph works.",
    details:
      "Governed by Copyright Act, 1957. Member of TRIPs, Berne Convention, and Universal Copyright Convention. Registration not compulsory but provides prima facie proof.",
    icon: BookOpen,
    image: "./AreaOfPractice/copyrights.png",
    year: "1957",
    enforcement: "Civil & Criminal",
  },
  {
    id: 6,
    title: "Patents",
    description:
      "Protection of new products or processes involving inventive steps and capable of industrial application with 20-year statutory protection.",
    details:
      "Governed by Patent Act, 1970. Provides civil remedies including injunction. Protection term is 20 years from application or priority date in convention countries.",
    icon: Lightbulb,
    image: "./AreaOfPractice/patents.png",
    year: "1970",
    enforcement: "20 Years Protection",
  },
  {
    id: 7,
    title: "Information Technology",
    description:
      "First legislation providing sui-generis framework for e-commerce transactions and addressing cyber crimes involving computers or networks.",
    details:
      "IT Act, 2000 defines internet intermediaries and compliance obligations. Recent guidelines bring stringent diligence requirements for service providers.",
    icon: Shield,
    image: "./AreaOfPractice/industrial-technology.png",
    year: "2000",
    enforcement: "Cyber Crime Protection",
  },
  {
    id: 8,
    title: "Plant Variety Protection",
    description:
      "Protection of new plant varieties developed through breeding, ensuring rights of plant breeders while promoting agricultural innovation.",
    details:
      "Provides exclusive rights to plant breeders for new, distinct, uniform and stable varieties. Balances breeder rights with farmer privileges and research exemptions.",
    icon: Leaf,
    image: "./AreaOfPractice/plant.png",
    year: "2001",
    enforcement: "Breeder Rights",
  },
]

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header Section */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Areas of Practice</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Comprehensive legal expertise across diverse intellectual property and technology law domains, ensuring
              robust protection and enforcement of your rights in India's evolving legal landscape.
            </p>
          </div>
        </div>
      </div>

      {/* Practice Areas Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {practiceAreas.map((area) => {
            const IconComponent = area.icon
            return (
              <Card
                key={area.id}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border-0 shadow-md"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={area.image || "/placeholder.svg"}
                    alt={area.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                      <IconComponent className="w-5 h-5 text-slate-700" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/90 text-slate-700">
                      {area.year}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {area.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-slate-600 line-clamp-3">{area.description}</CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-3">
                    <p className="text-sm text-slate-500 line-clamp-4">{area.details}</p>
                    <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                      <Badge variant="outline" className="text-xs">
                        {area.enforcement}
                      </Badge>
                      <button className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
                        Learn More →
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Need Legal Expertise?</h2>
            <p className="text-slate-300 mb-8">
              Our experienced team provides comprehensive legal solutions across all practice areas. Contact us to
              discuss your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                Schedule Consultation
              </button>
              <button className="border border-slate-600 hover:border-slate-500 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
