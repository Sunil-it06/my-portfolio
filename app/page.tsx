'use client'

import Image from 'next/image'
import { Github, Linkedin, Home, X , ExternalLink, Code, Sun, Moon } from 'lucide-react'  
import { ChevronDown, ChevronRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useState, useEffect } from 'react'

export default function Page() {
  const [expandedExperience, setExpandedExperience] = useState<string | null>(null)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  const projects = [
    {
      title: "EMPLOYEE-MANAGEMENT",
      period: "September 2024 - October 2024",
      description: "Developed a employee management using MERN stack, showcasing expertise in CRUD operations. Implemented seamless create, read, update, and delete functionalities, demonstrating strong full-stack development skills for future projects. Utilized React for the front end, Express.js for the server, and MongoDB for database management. Achieved seamless data handling and user management.",
      image: "/photo_2025-01-01_19-23-11.jpg",
      stack: ["React.js", "Express", "MongoDB", "Node.js"],
      links: {
        website: "#",
        source: "https://github.com/Sunil-it06/Employee-Management"
      }
    },
    {
      title: "LOGIN_REGISTER MERN",
      period: "May 2024 - June 2024",
      description: "Developed a robust MERN ( MongoDB, Express.js, React, Node.js ) Stack-based authentication. Integrated React.js for dynamic front-end interactions. Utilized Node.js for server-side scripting and routing.",
      image: "/photo_2025-01-01_19-23-39.jpg",
      stack: ["React.js", "Express", "MongoDB", "Node.js"],
      links: {
        website: "#",
        source: "https://github.com/Sunil-it06/login_registerMERN"
      }
    }
  ]

  return (
    <main className="min-h-screen max-w-2xl  mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-[28px] font-bold mb-2  lg:text-5xl">
            Hi, I&apos;m Sunil{' '}
            <span role="img" aria-label="waving hand">
              👋
            </span>
          </h1>
          <p className="lg:text-[22px] text-muted-foreground text-[15px]">
            Budding Full Stack Developer. I love to learn and share my knowledge with others.
          </p>
        </div>
        <Image
          src="/sunil.png"
          alt="Profile"
          width={105}
          height={105}
          className="rounded-full"
          priority
        />
      </div>

      {/* About Section */}
      <section className="mb-10">
        <h2 className="lg:text-2xl text-[19px] font-bold mb-1">About</h2>
        <p className="text-muted-foreground lg:text-[18px] text-[14px]">
          In 2021, I started with my first line of code. Since then, I have been learning and building things.{' '}
          <span className="font-medium text-foreground">
            I have successfully completed my Bachelor of Technology (B.Tech) degree in Information Technology
          </span>
          . I have worked on various projects. I am currently working on a Full Stack project JobHub.
        </p>
      </section>

      {/* Work Experience */}    

<section className="mb-10">
  <h2 className="lg:text-2xl text-[19px] font-bold mb-4">Work Experience</h2>
  <div className="space-y-6">
    {[
      {
        id: 'Fin',
        company: 'FinSocial Digital Systems',
        role: 'Full Stack Intern',
        period: 'Dec 2024 - Present',
        description: 'Currently i am developing and maintaining frontend of AI & Blockchain Serivce Provider Web Application using React and Node.js. Collaborated with the team to implement new features and improve existing ones.',
        logo: '/finsocial_digital_logo.jpeg',
      },
      {
        id: 'opm',
        company: 'OPM Corporation',
        role: 'Software Developer Intern',
        period: 'July 2024 - Sep 2024',
        description: 'Worked on developing and maintaining web applications using React and Node.js. Collaborated with the team to implement new features and improve existing ones.',
        logo: '/opm_logo.jpeg',
      },
      {
        id: 'oasis',
        company: 'Oasis Infobyte',
        role: 'Web development and Designing',
        period: 'Sep 2022 - Oct 2022',
        description: 'Developed responsive web applications. Gained hands-on experience with various web technologies and project management tools.',
        logo: '/oasis.jpeg', 
      },
    ].map((exp) => (
      <div key={exp.id} className="space-y-2">
        <div 
          className="flex items-center gap-4 cursor-pointer" 
          onClick={() => setExpandedExperience(expandedExperience === exp.id ? null : exp.id)}
        >
          {/* Company Logo */}
          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden">
            <Image
              src={exp.logo}
              alt={`${exp.company} logo`}
              width={40}
              height={40}
              className="object-contain rounded-full"
            />
          </div>
          <div className="flex-">
            <h3 className="font-bold text-sm lg:text-lg">{exp.company}</h3>
            <p className="text-muted-foreground text-sm lg:text-[17px] ">{exp.role}</p>
            <p className="text-sm text-muted-foreground text-[12px] lg:text-base">{exp.period}</p>
          </div>
          {/* Chevron Icon */}
          <div className="text-muted-foreground transition-transform duration-300">
            {expandedExperience === exp.id ? (
              <ChevronDown className="w-5 h-5" /> // Down Chevron
            ) : (
              <ChevronRight className="w-5 h-5" /> // Right Chevron
            )}
          </div>
        </div>
        {expandedExperience === exp.id && (
          <p className="ml-16 text-sm text-muted-foreground  text-[12px] lg:text-base">{exp.description}</p>
        )}
      </div>
    ))}
  </div>
</section>



      {/* Education */}
      <section className="mb-12">
  <h2 className="lg:text-2xl text-[19px] font-bold mb-4">Education</h2>
  <div className="flex gap-4">
    {/* College Logo */}
    <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center overflow-hidden">
      <Image
        src="/BIT-LOGO.png" // Path to the college logo
        alt="Buddha Institute of Technology logo"
        width={40}
        height={40}
        className=""
      />
    </div>
    <div>
      <h3 className="font-bold lg:text-[19px] text-[14px] lg:font-bold"><a href="https://bit.ac.in/">BUDDHA INSTITUTE OF TECHNOLOGY</a></h3>
      <p className="text-muted-foreground text-[13px] lg:text-[17px]">Bachelor of Technology in Information Technology</p>
      <p className=" text-muted-foreground text-[12px] lg:text-[17px]">2021 - 2024</p>
    </div>
  </div>
</section>


      {/* Skills */}
      <section className="mb-12">
        <h2 className="lg:text-2xl text-[17px] font-bold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2 ">
          {[
            'React',
            'Javascript',
            'Express js',
            'Tailwind CSS',
            'Node.js',
            'MongoDB',
            'Postgres',
            'Docker',
            'C++',
            'Postman',
            'Git & Github',
          ].map((skill) => (
            <Badge key={skill}  className="lg:text-sm  text-[11px]">
              {skill}
            </Badge>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="mb-12 ">
        <div className="text-center mb-8">
          <Badge className="mb-4 lg:text-2xl  text-1xl font-bold ">My Projects</Badge>
          <h2 className="lg:text-4xl  text-2xl font-bold mb-2">Check out my latest work</h2>
          <p className="text-muted-foreground lg:text-[18px] text-[14px]">
            I&apos;ve worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={200}
                className="w-full object-cover h-[200px] w-[400px] mt-8 ml-4"
              />
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{project.period}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2 " >
                  {project.stack.map((tech, i) => (
                    <Badge key={i} >{tech}</Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" asChild>
                    <a href={project.links.website} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Website
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.links.source} target="_blank" rel="noopener noreferrer">
                      <Code className="w-4 h-4 mr-2" />
                      Source
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="mb-24 text-center">
        <Badge className="mb-4 text-base">Contact</Badge>
        <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
        <p className="text-muted-foreground mb-4 text-lg lg:text-xl ">
          Want to chat? Just shoot me a dm{' '}
          <a href="https://x.com/sunil_gupt11011" className="text-primary text-blue-500 font-bold hover:underline">
            with a direct question on X
          </a>
          {' '}and I&apos;ll respond whenever I can. I will ignore all soliciting.
        </p>
      </section>

      {/* Navigation Bar */}  
      <nav className="fixed lg:bottom-4 bottom-1 left-1/2 -translate-x-1/2">
  <div className="bg-background/95 border-2 transition-all duration-300 shadow-lg scale-75 hover:scale-90 lg:scale-100 hover:shadow-xl rounded-full px-6 py-3 flex items-center gap-6 hover:lg:scale-110 bg-gray-100 dark:bg-gray-800">
    {/* Home */}
    <div className="relative group">
      <a href="#" className="text-black dark:text-white transition-transform duration-300 group-hover:scale-125">
        <Home className="w-6 h-6" />
      </a>
      <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform duration-300 bg-black text-white text-xs rounded px-2 py-1">
        Home
      </span>
    </div>

    {/* GitHub */}
    <div className="relative group">
      <a href="https://github.com/Sunil-it06" className="text-black dark:text-white transition-transform duration-300 group-hover:scale-125">
        <Github className="w-6 h-6" />
      </a>
      <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform duration-300 bg-black text-white text-xs rounded px-2 py-1">
        GitHub
      </span>
    </div>

    {/* LinkedIn */}
    <div className="relative group">
      <a href="https://www.linkedin.com/in/sunilgupta06?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-black dark:text-white transition-transform duration-300 group-hover:scale-125">
        <Linkedin className="w-6 h-6" />
      </a>
      <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform duration-300 bg-black text-white text-xs rounded px-2 py-1">
        LinkedIn
      </span>
    </div>

    {/* X */}
    <div className="relative group">
      <a href="https://x.com/sunil_gupt11011?t=pQ0U7ndCV8NicloJB63MIw&s=35" className="text-black dark:text-white transition-transform duration-300 group-hover:scale-125">
        <X className="w-6 h-6" />
      </a>
      <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform duration-300 bg-black text-white text-xs rounded px-2 py-1">
        X
      </span>
    </div>

    {/* Theme Toggle */}
    <div className="relative group">
      <button
        className="text-black dark:text-white transition-transform duration-300 group-hover:scale-125"
        onClick={() => setIsDark(!isDark)}
      >
        {isDark ? <Moon className="w-6 h-6" /> : <Sun className="w-6 h-6" />}
      </button>
      <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform duration-300 bg-black text-white text-xs rounded px-2 py-1">
        {isDark ? "Moon" : "Sun"}
      </span>
    </div>
  </div>
</nav>



    </main>
  )
}

