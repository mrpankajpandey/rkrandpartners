'use client'

import React, { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  Globe,
  Linkedin,
  Twitter,
  Facebook
} from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Office Address",
    details: ["Ivory 178, Ground Fl; Emerald Hills Select, Sector 65, Gurugram, Haryana 122018, INDIA"],
  },
  {
    icon: Phone,
    title: "Phone Numbers",
    details: ["+911244291547 "],
  },
  {
    icon: Mail,
    title: "Email Addresses",
    details: ["info@rkrandpartners.com"],
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 2:00 PM", "Sunday: Closed"],
  },
]

const officeLocations = [
  {
    city: "Gurugram, Haryana",
    address: "Ivory 178, Ground Fl; Emerald Hills Select, Sector 65, Gurugram, Haryana 122018, INDIA",
    phone: "+911244291547 ",
    email: "info@rkrandpartners.com",
    isMain: true,
  },
 
]

export default function Component() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNo: "",
    query: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", contactNo: "", query: "" })
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <div className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800" />
        <div className="relative container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Get in touch with our expert legal team for comprehensive intellectual property solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form and Info */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <CardDescription>
                  In case of any message, queries, please write in the form below and we'll get back to you promptly.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Message Sent Successfully!</h3>
                    <p className="text-slate-600">Thank you for contacting us. We'll respond within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email ID *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Enter your email address"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contactNo">Contact No. *</Label>
                      <Input
                        id="contactNo"
                        name="contactNo"
                        type="tel"
                        placeholder="Enter your contact number"
                        value={formData.contactNo}
                        onChange={handleInputChange}
                        required
                        className="h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="query">Please place your query here *</Label>
                      <Textarea
                        id="query"
                        name="query"
                        placeholder="Describe your query or legal requirement in detail..."
                        value={formData.query}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="resize-none"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full md:w-auto" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Get in Touch</CardTitle>
                <CardDescription>Reach out to us through any of the following channels.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon
                  return (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <IconComponent className="w-5 h-5 text-blue-600" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-sm text-slate-600">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Follow Us</CardTitle>
                <CardDescription>Stay connected with our latest updates and insights.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <Button size="sm" variant="outline" className="text-blue-600">
                    <Linkedin className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="text-blue-400">
                    <Twitter className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="text-blue-700">
                    <Facebook className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="text-slate-600">
                    <Globe className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Office Locations */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Office Locations</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Visit us at any of our conveniently located offices across major Indian cities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {officeLocations.map((location, index) => (
              <Card
                key={index}
                className={`hover:shadow-lg transition-shadow ${location.isMain ? "ring-2 ring-blue-500" : ""}`}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{location.city}</CardTitle>
                    {location.isMain && (
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Main Office</span>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex gap-3">
                    <MapPin className="w-4 h-4 text-slate-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-600">{location.address}</p>
                  </div>
                  <div className="flex gap-3">
                    <Phone className="w-4 h-4 text-slate-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-600">{location.phone}</p>
                  </div>
                  <div className="flex gap-3">
                    <Mail className="w-4 h-4 text-slate-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-600">{location.email}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Find Us</h2>
            <p className="text-slate-600">Our main office location in New Delhi</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <div className="h-96 bg-slate-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                  <p className="text-slate-600">Interactive Map</p>
                  <p className="text-sm text-slate-500">123 Legal Complex, Connaught Place, New Delhi</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="bg-red-50 border-l-4 border-red-500 py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4">
            <Phone className="w-8 h-8 text-red-600" />
            <div>
              <h3 className="text-lg font-semibold text-red-900">Emergency Legal Assistance</h3>
              <p className="text-red-700">
                For urgent legal matters, call our 24/7 helpline: <strong>+911244291547 </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
