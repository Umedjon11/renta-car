import Logo from '../assets/Logo.png'
import { Link } from 'react-router'
import { Phone } from 'lucide-react'

const Header = () => {
  return (
    <header className='flex flex-col sm:flex-row justify-between items-center p-[3vh_0]'>
        <img src={Logo} />
        <div className='flex flex-col sm:flex-row items-center text-center text-[17px] font-semibold gap-6'>
            <Link to="/">Home</Link>
            <Link to="/cars">Vehicles</Link>
            <Link to="/">Details</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contacts">Contact Us</Link>
        </div>
        <div className='hidden sm:flex gap-3 items-center'>
            <div className='bg-[#5937E0] text-white p-3 rounded-4xl'>
                <Phone />
            </div>
            <div className='flex flex-col'>
                <p>Need help?</p>
                <h3 className='font-bold'>+996 247-1680</h3>
            </div>
        </div>
    </header>
  )
}

export default Header