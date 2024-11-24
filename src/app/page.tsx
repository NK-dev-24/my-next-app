'use client'

import Image from "next/image"
import { Send, ArrowUpRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function Portfolio() {
  const designerTextRef = useRef<HTMLHeadingElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (designerTextRef.current && bgRef.current) {
      const designerText = designerTextRef.current
      const bg = bgRef.current

      designerText.addEventListener('mouseenter', () => {
        gsap.to(bg, {
          duration: 0.65,
          x: '-12%',
          ease: 'power3.out'
        })
      })

      designerText.addEventListener('mouseleave', () => {
        gsap.to(bg, {
          duration: 0.65,
          x: '100%',
          ease: 'power3.out'
        })
      })
    }
  }, [])

  return (
    <div className="min-h-screen bg-black text-white cursor-none">
      {/* Hero Section */}
      <section className="container mx-auto px-4 min-h-screen flex flex-col">
        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="flex items-center justify-center pt-1 rounded-full w-16 h-16 bg-white">
              <Image
                src="/placeholder.svg"
                alt="Profile"
                width={56}
                height={56}
                className="rounded-full"
              />
            </div>
            <div className="py-4 px-6 border rounded-full border-gray-600">
              <h1 className="text-xl">Hi, I'm Naveen Kumar V</h1>
            </div>
          </div>

          <div className="text-center mb-4">
            <div className="flex items-center justify-center gap-2">
              <h2 className="text-8xl font-semibold text-white">FRONT-END</h2>
              <span className="text-sm text-gray-400 text-left">
                // Based in <br />Tamil Nadu, India
              </span>
            </div>
          </div>

          <div className="text-center mb-4">
            <h2 className="text-8xl font-semibold text-white">DEVELOPER</h2>
          </div>

          <div className="text-center mb-8 flex items-center justify-center gap-4">
            <div className="relative overflow-hidden group">
              <h2 ref={designerTextRef} className="text-8xl font-semibold text-white relative z-10 transition-colors duration-300 ease-in-out group-hover:text-black">& DESIGNER</h2>
              <div ref={bgRef} className="absolute inset-0 bg-red-500 transform translate-x-full skew-x-12" style={{ width: '125%' }}></div>
            </div>
            <Button variant="outline" className="rounded-full px-6 py-6 text-base">
              <div className="mr-2 relative">
                <div className="absolute w-3 h-3 rounded-full bg-green-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500 animate-ping"></div>
              </div>
              Contact me
            </Button>
          </div>
        </div>

        {/* Hero Footer */}
        <div className="mt-auto">
          <hr className="border-zinc-800 mb-8" />
          <div className="flex justify-between items-center pb-8">
            <div className="text-gray-400 text-sm">
              // எனக்கும் பேசல்
              <br />
              வாழ்க்கை
            </div>
            <div className="flex items-center gap-2 bg-zinc-900 rounded-full px-4 py-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-sm">naveenkumarv.edu@gmail.com</span>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="container mx-auto px-4 mt-32">
        <h2 className="text-3xl font-bold mb-4">Current technologies</h2>
        <p className="text-gray-400 mb-8 max-w-2xl">
          I'm proficient in a range of modern technologies that empower me to build highly functional solutions. These are some
          of my main technologies:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: "Figma", desc: "Design Tool", icon: "/placeholder.svg" },
            { name: "React", desc: "JavaScript Library", icon: "/placeholder.svg" },
            { name: "NextJS", desc: "React Framework", icon: "/placeholder.svg" },
            { name: "Tailwind", desc: "CSS Framework", icon: "/placeholder.svg" },
            { name: "Git", desc: "Version Control", icon: "/placeholder.svg" },
            { name: "HTML", desc: "markup language", icon: "/placeholder.svg" },
          ].map((tech) => (
            <div
              key={tech.name}
              className="flex items-center gap-3 bg-zinc-900 rounded-lg p-4"
            >
              <Image src={tech.icon} alt={tech.name} width={24} height={24} />
              <div>
                <div className="font-medium">{tech.name}</div>
                <div className="text-sm text-gray-400">{tech.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="container mx-auto px-4 mt-32">
        <h2 className="text-3xl font-bold mb-8">My portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Chrome Extension",
              desc: "LinkedIn Pro is a chrome extension that is used to make LinkedIn distraction free",
              image: "/placeholder.svg",
              tags: ["Javascript", "React", "TailwindCSS", "NextJS", "HTML"],
            },
            {
              title: "Digital Monk",
              desc: "The landing page of the Digital Wellbeing website is called Digital Monk.",
              image: "/placeholder.svg",
              tags: ["Javascript", "CSS", "HTML"],
            },
            {
              title: "File Converter",
              desc: "File converter website that helps to converter JPG, PNG & JPEG images to PDF format",
              image: "/placeholder.svg",
              tags: ["Javascript", "CSS", "HTML"],
            },
            {
              title: "Monk Palette",
              desc: "Random gradient background generator website named Monk Palette",
              image: "/placeholder.svg",
              tags: ["Javascript", "CSS", "HTML"],
            },
          ].map((project) => (
            <div key={project.title} className="group bg-zinc-900 rounded-lg p-4">
              <div className="relative aspect-[16/9] mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-black rounded text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-end">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-lg hover:bg-blue-500 group-hover:bg-blue-500"
                >
                  <ArrowUpRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 mt-32">
        <div className="flex justify-between items-end">
          <div className="text-6xl font-bold">
            Naveen
            <br />
            குmarV
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-400">naveenkumarv ©2024 Privacy Policy</div>
            <div className="text-sm">Tamil Nadu, India</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

