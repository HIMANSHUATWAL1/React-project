import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
const GitHub = () => {
   const data= useLoaderData()
 /*
    const [data,setData]=useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/himanshuatwal1')
        .then(res=>res.json())
        .then(data=>{
             console.log(data);
             setData(data)
        })
    }, [])
    */
  return (
    <div className='  text-center m-4 bg-gray-500 text-white p-4 text-3xl'>
      Github Followers:{data.followers}
      <img className='' src={data.avatar_url} alt="git picture" width={200} height={200}/>
    </div>
  )
}

export default GitHub




// method for Loader-------------->


export const githubInfoLoader=async()=>{
   const res=await fetch('https://api.github.com/users/himanshuatwal1')
   return res.json();
}