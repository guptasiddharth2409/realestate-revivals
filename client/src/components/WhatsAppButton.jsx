import { FaWhatsapp } from 'react-icons/fa'
function WhatsAppButton(){
  const openWhatsApp = ()=>window.open('https://api.whatsapp.com/send?phone=9310063157&text=Hello%20RealEstate%20Revivals','_blank')
  return(<button onClick={openWhatsApp} className='fixed bottom-6 right-6 bg-green-500 p-4 rounded-full text-3xl text-white shadow-2xl'><FaWhatsapp /></button>)
}
export default WhatsAppButton