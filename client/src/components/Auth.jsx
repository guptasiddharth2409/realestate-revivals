import { useState } from 'react'
import axios from 'axios'
function Auth(){
  const [login,setLogin] = useState(true)
  const [username,setUsername] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const submit = async(e)=>{
    e.preventDefault()
    try{
      if(login){ const res = await axios.post('http://localhost:5000/api/login',{email,password}); alert(res.data.message) }
      else { const res = await axios.post('http://localhost:5000/api/register',{username,email,password}); alert(res.data.message) }
    }catch(err){ alert('Error') }
  }
  return (<div id='auth' className='flex justify-center py-20'><form onSubmit={submit} className='bg-[#111827] border border-yellow-500 p-10 rounded-2xl w-[400px]'><h2 className='text-4xl text-yellow-400 font-bold mb-8 text-center'>{login ? 'Login' : 'Register'}</h2>{!login && <input value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='Username' className='w-full p-3 mb-4 bg-black text-white rounded-lg' />}<input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email' className='w-full p-3 mb-4 bg-black text-white rounded-lg' /><input value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password' type='password' className='w-full p-3 mb-6 bg-black text-white rounded-lg' /><button className='w-full bg-yellow-500 text-black p-3 rounded-lg font-bold'>{login ? 'Login' : 'Register'}</button><p onClick={()=>setLogin(!login)} className='text-center mt-6 text-gray-300 cursor-pointer'>{login ? 'Create new account' : 'Already have account? Login'}</p></form></div>)
}
export default Auth