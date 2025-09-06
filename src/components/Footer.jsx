import { Sparkle } from 'lucide-react'
import React from 'react'

function Footer() {
  return (
  <footer id='footer' className='bg-gradient-to-r from-gray-900 via-purple-900 to-pink-900 text-white overflow-hidden relative'>
  {/* Background Elements */}
  <div className='absolute inset-0'>
    <div className='absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-100
      to-pink-100 rounded-full filter blur-3xl opacity-50 -translate-y-48'></div>
    <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-l from-blue-100
      to-cyan-100 rounded-full blur-3xl opacity-50 translate-y-48'></div>
  </div>

  <div className='max-w-7xl mx-auto py-4 sm:px-6 lg:px-8 relative z-10'>
    <div className='grid md:grid-cols-2 gap-8 lg:grid-cols-4 mb-12'>
      <div className='space-x-2 flex items-center mb-6'>
        <Sparkle className='w-8 h-8 text-purple-500' />
        <h3 className='text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600
          bg-clip-text text-transparent'>MDTIT07</h3>
      </div>
    </div>
    <p className='text-gray-300'>© 2025 MDTIT07. All rights reserved.</p>
  </div>
</footer>
  )
}

export default Footer