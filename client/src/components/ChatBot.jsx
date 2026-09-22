import { useState } from 'react'
function ChatBot(){
  const [message,setMessage] = useState('')
  const [reply,setReply] = useState('')
  const send = ()=>{
    if(!message){ setReply('Please enter a message'); return }
    const msg = message.toLowerCase()
    if(msg.includes('buy')) setReply('We have luxury villas, apartments and premium properties available.')
    else if(msg.includes('price')) setReply('Properties start from ₹30 Lakhs to ₹5 Crore.')
    else if(msg.includes('location')) setReply('Top locations: Greater Noida, and Noida Extension.')
    else if(msg.includes('sell')) setReply('noida or greater noida.')
    else setReply('AI Assistant: Please contact our property advisor for more details {SUNNY SINGH - 9310063157}.')
  }
  return (<div className='fixed bottom-24 right-6 w-80 bg-[#111827] border border-yellow-500 rounded-2xl p-4 shadow-2xl'><h2 className='text-yellow-400 text-xl mb-3 font-bold'>AI Assistant</h2><textarea value={message} onChange={(e)=>setMessage(e.target.value)} placeholder='Ask about properties...' className='w-full bg-black text-white p-3 rounded-lg h-24 outline-none' /><button onClick={send} className='bg-yellow-500 text-black px-4 py-2 rounded-lg mt-3 w-full font-bold'>Send</button>{reply && <div className='mt-4 bg-black p-3 rounded-lg text-white border border-yellow-500'>{reply}</div>}</div>)
}
export default ChatBot