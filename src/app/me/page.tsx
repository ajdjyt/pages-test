"use client"
import React,{ useEffect, useState } from 'react'

const page = () => {
    const [title,setTitle] = useState("your momma fat")
    const fonk = () => {
        setTimeout(() => {
            setTitle("and i still hit")
        },200)
    }
    useEffect(() => {
        fonk()
    },[])
  return (
    <div>{title}</div>
  )
}

export default page