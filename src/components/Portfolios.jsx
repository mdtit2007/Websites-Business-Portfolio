import { ArrowRight, ExternalLink, Eye, Heart, } from 'lucide-react'
import React, { useState } from 'react'

const fillter = [
{ id: "all", label: "All Project"},
{ id: "web", label: "Web Design"},
{ id: "mobile", label: "Mobile App"},
{ id: "branding", label: "Branding"},
{ id: "ecommerce", label: "E-commerce"},
]

const project =[
{
    id: 1,
    title:"Smart Study Assistant",
    category:"Websites E-leaning",
    description:
    "A smart web-based learning assistant platform that helps students, teachers, and parents manage, track, and improve the learning process effectively.",
    image:
    "https://web-beautiful-react-tailwind-portfo.vercel.app/photo/project1.png",
    tags:["ASP.NET MVC","C#","JavaScript "],
    type:"web",
    stats:{view:"1000",likes:"20"},
    link:"https://github.com/mdtit2007/smartstudyassistant",
},
{
    id:2,
    title:"Websites Portfolio Profile",
    category:"Web Design",
    description:
    "A modern, beautiful, and responsive personal portfolio website built with React + Tailwind CSS.",
    image:
    "https://i.imgur.com/y4aYSwR.jpeg",
    tags:["React","Tailwindcss","Lucide React"],
    type:"web",
    stats:{view:" 1200",likes:"30"},
    link:"https://github.com/mdtit2007/web-beautiful-react-tailwind-portfolio",
},
{
    id:" ",
    title:" ",
    category:" ",
    description:
    " ",
    image:
    " ",
    tags:[""," "," "],
    type:" ",
    stats:{view:" ",likes:" "},
    link:" ",
},






]


function Portfolios() {
    const [activefilter,setActivefilter]= useState("all");
        const filterproject = activefilter ==="all"
        ?project
        :project.filter((project) =>project.type === activefilter);


  return (
    <section id='portfolios' className='py-20 bg-gradient-to-r from-gray-50 to-white relative overflow-hidden'>
        <div className='absolute top-1/4 left-0 w-72 h-72 bg-gradient-to-r from-purple-200 to-pink-200 
        rounded-full filte blur-3xl opacity-30'></div>
        <div className='absolute bottom-1/4 right-0 w-72 h-72 bg-gradient-to-l from-blue-200 to-cyan-200 
        rounded-full filte blur-3xl opacity-30'></div>
        <div className='max-w-7xl mx-auto px-4 sm:px-8 relative z-10'>
                <div className='text-center mb-16'>
                        <div className='inline-flex items-center px-4 py-2 
                        bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-6'>
                                <span className='text-purple-600 font-semibold'>
                                    Our Portfolios
                                </span>
                        </div>
                        <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
                          Featured 
                          <span className='block text-transparent bg-clip-text bg-gradient-to-r
                        from-purple-600 to-pink-600'>
                            Projects
                        </span>
                        </h2>
                        <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
                            Explore our latest work showcasing innovative solutions across
                            various industries and digital platforms
                        </p>          
                </div>
                {/*Filter Button */}
                    <div className='flex flex-wrap justify-center gap-4 mb-12'>
                         {/*I will use logic */}
                        {fillter.map((fillter) =>{
                            return(
                        <button onClick={() => setActivefilter(fillter.id)}
                         className={`px-6 py-3 rounded-2xl font-semibold transition-all
                        duration-300 ${activefilter===fillter.id ?"bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105":
                        "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:-boder-purple-50"}`}>
                            {fillter.label}
                        </button>
                            );
                        })}
                    </div>
                    {/*Project Grid */}
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {/*I will use logic */}
                       {filterproject.map((project) =>{
                        return(
                             <div className='group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl
                        transition-all duration-500 hover:-translate-y-2 border border-gray-100'>
                            <div className='relative overflow-hidden'>
                                <img src={project.image}
                                    alt=''
                                    className='w-full h-64 object-cover group-hover:scale-110 transition-all duration-300'
                                    />
                                    <div className='absolute inset-0 bg-gradient-to-t from-black/60
                                    via-transparent to-transparent opacity-0 group-hover:opacity-100
                                    transition-opacity duration-300'>
                                        <div className='absolute bottom-4 left-4 right-4 flex justify-between
                                        items-end'>
                                            <div className='flex space-x-2'>
                                                <div className='flex items-center space-x-1 bg-white/20 backdrop-blur-sm
                                                rounded-full px-3 py-1'>
                                                    <Eye className='text-white' size={14} />
                                                    <span className='text-white text-xs font-medium'>
                                                        {project.stats.view}
                                                    </span>

                                                </div>

                                                   <div className='flex items-center space-x-1 bg-white/20 backdrop-blur-sm
                                                rounded-full px-3 py-1'>
                                                    <Heart className='text-white' size={14} />
                                                    <span className='text-white text-xs font-medium'>
                                                       {project.stats.likes}
                                                    </span>
                                                </div>
                                            </div>
                                            <a href={project.link}
                                             className='w-10 h-10 bg-white rounded-full flex items-center
                                            justify-center hover:scale-110 transition-all duration-300'>
                                                <ExternalLink className='text-gray-700' size={18} />
                                            </a>
                                        </div>
                                    </div>
                            </div>
                            <div className='p-6'>
                                <div className='text-sm text-purple-600 font-semibold mb-2'>
                                   {project.category}
                                </div>
                                <h3 className='text-xl font-bold text-gray-900 mb-3
                                group-hover:text-purple-600 transition-all duration-300'>
                                      {project.title}
                                </h3>
                                <p className='text-gray-600 mb-4 leading-relaxed'>
                                     {project.description}
                                </p>
                                <div className='flex flex-wrap gap-2 mb-4'>
                                    {/*I will use logic */}
                                  {project.tags.map((tags,tagindex) =>{
                                    return(
                                          <span className='px-3 py-1 bg-gradient-to-r from-purple-50 tp-pink-50
                                    text-purple-600 text-xs font-medium rounded-full border border-purple-100' key={tagindex}>
                                        {tags}
                                    </span>
                                    )
                                  })}
                                </div>
                                <a href={project.link}  target="_blank"
                                className='group/btn inline-flex items-center text-purple-600
                                font-semibold hover:text-pink-600 transition-all duration-300'>
                                    View Project <ArrowRight className='ml-2 w-4 h-4 group-hover/btn:translate-x-1
                                    transition-transform duration-initial' />
                                </a>
                            </div>
                        </div>
                        )
                       })}
                    </div>

                 {/*Button CTA */}
                 <div className='text-center mt-16'>
          <div className='bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8
          text-white relative overflow-hidden'>

            <div className='absolute inset-0 bg-black.10'></div>
            <div className='relative z-10'>
                  <h3 className='text-lg font-semibold'>Like that you see </h3>
                  <p className='text-purple-100 mb-6 max-w-2xl mx-auto'>
                Let's create something amzing together.
                View our complete portfolio or start project today</p>
                <div className='flex flex-col sm:flex-row gap-4 justify-center'>

                        <button className='bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold
                                         hover:bg-gray-100 transition-colors duration-300 whitespace-nowrap'>
                                         View All Project
                        </button>
                        <button className=' border border-purple-600 text-white px-6 py-3 rounded-xl font-semibold
                        hover:bg-white hover:text-purple-600 transition-colors duration-300 whitespace-nowrap'>
                                         Start your Project
                        </button>
                </div>
            </div>
          </div>
        </div>
        </div>
    </section>
  )
}

export default Portfolios