function Navbar(){
  const scrollToSection = (id)=>document.getElementById(id).scrollIntoView({behavior:'smooth'})
  return(<nav className='flex justify-between items-center px-10 py-5 bg-black border-b border-yellow-500 sticky top-0 z-50'><h1 className='text-3xl text-yellow-400 font-bold'>RealEstate Revivals</h1><div className='flex gap-6 text-white font-semibold'><button onClick={()=>scrollToSection('home')}>Home</button><button onClick={()=>scrollToSection('properties')}>Buy</button><button onClick={()=>scrollToSection('properties')}>Sell</button><button onClick={()=>scrollToSection('auth')}>Login</button><button onClick={()=>scrollToSection('auth')}>Register</button></div></nav>)
}
export default Navbar