import React from 'react'

function Card({values,index,handleClick}) {
    const {name,artist,image,added} = values;
  return (
    <div className='w-[20vw] p-4 pb-8 bg-zinc-100 rounded-md flex gap-4 relative'>
      <div className='w-28 bg-orange-400 h-[8vw] overflow-hidden rounded-lg'>
        <img className='w-full h-full object-cover' src={image} alt=''/>
      </div>
      <div>
        <h3 className='font-semibold text-xl'>{name}</h3>
        <h3 className='text-sm'>Artist: {artist}</h3>
      </div>
      <button onClick={()=>handleClick(index)}className={`text-sm text-white whitespace-nowrap  px-3 py-1 rounded-xl ${added?"bg-teal-500":"bg-orange-400"} absolute bottom-0 left-1/2 -translate-x-[50%] translate-y-[50%]`}>{added===false?"Add to Favourites":"Added"}</button>
    </div>
  )
}

export default Card
