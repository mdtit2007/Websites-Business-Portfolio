import { Calendar, Clock, Mail, MapPin, MessageCircle, Phone, Send, User } from 'lucide-react'
import React from 'react'

const contactMethods = [
{
    icon: Mail,
    title: "Email Us",
    descripition: "Get in touch via email",
    details: "maiductrungit@gmail.com",
    color: "from-purple-500 to-pink-500",
},
{
    icon: Phone,
    title: "Call Us",
    descripition: "Reach us by phone",
    details: " +84 819 374 972",
    color: "from-blue-500 to-cyan-500",
},
{
    icon: MapPin,
    title: "Visit Us",
    descripition: "Our office location",
    details: "Hanoi, Vietnam",
    color: "from-green-500 to-teal-500",
},
{
    icon:  MessageCircle,
    title: "Live Chat",
    descripition: "Chat with our team",
    details: "Available 24/7",
    color: "from-yellow-500 to-orange-500 ",
},
]



function Contact() {
  return (
    <section id='contact' className='py-20 bg-white relative overflow-hidden'>
        <div className='absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-100
        to-pink-100 rounded-full filter blur-3xl opacity-50 -translate-y-48'></div>
        <div className='absolute bottom-0 right 1/4 w-96 h-96 bg-gradient-to-l from-blue-100
        to-cyan-100 rounded-full fill-transparent blur-3xl opacity-50 translate-y-48'></div>
        <div className='max-w-7xl mx-auto py-4 sm:px-6 lg:px-8 relative z-10'>
              <div className='text-center mb-16'>
                        <div className='inline-flex items-center px-4 py-2 
                        bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-6'>
                                <span className='text-purple-600 font-semibold'>
                                   Get In Touch
                                </span>
                        </div>
                        <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
                       Let's Start
                          <span className='block text-transparent bg-clip-text bg-gradient-to-r
                        from-purple-600 to-pink-600'>
                            Something Great
                        </span>
                        </h2>
                        <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
                         Ready to transform your vision into reality? We'd love to hear about
                         your project and discuss how we can help achieve your goals.
                        </p>          
                </div>
                    {/*Contact Mehood */}
                    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16'>
                        {contactMethods.map((method,index) => {
                            return(
                                 <div className='group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl
                        transition-all duration-300 hover:-translate-y-2 border border-gray-100
                        text-center   '>
                            <div className={`w-16 h-16 bg-gradient-to-r rounded-2xl flex items-center
                                justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 ${method.color}`}>
                                <method.icon className='text-white' size={24} />
                            </div>
                            <h3 className='text-lg font-bold text-gray-900 mb-2'>
                                {method.title}
                            </h3>
                            <p className='text-gray-600 text-sm mb-3'>
                                {method.descripition}
                            </p>
                            <div className='space-y-1'>
                                <p className='text-gray-700 text-sm font-medium'> {method.details}</p>

                            </div>
                        </div>
                            )
                        })}
                    </div>
                      {/* Contast Form */}
                        <div className='grid lg:grid-cols-2 gap-12'>
                            <div className='bg-white rounded-3xl shadow-xl p-8 border-gray-100'>
                                <div className='mb-8'>
                                    <h3 className='text-2xl font-black text-gray-900 mb-2'>
                                            Send us a Message
                                    </h3>
                                    <p className='text-gray-600'>
                                            Fill out the form bellow and we'll get back to you within hours 
                                    </p>
                                </div>
                                        <form className='space-y-6'>
                                            <div className='grid md:grid-cols-2 gap-6'>
                                                <div>
                                                    <label htmlFor="" 
                                                    className='block text-sm font-semibold text-gray-700 mb-2'>
                                                        Full Name*
                                                    </label>
                                                    <input type='text'
                                                    className='w-full px-4 py-3 border border-gray-200 rounded-xl
                                                    focus:ring-2 focus:ring-purple-500 focus:border-transparent
                                                    transition-all duration-300 bg-gray-50 focus:bg-white'
                                                    placeholder='Mai Duc Trung'
                                                    />                                                   
                                                </div>
                                           
                                                <div>
                                                    <label htmlFor="" className='block text-sm font-semibold text-gray-700 mb-2'>
                                                       Email Address*
                                                    </label>
                                                    <input type='text'
                                                    className='w-full px-4 py-3 border border-gray-200 rounded-xl
                                                    focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent
                                                    transition-all duration-300 bg-gray-50 focus:bg-white'
                                                    placeholder='Enter your email'
                                                    />                                                   
                                                </div>
                                         </div>

                                         <div className='grid md:grid-cols-2 gap-6'>
                                             <div>
                                                    <label htmlFor="" 
                                                    className='block text-sm font-semibold text-gray-700 mb-2'>
                                                        Company*
                                                    </label>
                                                    <input type='text'
                                                    className='w-full px-4 py-3 border border-gray-200 rounded-xl
                                                    focus:ring-2 focus:ring-purple-500 focus:border-transparent
                                                    transition-all duration-300 bg-gray-50 focus:bg-white'
                                                    placeholder='Mai Duc Trung'
                                                    />                                                   
                                                </div>
                                          
                                                <div>
                                                    <label htmlFor="" className='block text-sm font-semibold text-gray-700 mb-2'>
                                                      Project Budget*
                                                    </label>
                                                   <select type='text'
                                                    className='w-full px-4 py-3 border border-gray-200 rounded-xl
                                                    focus:ring-2 focus:ring-purple-500 focus:border-transparent
                                                    transition-all duration-300 bg-gray-50 focus:bg-white'
                                                  
                                                    >
                                                        <option value=''> Select Your Budget Range?</option>
                                                        <option value="5k-10k"> $5 - $10k</option>
                                                        <option value="10k-25k">$10-$25k</option>
                                                        <option value="25k-50k">$25-$50k</option>
                                                        <option value="50k+">$50k</option>
                                                        </select>                                                     
                                                </div>
                                         </div>
                                         <div>
                                                    <label htmlFor="" 
                                                    className='block text-sm font-semibold text-gray-700 mb-2'>
                                                       Project Detal*
                                                    </label>
                                                    <textarea type='text'
                                                    className='w-full px-4 py-3 border border-gray-200 rounded-xl
                                                    focus:ring-2 focus:ring-purple-500 focus:border-transparent
                                                    transition-all duration-300 bg-gray-50 focus:bg-white'
                                                    placeholder='Mai Duc Trung'
                                                    > </textarea>                                                   
                                        </div>
                                        <button type='submit' className='w-fit bg-gradient-to-r from-purple-600 to-pink-600
                                        hover:from-purple-700 hover:to-pink-700 hover:scale-105 shadow-lg
                                        text-white font-semibold px-6 py-3 rounded-xl mt-6 hover:shadow-lg
                                        transition-all duration-300'>
                                            Send Message
                                            <Send className='inline-block ml-2' size={20} />
                                        </button>
                                        </form>
                            </div>
                            {/*Additional Info */}
                            <div className='space-y-8'>
                                <div className='bg-gradient-to-r from-purple-500 to-pink-500
                                rounded-3xl p-8  text-white relative overflow-hidden'>
                                        <div className='absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full
                                        -translate-y-6 translate-x-16'></div>
                                        <div className='relative z-10'>
                                            <h3 className='text-2xl font-bold mb-4'>
                                                Quiz Acction
                                            </h3>
                                            <div className='space-y-4'>
                                                <button className='w-full bg-whitre/20 bacdrop-blur-md hover:bg-white/30
                                                text-white p-4 rounded-2xl transition-all duration-300 flex items-center'>
                                                    <Calendar className='mr-4' size={24} />
                                                    <div className='text-left'>
                                                        <div className='font-semibold text-sm'>
                                                            Schedule a Call
                                                        </div>
                                                            <div className='text-sm text-purple-100'>
                                                                Choose a time that works best for you.
                                                            </div>
                                                        </div>
                                                </button>

                                                <button className='w-full bg-whitre/20 bacdrop-blur-md hover:bg-white/30
                                                text-white p-4 rounded-2xl transition-all duration-300 flex items-center'>
                                                    <MessageCircle className='mr-4' size={24} />
                                                    <div className='text-left'>
                                                        <div className='font-semibold text-sm'>
                                                            Live Chat
                                                        </div>
                                                            <div className='text-sm text-purple-100'>
                                                                Chat with our team now.
                                                            </div>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                </div>
                                {/*Reponse Time */}
                                <div className='bg-white rounded-2xl p-6 shadow-lg border border-gray-100'>
                                    <div className='flex items-center mb-4'>
                                        <Clock className='text-purple-500 w-6 h-6 mr-2'  />
                                        <h3 className='text-lg font-bold text-gray-900'> Response Time</h3>
                                    </div>
                                      <div className='flex justify-between items-center space-y-2'>
                                        <span className='text-gray-600'>Email inquires</span>
                                        <span className='font-semibold'>Within 2 house</span>
                                    </div>

                                    <div className='flex justify-between items-center space-y-2'>
                                        <span className='text-gray-600'>Project proposals</span>
                                        <span className='font-semibold'>Within 24 house</span>
                                    </div>

                                    <div className='flex justify-between items-center space-y-2'>
                                        <span className='text-gray-600'>Phone Calls</span>
                                        <span className='font-semibold'>Same day</span>
                                    </div>
                                </div>
                                    {/*FAQ */}
                                    <div className='bg-white rounded-2xl p-6 shadow-lg border border-gray-100 '>
                                        <h3 className='text-lg font-bold text-gray-900 mb-4'>
                                    Frequently Asked Questions
                                        </h3>
                                        <div className='space-y-3'>
                                            <div>
                                                <h4 className='font-semibold text-gray-900 text-sm'>
                                                    How long does a typical project take?
                                                </h4>
                                                <p className='text-gray-600 text-sm'>
                                                   Most projects are completed within 4-16 weeks, depending on the scope and complexity.
                                                </p>
                                            </div>

                                            <div>
                                                <h4 className='font-semibold text-gray-900 text-sm'>
                                                    Do you work with startups
                                                </h4>
                                                <p className='text-gray-600 text-sm'>
                                                   Absolutely! We love working with startups and helping them bring their ideas to life.
                                                </p>
                                            </div>

                                             <div>
                                                <h4 className='font-semibold text-gray-900 text-sm'>
                                                    What's included in your services?
                                                </h4>
                                                <p className='text-gray-600 text-sm'>
                                                   We provide end-to-end solutions including design, development, testing, and deployment.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    {/*Newsletter */}
                    <div className='bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8
                    text-white relative overflow-hidden backdrop-blur-sm mb-12 border border-purple-500/20 mt-20'>
                        <div className='text-center'>
                                <h3 className='text-2xl font-bold mb-2'>
                                    Stay Update
                                </h3>
                                <p className='text-gray-300 mb-6 max-w-2xl mx-auto'>
                                    Subscribe to our newsletter to get the latest news and offers.
                                </p>
                                <div className='flex flex-col sm:flex-row gap-4 max-w-md mx-auto'>
                                    <input type='email' placeholder='Enter your email'
                                    className='flex-1 px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20
                                    rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500'
                                    />
                                    <button className='w-full sm:w-auto bg-white text-purple-600 font-semibold
                                    px-6 py-3 rounded-xl hover:bg-purple-50 hover:scale-105 transition-all duration-300'>
                                        Subscribe
                                    </button>
                                </div>
                        </div>
                    </div>
        </div>
    </section>
  )
}

export default Contact