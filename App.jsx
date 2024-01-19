import React, { useState } from 'react'
import Card from './Card'
import Navbar from './Navbar'

function App() {
  const data = [
    {image:"https://images.unsplash.com/photo-1703607980028-54323dab4040?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8",name:"Challenger",artist:"Rakesh",added:false},
    {image:"https://images.unsplash.com/photo-1682686581413-0a0ec9bb35bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",name:"Believer",artist:"Sushmita",added:false},
    {image:"https://images.unsplash.com/photo-1683009427692-8a28348b0965?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D",name:"Levitating",artist:"Krishna",added:false},
    {image:"https://plus.unsplash.com/premium_photo-1682125831761-ba29ea80603a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1MHx8fGVufDB8fHx8fA%3D%3D",name:"Despacito",artist:"Aarav",added:false}
  ];
  const [songdata, setSongData] = useState(data);
  const handleClick = (index)=>{
    setSongData((prev)=>{
      return prev.map((obj,objindex)=>{
        if(objindex===index) return {...obj,added:!obj.added}
        return obj;
      })
    })
  }
  return (
    <div className='w-full h-screen bg-zinc-300 '>
      <Navbar data={songdata} />
      <div className='px-10 gap-10 flex mt-10 flex-wrap'>
      {songdata.map((item,index)=>{
        return <Card values={item} key={index} index={index} handleClick={handleClick}/>
      })}
      </div>
    </div>
  )
}

export default App
