import React from 'react'
import logo from './../assets/images/Disney_logo.png'
import {HiHome,HiMagnifyingGlass,HiStar,HiPlayCircle,HiTv} from 'react-icons/hi2';
import {HiPlus,HiDotsVertical} from 'react-icons/hi';
import Headeritem from './Headeritem'
function Header() {

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
        {menu.map((item)=>(
          <Headeritem name={item.name} Icon={item.icon}/>))}
          </div>
          <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" className='w-[50px] rounded-full'/>
    </div>
  )
}

export default Header