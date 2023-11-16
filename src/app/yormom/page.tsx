"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const page = () => {
    const [title,setTitle] = useState()
    const hiikmom = async () => {
        const resp = await 
        axios.get('https://jsonplaceholder.typicode.com/todos/1')
            console.log(resp.data.title)
            setTitle(resp.data.title)
    }
    useEffect(() => {
      hiikmom()
    },[]) 
   return (
    <div className='div1 text-red-500'>{title}</div>
  )
}

export default page