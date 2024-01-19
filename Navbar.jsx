import React from 'react';
import style from './style.module.css';

function Navbar({data}) {
  return (
    <div className='w-full px-10 py-3 flex items-center justify-between'>
      <h3 className={`${style.a}`}>Orange</h3>
      <div className='flex p-2 bg-orange-600 rounded-md text-white px-4 text-sm gap-2'>
        <h3>Favourites</h3>
        <h4>{data.filter(item=>item.added).length}</h4>
      </div>
    </div>
  )
}

export default Navbar
