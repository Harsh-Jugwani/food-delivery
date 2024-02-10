import React from 'react';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { LOGO } from './constaints';
const NavBar = () => {
    const item = useSelector((store)=>store.cart.items)
    return ( 
    <div className='flex justify-between border-b-4 items-center'>
        <img className='h-16 md:h-20'src={LOGO} alt='#'/>
        <div className='flex list-none font-bold text-xs'>
        <Link to= '/' className='mx-3 text-[13px] md:text-[20px] md:mx-4 '>Home</Link>
        <Link to='/about' className=' mx-3 text-[13px] md:text-[20px] md:mx-4 '>About Us</Link>
        <Link className='mx-3 text-[13px] md:text-[20px] md:mx-4 ' to='/contact'>Contact Us</Link>
        <Link className=' mx-3 text-[13px]  md:text-[20px] md:mx-4 ' to='/cart'>Cart ({item.length})</Link>
        </div>
    </div> );
}
 
export default NavBar;
