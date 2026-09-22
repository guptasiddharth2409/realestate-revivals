import ParticlesBackground from './components/ParticlesBackground'
import { motion } from 'framer-motion'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PropertyCard from './components/PropertyCard'
import Auth from './components/Auth'
import ChatBot from './components/ChatBot'
import WhatsAppButton from './components/WhatsAppButton'
import AdminDashboard from './components/AdminDashboard'

function App() {
  return (
    <motion.div
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      transition={{ duration:1 }}
      className='bg-[#0B0F19] text-white'
    >
      <motion.div
        initial={{ y:-100 }}
        animate={{ y:0 }}
        transition={{ duration:1 }}
      >
        <ParticlesBackground /> 
        <Navbar />
      </motion.div>
      <motion.div
        initial={{ scale:0.8, opacity:0 }}
        animate={{ scale:1, opacity:1 }}
        transition={{ duration:1 }}
      >
        <Hero />
      </motion.div>
      <motion.section
        id='properties'
        className='px-10 py-20'
        initial={{ opacity:0, y:100 }}
        whileInView={{ opacity:1, y:0 }}
        transition={{ duration:1 }}
      >
        <h2 className='text-5xl text-yellow-400 font-bold mb-10 text-center'>
          Featured Properties
        </h2>
        <div className='grid md:grid-cols-3 gap-8'>
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
        </div>
      </motion.section>
      <motion.div
        id='auth'
        initial={{ opacity:0 }}
        whileInView={{ opacity:1 }}
        transition={{ duration:1 }}
      >
        <Auth />
      </motion.div>
      <motion.div
        initial={{ opacity:0, y:100 }}
        whileInView={{ opacity:1, y:0 }}
        transition={{ duration:1 }}
      >
        <AdminDashboard />
      </motion.div>
      <ChatBot />
      <WhatsAppButton />
    </motion.div>
  )
}

export default App