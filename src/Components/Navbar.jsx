import dev from '/src/assets/DEV.png'
const Navbar =() => {
  return (
  
     <div className="navbar py-7 flex items-center justify-between" >
     <div className="logo">
   <img src={dev} alt="Hero" className="w-10 rounded-md " />
  </div>
   
    <ul className="menu flex items-center gap-10 ">
      <li><a href="#home" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">Home</a></li>
      <li><a href="#about" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">About</a></li>
      <li><a href="#services" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">Services</a></li>
      <li><a href="#contact" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">Contact</a></li>
    </ul>
    </div>

  
  )
  }
 export default Navbar;