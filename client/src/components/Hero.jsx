function Hero(){
  return(<section id='home' className='min-h-screen flex flex-col justify-center items-center text-center px-5'><h1 className='text-7xl font-bold text-yellow-400 mb-6'>Luxury Real Estate Platform</h1><p className='text-xl text-gray-300 max-w-2xl'>Buy and sell premium properties with RealEstate Revivals.</p><button onClick={() => document.getElementById('properties').scrollIntoView({behavior:'smooth'})} className='mt-8 bg-yellow-500 text-black px-8 py-4 rounded-xl font-bold'>Explore Properties</button></section>)
}
export default Hero