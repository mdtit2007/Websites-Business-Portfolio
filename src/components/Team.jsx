import { Award, Facebook, Github, Instagram, Linkedin, Mail } from 'lucide-react'
import React from 'react'

const teamMember =[
{
    name:"Mai Duc Trung",
    role:"Leader Developer",
    image:
    "https://i.imgur.com/RaGGHs4.jpeg",
    bio:"Front-end Development",
    specialties:["React/Next.js"," Tailwindcss"," JavaScript","Node.js"],
    social:{
        linkedin:"https://www.linkedin.com/in/trung-mai-duc-43695237b/",
        facebook:"https://www.facebook.com/mdtdvfb207",
        github:"https://github.com/mdtit2007",
        email:"maiductrungit@gmail.com",
    },
    stats:{project:"10+",awards:"12", experience:"2 years"},
    gradient:"from-purple-500 to-pink-500",
    bgGradient:"from-purple-50 to-pink-50",
},

{
    name:"Nguyen Duc Long",
    role:"Backend Developer",
    image:
    "https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/539766030_1511889973496173_3271295422205621142_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Hk3OKF-sAi0Q7kNvwFLrToy&_nc_oc=AdnnZGwlWTNf-P0TmNn5jzkTcFnvHwABe87zyHeQY0GqCd67Q8U0O_Nb9eWvjxP6wvU&_nc_zt=23&_nc_ht=scontent.fhan5-2.fna&_nc_gid=ItV84uk75R0HtGCwl_0rMg&oh=00_AfVsVuju5ufY_c5-bXGBfAOb5alki4jK8m0VWB7p2fIyKg&oe=68BB37E0",
    bio:"Backend",
    specialties:["Next.js"," Java"," Docker","Express.js"],
    social:{
        linkedin:"#",
        facebook:"https://www.facebook.com/ItoKami.hngoc",
        github:"#",
        email:"#",
    },
    stats:{project:"20+",awards:"15", experience:"3 years"},
    gradient:"from-blue-500 to-cyan-500",
    bgGradient:"from-blue-50 to-cyan-50",
},

{
    name:"Do Trung Kien",
    role:"Frontend Developer",
    image:
    "https://scontent.fhan5-9.fna.fbcdn.net/v/t39.30808-6/429757725_1091076238861607_6519345593451884391_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=n44sUw4buA4Q7kNvwH6PWtc&_nc_oc=AdmHhDaBZirf95BJ9OkcoAJuDNyoNKg0HYOPS57GIT1a0m5fAOFBD31ca_1xQOK5Y-A&_nc_zt=23&_nc_ht=scontent.fhan5-9.fna&_nc_gid=yuVASo1Mvlac2WCdaDhC1w&oh=00_AfUfnNhO7-kqEOvvSVqfWJbT-1efK_j-1z-NJjdmMRPlEw&oe=68BB2C91",
    bio:"Front-end",
    specialties:["React/Next.js"," Tailwindcss"," JavaScript"],
    social:{
        linkedin:"#",
        facebook:"https://www.facebook.com/trung.kien.o.952660",
        github:"#",
        email:"#",
    },
    stats:{project:"15+",awards:"14", experience:"3 years"},
    gradient:"from-green-500 to-teal-500",
    bgGradient:"from-green-50 to-teal-50",
},

{
    name:"Than Thi Thuy Linh",
    role:"Designer",
    image:
    "https://scontent.fhan5-11.fna.fbcdn.net/v/t39.30808-6/537226630_1336942941155415_4512837403775247080_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=OqwKvoCmMtgQ7kNvwEJCVAY&_nc_oc=AdneJ7DKjtfhl8Xrp7MGhyhbbzYvA6IlvaZUCYBkcd33vIdrBaDb6xUxMstXVXnpwX0&_nc_zt=23&_nc_ht=scontent.fhan5-11.fna&_nc_gid=wPUVe81NbWqc3nZciR6whQ&oh=00_AfWF5fLvd8P4nZWMf1ZzWW2zB0JAWgYiP4b2kon0L21gsA&oe=68BB3F64",
    bio:"Design",
    specialties:["Photoshop"," Canva"," Codraw"],
    social:{
        linkedin:"#",
        facebook:"https://www.facebook.com/linh.than.7923",
        github:"#",
        email:"#",
    },
    stats:{project:"15+",awards:"10", experience:"1 years"},
    gradient:"from-orange-500 to-red-500",
    bgGradient:"from-orange-50 to-red-50",
},


]



