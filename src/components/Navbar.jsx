import React from 'react'
import logo from '../assets/images/4700gfxwhite.png'
const Navbar = () => {
  
  const navItems ={
   home : {label: 'Home', id:'Hero'},
   aboutUs: {label: 'About Me', id:"AboutUs"},
   whatWeOffer: {label:'What We Offer', id:'Offer'},
   projects: {label:'Projects', id:'Projects'},
   subscribe: {label:'Subscribe', id:'Subscribe'}
  }

  
  return (
    <header>
      <nav className='flex flex-row justify-around mt-5 text-white bg-black p-6 w-9/12 mx-auto rounded-2xl'>
        <img src={logo} alt='4700-GFX' className='h-12 w-auto object-contain'></img>
        <ul className="flex gap-6 mr-20">
            {Object.entries(navItems).map(([key, { label, id }]) => (
              <li
                key={key}
                className="font-bold text-lg mt-3 me-8 cursor-pointer"
              >
                <a href={`#${id}`}>{label}</a>
              </li>
            ))}
          </ul>
          <button className='bg-white text-black rounded-full px-8 py-2'>Start Here !</button>
      </nav>
    </header>
  )
}

export default Navbar