import { User, TrendingUp, Users, Award, Shield,Target,Zap } from 'lucide-react'
import React from 'react'


const starts =[
   { number: "1", label: "A", icon: TrendingUp},
   { number: "2", label: "B", icon: Users},
   { number: "3", label: "C", icon: Award},
   { number: "4", label: "D", icon: Shield},
];
const values =[
   { icon: Target,
     title: "A",
     description: "TrendingUp",
     color:"from-purple-500 to-pink-500"},

   { icon: Users,
     title: "b",
     description: "TrendingUp",
     color:"from-blue-500 to-cyan-500"},

   { icon: Zap,
     title: "c",
     description: "TrendingUp",
     color:" from-green-500 to-teal-500"},

   { icon: Award,
     title: "d",
     description: "TrendingUp",
     color:"from-yellow-500 to-orange-500 "},
];


function About() {
  return (
    <section id='about'>
        <div className='py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden'>
            {/*Background patter */}

            <div className='absolute inset-0 opacity-5'>
                 <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r 
                 from-purple-600 to-pink-600 transform rotate-12 scale-150'>
                 </div>

            </div>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
                <div className='text-center mb-16'>
                    <div className='inline-flex items-center px-4 py-2 bg-gradient-to-r
                    from-purile-600 to-pink-100 rounded-full mb-6'>
                        <span>
                            About Nexus
                        </span>
                    </div>
                    <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>Crafting Digital{" "}
                        <span className='block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600'>
                            Excellence
                        </span>
                    </h2>
                    <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
                        we

                    </p>
                </div>
                {/*Stats Card */}
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20 '>
                  {starts.map ((starts,index) =>{
                    return (
                          <div className='group bg-white p-8 rounded-2xl shadow-lg hover:shadows-2xl trandision-all duration-500
                    hover:-translate-y-2  border border-gray-100 relative overflow-hidden '>

                        <div className='absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100
                        rounded-full  translate-x-10 group-hover:scale-150 duration-500'></div>
                        <div className='w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center
                        mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 z-10'>
                            {/*Dummy Icon I will change */}
                            <starts.icon className='text-white' size={24} />
                        </div>
                        <h3 className='text-3xl  font-bold text-gray-900 mb-4 relative z-10'>
                            {starts.number}
                        </h3>
                        <p className='text-gray-600 leading-relaxed relative z-10'>
                            {starts.label}
                        </p>
                    </div>
                    )


                    
                  }) }
                
                </div>
                  <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 '>
                    {values.map ((values,index) =>{
                    return (
                          <div className='group bg-white p-8 rounded-2xl shadow-lg hover:shadows-2xl trandision-all duration-500
                    hover:-translate-y-2  border border-gray-100 relative overflow-hidden '>

                        <div className='absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100
                        rounded-full  translate-x-10 group-hover:scale-150 duration-500'></div>
                      <div className={`w-16 h-16 bg-gradient-to-r ${values.color} from-purple-500 to-pink-500 rounded-xl 
                                       flex items-center justify-center mb-6 group-hover:scale-110 
                                       group-hover:rotate-6 transition-all duration-300 z-10`}>
                            {/*Dummy Icon I will change */}
                            <values.icon className='text-white' size={24} />
                        </div>
                        <h3 className='text-xl  font-bold text-gray-900 mb-4 relative z-10'>
                            {values.title}
                        </h3>
                        <p className='text-gray-600 leading-relaxed relative z-10'>
                            {values.description}
                        </p>
                    </div>
                    )


                    
                  }) }
                  </div>
                {/* call to acction */}
                <div className='text-center mt-16'>
                    <div className='bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8
                    md:p-12 text-white relative overflow-hidden'>
                        <div className='absolute inset-0 bg-black/10'></div>
                        <div className='relative z-10'>
                            <h3 className='text-2xl md:text-3xl font-bold mb-4'>
                                Ready to Start Your Journey?
                            </h3>
                            <p className='text-purple-100 mb-6  mx-auto'>
                                Let's collaborate to bring your vision to life with innovative
                                design and cutting-edge technology
                            </p>
                            <button className='bg-white text-purple-600 px-8 py-4 rounded-2xl
                            font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105
                            shadow-xl'>
                                Let's Talk
                            </button>
                        </div>
                    </div>
                </div>


            </div>

        </div>



















    </section>
  )
}

export default About