function Team() {
  return (
    <section id='team' className='py-20 bg-gradient-to-r from-gray-50 to-white relative overflow-hidden'>
           <div className='absolute top-1/4 left-0 w-72 h-72 bg-gradient-to-r from-purple-200 to-pink-200 
        rounded-full filte blur-3xl opacity-30'></div>
        <div className='absolute bottom-1/4 right-0 w-72 h-72 bg-gradient-to-l from-blue-200 to-cyan-200 
        rounded-full filte blur-3xl opacity-30'></div>
        <div className='max-w-7xl mx-auto px-4 sm:px-8 relative z-10'>
                <div className='text-center mb-16'>
                        <div className='inline-flex items-center px-4 py-2 
                        bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-6'>
                                <span className='text-purple-600 font-semibold'>
                                    Our Team
                                </span>
                        </div>
                        <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
                        Meet The 
                          <span className='block text-transparent bg-clip-text bg-gradient-to-r
                        from-purple-600 to-pink-600'>
                            Creators
                        </span>
                        </h2>
                        <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
                           Our diverse team of passionate experts combines creativity,
                           technical excellence,and strategic thinking to deliver exceptional
                           results for every project.
                        </p>          
                </div>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
                   {teamMember.map((Member,index)=>{
                     return(
                         <div className={`group bg-gradient-to-br rounded-3xl p-5
                        shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3
                        border border-white/50 relative overflow-hidden backdrop-blur-sm ${Member.bgGradient}`}>
                        {/* Animate Background Elements */}
                      <div className={`absolute -top-10 -right-10 w-32 h-32 
                                        bg-gradient-to-br rounded-full opacity-20 
                                          group-hover:scale-125 group-hover:rotate-45 ${Member.gradient}`}></div>
                        <div className={`absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-tr
                            rounded-full opacity-15 group-hover:scale-150 transition-all duration-500 ${Member.gradient}`}></div>
                            <div className='relative z-10'>
                                {/*Enhanced Profile Image*/}
                                <div className='relative mb-8'>
                                    <div className='w-28 h-28 mx-auto rounded-3xl overflow-hidden
                                    right-4 right-w shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500'>
                                        <img src={Member.image}
                                             
                                             className='w-full h-full object-cover group-hover:scale-110
                                             transition-all duration-500' />

                                    </div>
                                    {/*Stats Indirator */}
                                    <div className={`absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r
                                    rounded-full flex items-center justify-center shadow-lg
                                    group-hover:scale-110 transition-all duration-300 ${Member.gradient}`}>
                                        <div className='w-4 h-4 bg-white rounded-full animate-pulse'></div>

                                    </div>
                                </div>
                                    {/*Enhanced Member Infor */}
                                    <div className='text-center mb-6'>
                                        <h3 className='text-2xl font-bold text-gray-900 mb-2
                                        group-hover:text-transparent group-hover:bg-clip-text
                                        group-hover:bg-gradient-to-r group-hover:from-purple-600
                                        group-hover:to-pink-600 transition-all duration-300'>
                                            {Member.name}</h3>
                                            <div className={`inline-block px-4 py-2 bg-gradient-to-r text-white text-sm
                                                font-bold rounded-full mb-4 shadow-lg ${Member.gradient}`}>
                                               {Member.role}
                                            </div>
                                            <p className='text-gray-700 text-sm leading-relaxed font-medium'>
                                             {Member.bio}
                                            </p>
                                    </div>
                                    {/*Enhanced Specilities */}
                                    <div className='mb-6'>
                                        <div className='flex flex-wrap gap-1 justify-center'>
                                           {Member.specialties.map((specialties,specialtiesindex) =>{
                                            return(
                                                 <span className={`px-3 py-1.5 bg-white backdrop-blur-sm text-gray-700 text-xs
                                            font-semibold rounded-full border border-white/50 shadow-sm
                                            hover:shadow-md hover:scale-105 transition-all duration-300
                                            cursor-default`}>
                                               {specialties}
                                            </span>
                                            )
                                           })}
                                        </div>
                                    </div>
                                         {/*Enhanced Social link */} 
                                         <div className='flex justify-center space-x-4'>
                                            <a href= {Member.social.linkedin} className='group/social w-10 h-10 bg-gradient-to-r from-blue-500
                                             to-blue-600 rounded-2xl flex items-center justify-center
                                             hover:scale-125 hover:rotate-12 transition-all duration-300 shadow-lg hover:shadow-xl'>
                                                <Linkedin size={16} className='text-white group-hover:social:scale-110 transition-all' />
                                            </a>
                                             <a href={Member.social.facebook} className='group/social w-10 h-10 bg-gradient-to-r from-sky-400
                                             to-sky-500 rounded-2xl flex items-center justify-center
                                             hover:scale-125 hover:rotate-12 transition-all duration-300 shadow-lg hover:shadow-xl'>
                                                <Facebook size={16} className='text-white group-hover:social:scale-110 transition-all' />
                                            </a>
                                             <a href={Member.social.github} className='group/social w-10 h-10 bg-gradient-to-r from-gray-700
                                             to-gray-800 rounded-2xl flex items-center justify-center
                                             hover:scale-125 hover:rotate-12 transition-all duration-300 shadow-lg hover:shadow-xl'>
                                                <Github size={16} className='text-white group-hover:social:scale-110 transition-all' />
                                            </a>
                                             <a href={Member.social.Mail} className={`group/social w-10 h-10 bg-gradient-to-r rounded-2xl flex items-center justify-center
                                             hover:scale-125 hover:rotate-12 transition-all duration-300 shadow-lg hover:shadow-xl ${Member.gradient}`}>
                                                <Mail size={16} className='text-white group-hover:social:scale-110 transition-all' />
                                            </a>
                                            </div>             
                            </div>
                    </div>
                     )
                   })}
                </div>
                {/*Teams Stats */}
                <div className='mt-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8
                text-white relative overflow-hidden'>
                    <div className='absolute inset-0 bg-black/10'></div>
                    <div className='relative z-10'>
                        <div className='grid md:grid-cols-4 gap-8 text-center'>
                            <div>
                                <div className='flex items-center justify-center mb-2'>
                                            <Award className='w-6 h-6 mr-2' />
                                            <span className='text-3xl font-black'>45+</span>
                                             

                                </div>
                                 <p className='text-purple-100'>Awards Won</p>
                                </div>
                            <div>
                                <div className='flex items-center justify-center mb-2'>
                                            <Award className='w-6 h-6 mr-2' />
                                            <span className='text-3xl font-black'>10+</span>
                                             

                                </div>
                                 <p className='text-purple-100'>Coffee Won</p>
                                </div>
                                 <div>
                                <div className='flex items-center justify-center mb-2'>
                                            <Award className='w-6 h-6 mr-2' />
                                            <span className='text-3xl font-black'>650+</span>
                                             

                                </div>
                                 <p className='text-purple-100'>Projects Delivered</p>
                                </div>
                                 <div>
                                <div className='flex items-center justify-center mb-2'>
                                            <Award className='w-6 h-6 mr-2' />
                                            <span className='text-3xl font-black'>99%</span>
                                             

                                </div>
                                 <p className='text-purple-100'>Client Satisfaction</p>
                                </div>
                        </div>
                    </div>
                </div>
                  <div className='text-center mt-16'>
          <div className='inline-flex justify-center items-center space-x-4 bg-white
          rounded-2xl p-6 text-white w-full shadow-lg border border-gray-100'>
             <div>
            <h3 className='text-lg font-semibold text-gray-900'>Want to Join our Team </h3>
            <p className='text-gray-600 text-sm'>We're always looking for talendted indivduals </p>
         </div>
          <button className='bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold
          hover:bg-gray-100 transition-colors duration-300 whitespace-nowrap'>
           Vỉews Careers
          </button>
          </div>
        </div>
         </div>
    </section>
  )
}

export default Team