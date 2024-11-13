import React, { useState } from 'react'
import logo from './../assets/images/Disney_logo.png'
import {HiHome,HiMagnifyingGlass,HiStar,HiPlayCircle,HiTv} from 'react-icons/hi2';
import {HiPlus,HiDotsVertical} from 'react-icons/hi';
import Headeritem from './Headeritem'
function Header() {
  const [toggle,setToggle]=useState(false);
  const menu=[
    {name:'Home',icon:HiHome},
    {name:'Search',icon:HiMagnifyingGlass},
    {name:'Watchlist',icon:HiPlus},
    {name:'Originals',icon:HiStar},
    {name:'Movies',icon:HiPlayCircle},
    {name:'Series',icon:HiTv},
    {name:'More',icon:HiDotsVertical},
  ]
  return (
    <div className='flex items-center  justify-between p-5'>
      <div className='flex items-center gap-8'>
        <img src={logo} className='w-[80px] md:w-[115px] object-cover'/>
        <div className='hidden md:flex gap-8'>
        {menu.map((item)=>(
          <Headeritem name={item.name} Icon={item.icon}/>))}
          </div>
          <div className='flex md:hidden gap-5'>
        {menu.map((item,index)=>index<3&&(
          <Headeritem name={''} Icon={item.icon}/>))}
          <div className='md:hidden' onClick={()=>setToggle(!toggle)}>
            <Headeritem name={''} Icon={HiDotsVertical} />{toggle?
            <div className='absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4'>
            {menu.map((item,index)=>index>2&&(
          <Headeritem name={item.name} Icon={item.icon}/>))}
            </div>:null}
          </div>
          </div>
          </div>
          <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" className='w-[50px] rounded-full'/>
    </div>
  )
}

export default Header