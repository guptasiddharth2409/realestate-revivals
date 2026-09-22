import Particles from "react-tsparticles"
const ParticlesBackground = () => (<Particles options={{fullScreen:{enable:true,zIndex:-1},background:{color:"#0B0F19"},fpsLimit:60,particles:{color:{value:"#FFD700"},links:{color:"#FFD700",distance:150,enable:true,opacity:0.3,width:1},move:{enable:true,speed:1},number:{value:80},opacity:{value:0.5},size:{value:3}}}} />)
export default ParticlesBackground