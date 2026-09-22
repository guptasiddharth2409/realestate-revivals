import { useEffect, useState } from 'react'
import axios from 'axios'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

function AdminDashboard() {
  const [users, setUsers] = useState([])
  const [properties, setProperties] = useState([{ id: 1, title: 'Luxury Villa', location: 'Vaidpura Sector 10', image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d' }])
  useEffect(() => { fetchUsers() }, [])
  const fetchUsers = async () => { try { const res = await axios.get('http://localhost:5000/api/users'); setUsers(res.data) } catch (err) { console.log(err) } }
  const addProperty = () => { setProperties([...properties, { id: Date.now(), title: 'Modern Apartment', location: 'Greater Noida', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c' }]) }
  const deleteProperty = (id) => setProperties(properties.filter((property) => property.id !== id))
  const analyticsData = [{ name: 'Users', value: users.length }, { name: 'Properties', value: properties.length }, { name: 'Bookings', value: 12 }]
  return (
    <div className='min-h-screen bg-[#0B0F19] text-white p-10'>
      <div className='flex justify-between items-center mb-10'><h1 className='text-5xl font-bold text-yellow-400'>Admin Dashboard</h1><button onClick={addProperty} className='bg-green-500 px-6 py-3 rounded-xl text-lg font-bold shadow-lg'>+ Add Property</button></div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {properties.map((property) => <div key={property.id} className='bg-[#111827] border border-yellow-500 rounded-2xl overflow-hidden shadow-2xl'><img src={property.image} alt='property' className='w-full h-60 object-cover' /><div className='p-5'><h2 className='text-3xl text-yellow-400 font-bold'>{property.title}</h2><p className='text-gray-300 mt-2 text-lg'>📍 {property.location}</p><div className='flex gap-4 mt-6'><button onClick={() => alert('Edit Property')} className='bg-yellow-500 text-black px-5 py-3 rounded-xl font-bold w-full'>Edit</button><button onClick={() => deleteProperty(property.id)} className='bg-red-500 text-white px-5 py-3 rounded-xl font-bold w-full'>Delete</button></div></div></div>)}
      </div>
      <div className='mt-16'><h2 className='text-4xl text-yellow-400 font-bold mb-8'>Website Analytics</h2><div className='bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-yellow-500 shadow-2xl'><ResponsiveContainer width='100%' height={300}><BarChart data={analyticsData}><XAxis dataKey='name' /><YAxis /><Tooltip /><Bar dataKey='value' fill='#FFD700' radius={[10,10,0,0]} /></BarChart></ResponsiveContainer></div></div>
    </div>
  )
}
export default AdminDashboard