import { useState } from 'react'
function PropertyCard(){
  const [visible, setVisible] = useState(true)
  if(!visible) return null
  return(<div className='bg-white/10 backdrop-blur-lg border border-yellow-500 rounded-2xl shadow-2xl'><img src='https://images.unsplash.com/photo-1568605114967-8130f3a36994' className='w-full h-60 object-cover' /><div className='p-5'><h3 className='text-2xl text-yellow-500 font-bold'>Free Hold Plots</h3><p className='text-gray-500 mt-2'>Greater Noida</p><h4 className='text-3xl mt-4 font-bold'>₹1Cr</h4><div className='flex gap-3 mt-5'><button onClick={()=>alert('Property Added')} className='bg-green-500 text-white px-4 py-3 rounded-lg font-bold w-full'>Add</button><button onClick={()=>setVisible(false)} className='bg-red-500 text-white px-4 py-3 rounded-lg font-bold w-full'>Delete</button><button onClick={() => window.open("https://maps.google.com/maps/search/?api=1&query=Vaidpura+sector+10+Greater+Noida","_blank")} className="bg-yellow-400 text-black px-4 py-2 rounded mt-3">View on Map</button></div></div></div>)
}
export default PropertyCard